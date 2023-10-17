'use client';

import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="w-full py-8 sm:px-16 px-6 relative"
  >
    <div className="absolute gradient-01 inset-0 w-[50%]" />
    <div className="flex justify-between gap-8">
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain "
      />
      <h1 className="text-white font-extrabold text-[24px]">DATAVERSE</h1>
      <img
        src="/menu.svg"
        alt="hamburger"
        className="w-[24px] h-[24px] object-contain "
      />
    </div>
  </motion.nav>
);

export default Navbar;
