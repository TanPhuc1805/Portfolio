import React from 'react';
import { FaImage, FaSmile, FaMapMarkerAlt, FaEllipsisH } from 'react-icons/fa'; 

function Alternative(props) {
    return (
        <div 
            className="flex justify-between items-center mt-5 border-2 border-[#BDBDBD] border-opacity-75 rounded-md py-3 px-4 shadow-sm bg-white space-x-3">
            <p className="text-gray-800 font-semibold text-xl ms-3">Add to your blog</p>
            <div className='flex justify-between items-center w-2/5'>
                <button className="focus:outline-none">
                    <FaImage className="text-green-500 w-8 h-8" />
                </button>
                <button className="focus:outline-none">
                    <FaSmile className="text-yellow-500 w-8 h-8" />
                </button>
                <button className="focus:outline-none">
                    <FaMapMarkerAlt className="text-red-500 w-8 h-8" />
                </button>
                <button className="focus:outline-none">
                    <FaEllipsisH className="text-gray-500 w-8 h-8" />
                </button>
            </div>
            
        </div>
    );
}

export default Alternative;