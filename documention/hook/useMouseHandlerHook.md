# useMouseHandler Hook

## Beschreibung

Der **useMouseHandler** Hook ermöglicht es Ihnen, spezifische Mausereignisse in Ihren Komponenten zu behandeln. Er registriert Event-Listener für die angegebenen Mausereignisse und führt die entsprechenden Handler-Funktionen aus, wenn diese Ereignisse auftreten.

## Parameter

- **mouseHandlers: { [event in AllowedMouseEvents]?: (event: MouseEvent) => void }:**
  Ein Objekt, bei dem die Schlüssel die Namen der Mausereignisse sind (z.B. **"click"**, **"mouseenter"**, **"mouseleave"**), und die Werte die Funktionen sind, die bei diesen Ereignissen ausgeführt werden sollen.

## Verwendung

```typescript
import { useEffect } from "react";

// Definiere zulässige Mausereignisse
type AllowedMouseEvents = "click" | "mouseenter" | "mouseleave";

type MouseHandler = (event: MouseEvent) => void;

type MouseHandlers = {
  [event in AllowedMouseEvents]?: MouseHandler;
};

/**
 * Custom hook to handle mouse events.
 *
 * @param {MouseHandlers} mouseHandlers - An object where keys are mouse event names and values are handler functions.
 * @example
 * useMouseHandler({
 *   click: () => console.log('Mouse clicked'),
 *   mouseenter: () => console.log('Mouse entered'),
 *   mouseleave: () => console.log('Mouse left')
 * });
 * @returns {void}
 *
 * @remarks
 * This hook will add event listeners for mouse events when the component mounts and
 * will remove the event listeners when the component unmounts or if mouseHandlers changes.
 *
 * Make sure that the handler functions are stable or memoized to avoid unnecessary re-renders.
 *
 * Allowed mouse events are restricted to 'click', 'mouseenter', and 'mouseleave'.
 */
const useMouseHandler = (mouseHandlers: MouseHandlers) => {
  useEffect(() => {
    const handleMouseEvent = (event: MouseEvent) => {
      const handler = mouseHandlers[event.type as AllowedMouseEvents];
      if (handler) {
        handler(event);
      }
    };

    (Object.keys(mouseHandlers) as AllowedMouseEvents[]).forEach((eventType) => {
      window.addEventListener(eventType, handleMouseEvent as EventListener);
    });

    return () => {
      (Object.keys(mouseHandlers) as AllowedMouseEvents[]).forEach((eventType) => {
        window.removeEventListener(eventType, handleMouseEvent as EventListener);
      });
    };
  }, [mouseHandlers]);
};

export default useMouseHandler;
```

## Beispiele

### Logging von Mausklicks

```typescript
import React from "react";
import useMouseHandler from "./useMouseHandler";

const ClickLogger = () => {
  useMouseHandler({
    click: () => console.log("Mouse clicked"),
  });

  return (
    <div>
      <p>Click anywhere to log a message.</p>
    </div>
  );
};
```

### Hervorheben eines Elements bei Mouseover

```typescript
import React, { useState } from "react";
import useMouseHandler from "./useMouseHandler";

const HighlightOnHover = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useMouseHandler({
    mouseenter: () => setIsHighlighted(true),
    mouseleave: () => setIsHighlighted(false),
  });

  return (
    <div style={{ backgroundColor: isHighlighted ? "yellow" : "transparent" }}>
      <p>Hover over this text to highlight it.</p>
    </div>
  );
};
```

## Anmerkung

Text und Hook wurde von ChatGTP erstellt!
