import React from 'react';

function MemberCards(props) {
    return(
        props.memberlist.map((member) => {
        return (
            <div className="member-card">
                <h2 className="member-name">{member.name}</h2>
                <p className="member-email">{member.email}</p>
                <p className="member-role">{member.role}</p>
                <button onClick={props.handler}>Edit Member</button>
            </div>
         );
        })
    )
}

export default MemberCards;