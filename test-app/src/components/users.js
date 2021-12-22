// import logo from './logo.svg';
// import './App.css';
//? imported react log - 3
import React from "react";
//? imported hooks on  log - 4
import { useState, useEffect } from "react";
//!install esj6 in react.
//*useState  ---> initialization
//? useEffect ---> if it is updated dont look ahead and if not the update
// |
//  -> useEffect(()=>{
//  logic
//
// }, update_state)
// class User extends React.Component {
//     constructor(props) {//!this constructor will be called once super is used
//         super(props);//!super used to call the Constructor above
//         this.state = {//? a state is a set of data that an individual component can hold ...
//             planet: "earth"
//         };
//         console.log("hey this is for constructor")
//     };
//     componentDidMount() {
//         //!we can update our states in this function
//         this.setState({ planet: "mars" });
//         console.log("hey this is from component did mount ")
//     }
//     render() {
//         console.log("hey this is the destructor")
//         return(
//         <div>
//             <h1>{this.props.name}</h1>
//             <h4>{this.props.description}</h4>
//             <h4>{this.state.planet}</h4>
//     </div>)
//     }
// }




//! log-4: because this is very big in the sense that this is hard to code so we have function component way
function User(props) {
    const [planet, setPlanet] = useState("earth");//*this is the hook , [variable, setVariable]=useState(variable_value)
    const pass=()=>{
        console.log("this is the console of the app on the 12-12-21");
    }



    //componentDidMount
    useEffect(() => { 
        console.log("component mounting");
    },[])//*tis is the useEffect hook that we used in the program . basicaly to check if the value is mounted
    
//componentDidUpdate
    useEffect(() => {  
        console.log("planet changed");
    },[planet])
    return (
    <div>
            <h1>{props.name}</h1>
            <h4>{props.description}</h4>
            <button onClick={() => setPlanet("pluto")}>{planet}</button>
    </div>
    );

}
export default User;