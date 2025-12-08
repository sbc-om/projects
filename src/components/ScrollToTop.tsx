import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    // Only scroll if pathname actually changed (not just state updates)
    if (prevPathnameRef.current !== pathname) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
      prevPathnameRef.current = pathname;
    }
  }, [pathname]);

  return null;
}
