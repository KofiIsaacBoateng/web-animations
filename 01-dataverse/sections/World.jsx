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
      className={`${styles.innerWidth} relative mx-auto`}
    >
      <TypingText title="| The World" textStyles="text-center" />
      <TitleText title="Connect with people around the world" textStyles="text-center" />
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
          <motion.img
            variants={fadeIn('up', 'spring', 1, 0.5)}
            src="people-01.png"
            className="z-[10] absolute md:w-[80px] w-[30px] top-[8%] left-[8%]"
          />

          <motion.img
            variants={fadeIn('up', 'spring', 1.25, 0.5)}
            src="people-02.png"
            className="z-[10] absolute md:w-[80px] w-[30px] top-[2%] left-[70%]"
          />

          <motion.img
            variants={fadeIn('up', 'spring', 1.5, 0.5)}
            src="people-03.png"
            className="z-[10] absolute md:w-[80px] w-[30px] top-[40%] left-[45%]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
