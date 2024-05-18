# useKeyboardHandler Hook

## Beschreibung

Der **useKeyboardHandler** Hook ermöglicht es Ihnen, spezifische Tastaturereignisse in Ihren Komponenten zu behandeln. Er registriert Event-Listener für die angegebenen Tastenereignisse und führt die entsprechenden Handler-Funktionen aus, wenn diese Ereignisse auftreten.

## Parameter

- **keyHandlers: { [key: string]: (event: KeyboardEvent) => void }:**
  Ein Objekt, bei dem die Schlüssel die Namen der Tasten sind (z.B. **"Escape"**, **"ArrowRight"**, **"ArrowLeft"**), und die Werte die Funktionen sind, die bei Drücken dieser Tasten ausgeführt werden sollen.

## Verwendung

```typescript
import { useEffect } from "react";

type KeyHandlers = {
  [key: string]: (event: KeyboardEvent) => void;
};

/**
 * Custom hook to handle keyboard events.
 *
 * @param {KeyHandlers} keyHandlers - An object where keys are key names and values are handler functions.
 * @example
 * useKeyboardHandler({
 *   Escape: () => console.log('Escape key pressed'),
 *   ArrowRight: () => console.log('Right arrow key pressed'),
 *   ArrowLeft: () => console.log('Left arrow key pressed')
 * });
 * @returns {void}
 *
 * @remarks
 * This hook will add event listeners for keyboard events when the component mounts and
 * will remove the event listeners when the component unmounts or if keyHandlers changes.
 *
 * Make sure that the handler functions are stable or memoized to avoid unnecessary re-renders.
 */
const useKeyboardHandler = (keyHandlers: KeyHandlers) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const handler = keyHandlers[event.key];
      if (handler) {
        handler(event);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyHandlers]);
};

export default useKeyboardHandler;
```

## Beispiele

### Schließen einer Modal bei Drücken der "Escape"-Taste

```typescript
import React from "react";
import useKeyboardHandler from "./useKeyboardHandler";

const Modal = ({ onClose }: { onClose: () => void }) => {
  useKeyboardHandler({
    Escape: onClose,
  });

  return (
    <div>
      <p>This is a modal. Press "Escape" to close.</p>
    </div>
  );
};
```

### Navigieren durch eine Bildergalerie

```typescript
import React, { useState } from "react";
import useKeyboardHandler from "./useKeyboardHandler";

const ImageGallery = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useKeyboardHandler({
    ArrowRight: () => setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1)),
    ArrowLeft: () => setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0)),
  });

  return (
    <div>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <p>
        Image {currentIndex + 1} of {images.length}
      </p>
    </div>
  );
};
```

## Anmerkung

Text und Hook wurde von ChatGTP erstellt!
