import React from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  //element is basic a dive we can scroll to from nav bar
  //<section> 独立主题区块 <span>:通常用于对文本的某一部分进行标记或样式处理，不引入换行，也没有语义含义。
  return (
    <section className="relative pt-60 pb-40">
      <Element name="hero">
        <div className="container flex flex-nowrap items-center gap-[200px]">
          <div className="relative z-2">
            <h4 className="mb-6 h1 text-p4 uppercase">Yufei Liu</h4>

            <p className="max-w-440 mb-14 body-1">
              Hi, I'm Yufei Liu. Take a look at what I’m creating—I put my heart
              into everything I do ❤️.
            </p>

            <LinkScroll to="Work Experience" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Let's get start!</Button>
            </LinkScroll>
          </div>

          <div className="flex-shrink-0">
            <img
              className="w-[450px] h-[450px] object-cover rounded-full"
              src="/images/lily.jpg"
              alt="yufei liu"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Hero;
