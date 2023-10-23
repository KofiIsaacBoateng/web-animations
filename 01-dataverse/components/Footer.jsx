'use client';

import styles from '../styles';
import { TitleText } from './CustomTexts';

const Footer = () => (
  <footer className={`${styles.yPaddings} relative`}>
    <div className={`${styles.innerWidth} ${styles.xPaddings} mx-auto relative`}>
      <div className="flex md:flex-row flex-col md:justify-between md:items-center mb-[30px]">
        <TitleText title="Enter the Dataverse" />
        <button
          type="button"
          className="flex gap-5 items-center justify-between md:py-[15px] py-5 md:px-[30px] px-8 bg-[firebrick] self-start md:rounded-[24px] rounded-[15px]"
        >
          <img
            src="/headset.svg"
            className="w-[30px] h-[30px] "
          />
          <p className="text-[18px] md:text-[26px] text-white ">Enter Dataverse</p>
        </button>
      </div>
      <hr />
    </div>
  </footer>
);

export default Footer;
