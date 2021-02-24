import React from 'react'

function UserTable({users, deleteUser, editRow}) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>                    
                </thead>
                <tbody>
                    {
                        users.length ? (
                            users.map((user)=>
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={()=>editRow(user)}>Edit</button>
                                    <button className="btn muted-button" onClick={()=>deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        )) : (
                                <tr>
                                    <td colSpan="3">
                                        No Data
                                    </td>
                                </tr>
                        )
                       
                        
                    }                  
                </tbody>
            </table>
        </div>
    )
}

export default UserTable
