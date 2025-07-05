import React, { useState } from "react";
import Listinput from "./Listinput";
const Todoname = () => {

    const initialItems = [
        {
          item:"1kg sugar",
          task:"Grossary",
        },
    ]
    const [todoItems, setTodoItems] = useState(initialItems);
    const handleNewItem = (itemName, itemtask) => {
        console.log(`symbol(${itemtask}) item:(${itemName}) `);
        const newtodoitem = [
            ...todoItems,
            {item: itemName, task: itemtask}
        ];
        setTodoItems(newtodoitem);
    }

    return (
        <>
            {/* <div className="w-full max-w-2xl mx-auto p-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6 drop-shadow-lg">Todoname</h1>
         </div> */}
         <Listinput onNewItem={handleNewItem}></Listinput>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-3xl shadow-xl shadow-blue-200 mt-4 py-10 px-6">
                <div className="w-full max-w-2xl mx-auto space-y-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-blue-200 py-4 px-6 bg-white/80 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group">
                    {todoItems.map((item, index) => 
                    <div key={index}>
                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 group-hover:bg-blue-200 transition">
                                <span className="text-blue-500 text-xl font-bold">📝</span>
                            </div>
                            <span className="text-lg md:text-xl font-semibold text-gray-900 truncate max-w-xs md:max-w-md">
                               {item.item}
                            </span>
                        </div>
                        <div className="flex items-center gap-4 mt-3 md:mt-0">
                            <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-600 font-semibold rounded-full text-sm shadow-sm">
                                {item.task}
                            </span>
                            <button
                                className="flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-full text-sm font-semibold shadow-md hover:from-red-500 hover:to-red-600 hover:scale-105 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-300"
                                aria-label="Delete todo"
                           onClick={() => console.log("delete button clicked")} >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Delete
                            </button>
                        </div>
                    </div>)}
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default Todoname;    