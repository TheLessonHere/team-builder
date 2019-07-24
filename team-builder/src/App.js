import React, { useState } from 'react';

import MemberCards from './components/MemberCards';
import Form from './components/Form';

import './App.css';

function App() {

  const [members, setMembers] = useState([{ name: "Levi Thomas", email: "levithomasfswd@gmail.com", role: "Front-End Developer" }])
  const [newmember, setNewMember] = useState({ name: "", email: "", role: "" })
  const [memberToEdit, setMemberToEdit] = useState([])

  function handleChange(event) {
    const updatedMember = { ...newmember, [event.target.name]: event.target.value };
    console.log(
      "handleChange",
      event.target.name,
      event.target.value,
      updatedMember
    );
    setNewMember(updatedMember);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setMembers([...members ].push(newmember))
    console.log("Members", members);
    setNewMember({ name: "", email: "", role: "" })
  }

  return (
    <div className="App">
      <h1 className="title">Team Members:</h1>
      <div className="cards">
        <MemberCards memberlist={members}/>
      </div>
      <Form submit={handleSubmit} membername={newmember.name} memberemail={newmember.email} memberrole={newmember.role} change={handleChange}/>
    </div>
  );
}

export default App;
