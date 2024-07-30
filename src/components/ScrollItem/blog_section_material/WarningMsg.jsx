import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';

const WarningModal = (props) => {
    const {toggleModal} = props

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0  flex justify-center items-center"
        >
            <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-lg max-w-sm w-full absolute"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="w-full h-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <div className="flex justify-center relative items-center py-3 px-4 border-b dark:border-neutral-700">
                        <h3 className="font-bold text-gray-800 dark:text-white">Warning</h3>
                        <button
                            type="button"
                            className="size-8 absolute right-4 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                            aria-label="Close"
                            onClick={toggleModal}
                        >
                            <span className="sr-only">Close</span>
                            <svg
                                className="shrink-0 w-4 h-4"
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
                    <div className="p-4 flex flex-col items-center justify-center">
                        <FaExclamationTriangle className="text-yellow-500 w-12 h-12 mb-4" />
                        <p className="text-lg text-gray-800 dark:text-white font-semibold">
                            Don't forget to choose your category!
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default WarningModal;
