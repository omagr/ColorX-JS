import { useState, useEffect } from "react";

function Grid({ alpha, rgb, type, weight, hexName, index }) {
  const style = { backgroundColor: `rgb(${rgb.join(",")})` };
  const [alert, setAlert] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1000);
    return () => {
      clearTimeout(timeout)
    }
  }, [alert])

  return (
    <div className={`color-item ${type == 'shade' && 'color-item-light' }`} style={style}
    onClick={() => {
      setAlert(true);
      try {
        navigator.clipborad.writeText(hexName);
      } catch (error) {
        console.log(error)
      }
    }}>
        <span>
          <i className="ri-checkbox-blank-circle-line"></i>
          <p className="hex-shade">{weight}%</p>
        </span>
        <h4 className="hex-name">{hexName}</h4>
        <p className={`alert ${alert && 'show-alert'}`}>copied!</p>
    </div>
  );
}

export default Grid;
