import Button from "../components/Button.jsx";
import React from "react";
import { Element } from "react-scroll";

const Connect = () => {
  //const halfLength = Math.floor(testimonials.length / 2);
  return (
    <section className="relative z-2 py-24 d:py-28 lg:py-40">
      <Element
        name="contact me"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container block lg:flex lg:items-stretch lg:justify-between gap-10">
          {/*左侧部分*/}
          <div className="testimonials_head-res relative z-2 mr-20 flex-300 flex-col">
            <p className="caption mb-55 max-md:mb-2.5">Let's connect</p>
            <h3 className="h3 max-md:h5 text-p4">Contact me</h3>

            <div className="relative flex flex-col gap-4 mt-5">
              <div className="contact-detail">
                <img src="/images/socials/Email.svg" alt="mail" />
                <p className="text-lg max-md:text-base mb-5">
                  tjlyf.lily@gmail.com
                </p>
              </div>

              <div className="contact-detail">
                <img src="/images/socials/Telephone.svg" alt="telephone" />
                <p className="text-lg max-md:text-base mb-5">+1 604-499-7558</p>
              </div>

              <div className="contact-detail">
                <img src="/images/socials/Github.svg" alt="telephone" />
                <a href="https://github.com/lilydsci100">
                  https://github.com/lilydsci100
                </a>
              </div>
            </div>
          </div>

          {/*右侧部分*/}

          <form
            className="flex-none w-[350px] flex flex-col justify-between p-6 rounded-lg shadow-md "
            action="mailto:tjlyf.lily@gmail.com"
          >
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-lg">
                Your Name
              </label>
              <input
                type="text"
                id="base-input"
                className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-lg">
                Your email
              </label>
              <input
                type="text"
                className="block w-full p-2.5 text-black border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-lg">
                Leave a message
              </label>
              <input
                type="text"
                className="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex justify-center mt-6">
              <Button className="w-40">Connect</Button>
            </div>
          </form>
        </div>
      </Element>
    </section>
  );
};
export default Connect;
