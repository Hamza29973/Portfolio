import React, { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => setLoading(false), 1000); // 1 seconde
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null; 

  return (
    <div className="loader">
      <div className="loader__content">
        <div className="loader__circle"></div>
        <div className="loader__circle"></div>
      </div>
    </div>
  );
};

export default Loader;
