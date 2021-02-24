import React, { useState } from 'react'
import './AddUserForm.css'

function AddUserForm({addUser}) {    
    const initialValue = {id:null, name:'', username:''}
    const [inputs, setInputs] = useState(initialValue)
    const {id, name, username} = inputs
    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs({...inputs, [name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !username) return
        addUser(inputs)
        setInputs(initialValue);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label></label>
                    <input type="text" name="name" onChange={handleChange} value={name}/>
                </div>
                <div>
                    <label></label>
                    <input type="text" name="username" onChange={handleChange} value={username}/>
                </div>
                <div>
                    <button className="btn btn-primary">Add User</button>
                </div>
            </form>            
        </div>
    )
}

export default AddUserForm
