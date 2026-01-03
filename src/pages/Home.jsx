import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="bg-green-200/30 flex flex-col items-center gap-30 h-[90%]">
        <div className="flex flex-col items-center pt-30 gap-5">
          <h1 className="text-8xl font-bold min-[300px]:max-sm:text-5xl min-[300px]:max-sm:text-center">
            Your Digital <sapn className="text-green-600">Bazar.</sapn>
          </h1>
          <p className="text-gray-400 text-3xl text-center w-[600px] min-[300px]:max-sm:w-[300px]">
            From local finds to global trends, discover everything in one place.
          </p>
        </div>
        <button
          className="bg-green-700/30 h-[50px] w-[250px] text-lg text-white font-semibold hover:bg-transparent hover:border-1 hover border-green-700/30 hover:text-black hover:scale-105 transition-all "
          onClick={() => navigate("/products")}
        >
          Go to Products page
        </button>
      </div>
    </div>
  );
};

export default Home;
