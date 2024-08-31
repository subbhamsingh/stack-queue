// src/components/DataStructureContainer.js
import React from 'react';
import Stack from './Stack';
import Queue from './Queue';

const DataStructureContainer = () => {
  return (
    <div className="data-structure-container">
      <Stack />
      <Queue />
    </div>
  );
};

export default DataStructureContainer;
