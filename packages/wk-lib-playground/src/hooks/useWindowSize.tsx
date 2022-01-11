import debounce from 'lodash.debounce';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';
import { useRef, useState } from 'react';

const WINDOW_SIZES = {
  XS: (width: number) => width < 640,
  XSSM: (width: number) => width < 768,
  SM: (width: number) => width < 1024,
  MD: (width: number) => width < 1440,
  LG: (width: number) => width >= 1440,
};

function getWindowSize() {
  return new Promise((resolve) => {
    const width = window.innerWidth;
    const sizes = Object.keys(WINDOW_SIZES);
    for (let i = 0; i < sizes.length; i++) {
      const size = sizes[i];
      if (WINDOW_SIZES[size](width)) {
        resolve(size);
      }
    }
  });
}

function useWindowSize() {
  const [windowSize, updateWindowSize] = useState<string>();
  const latestWindowSize = useRef<string>();

  const onWindowResize = debounce(async () => {
    const size = await getWindowSize() as string;
    updateWindowSize(size);
  }, 100, { leading: false, trailing: true });

  useIsomorphicLayoutEffect(() => {
    if (latestWindowSize.current !== windowSize) {
      latestWindowSize.current = windowSize;
    }
  }, [windowSize]);

  useIsomorphicLayoutEffect(() => {
    let isMounted = true;
    getWindowSize().then((size: string) => {
      if (isMounted) updateWindowSize(size)
    })
    window.addEventListener('resize', onWindowResize);
    return () => { 
      isMounted = false
      window.removeEventListener('resize', onWindowResize)
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
