import { useEffect } from "react";

// Define permitted buttons
type AllowedKeys = "Escape" | "ArrowRight" | "ArrowLeft";

// Handler type for keyboard input
type KeyHandler = (event: KeyboardEvent) => void;

type KeyHandlers = {
  [key in AllowedKeys]?: KeyHandler;
};

/**
 * Custom hook to handle keyboard events.
 *
 * @param {Object.<AllowedKeys, Function>} keyHandlers - An object where keys are key names from AllowedKeys and values are handler functions.
 * @param {boolean} listenOnKeyUp - Whether to listen to the keyup event instead of keydown.
 * @example
 * useKeyboardHandler({
 *   Escape: () => console.log('Escape pressed'),
 *   ArrowRight: () => console.log('Right arrow pressed')
 * }, true);
 *
 * @returns {void}
 *
 * @remarks
 * This hook will add an event listener for keyboard events when the component mounts and
 * will remove the event listener when the component unmounts or if keyHandlers changes.
 *
 * Make sure that the handler functions are stable or memoized to avoid unnecessary re-renders.
 */
const useKeyboardHandler = (keyHandlers: KeyHandlers, listenOnKeyUp: boolean = false): void => {
  useEffect(() => {
    // Function to handle keyboard events
    const handleKeyEvent = (event: KeyboardEvent) => {
      const handler = keyHandlers[event.key as AllowedKeys];
      // Call the corresponding handler if it exists
      if (handler) {
        handler(event);
      }
    };

    const eventType = listenOnKeyUp ? "keyup" : "keydown";

    // Add event listener for keyboard events
    window.addEventListener(eventType, handleKeyEvent);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener(eventType, handleKeyEvent);
    };
  }, [keyHandlers, listenOnKeyUp]); // Dependency array ensures effect runs again if keyHandlers changes
};

export default useKeyboardHandler;
