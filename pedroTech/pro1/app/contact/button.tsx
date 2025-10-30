"use client";
const ButtonComponent = () => {
  return (
    <>
      <button
        className="cursor-pointer bg-red-400 p-2 mt-2 rounded-md hover:bg-red-500 active:bg-red-600"
        onClick={() => alert(`Hello!`)}
      >
        Click Me!
      </button>
    </>
  );
};

export default ButtonComponent;
