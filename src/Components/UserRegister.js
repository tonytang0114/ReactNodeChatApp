import React,{Component} from 'react';

class UserRegister extends Component{
    SaveUser = () =>{

        if(this.refs.username.value){
            this.props.SaveUser(this.refs.username.value);
        }else{
            alert("Please enter an username");
        }
    }

    render(){
        return (
            <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Register your name</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <input type="text" ref="username" className="form-control" placeholder="Enter your user name"/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={this.SaveUser}>Save</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        );
    }
}

export default UserRegister;