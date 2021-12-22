import React, { Component } from 'react';
class Additems extends Component {
    state={
        name:'',
        age:''
    }
    handleChange = (e) => {
        // debugger;
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handelSubmit = (e) => {
        e.preventDefault();
        if(e.target.name.value === '' || e.target.age.value === ''){
            return false
        }
        else{
            this.props.addItem(this.state);
            this.setState({
                name:'',
                age:''
            })
        }

    }
 render(){
   return(
     <div >
        <form onSubmit={this.handelSubmit}>
            <input type="text" placeholder="Enter Your Name" id="name" onChange={this.handleChange} value={this.state.name}/>
            <input type="number" placeholder="Enter Your Age" id="age" onChange={this.handleChange} value={this.state.age}/>
            <input type="submit" value="Add"/>
        </form>
     </div>
   )
 }

}
export default Additems;
