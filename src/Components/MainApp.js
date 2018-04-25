import React, { Component } from 'react';
import AddRoom from './AddRoom';
import RoomList from './RoomList';
import ChatConsole from './ChatConsole';
import ChatText from './ChatText';
import { subscribeToTimer, subscribeToMsg, ReceiveMsg} from '../SocketAPI';

class MainApp extends Component {
    constructor(props){
        super(props);
        this.state={
            rooms:[{id:1, room:'sample'}],
            texts:[],
            timestamp:'no timestamp yet'
        };

        subscribeToTimer((err, timestamp) => this.setState({ 
            timestamp 
        }));

        ReceiveMsg((msg) => this.setState({
            texts: this.state.texts.concat(msg)
        }));

        this.RoomAdd=this.RoomAdd.bind(this);
        this.AddText=this.AddText.bind(this);
        this.RemoveRoom = this.RemoveRoom.bind(this);

    }

    RemoveRoom(room){
        // console.log(room.id);
        let rooms = this.state.rooms;
        for(let i=0;i<rooms.length;i++){
            if(rooms[i].id == room.id){
                rooms.splice(i,1);
            }
        }
        this.setState({rooms:rooms});
    }

    AddText(text){
        console.log(text);
        subscribeToMsg(text);
    }

    RoomAdd(term){
        let newRoom = {
            id: this.state.rooms.length+1,
            room:term
        }
        if(this.state.rooms.includes(term)){
            alert("Same room has already created");
            return;
        }
        this.setState({rooms:this.state.rooms.concat(newRoom)});
    }

    render(){
        return(
        <div>
            <div className="NavbarChat">
                <div className="up-bar">
                    {this.props.name}{"            "} {this.state.timestamp}
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
                <AddRoom RoomAdd={term => this.RoomAdd(term)}/>
                <RoomList rooms={this.state.rooms} RemoveRoom={room => this.RemoveRoom(room)}/>
                {/* <UserList /> */}
            </div>
            <div className="Chat-Console">
                <ChatConsole texts={this.state.texts} />
            </div>
            <div className="Chat-Text">
                <ChatText AddText={text=>this.AddText(text)}/>
            </div>
        </div>
        );
    }
} 

export default MainApp;