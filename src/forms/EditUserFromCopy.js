import React, {useState, useEffect} from 'react'

function EditUserFrom(props) {
    const [user, setUser] = useState(props.currentUser)
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.updateUser(user.id, user)
    }
    useEffect(() => {
        setUser(props.currentUser)
      }, [props])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label></label>
                    <input type="text" name="name" onChange={handleInputChange} value={user.name}/>
                </div>
                <div>
                    <label></label>
                    <input type="text" name="username" onChange={handleInputChange} value={user.username}/>
                </div>
                <div>
                <button className="btn btn-primary">Update user</button>
                <button
                    onClick={() => props.setEditing(false)}
                    className="button muted-button btn"
                >
                    Cancel
                </button>
                </div>
            </form>            
        </div>
    )
}

export default EditUserFrom
