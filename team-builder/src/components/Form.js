import React from 'react';

function Form (props) {

    return (
    <div className="new-member-form">
      <form onSubmit={props.submit}>
        <label>
          Member Name:
          <input 
          className="form-control"
          type="text" 
          name="name"
          placeholder="Enter member name"
          value={props.membername}
          onChange={props.change}/>
        </label>
        <label>
          Email:
          <input 
          type="email"
          className="form-control"
          name="email"
          aria-describedby="emailHelp"
          placeholder="Enter member email"
          value={props.memberemail}
          onChange={props.change}/>
        </label>
        <label>
          Role:
          <input 
          type="text"
          className="form-control"
          name="role"
          placeholder="Enter member role"
          onChange={props.change}
          value={props.memberrole}/>
        </label>
        <button type="submit">Submit New Member</button>
      </form>
    </div>
    );
}

export default Form;