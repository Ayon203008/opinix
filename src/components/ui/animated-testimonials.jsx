"use client";

import { IconArrowLeft, IconArrowRight, IconStar } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div
      className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12"
      style={{ background: "linear-gradient(135deg, #f0f4f8, #d9e2ec)", borderRadius: "20px" }}
    >
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        
        {/* Image section */}
        <div>
          <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-2xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text section */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {/* Reviewer Name */}
            <h3 className="text-2xl font-bold text-black">
              {testimonials[active].name}
            </h3>

            {/* Reviewer Designation */}
            <p className="text-sm text-gray-700">
              {testimonials[active].designation}
            </p>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, idx) => (
                <IconStar
                  key={idx}
                  size={18}
                  stroke={1.5}
                  className="text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial Quote */}
            <motion.p className="mt-6 text-lg text-black">
              <span className="text-blue-500 text-2xl mr-2">“</span>
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
              <span className="text-blue-500 text-2xl">”</span>
            </motion.p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 shadow hover:bg-gray-200"
            >
              <IconArrowLeft
                className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400"
              />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 shadow hover:bg-gray-200"
            >
              <IconArrowRight
                className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
