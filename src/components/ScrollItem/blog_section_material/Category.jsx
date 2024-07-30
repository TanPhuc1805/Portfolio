import React, { useState, useEffect, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';
import { global_data } from '../BlogSection';

function Category(props) {
    const [data] = useAtom(global_data)
    const [isOpen, setIsOpen] = useState(false);
    const {category, setCategory, titleRef} = props
    const dropdownRef = useRef(null);
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleCategory = (chosen_category) => {
        setCategory(chosen_category);
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div className="flex flex-col ms-2">
            <textarea
                ref={titleRef}
                className="h-6 border-none resize-none focus:outline-none text-md text-gray-800 dark:text-neutral-400 font-semibold"
                placeholder="Title..."
            />
            <div ref={dropdownRef} className="dropdown dropdown-bottom">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn bg-[#D9D9D9] px-2 font-semibold h-7 min-h-[1rem]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img className="w-5 h-5" src="/Icons/Category.svg" alt="Category Icon" />
                    {category}
                    {isOpen ?
                        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5l4-4 4 4" />
                        </svg>
                        : <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                        </svg> 
                    }

                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 mt-1 ms-10 rounded-box z-[1] w-52 p-2 drop-shadow-xl"
                        >
                            {data.map((item, index) => {
                                return <li key={index} onClick={() => {handleCategory(item.collection)}}><p>{item.collection} Article</p></li>
                            })}
                            
                        </motion.ul>

                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default memo(Category);