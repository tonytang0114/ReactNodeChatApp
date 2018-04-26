import React, {Component} from 'react';

class UserList extends Component{
    constructor(props){
        super(props);
    };

    render(){
        const UserItems = this.props.users.map((user,index) => {
            return <li className="list-group-item" key={index}>{user}
                    </li>;
        });
        return(
        <div className="line">
            <span id="userlist"><strong>Online UserLists</strong></span>
            <ul className="list-group list1">
            {UserItems} 
            </ul>
        </div>
        );
    }

}
export default UserList;