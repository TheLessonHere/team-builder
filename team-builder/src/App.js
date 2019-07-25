import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

import Form from './components/Form';
import Card from './components/Card';

import './App.css';

function App() {

  const [members, setMembers] = useState([
    {id: 0, name: 'Levi', email: 'levi@levithomas.dev', role: 'JDev'},
    {id: 1, name: 'Jack', email: 'jack@jack.com', role: 'TL'}
  ])
  const [memberToEdit, setMemberToEdit] = useState([])

  const addMember = newmember => {
    setMembers([...members, newmember]);
  };

  const editMember = edittedMember => {
    const membersCopy = [...members];
    const oldMember = membersCopy.find(member => member.id === edittedMember.id); 
    // oldMember.name = edittedMember.name;
    // oldMember.email = edittedMember.email;
    // oldMember.role = edittedMember.role;
    Object.assign(oldMember, edittedMember);
    setMembers(membersCopy);
  };

  useEffect(() => {
    console.log(members)
  }, [members])

  return (
    <div className="App">
      <Link exact to="/">Home</Link>{" "}
      <Link to="/add">Add Member</Link>
      <h1 className="title">Team Members:</h1>
      <Route path="/add"
      render={props => <Form {...props} submitMember={addMember} />}/>
      <Route exact path="/" 
      render={props => members.map(member => <Card member={member} />)}/>
      <Route path="/edit/:id"
      render={props => {
        const member = members.find(member => member.id.toString() === props.match.params.id); 
        return <Form {...props} initialMember={member} submitMember={editMember}/>}}/>
    </div>
  );
}

export default App;
