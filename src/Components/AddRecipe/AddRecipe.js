import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import Context from '../../Context'
import GetRecipeAndFolders from '../Network/GetRecipesAndFolders'
import ValidationError from '../../Validation/ValidationError';
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import hpStyles from '../HomePage/HomePageStyles'
import addRStyles from './AddRecipeStyles'
import config from '../../config'
import moment from 'moment';
import TokenService from '../../services/token-service'
import MediaQuery from 'react-responsive'
class AddRecipe extends React.Component{
    static contextType=Context;
    constructor(){
        super()
        this.state={
            ingredients:[],
            nameError:'',
            ingredientsError:'',
            instructionsError:'',
            folderError:'',
        }    
        
    }
    createDisplayedIngredients=(ingredients)=>ingredients.map(ingredient=>{let i=` ${ingredient.name} ${ingredient.quantity} ${ingredient.unit}`
    return i})
    addIngredient=(e)=>{
        e.preventDefault();
        let quantity;
        (e.target.ingredientQuantity.value.length===0)?quantity=1:quantity=e.target.ingredientQuantity.value;
        let ingredientUnit;
        (e.target.ingredientUnit.value.length!==0)?
        ingredientUnit=e.target.ingredientUnit.value:ingredientUnit='not specified';
        (e.target.ingredientUnit.value==='other')? ingredientUnit=e.target.ingredientUnitOther.value:ingredientUnit=e.target.ingredientUnit.value;
        if(e.target.ingredientName.value.length<3){
            return null
        }else{
          this.setState({
        ingredients:[...this.state.ingredients,{name:e.target.ingredientName.value,quantity,unit:ingredientUnit}]
        })  
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        let name=e.target.name.value;
        let note=e.target.note.value;
        let link= e.target.link.value;
        let createdBy=e.target.createdBy.value;
        let folder_id=parseInt(e.target.folder.value);
        let instructions=e.target.instructions.value;
        let recipe={
            name,
            instructions,
            ingredients:this.state.ingredients,
            note,
            link,
            createdBy,
            folder_id
        }
        this.validateRecipe(recipe)
    }   
    validateRecipe=(recipe)=>{
        if(this.context.folders.length===0){
            this.setState({folderError:'*Must create a folder before creating a recipe.'})
        }else{
            this.setState({folderError:''})
        }
        if(recipe.name.length<3){
            this.setState({nameError: '*Required & Must be atleast 3 characters'
        }) 
        }else{this.setState({nameError:''})}
        if(recipe.ingredients.length<1){
            this.setState({ingredientsError:'*Required & Must add at least 1 ingredient'})
        }
        else{this.setState({ingredientsError:''})}
        if(recipe.instructions.length<1){
            this.setState({instructionsError:'*Required & Must add instruction'})
        }
        else{this.setState({instructionsError:''})}
        if(recipe.name.length===0 || recipe.ingredients.length===0 || recipe.instructions.length ===0 || recipe.folder_id===undefined){return null}else{
        this.callApi(recipe)
    }
}
    callApi=(recipe)=>{
        const {name,
            instructions,
            ingredients,
            note,
            link,
            createdBy,
            folder_id}=recipe    
         
        const url=`${config.API_ENDPOINT}/recipes`;
        const options={
            method:'POST',
            headers:{
                'content-type':'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({'name':name,'date_created':moment().format(),'folder_id':folder_id,'instructions':instructions,ingredients:ingredients,note,link,created_by:createdBy,user_id:this.context.user_id})
        };
    
        fetch(url,options)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => this.context.addRecipe(responseJson))
        .catch(error =>{
            this.setState({error})
        })
        if(this.props.location.pathname==='/home-page'){
            this.props.history.push('/home-page')
        }else{
            this.props.history.push('/recipe-list')
        }  
    }
    getFolder=()=>{
        console.log('hi')
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`,
            },

        };
        Promise.all([
                fetch(`${config.API_ENDPOINT}/folders`,
          options)
            ])
            .then(([foldersRes]) => {
                if (!foldersRes.ok)
                    return foldersRes.json().then(e => Promise.reject(e));

                return Promise.all([foldersRes.json()]);
            })
            .then(([folders]) => {
                if(folders.length===0){
                    this.setState({folderError:'*Must create a folder before creating a recipe.'})
                }else{
                  this.context.addFolders(folders)  
                }
                
                
            })
            .catch(error => {
                console.error({ error });
            });
    }
    render(){
        if(this.context.folders.length===0){
            return  <GetRecipeAndFolders/>
         }
        let style;
        if(this.props.location.pathname===`/home-page`){
            style=hpStyles
        }if(this.props.location.pathname==='/add-recipe'){
            style=addRStyles
        } 
        return (<>
        
        {(this.props.location.pathname===`/home-page`)?'':<Header/>}
        {(this.props.location.pathname===`/home-page`)?'':<Nav/>}
        <MediaQuery maxWidth={730}>
            <div className='addRecipe' style={style.addRecipeStyle.div}>
                {(this.props.location.pathname===`/home-page`)?
                <h3><Link to={'/add-recipe'}>ADD RECIPE</Link></h3>:<h3>ADD RECIPE</h3>}   
                <form onSubmit={e=>this.addIngredient(e)} style={style.addRecipeStyle.form}>
                <ValidationError Foldermessage={this.state.folderError}/>
                    <fieldset style={style.addRecipeStyle.fieldset}>
                        <legend style={style.addRecipeStyle.legend}>Add Ingredient</legend>
                        <label style={style.addRecipeStyle.label}>Ingredient</label><br/>
                        <label htmlFor='ingredientName' style={style.addRecipeStyle.label}>Name:<br/>
                        <input type='text' name='ingredientName' style={style.addRecipeStyle.ingredientInput}/>
                        </label><br/>
                        <label htmlFor='ingredientQuantity' style={style.addRecipeStyle.label}>Quantity:<br/>
                        <input type='text' name='ingredientQuantity' style={style.addRecipeStyle.ingredientInput}/></label><br/>
                        <label htmlFor='ingredientUnit' style={style.addRecipeStyle.label}>Unit: <br/>
                        <select name='ingredientUnit' style={style.addRecipeStyle.select}>
                            <option value='' style={style.addRecipeStyle.option}>select a unit</option>
                            <option value='cup(s)'style={style.addRecipeStyle.option}>Cup(s)</option>
                            <option value='pinch(es)'style={style.addRecipeStyle.option}>Pinch(es)</option>
                            <option value='package(s)'style={style.addRecipeStyle.option}>Package(s)</option>
                            <option value='teaspoon(s)'style={style.addRecipeStyle.option}>Teaspoon(s)</option>
                            <option value='tablespoon(s)'style={style.addRecipeStyle.option}>Tablespoon(s)</option>
                            <option value='ounce(s)'style={style.addRecipeStyle.option}>Ounce(s)</option>
                            <option value='pint(s)'style={style.addRecipeStyle.option}>Pint(s)</option>
                            <option value='bundle(s)'style={style.addRecipeStyle.option}>Bundle(s)</option>
                            <option value='other'style={style.addRecipeStyle.option}>Other</option>
                        </select></label><br/>
                        <label htmlFor='ingredientUnitOther' style={style.addRecipeStyle.label}> Other Unit:<br/>
                        <input type='text' name='ingredientUnitOther' style={style.addRecipeStyle.ingredientInput}/><br/>
                        <button type='submit' style={style.addRecipeStyle.button}>Enter</button></label><br/>
                    </fieldset>
                </form>
                
                <form onSubmit={e=>this.handleSubmit(e)} style={style.addRecipeStyle.form}>
                    <fieldset style={style.addRecipeStyle.fieldset}>
                        <legend style={style.addRecipeStyle.legend}>Recipe</legend>
                        
                            <label htmlFor='name' style={style.addRecipeStyle.label} >Name:<br/>
                            <input type='text' name='name' style={style.addRecipeStyle.input}/></label><br/> 
                            <ValidationError Namemessage={this.state.nameError}/>
                            <label htmlFor='instructions' style={style.addRecipeStyle.label}>Instructions:<br/>
                            <textarea name='instructions' style={style.addRecipeStyle.textarea}></textarea></label><br/>
                            <ValidationError Instructionsmessage={this.state.instructionsError}/>
                            <label htmlFor='note' style={style.addRecipeStyle.label}>Note:<br/>
                            <input type='text' name='note' style={style.addRecipeStyle.input}/></label><br/>
                            <label htmlFor='link' style={style.addRecipeStyle.label}>Link:<br/>
                            <input type='text' name='link' style={style.addRecipeStyle.input}/></label><br/>
                            <label htmlFor='createdBy' style={style.addRecipeStyle.label}>Creator:<br/>
                            <input type='text' name='createdBy' style={style.addRecipeStyle.input}/></label><br/>
                            <label htmlFor='folder' style={style.addRecipeStyle.label}>Folder:
                            <select name='folder' >
                                {this.context.folders.map((folder)=>{
                                return(<option name='folder' key={folder.id} value={folder.id}>{folder.name}</option>)})}
                            </select>
                            </label><br/>
                            <ValidationError Ingredientsmessage={this.state.ingredientsError}/>
                            {(this.state.ingredients.length>0)?<label htmlFor='ingredientsToDisplay' style={style.addRecipeStyle.label}>Ingredients: </label>:null}<br/> 
                            {(this.state.ingredients.length>0)?<><textarea className='ingredientsToDisplay' value={this.createDisplayedIngredients(this.state.ingredients)} readOnly style={style.addRecipeStyle.textarea}>
                            </textarea><br/></>:null}
                            <button type='submit' style={style.addRecipeStyle.button}>Submit</button><br/>{(this.props.location.pathname===`/home-page`)?null:<button onClick={()=>this.props.history.goBack()} style={style.addRecipeStyle.button}>Cancel</button>} 
                    </fieldset>
                </form>   
            </div>
        </MediaQuery>
        <MediaQuery minWidth={731} maxWidth={900}>
            <div className='addRecipe' style={style.addRecipeStyle.div}>
                <h3>ADD RECIPE</h3>
                
                <form onSubmit={e=>this.addIngredient(e)} style={style.addRecipeStyle.form}>
                    <fieldset style={style.addRecipeStyle.fieldset}>
                        <legend style={style.addRecipeStyle.legend}>Add Ingredient</legend>
                        <ValidationError Ingredientsmessage={this.state.ingredientsError}/><br/>
                        <label style={style.addRecipeStyle.label}>Ingredient</label><br/>
                        <label htmlFor='ingredientName' style={style.addRecipeStyle.label}>Name:<br/>
                        <input type='text' name='ingredientName' style={style.addRecipeStyle.ingredientInput}/>
                        </label><br/>
                        <label htmlFor='ingredientQuantity' style={style.addRecipeStyle.label}>Quantity:<br/>
                        <input type='text' name='ingredientQuantity' style={style.addRecipeStyle.ingredientInput}/></label><br/>
                        <label htmlFor='ingredientUnit' style={style.addRecipeStyle.label}>Unit: <br/>
                        <select name='ingredientUnit' style={style.addRecipeStyle.select}>
                            <option value=''>select a unit</option>
                            <option value='cup(s)'>Cup(s)</option>
                            <option value='pinch(es)'>Pinch(es)</option>
                            <option value='package(s)'>Package(s)</option>
                            <option value='teaspoon(s)'>Teaspoon(s)</option>
                            <option value='tablespoon(s)'>Tablespoon(s)</option>
                            <option value='ounce(s)'>Ounce(s)</option>
                            <option value='pint(s)'>Pint(s)</option>
                            <option value='bundle(s)'>Bundle(s)</option>
                            <option value='other'>Other</option>
                        </select></label><br/>
                        <label htmlFor='ingredientUnitOther' style={style.addRecipeStyle.label}> Other Unit:<br/>
                        <input type='text' name='ingredientUnitOther' style={style.addRecipeStyle.ingredientInput}/><br/>
                        <button type='submit' style={style.addRecipeStyle.button}>Enter</button></label><br/>
                    </fieldset>
                </form>
                
                <form onSubmit={e=>this.handleSubmit(e)} style={style.addRecipeStyle.form}>
                    <fieldset style={style.addRecipeStyle.fieldset}>
                        <legend style={style.addRecipeStyle.legend}>Recipe</legend>
                        <ValidationError Foldermessage={this.state.folderError}/>
                        
                            <label htmlFor='name' style={style.addRecipeStyle.label} >Name:<br/>
                            <input type='text' name='name' style={style.addRecipeStyle.input}/></label><br/> 
                            <ValidationError Namemessage={this.state.nameError}/>
                            <label htmlFor='instructions' style={style.addRecipeStyle.label}>Instructions:<br/>
                            <textarea name='instructions' style={style.addRecipeStyle.textarea}></textarea></label><br/>
                            <ValidationError Instructionsmessage={this.state.instructionsError}/>
                            <label htmlFor='note' style={style.addRecipeStyle.label}>Note:<br/>
                            <input type='text' name='note' style={style.addRecipeStyle.input}/></label><br/>
                            <label htmlFor='link' style={style.addRecipeStyle.label}>Link:<br/>
                            <input type='text' name='link' style={style.addRecipeStyle.input}/></label><br/>
                            <label htmlFor='createdBy' style={style.addRecipeStyle.label}>Creator:<br/>
                            <input type='text' name='createdBy' style={style.addRecipeStyle.input}/></label><br/>
                            <label htmlFor='folder' style={style.addRecipeStyle.label}>Folder:
                            <select name='folder' style={style.addRecipeStyle.select}>
                                {this.context.folders.map((folder)=>{
                                return(<option name='folder' key={folder.id} value={folder.id}>{folder.name}</option>)})}
                            </select>
                            </label><br/>
                            
                            {(this.state.ingredients.length>0)?<label htmlFor='ingredientsToDisplay' style={style.addRecipeStyle.label}>Ingredients: </label>:null}<br/> 
                            {(this.state.ingredients.length>0)?<><textarea value={this.createDisplayedIngredients(this.state.ingredients)} readOnly style={style.addRecipeStyle.textarea}>
                            </textarea><br/></>:null}
                            <button type='submit' style={style.addRecipeStyle.button}>Submit</button><br/>{(this.props.location.pathname===`/home-page`)?null:<button onClick={()=>this.props.history.goBack()} style={style.addRecipeStyle.button}>Cancel</button>}
                    </fieldset>
                </form>    
            </div>
            </MediaQuery>
        <MediaQuery minWidth={901}>
            <div className='addRecipe' style={style.addRecipeStyle.divLaptop}>
            <ValidationError Foldermessage={this.state.folderError}/>
                <h3>ADD RECIPE</h3>
                <div className='laptopViewContainer' style={style.addRecipeStyle.LaptopViewContainer}>
               
                <form onSubmit={e=>this.addIngredient(e)} style={style.addRecipeStyle.formLaptop}>
                    <fieldset style={style.addRecipeStyle.fieldset}>
                        <legend style={style.addRecipeStyle.legendLaptop}>Add Ingredient</legend>
                         <ValidationError Ingredientsmessage={this.state.ingredientsError}/><br/>
                        <label style={style.addRecipeStyle.labelLaptop}>Ingredient</label><br/>
                        <label htmlFor='ingredientName' style={style.addRecipeStyle.labelLaptop}>Name:<br/>
                        <input type='text' name='ingredientName' style={style.addRecipeStyle.ingredientInputLaptop}/>
                        </label><br/>
                        <label htmlFor='ingredientQuantity' style={style.addRecipeStyle.labelLaptop}>Quantity:<br/>
                        <input type='text' name='ingredientQuantity' style={style.addRecipeStyle.ingredientInputLaptop}/></label><br/>
                        <label htmlFor='ingredientUnit' style={style.addRecipeStyle.labelLaptop}>Unit: <br/>
                        <select name='ingredientUnit' style={style.addRecipeStyle.selectLaptop}>
                            <option value=''>select a unit</option>
                            <option value='cup(s)'>Cup(s)</option>
                            <option value='pinch(es)'>Pinch(es)</option>
                            <option value='package(s)'>Package(s)</option>
                            <option value='teaspoon(s)'>Teaspoon(s)</option>
                            <option value='tablespoon(s)'>Tablespoon(s)</option>
                            <option value='ounce(s)'>Ounce(s)</option>
                            <option value='pint(s)'>Pint(s)</option>
                            <option value='bundle(s)'>Bundle(s)</option>
                            <option value='other'>Other</option>
                        </select></label><br/>
                        <label htmlFor='ingredientUnitOther' style={style.addRecipeStyle.label}> Other Unit:<br/>
                        <input type='text' name='ingredientUnitOther' style={style.addRecipeStyle.ingredientInput}/><br/>
                        <button type='submit' style={style.addRecipeStyle.button}>Enter</button></label><br/>
                    </fieldset>
                </form>
               
                <form onSubmit={e=>this.handleSubmit(e)} style={style.addRecipeStyle.formLaptop}>
                    <fieldset style={style.addRecipeStyle.fieldset}>
                        <legend style={style.addRecipeStyle.legend}>Recipe</legend>
                         
                            <label htmlFor='name' style={style.addRecipeStyle.label} >Name:<br/>
                            <input type='text' name='name' style={style.addRecipeStyle.input}/></label><br/> 
                            <ValidationError Namemessage={this.state.nameError}/>
                            <label htmlFor='instructions' style={style.addRecipeStyle.label}>Instructions:<br/>
                            <textarea name='instructions' style={style.addRecipeStyle.textarea}></textarea></label><br/>
                            <ValidationError Instructionsmessage={this.state.instructionsError}/>
                            <label htmlFor='note' style={style.addRecipeStyle.label}>Note:<br/>
                            <input type='text' name='note' style={style.addRecipeStyle.input}/></label><br/>
                            <label htmlFor='link' style={style.addRecipeStyle.label}>Link:<br/>
                            <input type='text' name='link' style={style.addRecipeStyle.input}/></label><br/>
                            <label htmlFor='createdBy' style={style.addRecipeStyle.label}>Creator:<br/>
                            <input type='text' name='createdBy' style={style.addRecipeStyle.input}/></label><br/>
                            <label htmlFor='folder' style={style.addRecipeStyle.label}>Folder:
                            <select name='folder' style={style.addRecipeStyle.select} >
                                {this.context.folders.map((folder)=>{
                                return(<option name='folder' key={folder.id} value={folder.id}>{folder.name}</option>)})}
                            </select>
                            </label><br/>
                            
                            {(this.state.ingredients.length>0)?<label htmlFor='ingredientsToDisplay' style={style.addRecipeStyle.label}>Ingredients: </label>:null}<br/> 
                            {(this.state.ingredients.length>0)?<><textarea value={this.createDisplayedIngredients(this.state.ingredients)} readOnly style={style.addRecipeStyle.textarea}>
                            </textarea><br/></>:null}
                            <button type='submit' style={style.addRecipeStyle.button}>Submit</button><br/>{(this.props.location.pathname===`/home-page`)?null:<button onClick={()=>this.props.history.goBack()} style={style.addRecipeStyle.button}>Cancel</button>}
                    </fieldset>
                </form>   
              
               </div>  
            </div>
            </MediaQuery>
        </>
        )
    }
}
export default withRouter(AddRecipe)