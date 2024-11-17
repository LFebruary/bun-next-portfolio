import { useState, useEffect } from 'react';

/**
 * A custom hook that listens for changes in media query matches.
 * It returns a boolean indicating whether the given media query matches the current viewport.
 *
 * @param {string} query - The media query string to evaluate.
 *
 * @returns {boolean} - A boolean that indicates if the media query matches the current viewport.
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 768px)');
 * console.log(isMobile); // true if the viewport width is 768px or less, false otherwise.
 */
export const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        const updateMatch = (e: MediaQueryListEvent | MediaQueryList) => {
            setMatches(e.matches);
        };

        // Initial check
        updateMatch(media);

        // Add listener
        if (typeof media.addEventListener === 'function') {
            media.addEventListener('change', updateMatch);
            return () => media.removeEventListener('change', updateMatch);
        } else {
            // Older browsers
            media.addListener(updateMatch);
            return () => media.removeListener(updateMatch);
        }
    }, [query]);

    return matches;
};

export default useMediaQuery;
