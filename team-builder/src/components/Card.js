import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { member } = props;
    return (
        <div>
            <h2>{member.name}</h2>
            <h3>{member.email}</h3>
            <h3>{member.role}</h3>
            <Link to={`/edit/${member.id}`}>Edit</Link>
        </div>
    );
};

export default Card;