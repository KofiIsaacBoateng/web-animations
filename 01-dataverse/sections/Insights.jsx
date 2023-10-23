'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { InsightCard, TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';
import { insights } from '../constants';

const Insights = () => (
  <section className={`${styles.yPaddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto relative`}
    >
      <TypingText title="| Insights" textStyles="text-center" />
      <TitleText title={(<>Insights about dataversus</>)} textStyles="text-center" />
      <div className="flex flex-col justify-center items-center gap-14 md:mt-[100px] mt-[50px]">
        {insights.map((insight, index) => (
          <InsightCard
            key={index}
            {...insight}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
