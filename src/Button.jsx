import React, { useState } from "react";

const Button = () => {
  // const data = useState('Choose You Favourite Color');
  // const text = data[0];[]
  // const Edittext = data[1];
  const [text , Edittext] =  useState('Choose You Favourite Color');
 const [selected , edit] = useState([])
  const button = (item , index) => {
    Edittext(`You have Selected : ${item || 'This Color is Not Available'}`);
    
      edit([...selected, index]);
    
    // console.log(item);
   
  }
  const items = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange',];

  return (
    <>
      <div className="mt-6 sm:mt-10 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto rounded-2xl">
        <h1 className="text-2xl sm:text-4xl font-normal text-center text-gray-800 mb-4 sm:mb-8 mt-2 sm:mt-3.5">Handle Click Function</h1>
      </div>
      <div className="flex justify-center items-center px-2 sm:px-0">
        <div className="bg-white border-2 border-blue-400 rounded-2xl shadow-lg shadow-blue-400 p-2 sm:p-4 flex justify-center items-center pt-2 sm:pt-4 mt-2 sm:mt-2.5 pl-1 sm:pl-2.5 flex-wrap w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
          <div className="w-full flex flex-wrap    justify-center items-center gap-2 sm:gap-3 md:gap-4">
            {items.map((item, index) => (
              <div key={index} className={`mb-2 flex-wrap `}>
                <div className={`${selected.includes(index) ? 'border-2 border-blue-300 p-1 rounded-2xl' : ''}`}>
                <button
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 flex-wrap rounded-xl font-normal transition-all duration-200 text-sm sm:text-base md:text-lg 
                 ${item === 'Red' ? 'bg-red-500 hover:bg-red-600 text-white' :
                      item === 'Blue' ? 'bg-blue-500 hover:bg-blue-600 text-white' :
                        item === 'Yellow' ? 'bg-yellow-500 hover:bg-yellow-600 text-white' :
                          item === 'Green' ? 'bg-green-500 hover:bg-green-600 text-white ' :
                            item === 'Purple' ? 'bg-purple-500 hover:bg-purple-600 text-white ' :
                              'bg-orange-500 hover:bg-orange-600 text-white'}`}
                  onClick={() => button(item, index)}>
                  {item}
                </button>
                </div>
               
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center items-center" >
            <div className="w-auto flex justify-center items-center">
              <p className={`text-center mt-4 sm:mt-6 mb-2 sm:mb-3.5 font-normal text-lg sm:text-2xl `}>
                <span className="text-xl sm:text-3xl">{text}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Button;