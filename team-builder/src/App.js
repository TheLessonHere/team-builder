import React, { useState } from 'react';

import MemberCard from './components/MemberCard';

import './App.css';

function App() {

  const [members, setMembers] = useState([{ name: "Levi Thomas", email: "levithomasfswd@gmail.com", role: "Front-End Developer" }])

  return (
    <div className="App">
      <h1 className="title">Team Members:</h1>
      <div className="cards">
        {members.map((member) => {return <MemberCard name={member.name} email={member.email} role={member.role}/>})}
      </div>
    </div>
  );
}

export default App;
