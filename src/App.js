import React, { useState } from 'react'
import './App.css';
import Header from './Components/Header'
import UserList from './Components/UserList';



function App() {
  const [users, setUsers] = useState([])
  const [numberOfUsers, setNumberOfUsers ] = useState (users.length)
  
  //add new users
  const addUser = (user) => {
    const newUsers =[...users]
    newUsers.push(user)
    setUsers(newUsers)
    //update users counter
    setNumberOfUsers(users.length+1)
  }

  //change active state

  //delete user
  

  return (
    <div className="App">
      <header className="App-header">
        <Header numberOfUsers={numberOfUsers} addUser={addUser}/>
        <UserList userList={users} />
      </header>
    </div>
  );
}

export default App;