import React from "react";

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
  return [
    <Section>
      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <form>
          <label for="name" className="font-medium text-gray-900 block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm"
            placeholder="Enter your name here..."
          />

          <label
            for="email"
            className="font-medium text-gray-900 block mb-1 mt-5"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm"
            placeholder="Enter your email here..."
          />

          <label
            for="phoneNumber"
            className="font-medium text-gray-900 block mb-1 mt-5"
          >
            Phone number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm"
            placeholder="Enter your phone number here..."
          />

          <label
            for="message"
            className="font-medium text-gray-900 block mb-1 mt-5"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm"
            placeholder="Enter your message here..."
          />

          <input type="submit" value="Send" className="w-full bg-blue-500 text-white py-2 px-8 rounded-lg font-bold text-lg mt-5"/>
        </form>
      </div>
    </Section>,
  ];
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
