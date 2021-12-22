import React, { Component } from 'react';
import Additems from './components/Additems';
import './App.css';
import Todoitems from './components/Todoitems';


class App extends Component {
  state = {
    items : [
      {id:1, name:"esraa", age:24},
      {id:2, name:"ramy",  age:32},
      {id:3, name:"ayman", age:32}
    ]
  }

  /*****delete item function*******/
  deleteItem = (id) =>{
    // let items = this.state.items;
    // let i = items.findIndex(item=> item.id===id);
    // items.splice(i,1);
    // this.setState({items})

    let items = this.state.items;
    let x= items.filter(item => {
       return item.id !== id
     })
     this.setState({items:x})

  }
    /*****add  item function*******/

    addItem = (item) => {
      item.id=Math.random();
      let lestitems=this.state.items;
      lestitems.push(item);
      this.setState({items:lestitems});
    }

 render(){
   return(
     <div  className="App container">
       <h2>To Do List</h2>
       <Todoitems userData={this.state.items} deleteItem={this.deleteItem}/>
       <Additems addItem={this.addItem}/>
      
     </div>
   )
 }

}
export default App;
