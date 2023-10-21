'use client';

import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';

const ExploreCard = ({ index, world, active, handleClick }) => (
  <motion.div
    variants={slideIn('left', 'spring', index * 0.5, 0.75)}
    className={`relative ${active === world.id ? 'lg:flex-[3.5] flex-[12]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center transition-[flex] duration-[0.7s] ease-out-flex min-w-[170px] h-[600px] cursor-pointer`}
    onClick={handleClick}
  >
    <img
      src={world.imgUrl}
      alt="explore world"
      className="absolute w-full h-full object-cover rounded-[25px]"
    />
    { active !== world.id ? (
      <h3 className="font-normal text-white sm:text-[26px] text-[18px] z-0 lg:absolute lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0, 0]">{world.title}</h3>
    ) : (
      <div className="absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] p-6 z-0 rounded-b-[24px]">
        <div className="flex items-center justify-center md:w-[60px] w-[40px] md:h-[60px] h-[40px] glassmorphism mb-[20px] md:rounded-[24px] rounded-[15px]">
          <img
            src="/headset.svg"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p className="font-normal uppercase text-[16px] text-white">Enter the Dataverse</p>
        <h2 className="font-bold text-[24px] md:text-[36px] text-white">{world.title}</h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
