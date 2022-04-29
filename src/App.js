import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);
 
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(data => setUsers(data));
   console.log(users);
  

 
  return (
    <div className="App">
      
      <table>
  <tr>
    <th>Company</th>
    <th>Phone</th>
    <th>City</th>
  </tr>
  {
    users.map(user => {
      return(
        <tr>
        <td>{user.company.name}</td>
        <td>{user.phone}</td>
        <td>{user.address.city}</td>
      </tr>
      )
    })


  }

  
</table>
     
      
    </div>
  );
}

export default App;
