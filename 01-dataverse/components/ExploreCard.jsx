'use client';

import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';

const ExploreCard = ({ index, world, active, handleClick }) => (
  <motion.div
    variants={slideIn('left', 'spring', index * 0.5, 0.75)}
    className={`relative ${active === world.id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center transition-[flex] duration-[0.7s] ease-out-flex min-w-[170px] h-[600px] cursor-pointer`}
    onClick={handleClick}
  >
    <img
      src={world.imgUrl}
      alt="explore world"
      className="absolute w-full h-full object-cover rounded-[25px]"
    />
  </motion.div>
);

export default ExploreCard;
