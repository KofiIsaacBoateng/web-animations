'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import styles from '../styles';
import { TypingText } from '../components';

const Feedback = () => (
  <section className={`${styles.yPaddings} relative mt-8`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} ${styles.xPaddings} mx-auto flex md:flex-row flex-col md:justify-between min-h-[300px]`}
    >
      <motion.div
        variants={fadeIn('left', 'spring', 0, 0.75)}
        className="md:w-[30%] w-full bg-['rgb(0, 0, 0)'] border p-3 md:p-6 rounded-[24px] pt-[70px] md:pt-[150px]"
      >
        <h3 className="text-white md:text-[35px] text-[25px] mb-[10px]">Samantha</h3>
        <TypingText title="Founder | Dataversus" textStyles="text-left" />
        <p className="text-white md:text[26px] text-[20px] mt-[35px] leading-[45px]">"With the development of today's technology, dataverse is very useful for today's work, or can be called web 3.0. You can use dataversus as anything!"</p>
      </motion.div>

      <motion.div
        variants={fadeIn('right', 'spring', 0, 0.75)}
        className="relative md:w-[65%] w-full md:h-[610px] h-full rounded-[40px] overflow-hidden"
      >
        <img
          src="/planet-09.png"
          alt="planet 09"
          className="w-full h-full absolute object-cover "
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
