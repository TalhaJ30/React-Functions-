import React, { use, useState } from "react";
import Message from "./Message.jsx";

const Totallist = () => {

  

    const [iteminput, setiteminput] = useState("");
    const [taskinput, settaskinput] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);

    const iteminputfun = (event) => {
        setiteminput(event.target.value);
        setButtonClicked(false)
        console.log(event.target.value);
    }
    const taskinputfun = (event) => {
        settaskinput(event.target.value);
        setButtonClicked(false)
        console.log(event.target.value)
    }


    const [listitem, setlistitem] = useState([]);
    const addbutton = () => {
        handleNewItem(iteminput || '(?)', taskinput || '(?)');
        setiteminput("");
        settaskinput("");
        setButtonClicked(true);
        alert('Item added successfully!');
    }

    const handleNewItem = (iteminput, taskinput) => {
        console.log(`${iteminput}, ${taskinput}`);
        const newlist = [
            ...listitem,
            { item: iteminput, task: taskinput }
        ];
        setlistitem(newlist);

    }

    const [deletefun, setdeletefun] = useState([]);

    const deletebtn = (index) => {
        console.log('delete');
        setdeletefun([...deletefun, index]);
        console.log(index);

    }


    // LEARN THIS FUNCTION

    // const addbutton = () => {
    //     handleNewItem(iteminput || '(?)' ,  taskinput || '(?)');
    //     setiteminput("");
    //     settaskinput("");
    // }

    //  AND LEARN THIS FUNCTION

    // const [todoItems, setTodoItems] = useState(initialItems);
    // const handleNewItem = (iteminput, taskinput) => {
    //     console.log(`symbol(${taskinput}) item:(${iteminput}) `);
    //     const newtodoitem = [
    //         ...todoItems,
    //         {item: iteminput, task: taskinput}
    //     ];
    //     setTodoItems(newtodoitem);
    // }

    return (
        <>

            <div>
                <div className="flex justify-center items-center mt-18 text-center">
                    <h1 className="text-4xl font-normal text-gray-800 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-1 cursor-pointer text-center">
                        Todo Application
                    </h1>
                </div>
                <div className="w-full max-w-lg mx-auto bg-white border-2 border-blue-300 rounded-3xl shadow-xl shadow-blue-200 p-8  transition-all duration-300 mb-6 mt-6">
                    <div className="flex flex-col gap-3 sm:gap-4 items-stretch sm:items-center w-full">
                        <input
                            type="text"
                            placeholder="Enter Item Name"
                            className="w-full px-3 sm:px-5 py-2.5 sm:py-3 border border-blue-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-base sm:text-lg placeholder-blue-300 bg-blue-50 hover:bg-blue-100 hover:shadow-lg hover:border-blue-400"
                            onChange={(event) => iteminputfun(event)}
                            value={iteminput}
                        />
                        <input
                            type="text"
                            placeholder="Enter Task"
                            className="w-full px-3 sm:px-5 py-2.5 sm:py-3 border border-blue-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-base sm:text-lg placeholder-blue-300 bg-blue-50 hover:bg-blue-100 hover:shadow-lg hover:border-blue-400"
                            onChange={(event) => taskinputfun(event)}
                            value={taskinput}
                        />
                    </div>
                    <div className="flex justify-center mt-8">
                        <button
                            className={`relative px-8 py-3 bg-blue-500 text-white rounded-2xl text-lg font-medium shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 flex items-center gap-2 `}
                            onClick={() => addbutton()}
                        >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                            <span>{buttonClicked ? "Added" : "Add"}</span>
                        </button>
                    </div>
                </div>
                <div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-3xl shadow-2xl shadow-blue-200 mt-4 py-10 px-2 sm:px-4 md:px-8 transition-all duration-300">
                        <div className="w-full max-w-2xl mx-auto space-y-6">
                            {listitem.map((item, index) => (
                                <div key={index} className={`group ${deletefun.includes(index) ? 'hidden' : ''}`}>
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-blue-200 py-4 px-4 sm:px-6 bg-white/90 rounded-4xl shadow-md 
                                        hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.025] transition-all duration-300 ease-in-out
                                        hover:bg-gradient-to-r 
                                        ">
                                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                                            <div className="flex items-center gap-3 w-full sm:w-auto">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 group-hover:bg-blue-500 transition-all duration-300 shadow-md group-hover:scale-110">
                                                    <span className="text-blue-500 text-2xl font-bold ml-1.5 ">📝</span>
                                                </div>
                                                <span className="text-lg sm:text-xl font-semibold text-gray-900 truncate max-w-xs sm:max-w-md group-hover:text-blue-700 transition-colors duration-300">
                                                    {item.item}
                                                </span>
                                            </div>
                                            <span className="inline-flex items-center px-4 py-1.5 bg-blue-100 text-blue-600 font-semibold rounded-full text-sm shadow-sm group-hover:bg-blue-200 group-hover:text-blue-800 transition-all duration-300">
                                                {item.task}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2  sm:mt-0">
                                            <button
                                                className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-full text-sm font-semibold shadow-md
                                                    hover:from-pink-500 hover:to-red-600 hover:scale-110 hover:shadow-lg
                                                    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300
                                                    active:scale-95"
                                                aria-label="Delete todo"
                                                onClick={() => deletebtn(index)}

                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>

                                            </button>
                                        </div>
                                    </div>

                                </div>
                            ))}



                        </div>
                        {listitem.length === 0 && <Message></Message>}

                    </div>
                </div>
            </div>

        </>
    )
}

export default Totallist;