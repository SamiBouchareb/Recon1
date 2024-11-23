import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useScrollAnimation(once = true) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return { ref, isInView };
}
