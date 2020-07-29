import React from 'react';
import { motion } from 'framer-motion';

function Sell() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div>Sell</div>{' '}
    </motion.div>
  );
}

export default Sell;
