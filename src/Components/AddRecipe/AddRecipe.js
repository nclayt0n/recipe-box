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
            ingredientError:''
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
            this.setState({ingredientError:'*Must be at least 3 characters'})
        }else{
          this.setState({
        ingredients:[...this.state.ingredients,{name:e.target.ingredientName.value,quantity,unit:ingredientUnit}],ingredientError:''
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
            document.getElementById('ingredientForm').reset();
            document.getElementById('recipeForm').reset();
            this.setState({ingredients:[]})
        }else{
            this.props.history.push('/recipe-list')
            document.getElementById('ingredientForm').reset();
            document.getElementById('recipeForm').reset();
            this.setState({ingredients:[]})
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
        console.log(this.state)
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
        <MediaQuery maxWidth={650}>
            <div className='addRecipe' style={style.addRecipeStyle.div}>
                {(this.props.location.pathname===`/home-page`)?
                <h3 style={style.addRecipeStyle.h3}><Link to={'/add-recipe'} style={{color:'var(--purple)'}}>ADD RECIPE</Link></h3>:<h3 style={style.addRecipeStyle.h3}>ADD RECIPE</h3>}   
                <form id='ingredientForm' onSubmit={e=>this.addIngredient(e)} style={style.addRecipeStyle.form}>
                <ValidationError Foldermessage={this.state.folderError}/>
                    <fieldset style={style.addRecipeStyle.fieldset}>
                        <legend style={style.addRecipeStyle.legend}>Add Ingredient</legend>
                        <label htmlFor='ingredientName' style={style.addRecipeStyle.label}>Name:<br/>
                        <input type='text' name='ingredientName' style={style.addRecipeStyle.ingredientInput}/>
                        </label><br/>
                        <ValidationError Ingredientmessage={this.state.ingredientError}/><br/>
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
                        <input type='text' name='ingredientUnitOther' style={style.addRecipeStyle.ingredientInput}/>
                        </label><br/>
                        
                        <button type='submit' style={style.addRecipeStyle.button}>Enter</button><br/>
                        {(this.state.ingredients.length>0)?<><textarea className='ingredientsToDisplay' value={this.createDisplayedIngredients(this.state.ingredients)} readOnly style={style.addRecipeStyle.textarea}>
                            </textarea><br/></>:null}
                    </fieldset>
                </form>
                
                <form id='recipeForm' onSubmit={e=>this.handleSubmit(e)} style={style.addRecipeStyle.form}>
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
                            {(this.state.ingredients.length>0)?<label htmlFor='ingredientsToDisplay' style={style.addRecipeStyle.label}>Ingredients: </label>:null}
                            {(this.state.ingredients.length>0)?<><textarea className='ingredientsToDisplay' value={this.createDisplayedIngredients(this.state.ingredients)} readOnly style={style.addRecipeStyle.textarea}>
                            </textarea><br/></>:null}
                            <ValidationError Ingredientsmessage={this.state.ingredientsError}/>
                            <label htmlFor='folder' style={style.addRecipeStyle.label}>Folder:
                            <select name='folder' style={style.addRecipeStyle.select}>
                                {this.context.folders.map((folder)=>{
                                return(<option name='folder' key={folder.id} value={folder.id} style={style.addRecipeStyle.option}>{folder.name}</option>)})}
                            </select>
                            </label><br/>
                            <button type='submit' style={style.addRecipeStyle.button}>Submit</button><br/>{(this.props.location.pathname===`/home-page`)?null:<button onClick={()=>this.props.history.goBack()} style={style.addRecipeStyle.button}>Cancel</button>} 
                    </fieldset>
                </form>   
            </div>
        </MediaQuery>
        <MediaQuery minWidth={651} maxWidth={900}>
            <div className='addRecipe' style={style.addRecipeStyle.tablet.div}>
            {(this.props.location.pathname===`/home-page`)?
                <h3 style={style.addRecipeStyle.tablet.h3}><Link to={'/add-recipe'} style={{color:'var(--purple)'}}>ADD RECIPE</Link></h3>:<h3 style={style.addRecipeStyle.tablet.h3}>ADD RECIPE</h3>}  
                
                <form id='ingredientForm' onSubmit={e=>this.addIngredient(e)} style={style.addRecipeStyle.tablet.form}>
                    <fieldset style={style.addRecipeStyle.tablet.fieldset}>
                        <legend style={style.addRecipeStyle.tablet.legend}>Add Ingredient</legend>
                        <ValidationError Ingredientsmessage={this.state.ingredientsError}/>
                        <label htmlFor='ingredientName' style={style.addRecipeStyle.tablet.label}>Name:<br/>
                        <input type='text' name='ingredientName' style={style.addRecipeStyle.tablet.ingredientInput}/>
                        </label><br/>
                        <ValidationError Ingredientmessage={this.state.ingredientError}/>
                        <label htmlFor='ingredientQuantity' style={style.addRecipeStyle.tablet.label}>Quantity:<br/>
                        <input type='text' name='ingredientQuantity' style={style.addRecipeStyle.tablet.ingredientInput}/></label><br/>
                        <label htmlFor='ingredientUnit' style={style.addRecipeStyle.tablet.label}>Unit: <br/>
                        <select name='ingredientUnit' style={style.addRecipeStyle.tablet.select}>
                            <option value=''style={style.addRecipeStyle.tablet.option}>select a unit</option>
                            <option value='cup(s)' style={style.addRecipeStyle.tablet.option}>Cup(s)</option>
                            <option value='pinch(es)' style={style.addRecipeStyle.tablet.option}>Pinch(es)</option>
                            <option value='package(s)' style={style.addRecipeStyle.tablet.option}>Package(s)</option>
                            <option value='teaspoon(s)' style={style.addRecipeStyle.tablet.option}>Teaspoon(s)</option>
                            <option value='tablespoon(s)' style={style.addRecipeStyle.tablet.option}>Tablespoon(s)</option>
                            <option value='ounce(s)' style={style.addRecipeStyle.tablet.option}>Ounce(s)</option>
                            <option value='pint(s)' style={style.addRecipeStyle.tablet.option}>Pint(s)</option>
                            <option value='bundle(s)' style={style.addRecipeStyle.tablet.option}>Bundle(s)</option>
                            <option value='other' style={style.addRecipeStyle.tablet.option}>Other</option>
                        </select></label><br/>
                        <label htmlFor='ingredientUnitOther' style={style.addRecipeStyle.tablet.label}> Other Unit:<br/>
                            <input type='text' name='ingredientUnitOther' style={style.addRecipeStyle.tablet.ingredientInput}/>
                        </label><br/>
                        <button type='submit' style={style.addRecipeStyle.tablet.button}>Enter</button><br/>
                    </fieldset>
                </form>
                
                <form id='recipeForm' onSubmit={e=>this.handleSubmit(e)} style={style.addRecipeStyle.tablet.form}>
                    <fieldset style={style.addRecipeStyle.tablet.fieldset}>
                        <legend style={style.addRecipeStyle.tablet.legend}>Recipe</legend>
                        <ValidationError Foldermessage={this.state.folderError}/>
                            <label htmlFor='name' style={style.addRecipeStyle.tablet.label} >Name:<br/>
                            <input type='text' name='name' style={style.addRecipeStyle.tablet.input}/></label>
                            <ValidationError Namemessage={this.state.nameError}/>
                            {(this.state.ingredients.length>0)?<label htmlFor='ingredientsToDisplay' style={style.addRecipeStyle.tablet.label}>Ingredients: </label>:null}<br/> 
                            {(this.state.ingredients.length>0)?<><textarea value={this.createDisplayedIngredients(this.state.ingredients)} readOnly style={style.addRecipeStyle.tablet.textarea}>
                            </textarea><br/></>:null}
                            <label htmlFor='instructions' style={style.addRecipeStyle.tablet.label}>Instructions:<br/>
                            <textarea name='instructions' style={style.addRecipeStyle.tablet.textarea}></textarea></label><br/>
                            <ValidationError Instructionsmessage={this.state.instructionsError}/>
                            <label htmlFor='note' style={style.addRecipeStyle.tablet.label}>Note:<br/>
                            <input type='text' name='note' style={style.addRecipeStyle.tablet.input}/></label><br/>
                            <label htmlFor='link' style={style.addRecipeStyle.tablet.label}>Link:<br/>
                            <input type='text' name='link' style={style.addRecipeStyle.tablet.input}/></label><br/>
                            <label htmlFor='createdBy' style={style.addRecipeStyle.tablet.label}>Creator:<br/>
                            <input type='text' name='createdBy' style={style.addRecipeStyle.tablet.input}/></label><br/>
                            <label htmlFor='folder' style={style.addRecipeStyle.tablet.label}>Folder:
                            <select name='folder' style={style.addRecipeStyle.tablet.select}>
                                {this.context.folders.map((folder)=>{
                                return(<option name='folder' key={folder.id} value={folder.id} style={style.addRecipeStyle.tablet.option}>{folder.name}</option>)})}
                            </select>
                            </label><br/>
                            
                            <button type='submit' style={style.addRecipeStyle.tablet.button}>Submit</button><br/>{(this.props.location.pathname===`/home-page`)?null:<button onClick={()=>this.props.history.goBack()} style={style.addRecipeStyle.tablet.button}>Cancel</button>}
                    </fieldset>
                </form>    
            </div>
            </MediaQuery>
        <MediaQuery minWidth={901}>
            <div className='addRecipe' style={style.addRecipeStyle.laptop.div}>
            <ValidationError Foldermessage={this.state.folderError}/>
            {(this.props.location.pathname===`/home-page`)?
                <h3 style={style.addRecipeStyle.laptop.h3}><Link to={'/add-recipe'} style={{color:'var(--purple)'}}>ADD RECIPE</Link></h3>:<h3 style={style.addRecipeStyle.laptop.h3}>ADD RECIPE</h3>}  
                <div className='laptopViewContainer' style={style.addRecipeStyle.laptop.ViewContainer}>
               
                <form id='ingredientForm' onSubmit={e=>this.addIngredient(e)} style={style.addRecipeStyle.laptop.form}>
                    <fieldset style={style.addRecipeStyle.fieldset}>
                        <legend style={style.addRecipeStyle.laptop.legend}>Add Ingredient</legend>
                         <ValidationError Ingredientsmessage={this.state.ingredientsError}/>
                        <label htmlFor='ingredientName' style={style.addRecipeStyle.laptop.label}>Name:<br/>
                        <input type='text' name='ingredientName' style={style.addRecipeStyle.laptop.ingredientInput}/>
                        </label>
                        <ValidationError Ingredientmessage={this.state.ingredientError}/><br/>
                        <label htmlFor='ingredientQuantity' style={style.addRecipeStyle.laptop.label}>Quantity:<br/>
                        <input type='text' name='ingredientQuantity' style={style.addRecipeStyle.laptop.ingredientInput}/></label><br/>
                        <label htmlFor='ingredientUnit' style={style.addRecipeStyle.laptop.label}>Unit: <br/>
                        <select name='ingredientUnit' style={style.addRecipeStyle.laptop.select}>
                            <option value=''style={style.addRecipeStyle.laptop.option}>select a unit</option>
                            <option value='cup(s)' style={style.addRecipeStyle.laptop.option}>Cup(s)</option>
                            <option value='pinch(es)' style={style.addRecipeStyle.laptop.option}>Pinch(es)</option>
                            <option value='package(s)' style={style.addRecipeStyle.laptop.option}>Package(s)</option>
                            <option value='teaspoon(s)' style={style.addRecipeStyle.laptop.option}>Teaspoon(s)</option>
                            <option value='tablespoon(s)' style={style.addRecipeStyle.laptop.option}>Tablespoon(s)</option>
                            <option value='ounce(s)' style={style.addRecipeStyle.laptop.option}>Ounce(s)</option>
                            <option value='pint(s)' style={style.addRecipeStyle.laptop.option}>Pint(s)</option>
                            <option value='bundle(s)' style={style.addRecipeStyle.laptop.option}>Bundle(s)</option>
                            <option value='other' style={style.addRecipeStyle.laptop.option}>Other</option>
                        </select></label><br/>
                        <label htmlFor='ingredientUnitOther' style={style.addRecipeStyle.laptop.label}> Other Unit:<br/>
                        <input type='text' name='ingredientUnitOther' style={style.addRecipeStyle.laptop.ingredientInput}/>
                        </label><br/>
                        
                        <button type='submit' style={style.addRecipeStyle.laptop.button}>Enter</button><br/>
                    </fieldset>
                </form>
               
                <form id='recipeForm' onSubmit={e=>this.handleSubmit(e)} style={style.addRecipeStyle.laptop.form}>
                    <fieldset style={style.addRecipeStyle.fieldset}>
                        <legend style={style.addRecipeStyle.laptop.legend}>Recipe</legend>
                         
                            <label htmlFor='name' style={style.addRecipeStyle.laptop.label} >Name:<br/>
                            <input type='text' name='name' style={style.addRecipeStyle.laptop.input}/></label><br/> 
                            <ValidationError Namemessage={this.state.nameError}/>
                            <label htmlFor='instructions' style={style.addRecipeStyle.laptop.label}>Instructions:<br/>
                            <textarea name='instructions' style={style.addRecipeStyle.laptop.textarea}></textarea></label><br/>
                            <ValidationError Instructionsmessage={this.state.instructionsError}/>
                            <label htmlFor='note' style={style.addRecipeStyle.laptop.label}>Note:<br/>
                            <input type='text' name='note' style={style.addRecipeStyle.laptop.input}/></label><br/>
                            <label htmlFor='link' style={style.addRecipeStyle.laptop.label}>Link:<br/>
                            <input type='text' name='link' style={style.addRecipeStyle.laptop.input}/></label><br/>
                            <label htmlFor='createdBy' style={style.addRecipeStyle.laptop.label}>Creator:<br/>
                            <input type='text' name='createdBy' style={style.addRecipeStyle.laptop.input}/></label><br/>
                            <label htmlFor='folder' style={style.addRecipeStyle.laptop.label}>Folder:
                            <select name='folder' style={style.addRecipeStyle.laptop.select} >
                                {this.context.folders.map((folder)=>{
                                return(<option name='folder' key={folder.id} value={folder.id} style={style.addRecipeStyle.laptop.option}>{folder.name}</option>)})}
                            </select>
                            </label>
                            
                            {(this.state.ingredients.length>0)?<label htmlFor='ingredientsToDisplay' style={style.addRecipeStyle.laptop.label}>Ingredients: </label>:null}<br/> 
                            {(this.state.ingredients.length>0)?<><textarea value={this.createDisplayedIngredients(this.state.ingredients)} readOnly style={style.addRecipeStyle.laptop.textarea}>
                            </textarea><br/></>:null}
                            <button type='submit' style={style.addRecipeStyle.laptop.button}>Submit</button><br/>{(this.props.location.pathname===`/home-page`)?null:<button onClick={()=>this.props.history.goBack()} style={style.addRecipeStyle.laptop.button}>Cancel</button>}
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