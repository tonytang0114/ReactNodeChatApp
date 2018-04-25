import React, {Component} from 'react';

class RoomList extends Component{
    constructor(props){
        super(props);
        this.RemoveRoom = this.RemoveRoom.bind(this);
    };

    RemoveRoom(room){
        console.log(this.props.rooms);
        this.props.RemoveRoom(room);
    }
    
    render(){
        const RoomItems = this.props.rooms.map((room) => {
            return <li className="list-group-item" key={room.id}>{room.room}
                        <i className="fa fa-sign-in"></i> {"    "}
                        <i className="fa fa-close" onClick={()=>this.RemoveRoom(room)}></i> 
                    </li>;
        });
        return(
            <ul className="list-group list1">
            {RoomItems} 
            </ul>
        );
    }

}
export default RoomList;