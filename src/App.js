// import React, { useState } from 'react';
import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name:uName, age:uAge, id:Math.random().toString()}];
    });
  };

  return (
    // <div>
    //   <AddUser onAddUser={addUserHandler}/>
    //   <UsersList users={usersList}/>
    // </div>


    //by using react fragments
    // <>
    //   <AddUser onAddUser={addUserHandler}/>
    //   <UsersList users={usersList}/>
    // </>

    //another way of using react fragments
    // <React.Fragment>
    //   <AddUser onAddUser={addUserHandler}/>
    //   <UsersList users={usersList}/>
    // </React.Fragment>

    //another way of using react fragments, in this case we have to import from react with name Fragment
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
