import React, { useState } from "react";
import { Element } from "react-scroll";
import clsx from "clsx";
// import { plans } from "../constants/index.jsx";
import CountUp from "react-countup";
import Button from "../components/Button.jsx";
import { projects } from "../constants/index.jsx";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  // const isPrimaryPlan = index === 1;

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          {/*create a div that space our elements little better 装title, button并和下面三列分隔开*/}
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16 ">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>
            {/*container that contain all the buttons and change the monthly to annual button*/}
            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] borde-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <button
                className={clsx("pricing-head_btn", monthly && "text-p4")}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>
              {/*monthly和annual的滑动块*/}
              <div
                className={clsx(
                  "g4 rounded-14 before:h-100  pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !monthly && "translate-x-full",
                )}
              />
            </div>
            {/*背景图片*/}
            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>
          {/* pricing section*/}
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {projects.map((plan, index) => (
              // 三列
              <div
                key={plan.id}
                className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
              >
                {/*如果是中间一列，highlight中间一列的上半部分为深蓝色*/}
                {index === 1 && (
                  <div className="g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl" />
                )}
                {/*放图标的div*/}
                <div
                  className={clsx(
                    "absolute left-0 right-0 z-2 flex items-center justify-center",
                    index === 1 ? "-top-6" : "-top-6 xl:-top-11",
                  )}
                >
                  <img
                    src={plan.icon}
                    alt={plan.title}
                    className={clsx(
                      "object-contain drop-shadow-2xl",
                      index === 1 ? "size-[120px]" : "size-[88px]",
                    )}
                  />
                </div>
                {/*扩大下边界, 放logo下面的说明和价钱*/}
                <div
                  className={clsx(
                    "relative flex flex-col items-center",
                    index === 1 ? "pt-24" : "pt-12",
                  )}
                >
                  {/*logo下面的说明*/}
                  <div
                    className={clsx(
                      "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                      index === 1 ? "border-p3 text-p3" : "border-p1 text-p1",
                    )}
                  >
                    {plan.title}
                  </div>
                  {/*价钱 总div*/}
                  <div className="relative z-2 flex items-center justify-center">
                    {/*价钱单个div*/}
                    <div
                      className={clsx(
                        "h-num flex items-start",
                        index === 1 ? "text-p3" : "text-p4",
                      )}
                    >
                      $
                      <CountUp
                        start={plan.priceMonthly}
                        end={monthly ? plan.priceMonthly : plan.priceYearly}
                        duration={0.4}
                        useEasing={false}
                        preserveValue
                      />
                    </div>
                    {/*/mo*/}
                    <div className="small-1 relative top-3 ml-1 uppercase">
                      /mo
                    </div>
                  </div>
                </div>
                {/*caption: Most popular...*/}
                <div
                  className={clsx(
                    "body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-p4",
                    index === 1 && "border-b",
                  )}
                >
                  {plan.title}
                </div>
                {/*checklist*/}
                {/*<ul className="mx-auto space-y-4 xl:px-7">*/}
                {/*  {plan.features.map((feature) => (*/}
                {/*    <li*/}
                {/*      key={feature}*/}
                {/*      className="relative flex items-center gap-5"*/}
                {/*    >*/}
                {/*      <img*/}
                {/*        src={"/images/check.png"}*/}
                {/*        alt="check"*/}
                {/*        className="size-10 object-contain"*/}
                {/*      />*/}
                {/*      <p className="flex-1">{feature}</p>*/}
                {/*    </li>*/}
                {/*  ))}*/}
                {/*</ul>*/}
                {/*最下面的button*/}
                <div className="mt-10 flex w-full justify-center">
                  <Button icon={plan.icon}>Get Started</Button>
                </div>
                {/*button下面的小字*/}
                {index === 1 && (
                  <p className="small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
                    {" "}
                    Limited time offer
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Pricing;
