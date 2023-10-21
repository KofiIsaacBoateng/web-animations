'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
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
      <motion.p
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="text-center text-secondary-white leading-loose font-normal md:text-[36px] text-[18px] sm:mt-[40px] mt-[25px] "
      >
        <span className="text-white font-extrabold">Dataverse</span> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this dataverse world, because this is really the <span className="text-white font-extrabold">madness of the dataverse</span> today, using only <span className="text-white font-extrabold">VR</span>, you can easily explore the dataverse world you want, turn your dreams into reality. <span className="text-white font-extrabold">Explore</span> the madness of the dataverse by scrolling down.
      </motion.p>
      <motion href="#explore">
        <motion.img
          variants={fadeIn('down', 'spring', 2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          src="/arrow-down.svg"
          alt="arrow-down"
          className="mx-auto sm:my-[40px] my-[25px]"
        />
      </motion>
    </motion.div>
  </section>
);

export default About;
