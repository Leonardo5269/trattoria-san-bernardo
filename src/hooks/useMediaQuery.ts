import { useCallback, useSyncExternalStore } from 'react';

// Legge la media query senza setState dentro un effetto: React si iscrive
// all'evento 'change' e rilegge il valore quando cambia. Sul server: false.
export default function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const media = window.matchMedia(query);
      media.addEventListener('change', onChange);
      return () => media.removeEventListener('change', onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
