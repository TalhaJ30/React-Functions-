import React, { useState } from "react";

const Todoinput = ({ onNewItem }) => {
    const [item, setitem] = useState();
    const [symboll, setsymboll] = useState();
    const itemname = (event) => {
        setitem(event.target.value);
        setaddedbutton(false);
    }
    const symbol = (event) => {
        setsymboll(`${event.target.value}`);
        setaddedbutton(false);
    }

    const addbutton = () => {
        onNewItem(item || '(?)', symboll || '(?)');
        setitem("");
        setsymboll("");
        setaddedbutton(true);
    }

    const [Addedbutton, setaddedbutton] = useState(false);

    return (
        <>
            <div>
                <div className="border-2 border-blue-400  shadow-blue-400 flex justify-center items-center p-4 gap-2 bg-white rounded-2xl shadow-md flex-wrap mb-3.5">
                    <input
                        type="text" value={item}
                        style={{ fontSize:'20px'}}
                        className="input border-2 border-blue-400 rounded-xl px-4 py-2 text-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
                        placeholder="Add new item..." onChange={itemname}
                    />
                    <input
                        type="text" 
                        value={symboll} 
                        style={{  fontSize:'20px'}}
                        className=" border-2 border-blue-400 rounded-xl px-4 py-2 text-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
                        placeholder="Add symbol..."
                        onChange={symbol}
                    />
                    <button
                      style={{  fontSize:'18px'}}
                        className="ml-2 px-6 py-2 bg-blue-500 text-white rounded-xl text-xl font-medium shadow hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onClick={addbutton}>
                        <span>
                            {Addedbutton ? 'Added' : 'Add'}
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Todoinput;