import './App.css';
import { Component } from "react";
// import Clicker from "./components/clicker/clicker";
// import Framework from "./components/framework/framework";
import State from "./components/framework/framework";

class App extends Component{

    render(){
        return (
            <div className="App">
                {/*<Clicker />*/}
                {/*<Framework />*/}
                <State />
            </div>
        );
    }
}

export default App;
