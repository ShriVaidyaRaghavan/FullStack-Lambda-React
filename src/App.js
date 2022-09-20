import React, { Component } from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// class App extends Component {

//   constructor(props) {
//     super(props);
    
//     this.state = {
//       id:'',
//       Name:''
//     };
//   }

//   componentDidMount() {
//     axios
//       .get('https://9uysf0rwyg.execute-api.us-east-1.amazonaws.com/dev/customers/')
//       .then((response) => {
//         this.setState({
//             id:response.data.id,
//             Name:response.data.Name
//         })
//         console.log(response.data.Items);
//     })
//       .catch((error) => {
//         console.log(error);
//       });
//     }
//   render() {
//     const {id} = this.state;
//     const {Name} = this.state;
//     return (
//       <div className="App">
//       <p>Id:{id}</p>
//       <p>Name:{Name}</p>
//       </div>
//     );
//   }
// }

function App(){
  const [input, setInput] = useState("")
  const [customers, setCustomers] = useState([])

  const myAPI = 'https://9uysf0rwyg.execute-api.us-east-1.amazonaws.com/dev/customers'
  
  // const getCustomer = (e) => 
  function getCustomer( ) {
    let customerId = input;
    axios
      .get(myAPI + "/" + customerId)
      .then((response) => {
        console.log(myAPI + "/" + customerId);
        console.log(response.data.Items);
        let newCustomers = [...customers]
         newCustomers.push(response.data)
         setCustomers(newCustomers)
    })
      .catch((error) => {
        console.log(error);
      });
    }

    function handleChange(event){
      setInput(event.target.value);
    }
  
  return (
    
    <div className="App">
     <h1>Customer Id</h1>
     <div>
          <input placeholder="customer id" type="text" value={input} onChange={handleChange}/>      
      </div>
      <br/>
     <button onClick={getCustomer}>Get Customers</button> 
     {<p>{JSON.stringify(customers)}</p>} 
    </div>
  );
}
export default App;
