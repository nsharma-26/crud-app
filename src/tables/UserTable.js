import React from 'react'

function UserTable({users,deleteUser,editRow}) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.length ?
                        users.map((user)=>
                            <tr key={user.id}>
                                <td>{user.fname}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button 
                                        onClick={() => {editRow(user)}}
                                        className="button btn muted-button">
                                            Edit
                                    </button>
                                    <button 
                                        onClick={() => deleteUser(user.id)}
                                        className="button btn muted-button">
                                            Delete
                                    </button>
                                </td>
                            </tr>
                        ) : (
                                <tr>
                                  <td colSpan={3}>No users</td>
                                </tr>
                            )
                        
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default UserTable
