import React from "react";
import Hello from "../components/hello";

const Home = () => {
  console.log(`Component?`);
  return (
    <>
      <main>
        <div className="text-5xl underline">Home</div>
        <Hello />
      </main>
    </>
  );
};

export default Home;
