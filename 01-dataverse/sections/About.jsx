'use client';

import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import styles from '../styles';
import { TypingText } from '../components/CustomTexts';

const About = () => (
  <section className={`${styles.xPaddings} w-full relative`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
    >
      <TypingText title="| About Dataversus" textStyles="text-center" />
    </motion.div>
  </section>
);

export default About;
