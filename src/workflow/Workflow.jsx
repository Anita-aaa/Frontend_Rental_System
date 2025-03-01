import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Workflow = () => {
  return (
    <div className=" mb-10 p-12 bg-[#219653] ">
      <div>
        <Navbar />
      </div >
      <h1 className="text-4xl font-bold uppercase mb-4 text-center">
        How KRISHI SADHAN works?
      </h1>
      <p className="text-md font-medium uppercase mb-4 text-white text-center">
        Take a Look at out Platform Demo
      </p>
      <div className="flex justify-around mediaQuery items-center text-white">
        <div className="grow">
          <ul className="list-decimal ml-[90px] list-inside">
            <li className="text-2xl mr-4 my-4">Sign-up to the platform.</li>
            <li className="text-2xl mr-4 my-3">
              Post your ad for the off-season.
            </li>
            <li className="text-2xl mr-4 my-4">Provide equipment details.</li>
            <li className="text-2xl mr-4 my-3">
              Explore and filter lists of equipment.
            </li>
            <li className="text-2xl mr-4 my-4">
              Check an available time slot.
            </li>
            <li className="text-2xl mr-4 my-3">
              Chat with the owner and make a booking..
            </li>
            <li className="text-2xl mr-4 my-4">Stay updated by SMS.</li>
          </ul>
        </div>
      </div>
      <div>
        <Footer />
      </div >
    </div>
  );
};

export default Workflow;
