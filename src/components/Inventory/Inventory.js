import React from 'react';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

import InventoryItem from './InventoryItem';

function Inventory({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {data.map(item => (
        <InventoryItem key={item.id} data={item} />
      ))}
    </motion.div>
  );
}

const mapStateToProps = state => {
  return { data: state.user.inventory };
};

export default connect(mapStateToProps)(Inventory);
