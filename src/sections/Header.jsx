import React, { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";

// fixed mean stick on top z-50: scroll appears on top of other elements py-10: blank between top and bottom
const Header = () => {
  //create a function called setIsOpen with initial variable called isOpen = false
  const [isOpen, setIsOpen] = useState(false);
  //手机版当往下滑时我们希望logo消失
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // typical immediate return functional, it can automatically return whatever is within in it.
  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );

  return (
    //fixed: header stick on the top
    //top-0 left-0: position of the header, 这里是左上角； z-<number> to control the stack order
    //w-full: 充满整个屏幕
    //py-number: control the vertical padding of an element
    //max-lg: 应用该样式仅在屏幕宽度 ≤ lg（1024px）时
    //lg: 当屏幕宽度 ≥ 1024px（即 lg 及更大）时，隐藏该元素。
    //flex-number: 元素会在容器中平均分配空间，可增长、可缩小，基础宽度为 0
    //flex-initial: 元素不会增长，或者说只会增长到初始设定宽度，不会再网上增长了；可以缩小
    //clsx: 是一个非常轻量、常用的 JavaScript 实用函数，用于高效地构建条件化的 class 字符串
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]",
      )}
    >
      <div className="container flex h-14 item-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:opacity-0",
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-mid:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                {/*手机屏幕适配问题 max-lg:block max-lg:px-12*/}

                <li className="nav-li">
                  <NavLink title="Work Experience" />{" "}
                  {/*滚动到一个<Element name="features"> 的区域*/}
                  <div className="dot" />
                  <NavLink title="project" />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer",
                    )}
                  >
                    {/*max-lg: hidden 意思是在mobile device下会hidden这个image*/}
                    <img
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="contact me" />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
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
                //alt 表示 alternative text（替代文本）,当图片加载失败时，alt 会显示在页面上
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {/* crete a trigger that has a callback function that calls setIsOpen*/}
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="close"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};
export default Header;
