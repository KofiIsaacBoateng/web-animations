'use client';

import { motion } from 'framer-motion';
import { staggerContainer, planetVariants } from '../utils/motion';
import styles from '../styles';
import { TypingText, TitleText, StartSteps } from '../components';
import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section className={`${styles.yPaddings} relaltive flex flex-col`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.xPaddings} ${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex flex-1 md:flex-row flex-col mt-[25px] items-center justify-center">
        <motion.div
          variants={planetVariants('left')}
          className="flex-1 md:w-[30%] w-full"
        >
          <img
            src="/get-started.png"
            alt="planet 01"
            className="w-9/10 h-9/10 object-contain"
          />
        </motion.div>
        <div className="flex flex-col md:flex-[0.75] flex-1 md:-mt-[40px]">
          <TypingText title="| How Dataversus Work" textStyles="text-left" />
          <TitleText title="Get Started With Just A Few Clicks" textStyles="text-left" />
          <div className="flex flex-col mt-[31px] max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps
                key={index}
                number={index + 1}
                feature={feature}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default GetStarted;
