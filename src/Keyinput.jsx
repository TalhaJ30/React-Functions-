import React, { useState } from "react";
import Key from "./Key";
const Keyinput = () => {

    const [text, edit] = useState();

    const keys = (event) => {
        console.log(event);

        if (event === 'AC') {
            edit('');
        } else if (event === '=') {
          const claculatedvalue = eval(text);
          edit(claculatedvalue)
        }
        
        else {
            const newvalue = (text || '') + event;
            edit(newvalue);
            
        }

        // Use the calculator backspace symbol '⌫' to trigger backspace functionality
        if (event === '⌫') {
            // Remove the last character from the current text
            const newvalue = (text || '').slice(0, -1);
            edit(newvalue);
        }
       
      
    }
    return (
        <>
        <div>
            <div className="flex justify-center items-center mt-16 mb-2">
                <h1 className="text-4xl font-normal text-gray-800 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-1 cursor-pointer text-center">
                    UI Design Calculator
                </h1>
            </div>
        <div className="w-full max-w-md mx-auto bg-white border-2 border-blue-400 rounded-2xl shadow-lg shadow-blue-400 p-6 mt-4">
                <div className="flex justify-center items-center">

                    <input
                        type="text"
                        className={`w-full px-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-end transition-all duration-200 hover:shadow-lg hover:border-blue-400 text-2xl`}
                        placeholder="" readOnly
                        value={text}
                    />
                </div>
                <Key onClickButton={(event) => keys(event)}></Key>
            </div>
        </div>
            
        </>
    )
}

export default Keyinput;