import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[28%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="p-4 bg-white px-12 text-xl text-black rounded-lg hover:opacity-80">
          ▶ Play
        </button>
        <button className=" mx-2 p-4 bg-gray-400 px-12 text-xl bg-opacity-55 text-white rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
