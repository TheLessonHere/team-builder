import React from 'react';

function MemberCard(props) {
return (
    <div className="member-card">
        <h2 className="member-name">{props.name}</h2>
        <p className="member-email">{props.email}</p>
        <p className="member-role">{props.role}</p>
        <button onClick={props.handler}>Edit Member</button>
    </div>
    );
}

export default MemberCard;