'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText } from './CustomTexts';
import { fadeIn } from '../utils/motion';

const Footer = () => (
  <footer className={`${styles.yPaddings} relative`}>
    <div className={`${styles.innerWidth} ${styles.xPaddings} mx-auto relative`}>
      <motion.div
        variants={fadeIn('up', 'spring', 0.25, 0.5)}
        initial="hidden"
        whileInView="show"
        className="flex md:flex-row flex-col md:justify-between md:items-center mb-[30px]"
      >
        <TitleText title="Enter the Dataverse" />
        <button
          type="button"
          className="flex gap-5 items-center justify-between md:py-[15px] py-4 md:px-[30px] px-5 bg-[#25618b] md:self-center self-start rounded-[40px]"
        >
          <img
            src="/headset.svg"
            className="w-[20px] md:w-[30px] h-[20px] md:h-[30px] "
          />
          <p className="text-[18px] md:text-[26px] text-white ">Enter Dataverse</p>
        </button>
      </motion.div>
      <hr />
      <motion.div
        variants={fadeIn('down', 'spring', 0.75, 0.75)}
        initial="hidden"
        whileInView="show"
        className="flex md:flex-row flex-col md:items-center md:justify-between gap-10 mt-[50px] "
      >
        <div className="footer-gradient" />
        <h4 className="text-white text-[22px] font-semibold">Dataversus</h4>
        <p className="text-secondary-white sm:text-[18px] text-[15px] md:mx-auto">Copyright @2023 Dataversus. All rights reserved</p>
        <div className="flex items-center justify-space-between gap-6 ">
          <img
            src="/facebook.svg"
            alt="facebook"
            className="w-[20px] h-[20px] "
          />
          <img
            src="/twitter.svg"
            alt="facebook"
            className="w-[20px] h-[20px]"
          />
          <img
            src="/instagram.svg"
            alt="facebook"
          />
          <img
            src="/linkedin.svg"
            alt="facebook"
            className="w-[20px] h-[20px]"
          />
        </div>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
