"use client"; // every component is a server component. But to make it client component it should be written like this

const About = () => {
  console.log(`Is this a server or a client component?`);
  return (
    <>
      <h1>About Page</h1>
    </>
  );
};

export default About;
