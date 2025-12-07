import { useEffect } from 'react';
import { OverlayScrollbars } from 'overlayscrollbars';
import 'overlayscrollbars/overlayscrollbars.css';

export function useOverlayScrollbars() {
  useEffect(() => {
    const osInstance = OverlayScrollbars(document.body, {
      scrollbars: {
        theme: 'os-theme-dark',
        visibility: 'auto',
        autoHide: 'leave',
        autoHideDelay: 800,
      },
      overflow: {
        x: 'hidden',
      },
    });

    return () => {
      osInstance.destroy();
    };
  }, []);
}
