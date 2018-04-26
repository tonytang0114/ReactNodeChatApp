import React,{Component} from 'react';
import Chatitem from './Chatitems';

const ChatConsole = (props) => {
    const TextItems = props.texts.map((text,index)=>{
    return <Chatitem key={index} text={text} name={props.name}/>
    });

    return (
        <div className="chat-console">
            <ul className="list-group">
                {TextItems}
            </ul>
        </div>
    );
};

export default ChatConsole;