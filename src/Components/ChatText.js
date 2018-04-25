import React, {Component} from 'react';

class ChatText extends Component {
    constructor(props){
        super(props);

        this.Submit_Text = this.Submit_Text.bind(this);
        this.Click_Submit = this.Click_Submit.bind(this);
    }

    Submit_Text(event){
        
        if(event.key==="Enter"){
            event.preventDefault();
            console.log(event.target.value);
            this.props.AddText(event.target.value);
        }   
    }

    Click_Submit(event){ 
        event.preventDefault();
        console.log(this.refs.textchat.value);
        this.props.AddText(this.refs.textchat.value);
    }

    render(){
        return(
            <div className="inside-chat-text">
                <input type="text" ref="textchat" onKeyPress={this.Submit_Text} />
                <button type="submit" onClick={this.Click_Submit}>Submit</button>
            </div>
        );
    }
}

export default ChatText;