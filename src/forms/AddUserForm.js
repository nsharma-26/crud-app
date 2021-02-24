import React, {useState} from 'react'
import './AddUserForm.css'

function AddUserForm({addUser}) {
    const initialValue = {id: null, fname:"", username:""}
    const [inputs, setInputs] = useState(initialValue)
    const {id, fname, username}= inputs

    const handleChange = (e) => {
       const {name, value} = e.target
       setInputs({...inputs, [name]:value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fname || !username) return
            console.log(inputs)
            addUser(inputs)
            setInputs(initialValue)
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" name="fname" onChange={handleChange} value={fname}/>
                </div>
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" name="username" onChange={handleChange} value={username}/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Add New User</button>
                </div>
            </form>
        </div>
    )
}

export default AddUserForm
