import { useEffect, useState } from "react";

// Helper
import useScreenSize from "../../../../../../utils/hooks/screenSize/useScreenSize";
import { OffsetButtonWrapper_DirectionType } from "../../../../../../components/custom/card/CardRoundedOffsetButtonWrapper/roundedButtonType";

// Type

/**
 * Custom hook to determine the layout direction based on screen size.
 *
 * @returns {OffsetButtonWrapper_DirectionType} The layout direction ("row" or "column").
 */
const useResponsiveDirection = (): OffsetButtonWrapper_DirectionType => {
  const [direction, setDirection] = useState<OffsetButtonWrapper_DirectionType>("column");
  const screenSize = useScreenSize();

  useEffect(() => {
    setDirection(screenSize.width > 500 ? "row" : "column");
  }, [screenSize.width]);

  return direction;
};

export default useResponsiveDirection;
