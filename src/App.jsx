import React from "react";
import Input from './Input.jsx';
import Button from './Button.jsx';
import Todo from "./Todo.jsx";
import Keyinput from "./Keyinput.jsx";
import Totallist from "./Totallist.jsx"


function App() {
  return (
    <>
      <div className="ml-2 mr-2">
        <Input></Input>
      </div>
      <div className="ml-2 mr-2">
        <Button></Button>
      </div>
      <div className="ml-2 mr-2">
        <Todo></Todo>
      </div>
        <div className="ml-2 mr-2">
        <Keyinput></Keyinput>
        </div>  
        <div className="ml-2 mr-2">
        <Totallist></Totallist>
        </div>
                      
    </>
  )
}

export default App;
