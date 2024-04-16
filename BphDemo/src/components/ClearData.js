// src/components/ClearData.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCache } from '../redux/cacheSlice';

function ClearData({ pageName }) {
  const dispatch = useDispatch();

  const handleClearCache = () => {
    dispatch(clearCache(pageName));
  };

  return (
    <div>
      <h2>Clear Data from {pageName}:</h2>
      <button onClick={handleClearCache}>Clear Data</button>
    </div>
  );
}

export default ClearData;
