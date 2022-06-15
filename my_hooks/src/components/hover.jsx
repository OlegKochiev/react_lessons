import React, { useRef } from "react";
import useHover from "../hooks/useHover";

const Hover = () => {

  const ref = useRef();
  const ref2 = useRef();

  const isHovering = useHover(ref);
  const isHovering2 = useHover(ref2);

  return (
    <div>
      <div ref={ref} style={{ width: 300, height: 300, background: isHovering ? 'red' : 'blue' }}>
      </div>

      <div ref={ref2} style={{ width: 300, height: 300, background: isHovering2 ? 'black' : 'grey' }}>
      </div>
    </div>
  )
}

export default Hover;