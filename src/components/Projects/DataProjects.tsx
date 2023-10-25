import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { dataProjectss } from "../../data/dummyData";

const DataProjects: React.FC = () => {
  const ref = useRef(null);

  const isScroll = useInView(ref, { once: false });
  const aboutContentControls = useAnimation();

  const dataProjectsVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
        duration: 0.5,
        delay: 0.25,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  const item = {
    hidden: { x: 12, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      duration: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    if (isScroll) {
      aboutContentControls.start("visible");
    }
  }, [isScroll]);

  return (
    <motion.div
      ref={ref}
      animate={aboutContentControls}
      initial="hidden"
      variants={dataProjectsVariants}
      className="grid md:grid-cols-2 md:gap-x-14  md:gap-y-8 gap-y-6 md:mt-14 mt-8"
    >
      {dataProjectss.map(
        ({ id, img_url, logo, type, tech_stack_logo, navigate_url }) => (
          <a
            href={navigate_url}
            key={id}
            aria-disabled={"true"}
            className="flex justify-center flex-col p-4 gap-3 bg-white drop-shadow-sm hover:drop-shadow-md hover:scale-[1.010] cursor-pointer md:rounded-xl rounded-md transition-all duration-150 ease-in"
          >
            <motion.img
              ref={ref}
              variants={item}
              src={img_url}
              alt="projects aryadian"
            />
            <div className="flex flex-col gap-2.5 items-start">
              <img
                src={logo}
                alt="logo project aryadian"
                className={`object-cover ${
                  id === 0 ? "md:w-48 w-28" : "md:w-24 w-2/12"
                }`}
              />
              <div className="flex items-center gap-1">
                <p className="md:text-base text-xs">{type}</p>
                <div className="flex md:gap-4 gap-2 items-center">
                  {tech_stack_logo.map((data, index) => (
                    <img
                      key={index}
                      src={data}
                      alt="tech stack logo aryadian"
                      className="md:w-[26px] w-5 object-contain aspect-[4/3]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </a>
        )
      )}
    </motion.div>
  );
};

export default DataProjects;
