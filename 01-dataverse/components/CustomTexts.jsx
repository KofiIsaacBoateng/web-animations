'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2, fadeIn } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.div
    variants={textContainer}
    className="w-full relative text-center"
  >
    {Array.from(title).map((letter, index) => (
      <motion.span
        variants={textVariant2}
        key={index}
        className={`${textStyles} text-secondary-white sm:text-[20px] text-[15px]`}
      >
        {letter}
      </motion.span>
    ))}
  </motion.div>

);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={fadeIn('up', 'tween', 0.2, 0.5)}
    className={`${textStyles} text-white font-extrabold md:text-[45px] text-[25px] md:my-[40px] my-[25px] uppercase`}
  >
    {title}
  </motion.h2>
);
