import React, { useState } from 'react';

function Form (props) {

  const [newmember, setNewMember] = useState({ name: "", email: "", role: "" })

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

    return (
    <div className="new-member-form">
      <form onSubmit={() => {props.submitsetter(props.memberlist.concat([newmember]))}}>
        <fieldset>
          <legend>New Team Members:</legend>
            <label>
              Member Name:
              <input 
              className="form-control"
              type="text" 
              name="name"
              placeholder="Enter member name"
              value={newmember.name}
              onChange={handleChange}/>
            </label>
            <label>
              Email:
              <input 
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter member email"
              value={newmember.email}
              onChange={handleChange}/>
            </label>
            <label>
              Role:
              <input 
              type="text"
              className="form-control"
              name="role"
              placeholder="Enter member role"
              onChange={handleChange}
              value={newmember.role}/>
            </label>
            <button type="submit">Submit New Member</button>
        </fieldset>
      </form>
    </div>
    );
}

export default Form;