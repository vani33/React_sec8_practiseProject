import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {

  //we can use ref when if we want to quickly read the data, it not deals with key-stroke data as like states
  //it stores the data in the form of objects.
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');

  const [error, setError] = useState();


  const addUserHandler = (event) => {

    //code for using ref's
    event.preventDefault();
    console.log(nameInputRef.current.value);
    console.log(ageInputRef.current.value);

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
          title: 'Invalid Input',
          message: 'Please enter a valid input'
        });  
      return;
    }
    if (+enteredUserAge < 1) {
        setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (which is >1)'
          }); 
      return;
    }
    // console.log(enteredUsername, enteredAge);
    //lifting the state up
    props.onAddUser(enteredName,enteredUserAge);

    //code for clearing the input values after submitting the form; using ref's
    //this is not a good approach because we are modifying the react dom elements, which shouldn't be a good
    //practice to do, but here its a requirement to reset the input values, so we are doing this.
    nameInputRef.current.value = '';
    ageInputRef.current.value='';

    
    //code by using states

    // event.preventDefault();
    // if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
    //   setError({
    //       title: 'Invalid Input',
    //       message: 'Please enter a valid input'
    //     });  
    //   return;
    // }
    // if (+enteredAge < 1) {
    //     setError({
    //         title: 'Invalid age',
    //         message: 'Please enter a valid age (which is >1)'
    //       }); 
    //   return;
    // }
    // // console.log(enteredUsername, enteredAge);
    // //lifting the state up
    // props.onAddUser(enteredUsername,enteredAge);

    // setEnteredUsername('');
    // setEnteredAge('');
  };

  //code for useStates
  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };


  //to disappear the errorModal dialogue box, so setting it to null
  const errorHandler = () => {
      setError(null);
  }
  return (
      <Wrapper>
            {/* <ErrorModal title="An Error Occured!" message="Something went wrong! Please try again later"/> */}
            {/* this errorModal will be called only if there is error title or message */}
            {error && <ErrorModal title={error.title} message={error.message} onConfirm= {errorHandler}/>}
            <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                id="username"
                type="text"

                //for ref
                ref={nameInputRef}

                //for states
                // value={enteredUsername}
                // onChange={usernameChangeHandler}
                />
                <label htmlFor="age">Age (Years)</label>
                <input
                id="age"
                type="number"

                //for ref
                ref={ageInputRef}

                //for states
                // value={enteredAge}
                // onChange={ageChangeHandler}
                />
                <Button type="submit">Add User</Button>
            </form>
            </Card>
    </Wrapper>
  );
};

export default AddUser;