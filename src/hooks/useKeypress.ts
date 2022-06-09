import { useEffect } from "react";

export const useKeypress = (key: string, action: () => void) => {
  useEffect(() => {
    const onKeyup = (e: { key: string }) => {
      if (e.key === key) action();
    };
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, [action, key]);
};
