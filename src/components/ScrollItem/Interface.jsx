import React, { useState, useRef} from "react";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import { Button, FormControl, FormHelperText } from "@mui/joy";
import Send from "@mui/icons-material/Send";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import Snackbar from "@mui/joy/Snackbar";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import SouthWestIcon from "@mui/icons-material/SouthWest";
import { motion } from "framer-motion";
import { duration } from "@mui/material";

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};


const skills = [
    {
        title: "ThreeJS / React Three Fiber",
        level: 80,
    },
    {
        title: "ReactJS",
        level: 95,
    },
    {
        title: "Angular",
        level: 60,
    },
    {
        title: "NodeJS",
        level: 75,
    },
    {
        title: "Android/iOS developement",
        level: 80,
    },
    {
        title: "Python",
        level: 70,
    },
];

const languages = [
    {
        title: "🇻🇳 Vietnamese",
        level: 100,
    },
    {
        title: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 English",
        level: 80,
    },
    {
        title: "🇩🇪 Deutsch",
        level: 70,
    },
];

const Section = (props) => {
    const { children } = props;

    return (
        <motion.section
            className={`
h-screen w-screen p-8 max-w-screen-2xl mx-auto
flex flex-col items-start justify-center
`}
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 0.6,
                },
            }}
        >
            {children}
        </motion.section>
    );
};

const SectionOriginal = (props) => {
    const { children } = props;

    return (
        <motion.section
            className={`
h-screen w-screen p-8 max-w-screen-2xl mx-auto
flex flex-col items-start
`}
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 0.6,
                },
            }}
        >
            {children}
        </motion.section>
    );
};

const AboutSection = () => {
    return (
        <>
            <Section>
                <h1 className="text-4xl md:text-6xl font-[K2D] leading-snug mt-8 md:mt-0 text-gray-200">
                    Hi, We're
                    <br />
                    <span className="px-1 font-[K2D]">HeyDucks Team</span>
                </h1>
                <p className="text-lg text-gray-200 mt-4 font-[K2D]">
                    We specialize in creating 3D visuals,
                    <br />
                    designing user interfaces, and developing web applications.
                </p>
                <button
                    className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
                >
                    Contact us
                </button>
            </Section>
        </>
    );
};

const SkillsSection = () => {
    return (
        <Section>
            <motion.div whileInView={"visible"}>
                <h2 className="text-5xl font-bold text-white">Skills</h2>
                <div className=" mt-8 space-y-4">
                    {skills.map((skill, index) => (
                        <div className="w-64" key={index}>
                            <motion.h3
                                className="text-xl font-bold text-gray-100"
                                initial={{
                                    opacity: 0,
                                }}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            duration: 1,
                                            delay: 1 + index * 0.2,
                                        },
                                    },
                                }}
                            >
                                {skill.title}
                            </motion.h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                <motion.div
                                    className="h-full bg-indigo-500 rounded-full "
                                    style={{ width: `${skill.level}%` }}
                                    initial={{
                                        scaleX: 0,
                                        originX: 0,
                                    }}
                                    variants={{
                                        visible: {
                                            scaleX: 1,
                                            transition: {
                                                duration: 1,
                                                delay: 1 + index * 0.2,
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className="text-5xl font-bold mt-10 text-white">Languages</h2>
                    <div className=" mt-8 space-y-4">
                        {languages.map((lng, index) => (
                            <div className="w-64" key={index}>
                                <motion.h3
                                    className="text-xl font-bold text-gray-100"
                                    initial={{
                                        opacity: 0,
                                    }}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                duration: 1,
                                                delay: 2 + index * 0.2,
                                            },
                                        },
                                    }}
                                >
                                    {lng.title}
                                </motion.h3>
                                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                    <motion.div
                                        className="h-full bg-indigo-500 rounded-full "
                                        style={{ width: `${lng.level}%` }}
                                        initial={{
                                            scaleX: 0,
                                            originX: 0,
                                        }}
                                        variants={{
                                            visible: {
                                                scaleX: 1,
                                                transition: {
                                                    duration: 1,
                                                    delay: 2 + index * 0.2,
                                                },
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Section>
    );
};

const ProjectsSection = () => {
    // const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);
    const [currentProject, setCurrentProject] = React.useState(0);

    const nextProject = () => {
        setCurrentProject((currentProject + 1) % projects.length);
    };

    const previousProject = () => {
        setCurrentProject((currentProject - 1 + projects.length) % projects.length);
    };

    return (
        <Section>
            <div className="flex w-full h-full gap-8 items-end justify-center mb-12">
                <button
                    className="hover:text-indigo-600 transition-colors text-zinc-50"
                    onClick={previousProject}
                >
                    ← Previous
                </button>
                <h2 className="text-5xl font-bold  text-zinc-50">Projects</h2>
                <button
                    className="hover:text-indigo-600 transition-colors  text-zinc-50"
                    onClick={nextProject}
                >
                    Next →
                </button>
            </div>
        </Section>
    );
};

const ContactSection = () => {
    const [isSendButtonLoading, setIsSendButtonLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <>
            <Section>
                <h2 className="text-5xl md:text-6xl font-[K2D] leading-snug mt-8 md:mt-0 text-gray-200">
                    Contact us!
                </h2>
                <div className="mt-8 p-8 rounded-md bg-white w-5/12 max-w-full">
                    <form>
                        <FormControl
                            error={name !== null && name.length === 0 ? true : false}
                        >
                            <label
                                htmlFor="name"
                                className="font-medium text-gray-900 block mb-1"
                            >
                                Name
                            </label>
                            <Input
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                name="name"
                                id="name"
                                startDecorator={<PersonIcon />}
                                placeholder="Enter your name here..."
                                required
                            />
                            {name !== null && name.length === 0 ? (
                                <FormHelperText>
                                    <InfoOutlined />
                                    Your name is required!
                                </FormHelperText>
                            ) : (
                                ""
                            )}
                        </FormControl>

                        <FormControl
                            error={
                                email !== null && (email.length === 0 || !validateEmail(email))
                                    ? true
                                    : false
                            }
                        >
                            <label
                                htmlFor="email"
                                className="font-medium text-gray-900 block mb-1 mt-5"
                            >
                                Email
                            </label>
                            <Input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                startDecorator={<AlternateEmailIcon />}
                                placeholder="Enter your email here..."
                                required
                            />
                            {email !== null && email.length === 0 ? (
                                <FormHelperText>
                                    <InfoOutlined />
                                    Your email is required!
                                </FormHelperText>
                            ) : (
                                ""
                            )}
                            {email !== null && email.length > 0 && !validateEmail(email) ? (
                                <FormHelperText>
                                    <InfoOutlined />
                                    Your email is invalid!
                                </FormHelperText>
                            ) : (
                                ""
                            )}
                        </FormControl>

                        <FormControl>
                            <label
                                htmlFor="phoneNumber"
                                className="font-medium text-gray-900 block mb-1 mt-5"
                            >
                                Phone number
                            </label>
                            <Input
                                type="tel"
                                name="phoneNumber"
                                id="phoneNumber"
                                startDecorator={<PhoneIcon />}
                                placeholder="Enter your phone number here..."
                            />
                        </FormControl>

                        <FormControl
                            error={message !== null && message.length === 0 ? true : false}
                        >
                            <label
                                htmlFor="message"
                                className="font-medium text-gray-900 block mb-1 mt-5"
                            >
                                Message
                            </label>
                            <Textarea
                                name="message"
                                id="message"
                                className="block w-full rounded-md border-0 text-gray-900 shadow-sm"
                                placeholder="Enter your message here..."
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            {message !== null && message.length === 0 ? (
                                <FormHelperText>
                                    <InfoOutlined />
                                    Your message is required!
                                </FormHelperText>
                            ) : (
                                ""
                            )}
                        </FormControl>

                        <FormHelperText style={{ marginTop: "2rem" }}>
                            <PrivacyTipIcon />
                            We'll never share your email with anyone else.
                        </FormHelperText>

                        <Button
                            // type="submit"
                            className="w-full"
                            style={{ marginTop: "2rem" }}
                            loading={isSendButtonLoading}
                            onClick={() => setIsSendButtonLoading(true)}
                            startDecorator={<Send />}
                        >
                            Send
                        </Button>
                    </form>
                </div>
            </Section>
        </>
    );
};

const BlogSection = () => {
    return (
        <SectionOriginal>
            <h2 className="text-5xl font-bold font-[K2D] text-gray-200">My Story</h2>
            <div
                className={`
                    mt-8 ms-4 p-3 rounded-md w-full max-w-full h-screen
                    bg-gradient-to-b from-[#F55F33] to-[#673AE8]
            `}
            >
                <div
                    className={`
                    py-5 px-8 rounded-md bg-white w-full max-w-full h-full
                    flex flex-col 
            `}
                >
                    <div className="flex justify-around w-full">
                        <img
                            className="w-12 h-12 rounded-full mt-1 ms-14"
                            src="/public/Images/avatar.jpg"
                            alt="Rounded avatar"
                        />

                        <div className="w-1/12" />
                        <div className="flex flex-row items-center w-1/2">
                            <h1
                                className={`
                              w-11/12
                              text-2xl font-semibold leading-snug p-3 px-8 rounded-full
                              shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]
                          `}
                            >
                                <span className="bg-gradient-to-r from-[#FF5F5F] via-[#00AB75] to-[#85B6FF] bg-clip-text text-transparent">
                                    What’s on your mind ?
                                </span>
                            </h1>
                            <div className="h-4/6 mx-10 w-0.5 bg-gray-300"></div>
                        </div>

                        <div className="flex flex-row me-14">
                            <div className="flex flex-row items-center me-5">
                                <img
                                    className="mx-4"
                                    src="/public/Images/video.png"
                                    alt="Rounded avatar"
                                />
                                <p className="text-[#FF0000] font-medium text-2xl">Video</p>
                            </div>
                            <div className="flex flex-row items-center me-5">
                                <img
                                    className="mx-4"
                                    src="/public/Images/photo.png"
                                    alt="Rounded avatar"
                                />
                                <p className="text-[#00AB75] font-medium text-2xl">Photo</p>
                            </div>
                            <div className="flex flex-row items-center me-5">
                                <img
                                    className="mx-4"
                                    src="/public/Images/docs.png"
                                    alt="Rounded avatar"
                                />
                                <p className="text-[#4A82E9] font-medium text-2xl">Document</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-6 h-1 bg-gray-300"></div>

                    <div className="flex flex-col overflow-y-auto p-4 h-full">
                        <ul className="ms-10">
                            <li>
                                <Feature />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </SectionOriginal>
    );
};

const Feature = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between">
                <div className="flex flex-row items-center">
                    <h1
                        className={`
                        text-xl font-semibold leading-snug 
                        text-black
                    `}>
                        Feature Article
                    </h1>
                    <div
                        className="w-10 bg-black ms-3 mt-2"
                        style={{ height: 1.5 }}
                    ></div>
                </div>

                <div className="flex flex-row items-center">
                    <img
                        className="w-7 h-7 me-3"
                        src="/public/Icons/Edit.png"
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
                        src="/public/Icons/MoveRightArrow.png"
                        alt="See More"
                    />
                </div>
            </div>
            <Blogs />
        </div>
    );
};

const Blogs = () => {
    const containerRef = useRef()
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const startDragging = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    }

    const stopDragging = () => {
        containerRef.current.classList.remove('cursor-grabbing')
        containerRef.current.classList.remove('cursor-pointer')
        containerRef.current.classList.add('cursor-grab')
        setIsDragging(false);
    }

    const onDrag = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 1;
        containerRef.current.scrollLeft = scrollLeft - walk
        containerRef.current.classList.remove('cursor-grab')
        containerRef.current.classList.remove('cursor-pointer')
        containerRef.current.classList.add('cursor-grabbing')
    }

    return (
        <div className="w-full h-full">
            <div
                ref={containerRef}
                className="p-2 mt-3 w-11/12 flex flex-nowrap overflow-x-scroll no-scrollbar"
                onMouseDown={startDragging}
                onMouseLeave={stopDragging}
                onMouseUp={stopDragging}
                onMouseMove={onDrag}
            >
                <ul className="flex">
                    <li
                        onMouseEnter={() => {
                            containerRef.current.classList.remove('cursor-grab')
                            containerRef.current.classList.remove('cursor-grabbing')
                            containerRef.current.classList.add('cursor-pointer')
                        }}
                        onMouseLeave={() => {
                            containerRef.current.classList.remove('cursor-grabbing')
                            containerRef.current.classList.remove('cursor-pointer')
                            containerRef.current.classList.add('cursor-grab')
                        }}
                        className="w-1/4 flex-shrink-0 max-w-80 mx-1 ">
                        <Article />
                    </li>
                    <li className="w-1/4 flex-shrink-0 max-w-80 mx-1">
                        <Article />
                    </li>
                    <li className="w-1/4 flex-shrink-0 max-w-80 mx-1">
                        <Article />
                    </li>
                    <li className="w-1/4 flex-shrink-0 max-w-80 mx-1">
                        <Article />
                    </li>
                    <li className="w-1/4 flex-shrink-0 max-w-80 mx-1">
                        <Article />
                    </li>
                    <li className="w-1/4 flex-shrink-0 max-w-80 mx-1">
                        <Article />
                    </li>
                </ul>
            </div>
        </div>
    );
};

const Article = () => {
    const handleArticleClick = () => {
        window.location.replace("http://stackoverflow.com");
    }
    return (
        <div
            // onClick={handleArticleClick}

            className="flex flex-col shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-xl px-3 ">
            {/* Title */}
            <div className="w-full mt-3 flex flex-row justify-between">
                <div className="flex flex-row ">
                    <img
                        draggable="false"
                        className="w-10 h-10 rounded-full ms-1"
                        src="/public/Images/avatar.jpg"
                        alt="Rounded avatar"
                    />
                    <h1
                        className={`
                        text-sm font-thin leading-snug ms-4
                `}
                    >
                        <span className="font-semibold text-black text-md">Dasteen</span>
                        <br />
                        Jan 10, 2022
                    </h1>
                </div>
                <img
                    className="w-8 h-2 mt-3 me-2"
                    src="/public/Icons/More.png"
                    alt="More"
                    draggable="false"
                />
            </div>

            {/* Content */}
            <img
                draggable="false"
                className="w-full h-44 mb-5 mt-3 me-4"
                src="/public/Images/BlogArticleImg.png"
                alt="Blog Article Image"
            />
            <h1 className="text-sm w-full items-start mb-2 font-regular leading-snug text-gray-400 overflow-clip">
                <span className="text-2xl font-semibold text-black">
                    Grid CSS make your life easier
                </span>
            </h1>
            <h1 className="text-sm w-full items-start mb-5 font-regular leading-snug text-gray-400 overflow-clip">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                fringiang ashzznajsjs jncnassaidiadadnad... <span className="text-blue-500">Read more</span>
            </h1>
        </div>
    );
};

const ContactSession = () => {
    const [isSendButtonLoading, setIsSendButtonLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <>
            <Section>
                <h2 className="text-5xl md:text-6xl font-[K2D] leading-snug mt-8 md:mt-0 text-gray-200">
                    Contact us!
                </h2>
                <div className="mt-8 p-8 rounded-md bg-white w-5/12 max-w-full">
                    <form>
                        <FormControl
                            error={name !== null && name.length === 0 ? true : false}
                        >
                            <label
                                htmlFor="name"
                                className="font-medium text-gray-900 block mb-1"
                            >
                                Name
                            </label>
                            <Input
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                name="name"
                                id="name"
                                startDecorator={<PersonIcon />}
                                placeholder="Enter your name here..."
                                required
                            />
                            {name !== null && name.length === 0 ? (
                                <FormHelperText>
                                    <InfoOutlined />
                                    Your name is required!
                                </FormHelperText>
                            ) : (
                                ""
                            )}
                        </FormControl>

                        <FormControl
                            error={
                                email !== null && (email.length === 0 || !validateEmail(email))
                                    ? true
                                    : false
                            }
                        >
                            <label
                                htmlFor="email"
                                className="font-medium text-gray-900 block mb-1 mt-5"
                            >
                                Email
                            </label>
                            <Input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                startDecorator={<AlternateEmailIcon />}
                                placeholder="Enter your email here..."
                                required
                            />
                            {email !== null && email.length === 0 ? (
                                <FormHelperText>
                                    <InfoOutlined />
                                    Your email is required!
                                </FormHelperText>
                            ) : (
                                ""
                            )}
                            {email !== null && email.length > 0 && !validateEmail(email) ? (
                                <FormHelperText>
                                    <InfoOutlined />
                                    Your email is invalid!
                                </FormHelperText>
                            ) : (
                                ""
                            )}
                        </FormControl>

                        <FormControl>
                            <label
                                htmlFor="phoneNumber"
                                className="font-medium text-gray-900 block mb-1 mt-5"
                            >
                                Phone number
                            </label>
                            <Input
                                type="tel"
                                name="phoneNumber"
                                id="phoneNumber"
                                startDecorator={<PhoneIcon />}
                                placeholder="Enter your phone number here..."
                            />
                        </FormControl>

                        <FormControl
                            error={message !== null && message.length === 0 ? true : false}
                        >
                            <label
                                htmlFor="message"
                                className="font-medium text-gray-900 block mb-1 mt-5"
                            >
                                Message
                            </label>
                            <Textarea
                                name="message"
                                id="message"
                                className="block w-full rounded-md border-0 text-gray-900 shadow-sm"
                                placeholder="Enter your message here..."
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            {message !== null && message.length === 0 ? (
                                <FormHelperText>
                                    <InfoOutlined />
                                    Your message is required!
                                </FormHelperText>
                            ) : (
                                ""
                            )}
                        </FormControl>

                        <FormHelperText style={{ marginTop: "2rem" }}>
                            <PrivacyTipIcon />
                            We'll never share your email with anyone else.
                        </FormHelperText>

                        <Button
                            // type="submit"
                            className="w-full"
                            style={{ marginTop: "2rem" }}
                            loading={isSendButtonLoading}
                            onClick={() => setIsSendButtonLoading(true)}
                            startDecorator={<Send />}
                        >
                            Send
                        </Button>
                    </form>
                </div>
            </Section>
        </>
    );
};

export const Interface = () => {
    return (
        <>
            <div className="flex flex-col items-center w-screen">
                <Section>
                    <AboutSection />
                </Section>

                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
                <BlogSection />
            </div>
        </>
    );
};
