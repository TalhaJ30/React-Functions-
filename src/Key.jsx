import React from "react";

const items = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '+', '-', '*', '/', '=','⌫','AC']

const Key = ({onClickButton}) => {
    return (
        <>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-4  justify-center items-center mt-4 sm:mt-6 flex-wrap px-2 sm:px-4">
                {items.map((item, index) => (
                    <div key={index} className="flex justify-center flex-wrap">
                        <button
                            className={`w-14 h-14 font-normal rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 text-2xl flex-wrap ${
                                item === 'AC' 
                                    ? ' hover:scale-105 hover:rotate-3 border-2 border-red-400 text-red-400 bg-red-50 hover:bg-gradient-to-r hover:from-red-400 hover:to-red-500 hover:text-white focus:ring-red-400 pl-1.5 pr-1.5 h-10 w-20 hover:shadow-lg hover:shadow-red-300' 
                                    : item === '=' || item === '⌫'
                                        ? ' hover:scale-105 hover:rotate-3 border-2 border-green-400 text-green-400 bg-green-50 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-500 hover:text-white focus:ring-green-400 hover:shadow-lg hover:shadow-green-300' 
                                        : item === '+' || item === '-' || item === '*' || item === '/' 
                                            ? 'border-2 border-cyan-400 text-cyan-600 bg-cyan-50 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-500 hover:text-white focus:ring-cyan-400 hover:scale-105 hover:rotate-3 hover:shadow-lg hover:shadow-cyan-300' 
                                            : 'border-2 border-blue-400 text-blue-700 bg-blue-100 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 hover:text-white focus:ring-blue-400 hover:shadow-lg hover:shadow-blue-300'
                            }`} 
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