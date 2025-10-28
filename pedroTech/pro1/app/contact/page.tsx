// "use client";

import ButtonComponent from "./button";

// well this is a server component & it can't interact with react hooks, buttons and more. To make 'em use it must be declared in 'use client' or client component
const Contact = async () => {
  console.log(`Is this a server or a client component? ha`);

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  // console.log(posts); // fetching data, accessing databases etc are possible in server component
  return (
    <>
      <h1>Contact Page</h1>
      {/* <button onClick={() => alert(`LOL!`)}>Click me</button> */}
      <ButtonComponent />
    </>
  );
};

export default Contact;
