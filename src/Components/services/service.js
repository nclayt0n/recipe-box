import React from 'react';
import KeyHandler, { KEYPRESS } from 'react-key-handler';

export default class Demo extends React.Component {
  state = { showMenu: false };

  render() {
    const { showMenu } = this.state;

    return (
      <React.Fragment>
        <KeyHandler
          keyEventName={KEYPRESS}
          keyValue="s"
          onKeyHandle={this.toggleMenu}
        />

        {showMenu && (
          <ol>
            <li>hello</li>
            <li>world</li>
          </ol>
        )}
      </React.Fragment>
    );
  }

  toggleMenu = (event) => {
    event.preventDefault();

    this.setState({ showMenu: !this.state.showMenu });
  };
}