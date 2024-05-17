# Animation with react-spring:

`npm install react-spring`

In diesem Beispiel verwenden wir React Spring,
um animierte Zustände für die Linienkoordinaten zu erstellen.
Durch Klicken auf die Schaltfläche "Animate" werden die Koordinaten der Linien animiert.

Die <animated.line> -Komponente von React Spring überwacht die Änderungen der Zustände lineTopCoords
und lineBottomCoords und führt die entsprechenden Animationen durch.
Das Styling der Linien wird direkt über das style-Attribut angewendet.

```javascript
import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const StyledSliderSvg = styled.svg`
  width: 200px;
  height: 200px;
  border: 1px solid black;
`;

const SliderComponent = () => {
  const [lineTopCoords, setLineTopCoords] = useSpring(() => ({
    x1: 10,
    y1: 10,
    x2: 40,
    y2: 30,
    config: { duration: 500 },
  }));

  const [lineBottomCoords, setLineBottomCoords] = useSpring(() => ({
    x1: 10,
    y1: 50,
    x2: 40,
    y2: 30,
    config: { duration: 500 },
  }));

  const handleAnimate = () => {
    setLineTopCoords({ x1: 15, y1: 15, x2: 45, y2: 35 });
    setLineBottomCoords({ x1: 15, y1: 55, x2: 45, y2: 35 });
  };

  return (
    <div>
      <StyledSliderSvg viewBox="0 0 50 60">
        <animated.line
          className="lineTop"
          x1={lineTopCoords.x1}
          y1={lineTopCoords.y1}
          x2={lineTopCoords.x2}
          y2={lineTopCoords.y2}
          style={{ stroke: "red", strokeWidth: 5, strokeLinecap: "round" }}
        />
        <animated.line
          className="lineBottom"
          x1={lineBottomCoords.x1}
          y1={lineBottomCoords.y1}
          x2={lineBottomCoords.x2}
          y2={lineBottomCoords.y2}
          style={{ stroke: "blue", strokeWidth: 5, strokeLinecap: "round" }}
        />
      </StyledSliderSvg>
      <button onClick={handleAnimate}>Animate</button>
    </div>
  );
};

export default SliderComponent;
```
