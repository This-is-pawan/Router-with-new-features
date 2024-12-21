import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import searchingData from '../components/searchingDate';

const UserItemadd = () => {
const [user,setuser]=useState(searchingData)
const [newUser,setNewUser]=useState('')
const  [edit,setEdit]=useState(true)
const Remove=(id)=>{
const removing=user.filter((person)=>person.id!==id)
setuser(removing)
}
const EditItem=(e)=>{
  e.preventDefault()
  if (!newUser) return 

const fakeid=Date.now()
const newArrry={id:fakeid,product: newUser}
setuser([...user,newArrry])

// const newEntry = { id: fakeid, product: newUser };
// const updatedUser = [...user]; 
// updatedUser.push(newEntry); 
// console.log(updatedUser);

// setuser(updatedUser);
setNewUser('')

}
const Edit=(id)=>{
  console.log('edit');
  
setEdit()
  }



  return (
    <>
      <div className="align">
        <h4>Search Item</h4>
        <div className="form">
          <form className="row g-3" onSubmit={EditItem}>
            <div className="col-auto">
              <label htmlFor="inputPassword2" className="visually-hidden">Product</label>
              <input
                type="text"
                className="form-control"
                id="inputPassword2"
                placeholder="Milk"
                value={newUser}
                onChange={(e)=>{ setNewUser(e.target.value)}} 
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3" >
              {edit ?   'Submit':'Update'}
              </button>
            </div>
          </form>
        </div>

        <div className="item">
      
            {user.map((item) => {
              const { id, product } = item;
              return (
                <div key={id} className="product ">
                  <article className='items'>
                    <article className='text'>
                  <span>{product}</span>
                    </article>
                  <article className="icon">
                    <FaTrash className="trash m-1" onClick={()=>{
                Remove(id)
              }}/>
                    <FaEdit className="edit m-1"   onClick={()=>{
                  
            Edit(id)

              }} />
                  </article>
                  </article>
                 
                </div>
                
              );
            })}
      
        </div>
      </div>
    </>
  );
};

export default UserItemadd;
