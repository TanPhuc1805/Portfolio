import React, { useState } from "react";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import { Button, FormControl, FormHelperText } from "@mui/joy";
import Send from "@mui/icons-material/Send";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import Snackbar from '@mui/joy/Snackbar';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import SouthWestIcon from '@mui/icons-material/SouthWest';

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
    <section className="h-screen w-screen p-8 max-w-screen-2xl flex flex-col items-start justify-center">
      {children}
    </section>
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
          className={`bg-blue-500 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
        >
          Contact us
        </button>
      </Section>
    </>
  );
};

const SkillSection = () => {
  return (
    <Section>
      <div>
        <h2 className="text-5xl font-bold font-[K2D] text-gray-200">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => {
            return (
              <div className="w-64" key={index}>
                <h3 className="text-xl font-bold text-gray-200 font-[K2D]">
                  {skill.title}
                </h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="text-5xl font-bold font-[K2D] mt-20 text-gray-200">
          Languages
        </h2>
        <div className="mt-8 space-y-4">
          {languages.map((skill, index) => {
            return (
              <div className="w-64" key={index}>
                <h3 className="text-xl font-bold text-gray-200 font-[K2D]">
                  {skill.title}
                </h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
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
      <div>
        <AboutSection />
        <SkillSection />
        <Section>
          <h1>Projects</h1>
        </Section>
        <ContactSession />
      </div>
    </>
  );
};
