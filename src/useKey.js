import { useEffect } from 'react';

export function useKey(key, action) {
  // Clean up event listener
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener('keydown', callback);

      return () => document.removeEventListener('keydown', callback);
    },
    [key, action]
  );
}
