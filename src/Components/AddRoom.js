import React, {Component} from 'react';

class AddRoom extends Component {
    constructor(props){
        super(props);
        
        this.showinfo=this.showinfo.bind(this);

    }

    showinfo(event){
        event.preventDefault();
        if(!this.refs.newtext.value){
            alert("Don't input empty value");
            return;
        }
        else{
            this.props.RoomAdd(this.refs.newtext.value);
            this.refs.newtext.value="";
        }
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                Room
                </div>
                <div className="row">
                    <div className="searchbar">
                            <input type="text" ref="newtext" placeholder="Enter Room name" />
                            <i className="fa fa-plus" aria-hidden="true" onClick={this.showinfo} ></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddRoom;