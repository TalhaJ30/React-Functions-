import React from "react";

const items = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '+', '-', '*', '/', '=', 'AC']

const Key = ({onClickButton}) => {
    return (
        <>
            <div className="grid grid-cols-5 gap-4 justify-center items-center mt-6">
                {items.map((item, index) => (
                    <div key={index} className="flex justify-center">
                        <button
                            className={`w-14 h-14 bg-blue-100 text-blue-700 font-normal rounded-xl shadow-md transition-transform duration-200 transform hover:scale-110 hover:bg-blue-400 hover:text-white focus:outline-none focus:ring-2  text-2xl focus:ring-blue-400 ${item === 'AC' ? 'border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400 pl-1.5 pr-1.5 h-10 w-20 ' :  item === '=' ? 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400' : 'border-2 border-blue-400'}`} 
                            onClick={() => onClickButton(item)} >
                            {item}
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Key;