import React, { useState } from "react";
import Todoinput from "./Todoinput";
const Todo = () => {

    // Use a single state to track selected indices
    const [selectedIndices, setSelectedIndices] = useState([]);
    const Alert = (item, index) => {
        if (!selectedIndices.includes(index)) {
            setSelectedIndices([...selectedIndices, index]);
            alert(`${item.item} Selected`);
        }
    }

    // Initial items
    const initialItems = [
        {
            item: "First item",
            symbol: ":",
        },
        {
            item: "Second item",
            symbol: ":",
        },
        {
            item: "Third item",
            symbol: ":",
        },
        {
            item: "Fourth item",
            symbol: ":",
        },
    ];

    const [todoItems, setTodoItems] = useState(initialItems);

    // Fix handleNewItem to use correct keys
    const handleNewItem = (itemName, itemSymbol) => {
        console.log(`symbol(${itemSymbol}) item:(${itemName}) `);
        const newtodoitem = [
            ...todoItems,
            { item: itemName, symbol: itemSymbol }
        ];
        setTodoItems(newtodoitem);
    }

    return (
        <div className=" w-full h-auto grid justify-center items-center  pt-10">
            <div className=" w-[100%] flex justify-center items-center">
                <h1 className="text-4xl font-normal text-gray-800 mb-8 text-center">Copy List by using Handle Click Function </h1>
            </div>
            <div>
                <Todoinput onNewItem={handleNewItem}></Todoinput>
            </div>
            <div className=" bg-white border-2 border-blue-400 rounded-2xl shadow-lg shadow-blue-400 mt-1  py-8 px-4">
                <div className="max-w-2xl mx-auto ">

                    <div className="space-y-4">
                        {todoItems.map((item, index) => (
                            <div key={index} className={`bg-white rounded-2xl shadow-[0_0_7px_gray] p-4 flex items-center justify-between w-[100%] ${selectedIndices.includes(index) ? 'shadow-[0_0_8px_blue]' : 'shadow-[0_0_8px_gray]'}`}>
                                <p className={`text-2xl  ${selectedIndices.includes(index) ? 'text-blue-500' : 'text-gray-500'}`}><span className={`text-gray-500`}>{index}</span> <span className="text-gray-500">{item.symbol}</span> {item.item}</p>
                                <button
                                    className={`px-4 py-2 rounded-2xl transition-colors duration-200 flex items-center space-x-2 ml-2.5
                                        ${selectedIndices.includes(index)
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-blue-500 hover:bg-blue-600 text-white'}
                                    `}
                                    disabled={selectedIndices.includes(index)}
                                    onClick={() => Alert(item, index)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                    </svg>
                                    <span>
                                        {selectedIndices.includes(index) ? 'Selected' : 'Select'}
                                    </span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;