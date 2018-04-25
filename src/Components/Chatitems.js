import React from 'react';
const Chatitem = ({text,index}) => {
    return <li className="list-group-item chatitem" key={index}>{text}</li>
};

export default Chatitem;