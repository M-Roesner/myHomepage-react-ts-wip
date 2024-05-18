import { useEffect, useRef } from "react";

// Define allowed wheel actions
type AllowedWheelActions = "WheelLeft" | "WheelRight" | "WheelUp" | "WheelDown";

// Define type for wheel handlers
type WheelHandler = (event: WheelEvent) => void;

type WheelHandlers = {
  [action in AllowedWheelActions]?: WheelHandler;
};

/**
 * Custom hook to handle wheel events with debounce.
 *
 * @param {WheelHandlers} wheelHandlers - An object where keys are wheel action names and values are handler functions.
 * @param {number} delay - The delay in milliseconds to prevent the permanent scroll event handlers.
 * @example
 * useWheelHandler({
 *   WheelLeft: (event) => console.log('Wheel moved left'),
 *   WheelRight: (event) => console.log('Wheel moved right'),
 *   WheelUp: (event) => console.log('Wheel moved up'),
 *   WheelDown: (event) => console.log('Wheel moved down'),
 * }, 300);
 *
 * @returns {void}
 *
 * @remarks
 * This hook will add event listeners for wheel events when the component mounts and
 * will remove the event listeners when the component unmounts or if wheelHandlers changes.
 *
 * Make sure that the handler functions are stable or memoized to avoid unnecessary re-renders.
 */
const useWheelHandler = (wheelHandlers: WheelHandlers, delay: number = 100): void => {
  // Using ReturnType to infer the correct type for the timeout reference
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleWheelEvent = (event: WheelEvent) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        if (event.deltaX > 0 && wheelHandlers.WheelRight) {
          wheelHandlers.WheelRight(event);
        } else if (event.deltaX < 0 && wheelHandlers.WheelLeft) {
          wheelHandlers.WheelLeft(event);
        } else if (event.deltaY > 0 && wheelHandlers.WheelDown) {
          wheelHandlers.WheelDown(event);
        } else if (event.deltaY < 0 && wheelHandlers.WheelUp) {
          wheelHandlers.WheelUp(event);
        }
      }, delay);
    };

    window.addEventListener("wheel", handleWheelEvent);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener("wheel", handleWheelEvent);
    };
  }, [wheelHandlers, delay]);
};

export default useWheelHandler;
