'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="px-8 md:px-0 flex md:flex-row flex-col md:justify-center items-center gap-3 md:gap-8"
  >
    <motion.div
      variants={fadeIn('left', 'spring', index * 0.25, 1)}
      className="relative md:w-[25%] w-full min-h-[250px] z-[10] rounded-[24px] overflow-hidden mb-4 md:mb-0"
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover z-[10]"
      />
    </motion.div>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.25, 1)}
      className="flex flex-col gap-2 md:w-[60%] self-start"
    >
      <h3 className="font-bold text-white text-[26px] md:text-[35px]">{title}</h3>
      <p className="text-secondary-white text-[18px] md:text-[25px]">{subtitle}</p>
    </motion.div>
  </motion.div>
);

export default InsightCard;
