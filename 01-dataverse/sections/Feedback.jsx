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
      className={`${styles.innerWidth} ${styles.xPaddings} mx-auto flex lg:flex-row flex-col lg:justify-center gap-8`}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0, 0.75)}
        className="lg:w-[30%] w-full border p-3 lg:p-6 rounded-[24px] pt-[70px] lg:pt-[150px]"
      >
        <h3 className="text-white lg:text-[35px] text-[25px] mb-[10px]">Samantha</h3>
        <TypingText title="Founder | Dataversus" textStyles="text-left" />
        <p className="text-white lg:text[26px] text-[20px] mt-[35px] leading-[45px]">"With the development of today's technology, dataverse is very useful for today's work, or can be called web 3.0. You can use dataversus as anything!"</p>
      </motion.div>

      <motion.div
        variants={fadeIn('right', 'tween', 0, 0.75)}
        className="relative lg:w-[65%] w-full lg:h-[610px] min-h-[400px] border-10 rounded-[40px]"
      >
        <img
          src="/planet-09.png"
          alt="planet 09"
          className="w-full h-full absolute object-cover rounded-[40px]"
        />
        <motion.div
          variants={zoomIn(0.5, 1)}
          className="lg:block hidden absolute top-[5%] -left-[10%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[150px] h-[150px]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
