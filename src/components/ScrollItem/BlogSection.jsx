import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import Modal from "./blog_section_material/Modal";
import { atom, useAtom } from "jotai";
import WarningModal from "./blog_section_material/WarningMsg";
import {Section} from "./Section"

export let blog_section_arr = [
    {
        collection: "Feature",
        blogs: [
            { id: "1", avatar: "/Images/avatar.jpg", name: "Dasteen", date: "Jan 10, 2022", image: "/Images/BlogArticleImg.png", title: "Grid CSS make your life easier", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringiang ashzznajsjs jncnassaidiadadnad" },
            { id: "2", avatar: "/Images/avatar.jpg", name: "Dasteen", date: "Feb 10, 2023", image: "/Images/BlogArticleImg.png", title: "CSS make your life easier", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringiang ashzznajsjs jncnassaidiadadnad" },
            { id: "3", avatar: "/Images/avatar.jpg", name: "Dasteen", date: "Feb 10, 2023", image: "/Images/BlogArticleImg.png", title: "CSS make your life easier", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringiang ashzznajsjs jncnassaidiadadnad" },

        ]
    },
    {
        collection: "CSS",
        blogs: [
            { id: "1", avatar: "/Images/avatar.jpg", name: "Dasteen", date: "Jan 10, 2022", image: "/Images/BlogArticleImg.png", title: "Grid CSS make your life easier", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringiang ashzznajsjs jncnassaidiadadnad" },
            { id: "2", avatar: "/Images/avatar.jpg", name: "Dasteen", date: "Feb 10, 2023", image: "/Images/BlogArticleImg.png", title: "CSS make your life easier", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringiang ashzznajsjs jncnassaidiadadnad" },
        ]
    }
]

export const global_data = atom(blog_section_arr)
export const BlogSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isWarningOpen, setIsWarningOpen] = useState(false);
    const toggleBlogModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const toggleWarningModal = () => {
        setIsWarningOpen(!isWarningOpen);
    };

    return (
        <Section>
            <h2 className="text-5xl font-bold font-[K2D] text-gray-200">My Story</h2>
            <div
                id="container"
                className={`
                    mt-8 ms-4 p-3 rounded-md w-full max-w-full 
                    bg-gradient-to-b from-[#F55F33] to-[#673AE8] relative
                `}
                style={{ height: '80%' }}
            >
                <div
                    className={`
                        py-5 px-8 rounded-md bg-white w-full max-w-full h-full
                        flex flex-col 
                    `}
                >
                    {/* Header */}
                    <div className="flex justify-around w-full">
                        <img
                            className="w-12 h-12 rounded-full mt-1 ms-14 me-8"
                            src="/Images/avatar.jpg"
                            alt="Rounded avatar"
                        />

                        {/* Hover */}
                        <div
                            className="flex flex-row items-center w-8/12 cursor-pointer pe-10"
                            id="toggle-modal"
                            onClick={toggleBlogModal}
                        >
                            <h1
                                className={`
                                    w-full
                                    text-2xl font-semibold leading-snug 
                                    p-2 px-5 rounded-full
                                    duration-500
                                    hover:ms-5 hover:py-2 hover:px-2 hover:blog_bar
                                    shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]
                                `}
                            >
                                <span className={`
                                    bg-gradient-to-r from-[#FF5F5F] via-[#00AB75] to-[#85B6FF]  hover:bg-clip-text bg-clip-text text-transparent ps-5 
                                `}>
                                    What’s on your mind ?
                                </span>
                            </h1>
                        </div>

                        <div className="h-5/6 mt-1 me-1 w-0.5 bg-gray-300"></div>
                        <div className="flex flex-row justify-around w-2/5">
                            <div className="flex flex-row items-center ">
                                <img
                                    className="me-2"
                                    src="/Images/video.png"
                                    alt="Video"
                                />
                                <p className="text-[#FF0000] font-medium text-2xl">Video</p>
                            </div>
                            <div className="flex flex-row items-center ">
                                <img
                                    className="mx-2"
                                    src="/Images/photo.png"
                                    alt="Photo"
                                />
                                <p className="text-[#00AB75] font-medium text-2xl">Photo</p>
                            </div>
                            <div className="flex flex-row items-center ">
                                <img
                                    className="mx-2"
                                    src="/Images/docs.png"
                                    alt="Document"
                                />
                                <p className="text-[#4A82E9] font-medium text-2xl">Document</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-6 h-1 bg-gray-300"></div>

                    <div className="flex flex-col overflow-y-auto p-4 h-full no-scrollbar">
                        <ul className="ms-10">
                            {
                                blog_section_arr.map((collection, index) => {
                                    return <li key={index} className="mt-3"><Feature feature_name={collection.collection} blog_id={index} /></li>
                                })
                            }
                        </ul>
                    </div>

                    <AnimatePresence>
                        {isModalOpen && <Modal key="blogModal" toggleModal={toggleBlogModal} setIsWarningOpen={setIsWarningOpen} />}

                        {isWarningOpen && <WarningModal key="warningModal" toggleModal={toggleWarningModal} />}
                    </AnimatePresence>
                </div>
            </div>
        </Section>
    );
};

export const Feature = (props) => {
    const { feature_name, blog_id } = props
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between">
                <div className="flex flex-row items-center">
                    <h1
                        className={`
                            text-xl font-semibold leading-snug 
                            text-black
                        `}
                    >
                        {feature_name} Article
                    </h1>
                    <div
                        className="w-10 bg-black ms-3 mt-2"
                        style={{ height: 1.5 }}
                    ></div>
                </div>

                <div className="flex flex-row items-center">
                    <img
                        className="w-7 h-7 me-3"
                        src="/Icons/Edit.png"
                        alt="See More"
                    />
                    <h1
                        className={`
                            text-xl font-semibold leading-snug 
                            text-black
                        `}
                    >
                        See All Articles
                    </h1>
                    <img
                        className="w-4 h-5 mx-3 mt-1"
                        src="/Icons/MoveRightArrow.png"
                        alt="See More"
                    />
                </div>
            </div>
            <Blogs blog_id={blog_id} />
        </div>
    );
};

export const Article = (props) => {
    const { data, index, handleDeleteArticle } = props
    const [isOpen, setIsOpen] = useState(false)
    const handleArticleClick = () => {
        window.location.replace("http://stackoverflow.com");
    };
    const handleOptionClick = () => {
        setIsOpen(!isOpen)
    }
    const dropdownRef = useRef(null);
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div
            // onClick={handleArticleClick}

            className="flex flex-col h-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-xl px-3"
        >
            {/* Title */}
            <div className="w-full mt-3 flex flex-row justify-between relative">
                <div className="flex flex-row ">
                    <img
                        draggable="false"
                        className="w-10 h-10 rounded-full ms-1"
                        src={data.avatar}
                        alt="Rounded avatar"
                    />
                    <h1
                        className={`
                            text-sm font-thin leading-snug ms-4
                    `}
                    >
                        <span className="font-semibold text-black text-md">{data.name}</span>
                        <br />
                        {data.date}
                    </h1>
                </div>

                <div ref={dropdownRef} className="dropdown dropdown-bottom w-8 h-2 mt-3 me-2" onClick={handleOptionClick}>
                    <img
                        role="button"
                        tabIndex={0}
                        className="w-full h-full"
                        src="/Icons/More.png"
                        alt="More"
                        draggable="false"
                    />
                    <AnimatePresence>
                        {isOpen && (
                            <motion.ul
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.1 }}
                                tabIndex={1}
                                className="dropdown-content menu bg-base-100 mt-1 rounded-box z-[1] w-32 p-2 drop-shadow-xl"
                            >
                                <li><p>Edit</p></li>
                                <li onClick={() => handleDeleteArticle(index)}><p>Delete</p></li>
                            </motion.ul>

                        )}
                    </AnimatePresence>
                </div>

            </div>

            {/* Content */}
            <img
                draggable="false"
                className="w-full h-44 mb-5 mt-3 me-4"
                src={data.image}
                alt="Blog Article Image"
            />
            <h1 className="text-sm w-full h-16 items-start  font-regular leading-snug text-gray-400 overflow-clip">
                <span className="text-2xl font-semibold text-black">
                    {data.title}
                </span>
            </h1>
            <h1 className="text-sm w-full items-start mb-5 font-regular leading-snug text-gray-400 overflow-clip">
                {data.content.length > 120 ? data.content.slice(0, 120) : data.content}{" "}
                <span className="text-blue-500">Read more</span>
            </h1>
        </div>
    );
};

export const Blogs = (props) => {
    const { blog_id } = props
    
    const containerRef = useRef();

    const [db, setDb] = useAtom(global_data)
    const blogs_data = db[blog_id].blogs
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleDeleteArticle = (index) => {
        let newblog = db[blog_id].blogs
        newblog.splice(index, 1)
        setDb(prev => [...prev, newblog])
    }
    const startDragging = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const stopDragging = () => {
        containerRef.current.classList.remove("cursor-grabbing");
        containerRef.current.classList.remove("cursor-pointer");
        containerRef.current.classList.add("cursor-grab");
        setIsDragging(false);
    };

    const onDrag = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 1;
        containerRef.current.scrollLeft = scrollLeft - walk;
        containerRef.current.classList.remove("cursor-grab");
        containerRef.current.classList.remove("cursor-pointer");
        containerRef.current.classList.add("cursor-grabbing");
    };

    return (
        <div className="w-full h-full">
            <div
                ref={containerRef}
                className="p-2 mt-3 w-full flex flex-nowrap overflow-x-auto no-scrollbar"
                onMouseDown={startDragging}
                onMouseLeave={stopDragging}
                onMouseUp={stopDragging}
                onMouseMove={onDrag}
            >
                <ul className="flex">
                    <AnimatePresence>
                        {blogs_data.map((blog, index) => {
                            return (
                                <motion.li
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    key={blog.id}
                                    onMouseEnter={() => {
                                        containerRef.current.classList.remove("cursor-grab");
                                        containerRef.current.classList.remove("cursor-grabbing");
                                        containerRef.current.classList.add("cursor-pointer");
                                    }}
                                    onMouseLeave={() => {
                                        containerRef.current.classList.remove("cursor-grabbing");
                                        containerRef.current.classList.remove("cursor-pointer");
                                        containerRef.current.classList.add("cursor-grab");
                                    }}
                                    className="w-1/4 flex-shrink-0 max-w-96 min-w-80 mx-1 "
                                >
                                    <Article data={blog} index={index} handleDeleteArticle={handleDeleteArticle}/>
                                </motion.li>
                            )
                        })}
                    </AnimatePresence>
                    
                </ul>
            </div>
        </div>
    );
};