import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlogContent from './BlogContent';
import Category from './Category';
import Alternative from './Alternative';
import { useAtom } from 'jotai';
import { global_data } from '../BlogSection';
import { generateUUID } from 'three/src/math/MathUtils.js';

function Modal(props) {
    const { toggleModal, setIsWarningOpen, setErrorField } = props
    const contentRef = useRef()
    const titleRef = useRef()
    const [category, setCategory] = useState("Category")
    const [data, setData] = useAtom(global_data)
    const handlePost = () => {
        const formatDate = (date) => {
            const options = { month: 'short', day: 'numeric', year: 'numeric' };
            return new Intl.DateTimeFormat('en-US', options).format(date);
        };

        const date = new Date();
        const formattedDate = formatDate(date);
        let chosen_collection = data.filter((collection) => collection.collection === category)
        if ((chosen_collection && chosen_collection.length > 0) && (titleRef.current.value && titleRef.current.value.trim() !== "")) {
            chosen_collection[0].blogs = [
                ...chosen_collection[0].blogs,
                { id: generateUUID(),avatar: "/Images/avatar.jpg", name: "Dasteen", date: formattedDate, image: "/Images/BlogArticleImg.png", title: titleRef.current.value, content: contentRef.current.value, }
            ]
            setData(prev => [...prev, chosen_collection])
            toggleModal()
        } else {
            if (!chosen_collection || chosen_collection.length <= 0) setErrorField("Category")
                else setErrorField("Title")
            setIsWarningOpen(true)
        }
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center"
        >
            <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-lg max-w-lg w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="w-full h-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <div className="flex justify-center relative items-center py-3 px-4 border-b dark:border-neutral-700">
                        <h3 className="font-bold text-gray-800 dark:text-white">Craft Your Blog</h3>
                        <button
                            type="button"
                            className="size-8 absolute right-4 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                            aria-label="Close"
                            onClick={toggleModal}
                        >
                            <span className="sr-only">Close</span>
                            <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6L6 18"></path>
                                <path d="M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="p-4 overflow-y-auto no-scrollbar h-5/6">
                        <div className="flex flex-row items-center">
                            <img
                                className="w-12 h-12 rounded-full border-4 border-avatar-border"
                                src="/Images/avatar.jpg"
                                alt="Rounded avatar"
                            />
                            <Category category={category} setCategory={setCategory} titleRef={titleRef} />
                        </div>
                        <BlogContent contentRef={contentRef} />
                        <Alternative />
                    </div>
                    <button
                        onClick={handlePost}
                        className="mx-4 mb-5 px-2 py-1 leading-snug bg-blue-500 text-lg text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                        Post
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Modal;
