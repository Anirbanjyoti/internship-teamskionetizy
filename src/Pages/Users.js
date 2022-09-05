import React from 'react';
import './Users.css'

const Users = ({user}) => {
    const {name, email} = user;
    const {street, city, zipcode} = user.address;
  
    return (
        <div className='user'>
            <h1>Name: {name}</h1> 
            <h4>email: {email}</h4> 
            <h4>Address: {street}</h4> 
            <h4>{city}, {zipcode}</h4> 
            <div className="btn">
                <button>Update</button>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default Users;