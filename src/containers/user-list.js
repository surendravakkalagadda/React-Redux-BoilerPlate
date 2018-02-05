import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectedUser} from '../actions/index';

class UserList extends Component {

  createListItems() {
      return this.props.users.map((user) => {
        return (
          <li
          key={user.id}
          onClick = {() => this.props.selectedUser(user)}
          >
          {user.first}-{user.last}
          </li>
        );
      });
  }

  render() {
    return(
      <ul>
        {this.createListItems()}
      </ul>
    );
  }

}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function matchDispatchToProps(dispatch){
   return bindActionCreators({selectedUser}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(UserList);
