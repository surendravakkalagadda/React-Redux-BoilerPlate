import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-Details';

const App = () => {
  return (<div>
    <h2>user name list</h2>
      <UserList />
    <hr/>
    <h2>user Details</h2>
    <UserDetails />
  </div>
)}

export default App;
