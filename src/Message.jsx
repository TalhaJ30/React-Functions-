import React from "react";

const Message = () => {
    return(
        <>
         <div>
            <div className="max-w-xl mx-auto mt-8 p-6 rounded-3xl shadow-2xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-300 transition-all duration-300">
                <h1 className="text-2xl sm:text-3xl font-medium text-blue-700 mb-2 text-center transition-colors duration-300 hover:text-blue-900">
                    Message
                </h1>
                <p className="text-base sm:text-lg text-blue-600  rounded-xl px-4 py-3 mt-4 text-center transition-all duration-300  hover:text-blue-800">
                    Enter something in the inputs and create your task list
                </p>
            </div>
         </div>
        </>
    )
}

export default Message;