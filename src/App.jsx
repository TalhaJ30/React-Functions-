import React from "react";
import Input from './Input.jsx';
import Button from './Button.jsx';
import Todo from "./Todo.jsx";
import Keyinput from "./Keyinput.jsx";
import Totallist from "./Totallist.jsx";



function App() {
  return (
    <>
      <div className="ml-4 mr-4">
        <Input></Input>
      </div>
      <div className="ml-4 mr-4">
        <Button></Button>
      </div>
      <div className="ml-4 mr-4">
        <Todo></Todo>
      </div>
      <div className="ml-4 mr-4">
        <Keyinput></Keyinput>
      </div>
      <div className="ml-4 mr-4 pb-6">
        <Totallist></Totallist>
      </div>
     

    </>
  )
}

export default App;
