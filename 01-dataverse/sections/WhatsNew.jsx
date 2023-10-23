'use client';

import { motion } from 'framer-motion';
import { staggerContainer, planetVariants } from '../utils/motion';
import styles from '../styles';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section className={`${styles.yPaddings} flex flex-col relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.xPaddings} ${styles.innerWidth} flex mx-auto md:flex-row flex-col`}
    >
      <div className="md:flex-[0.75] flex-1">
        <TypingText title="| What's New ?" textStyles="text-left" />
        <TitleText title="What's new about Dataversus ?" textStyles="text-left" />
        <div className="flex sm:flex-row flex-col mt-[31px]">
          {newFeatures.map((feature, index) => (
            <NewFeatures
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
      <motion.div
        variants={planetVariants('right')}
        className="flex-1 w-full md:w-[30%]"
      >
        <img
          src="/whats-new.png"
          alt="what's new"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
