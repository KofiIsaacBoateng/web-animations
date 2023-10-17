'use client';

import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={` ${styles.xPaddings} w-full py-8 relative`}
  >
    <div className="absolute gradient-01 inset-0 w-[50%]" />
    <div className="flex justify-between gap-8">
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain "
      />
      <h1 className="text-white font-extrabold text-[24px] uppercase">dataversus</h1>
      <img
        src="/menu.svg"
        alt="hamburger"
        className="w-[24px] h-[24px] object-contain "
      />
    </div>
  </motion.nav>
);

export default Navbar;
