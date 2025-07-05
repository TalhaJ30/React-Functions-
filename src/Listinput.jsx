import React, { useState } from "react";


 
const Listinput = ({onNewItem}) => {

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
   
    const input_1 = (event) => {
       setInput1(event.target.value);
       console.log(event.target.value)
    }
   
    const input_2 = (event) => {
       setInput2(event.target.value);
       console.log(event.target.value);
    }

    const addbutton = () => {
        onNewItem(input1 || '(?)' ,  input2 || '(?)');
        
    }

    return(
        <>
         <div className="w-full max-w-lg mx-auto bg-white border-2 border-blue-300 rounded-3xl shadow-xl shadow-blue-200 p-8  transition-all duration-300 mb-10 mt-18">
            <div className="flex flex-col sm:flex-row gap-4 items-center flex-wrap">
                <input
                    type="text"
                    placeholder="Enter Item Name"
                    className="flex-1 px-5 py-3 border border-blue-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-lg placeholder-blue-300 bg-blue-50 hover:bg-blue-100 hover:shadow-lg hover:border-blue-400" 
                    onChange={input_1} value={input1}
                />
                <input
                    type="text"
                    placeholder="Enter Task"
                    className="flex-1 px-5 py-3 border border-blue-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-lg placeholder-blue-300 bg-blue-50 hover:bg-blue-100 hover:shadow-lg hover:border-blue-400" 
                    onChange={input_2}  value={input2}
                />
            </div>
            <div className="flex justify-center mt-8">
                <button
                    className="relative px-8 py-3 bg-blue-500 text-white rounded-2xl text-lg font-medium shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 flex items-center gap-2"
                    onClick={addbutton}
                >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="font-medium">ADD</span>
                </button>
            </div>
         </div>
        </>
    )
}

export default Listinput;