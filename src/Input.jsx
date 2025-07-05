import React, { useState } from "react";

const Input = () => {
    const [text, setText] = useState('Enter Something In The Input');

    const handleChange = (event) => {
        setText(event.target.value || 'Enter Something Again In The Input');
    };
    return (
        <>
            <div>
                <h1 className="text-4xl font-normal text-center text-gray-800 mb-10 mt-3.5">Handling Event Function</h1>
            </div>
            <div className="w-full max-w-md mx-auto bg-white border-2 border-blue-400 rounded-2xl shadow-lg shadow-blue-400 p-6">
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition duration-200"
                    placeholder="Type something..."
                    onChange={handleChange}
                />
            </div>
            <p className={`text-center mt-6   font-normal text-2xl ${text === 'Enter Something In The Input' || text === 'Enter Something Again In The Input' ? 'text-blue-400' : 'text-gray-500'} `}>
                {text}
            </p>
        </>
    );
};

export default Input

