import { useEffect, useState } from "react";

// Type
type useRuntimerProps = {
  duration: number;
  isOpen: boolean;
  onTimeout: () => void;
};

/**
 * Custom hook that manages a timer which triggers a callback after a specified duration.
 *
 * @param {useRuntimerProps} props - The props for the timer.
 * @param {number} props.duration - The duration of the timer in milliseconds.
 * @param {boolean} props.isOpen - Indicates whether the timer should be running.
 * @param {() => void} props.onTimeout - The callback to call when the timer completes.
 * @returns {boolean} - Indicates whether the timer is currently running.
 */
export const useCloseTimer = ({ duration, isOpen, onTimeout }: useRuntimerProps): boolean => {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (isOpen) {
      setIsRunning(true);
      timeoutId = setTimeout(() => {
        onTimeout();
        setIsRunning(false);
      }, duration);
    } else {
      setIsRunning(false);
      if (timeoutId) clearTimeout(timeoutId);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isOpen, duration, onTimeout]);

  return isRunning;
};
