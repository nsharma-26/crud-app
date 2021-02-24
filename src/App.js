import React, {useState} from 'react'
import './App.css';
import UserTable from './tables/UserTableCopy'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

function App() {
  const usersData = [
    { id: 1, fname: 'Tania', username: 'floppydiskette' },
    { id: 2, fname: 'Craig', username: 'siliconeidolon' },
    { id: 3, fname: 'Ben', username: 'benisphere' },
  ]
  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, fname: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }
  const editRow = (user) => {
    setEditing(true)  
    setCurrentUser({ id: user.id, fname: user.fname, username: user.username })
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }
  return (
    <div className="container">
      <h1>CRUD app with React Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
        {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
