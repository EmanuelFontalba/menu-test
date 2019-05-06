import React, {Component} from 'react';
import {observer} from 'mobx-react';

import './App.css';


class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      itemsMenu: []
    }

    window.menuComponent = this;
  }

  sendMenuSupermarket(name){
    const items = [...this.state.itemsMenu];
    items.push(name);
    this.setState({itemsMenu: items});
    console.log("object");
  }

  render(){
    const {itemsMenu} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          {itemsMenu && itemsMenu.map(item => (<p>{item}</p>))}
        </header>
      </div>
    );
  }
}

export default observer(App);
