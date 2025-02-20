import React from "react";

//Components
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const FAQuest = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div >
      <div>
        <section className="text-gray-700">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-4">
                Frequently Asked Question
              </h1>
              <p className="text-lg leading-relaxed  mx-auto">
                The most common questions about how our business works and what
                can do for you.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold text-lg bg-gray-200 rounded-md py-2 px-4">
                    How do I sell my Farm Equipment?
                  </summary>

                  <span className="text-justify">
                    You can sell your Farm Equipment by listing it on
                    FarmBuddy website or FarmBuddy mobile applications.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    How can I list my equipment?
                  </summary>

                  <span className="text-justify">
                    Listing on FarmBuddy is quite easy. Just click on the
                    button LIST YOUR EQUIPMENT on the top right corner of the
                    website. Choose equipment type and location and click “List
                    Now”. Fill in the details of the equipment and click on the
                    submit button once you complete it.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How do I sell my used tractor?
                  </summary>

                  <span className="text-justify">
                    You can sell your new or used tractor by listing it on
                    FarmBuddy website or mobile applications. Don’t forget
                    to mark it as new or used while creating equipment listing.
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Is there an option to buy equipment?
                  </summary>

                  <span className="px-4 py-2 text-justify">
                    Yes there is an option to buy equipment as well. Some
                    providers are open to selling equipment on FarmBuddy
                    with a fair deal.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    I don't have a website, Can I still sell on FarmBuddy?
                  </summary>

                  <span className="px-4 py-2 text-justify">
                    You don't need a website to start selling on FarmBuddy.
                    Once you complete registration, you will have access to your
                    account where you can manage your equipment listing.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How can I communicate with you?
                  </summary>

                  <span className="px-4 py-2 text-justify">
                    Go to our{" "}
                    <Link to="/contact">
                      <p className="text-blue-500 inline underline">
                        Contact Us
                      </p>
                    </Link>{" "}
                    page
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div >
    </div>
  );
};

export default FAQuest;
