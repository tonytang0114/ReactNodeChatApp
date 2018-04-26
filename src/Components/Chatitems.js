import React from 'react';
const Chatitem = ({text,index,name}) => {
    return <li className="list-group-item chatitem" key={index}>
    <span id="userlist"><strong>{name}</strong></span>:   {text}</li>
};

export default Chatitem;