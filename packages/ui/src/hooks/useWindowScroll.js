import { useEffect } from 'react';

function useWindowScroll(trigger) {
  useEffect(() => {
    window.addEventListener('scroll', trigger);
    return () => {
      window.removeEventListener('scroll', trigger);
    };
  }, [trigger]);
}

export default useWindowScroll;
