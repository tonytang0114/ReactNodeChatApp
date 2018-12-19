import React, { Component } from 'react';
import AddRoom from './AddRoom';
import RoomList from './RoomList';
import ChatConsole from './ChatConsole';
import ChatText from './ChatText';
import UserList from './UserList';
import { subscribeToTimer, subscribeToMsg, ReceiveMsg,ReceiveUserName} from '../SocketAPI';

class MainApp extends Component {
    constructor(props){
        super(props);
        this.state={
            rooms:[{id:1, room:'Main Room'}],
            texts:[],
            timestamp:'no timestamp yet',
            users:[]
        };

        subscribeToTimer((err, timestamp) => this.setState({ 
            timestamp 
        }));

        ReceiveMsg((msg) => this.setState({
            texts: this.state.texts.concat(msg)
        }));

        ReceiveUserName((user)=> this.setState({
            users: user
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
                
                <UserList users={this.state.users}/>
            </div>
            <ChatConsole texts={this.state.texts} name={this.props.name}/>
            <div className="Chat-Text">
                <ChatText AddText={text=>this.AddText(text)}/>
            </div>
        </div>
        );
    }
} 

export default MainApp;