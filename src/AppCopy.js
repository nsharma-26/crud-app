import React, { useState } from 'react'
import UserTable from './tables/UserTableCopy'
import AddUserForm from './forms/AddUserForm'
import EditUserFrom from './forms/EditUserFrom'
import './App.css'

function App() {
    const initialFormState = {id:null, name:'',username:''}
    const [editing, setEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState(initialFormState)
    const userData = [
            {id:1, name:'neha', username:'nsharma'},
            {id:2, name:'sneha', username:'sneha123'},
            {id:3, name:'kuku', username:'kuki019'}        
        ]
    const [users, setUsers] = useState(userData)
    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
    }
    const deleteUser = (id) => {
       setUsers( users.filter((user)=>user.id!==id))        
    }
    const editRow = (user) => {
        setEditing(true)
        setCurrentUser({id:user.id, name:user.name, username:user.username})
    }
    const updateUser = (id, updatedUser) => {
        setEditing(false)
        setUsers(users.map((user)=> (user.id==id ? updatedUser : user)))
    }
    return (
        <div className="container">
            <h1>CRUD Application</h1>
            <div className="flex-row">
                {
                    editing ? 
                    <EditUserFrom 
                        currentUser={currentUser}
                        updateUser={updateUser}
                        setEditing={setEditing}
                    />
                    :
                    <AddUserForm addUser={addUser}/>
                }
                
            </div>
            <div className="flex-row">
                <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
            </div>
        </div>
    )
}

export default App
