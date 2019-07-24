import React, { useState, useEffect } from 'react';
import Form from './components/Form';

import './App.css';

function App() {

  const [members, setMembers] = useState([ { name:"", email:"", role:"" } ])
  const [memberToEdit, setMemberToEdit] = useState([])

  useEffect(() => {
    console.log(members)
  }, [members])

  return (
    <div className="App">
      <h1 className="title">Team Members:</h1>
      <div className="cards">
      <div className="member-card">
            <h2 className="member-name">{members.name}</h2>
            <p className="member-email">{members.email}</p>
            <p className="member-role">{members.role}</p>
            <button onClick={() => (console.log('button clicked'))}>Edit Member</button>
        </div>
      </div>
      <Form submitsetter={setMembers} memberlist={members}/>
    </div>
  );
}

export default App;
