import React, { useState, useEffect } from 'react';
import { GaugeComponent } from 'react-gauge-component';
import './gauges.scss';

const Gauges = () => {
  const [pH, setPH] = useState(6.5);
  const [temperature, setTemperature] = useState(23);
  const [humidity, setHumidity] = useState(50);

  // Simulate pH change between 6.5 and 7.3
  useEffect(() => {
    const interval = setInterval(() => {
      setPH((prev) => (prev >= 7.3 ? 6.5 : prev + 0.01));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Simulate temperature change between 23 and 24.5
  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature((prev) => (prev >= 24.5 ? 23 : prev + 0.01));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Simulate humidity change between 45% and 55%
  useEffect(() => {
    const interval = setInterval(() => {
      setHumidity((prev) => (prev >= 55 ? 45 : prev + 0.1));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Convert pH to percentage (relative to 1-14 range)
  const getPHPercentage = (value) => ((value - 1) / (14 - 1)) * 100;

  // Convert temperature to percentage (relative to 23-24.5 range)
  const getTemperaturePercentage = (value) => ((value - 23) / (24.5 - 23)) * 100;

  return (
    <div className="gauges-container">
      <div className="gauge-item">
        <h3>pH Level</h3>
        <GaugeComponent
          value={getPHPercentage(pH)}  // Convert pH value to percentage
          min={1}
          max={14}
          color="limegreen"
          backgroundColor="#ddd"
          label="pH"
        />
        <p>{pH.toFixed(2)}</p>
      </div>

      <div className="gauge-item">
        <h3>Temperature (°C)</h3>
        <GaugeComponent
          value={getTemperaturePercentage(temperature)}  // Convert temperature to percentage
          min={0}
          max={100}
          color="red"
          backgroundColor="#ddd"
          label="Temperature"
        />
        <p>{temperature.toFixed(2)} °C</p>
      </div>

      <div className="gauge-item">
        <h3>Humidity (%)</h3>
        <GaugeComponent
          value={humidity}  // Humidity is already in percentage
          min={0}
          max={100}
          color="blue"
          backgroundColor="#ddd"
          label="Humidity"
        />
        <p>{humidity.toFixed(2)} %</p>
      </div>
    </div>
  );
};

export default Gauges;
