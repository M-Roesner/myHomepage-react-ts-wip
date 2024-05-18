import { useEffect } from "react";

// Define permissible mouse events
type AllowedMouseEvents =
  | "mousedown"
  //   | "mouseenter"
  //   | "mouseleave"
  //   | "mousemove"
  //   | "mouseout"
  | "mouseover"
  | "mouseup";

type MouseHandler = (event: MouseEvent) => void;

type MouseHandlers = {
  [event in AllowedMouseEvents]?: MouseHandler;
};

/**
 * Custom hook to handle mouse events.
 *
 * @param {Object.<AllowedMouseEvents, MouseHandler>} mouseHandlers - An object where keys are mouse event names from AllowedMouseEvents and values are handler functions.
 * @example
 * useMouseHandler({
 *   mouseover: () => console.log('Mouse over'),
 * });
 *
 * @returns {void}
 *
 * @remarks
 * This hook will add event listeners for mouse events when the component mounts and
 * will remove the event listeners when the component unmounts or if mouseHandlers changes.
 *
 * Make sure that the handler functions are stable or memoized to avoid unnecessary re-renders.
 */
const useMouseHandler = (mouseHandlers: MouseHandlers): void => {
  useEffect(() => {
    // Function to handle mouse events
    const handleMouseEvent = (event: MouseEvent) => {
      const handler = mouseHandlers[event.type as AllowedMouseEvents];
      // Call the corresponding handler if it exists
      if (handler) {
        handler(event);
      }
    };

    // Add event listeners for mouse events
    (Object.keys(mouseHandlers) as AllowedMouseEvents[]).forEach((eventType) => {
      window.addEventListener(eventType, handleMouseEvent as EventListener);
    });

    // Cleanup function to remove event listeners
    return () => {
      (Object.keys(mouseHandlers) as AllowedMouseEvents[]).forEach((eventType) => {
        window.removeEventListener(eventType, handleMouseEvent as EventListener);
      });
    };
  }, [mouseHandlers]); // Dependency array ensures effect runs again if mouseHandlers changes
};

export default useMouseHandler;
