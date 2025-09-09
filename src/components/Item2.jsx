import { useEffect, useState } from "react";

function Item2() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-100 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold font-sans text-gray-800 ">
          Date & Time{" "}
        </h1>
        <p className="text-gray-600">This is the current date & time:</p>
        <div className="text-2xl font-bold text-blue-700">
          {time.toLocaleDateString()} - {time.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}

export default Item2;
