// metricContext.js

import React, { createContext, useContext, useState } from 'react';

const MetricContext = createContext();

export const MetricProvider = ({ children }) => {
  const [selectedMetric, setSelectedMetric] = useState('standard'); // Default metric

  const updateMetric = (metric) => {
    setSelectedMetric(metric);
  };

  return (
    <MetricContext.Provider value={{ selectedMetric, updateMetric }}>
      {children}
    </MetricContext.Provider>
  );
};

export const useMetric = () => useContext(MetricContext);
