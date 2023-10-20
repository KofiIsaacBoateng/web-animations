'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.div
    variants={textContainer}
    className="w-full relative text-center"
  >
    {Array.from(title).map((letter, index) => (
      <motion.span
        variants={textVariant2}
        key={index}
        className={`${textStyles} text-white font-normal sm:text-[25px] text-[18px]`}
      >
        {letter}
      </motion.span>
    ))}
  </motion.div>

);

export const TitleText = () => (
  <h2>Title Text</h2>
);
