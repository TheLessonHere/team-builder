import React, { useState } from 'react';

const Form = (props) => {
  const { submitMember, initialMember } = props;
  const [member, setMember] = useState(initialMember || {name: '', email: '', role: ''});

  const handleChange = (event) => {
    setMember({...member, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    submitMember(member);
    setMember({name: '', email: '', role: ''});
  }

    return (
    <div className="new-member-form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Team Members:</legend>
            <label>
              Member Name:
              <input 
              className="form-control"
              type="text" 
              name="name"
              placeholder="Enter member name"
              value={member.name}
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
              value={member.email}
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
              value={member.role}/>
            </label>
            <button type="submit">Submit New Member</button>
        </fieldset>
      </form>
    </div>
    );
}

export default Form;