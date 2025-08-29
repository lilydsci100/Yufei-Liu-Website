import { Element } from "react-scroll";
import { details, experience } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const Work = () => {
  return (
    <section>
      <Element name="Work Experience">
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden feature-after md:g7">
            {experience.map(({ id, icon, caption, title, text, button }) => (
              // inside container to position the content（每一个feature block）
              <div
                key={id}
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50"
              >
                {/*block中图标竖线部分*/}
                <div className="w-full flex justify-start items-start">
                  {/*包含竖线+圆标*/}
                  <div className="-ml-3 mb-12 flex flex-col items-center justify-center">
                    {/*竖线div*/}
                    <div className="w-0.5 h-16 bg-s3" />
                    <img
                      src={icon}
                      className="size-28 object-contain"
                      alt={title}
                    />
                  </div>
                </div>

                <p className="caption mb-5 ">{caption}</p>
                <h2 className="max-w-400 mb-7 h3 text-p4">{title}</h2>
                <p className="mb-11 body-1 whitespace-pre-line">{text}</p>
              </div>
            ))}

            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl">
              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14 ">
                  {/*装img的div*/}
                  <div>
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20"
                    />
                  </div>
                  <h3 className="relative z-2 max-w-36 text-center mx-auto my-0 base-small uppercase translate-x-[-9px]">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Work;
