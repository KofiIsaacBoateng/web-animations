'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';

// Components
import { TypingText, TitleText, ExploreCard } from '../components';
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  return (
    <section className={`${styles.paddings} relative`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`relative ${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Explore Worlds" textStyles="text-center" />
        <TitleText title={<>Choose the world you want <br className="md:block hidden" /> to explore</>} textStyles="text-center" />
        <motion.div
          variants={{
            hidden: {},
            show: (i = 1) => ({
              transition: {
                staggerChildren: 0.2,
                staggerDelay: i * 0.05,
              },
            }),
          }}
          className="relative mt-[50px]  flex md:flex-row flex-col min-h-[70vh] gap-5"
        >
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={index}
              world={world}
              index={index}
              active={active}
              handleClick={() => setActive(world.id)}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Explore;
