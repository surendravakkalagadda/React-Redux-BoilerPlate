import React,{Component} from 'react';
import {connect} from 'react-redux';


class UserDetails extends Component {

  render() {
    if(!this.props.user){
    return (<h2>Select a user ...</h2>);
    }
    return(
      <div>
          <h2>{this.props.user.first}-{this.props.user.first}</h2>
          <h3>{this.props.user.age}</h3>
          <h3>{this.props.user.description}</h3>
      </div>
    );

  }

}

function mapStateToProps(state) {
    return {
        user: state.activeuser
    };
}

export default connect(mapStateToProps)(UserDetails);
