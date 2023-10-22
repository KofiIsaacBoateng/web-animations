'use client';

import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import styles from '../styles';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 lg:pr-16 pl-6 pr-0`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex flex-col mx-auto z-10 relative`}
    >
      <motion.h1
        variants={textVariant(1)}
        className={styles.heroHeading}
      >DATAVERSE
      </motion.h1>
      <motion.div
        variants={textVariant(1.1)}
        className="flex flex-row justify-center items-center"
      >
        <h1 className={styles.heroHeading}>Ma</h1>
        <div className={styles.heroDText} />
        <h1 className={styles.heroHeading}>Ness</h1>
      </motion.div>
    </motion.div>

    <motion.div
      variants={slideIn('right', 'tween', 0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className="2xl:max-w-[1280px] w-full md:-mt-[20px] -mt-[12px] mx-auto rounded-tl-[140px] z-[0]"
    >
      <div className="absolute w-full sm:h-[500px] h-[300px] hero-gradient -top-[30px] rounded-tl-[140px] z-[0]" />
      <img
        src="/cover.png"
        alt="hero cover"
        className="relative w-full sm:h-[500px] h-[300px] object-cover rounded-tl-[140px] z-10"
      />
      <a href="#explore">
        <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[30px] relative z-10 ">
          <img
            src="/stamp.png"
            alt="stamp"
            className="sm:w-[160px] w-[100px] sm:h-[160px] h-[100px] object-contain "
          />
        </div>
      </a>
    </motion.div>
  </section>
);

export default Hero;
