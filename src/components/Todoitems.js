import React from 'react';
const Todoitems = (props) => {
    const {userData} = props;
    const {deleteItem} = props; 
    let length =userData.length
    const datalist = length ?(
        userData.map(item => {
            return (
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={()=>deleteItem(item.id)}>&times;</span>
                </div>
            )
        })
    )

    : (  <p> no items</p>)
  

     return(
         <div className="ListItems">
              <div>
                  <span className="name title">Name </span>
                  <span className="age title">Age</span>
                  <span className="action title">Action</span>
              {datalist}
                 
              </div>
         </div>
     )
}
export default Todoitems;
