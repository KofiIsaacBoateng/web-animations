'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.yPaddings} relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} ${styles.xPaddings} relative mx-auto`}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText title={(<>Track friends around you and invite them to play together in the same world</>)} textStyles="text-center" />
      <motion.div
        variants={fadeIn('up', 'tween', 0.5, 0.5)}
        className="flex relative lg:h-[700px] md:[400px] h-[250px]"
      >
        <motion.img
          src="/map.png"
          className="absolute object-cover z-[10]"
        />

        <motion.div
          viewport={{ once: false, amount: 0.25 }}
          className="absolute w-full h-full"
        >
          <motion.div
            variants={fadeIn('up', 'spring', 1, 0.5, 45)}
            className="z-[10] relative border md:w-[80px] w-[30px] md:h-[80px] h-[30px] rounded-t-full rounded-bl-full top-[8%] left-[8%] flex items-center justify-center glassmorphism"
          >
            <img
              src="people-01.png"
              className="absolute w-[70%] h-[70%] object-contain rotate-[-45deg]"
            />
          </motion.div>

          <motion.div
            variants={fadeIn('up', 'spring', 1.25, 0.5, 45)}
            className="z-[10] relative rotate-[45deg] md:w-[80px] w-[30px] md:h-[80px] h-[30px] rounded-t-full rounded-bl-full top-[2%] left-[70%] flex items-center justify-center glassmorphism"
          >
            <img
              src="people-02.png"
              className="absolute w-[70%] h-[70%] object-contain rotate-[-45deg]"
            />
          </motion.div>

          <motion.div
            variants={fadeIn('up', 'spring', 1.5, 0.5, 45)}
            className="z-[10] relative border md:w-[80px] w-[30px] md:h-[80px] h-[30px] rounded-t-full rounded-bl-full top-[22%] left-[43%] flex items-center justify-center glassmorphism"
          >
            <img
              src="people-03.png"
              className="absolute w-[70%] h-[70%] object-contain rotate-[-45deg]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
