/**
 * A debounce function that limits the rate at which a function can be executed.
 * It delays the execution of the provided function until after a specified delay
 * has passed since the last time the function was invoked.
 *
 * @param {T} func - The function to debounce. It can accept any arguments and return any type.
 * @param {number} delay - The amount of time (in milliseconds) to wait before calling the function
 *                         after the last invocation.
 *
 * @returns {T} A debounced version of the provided function. It has the same signature as the original function.
 *
 * @example
 * const debouncedLog = debounce((message: string) => console.log(message), 300);
 * debouncedLog("Hello"); // The function will only be executed once, 300ms after the last call.
 */
export default function debounce<T extends (...args: unknown[]) => void>(
    func: T,
    delay: number
): T {
    let timeoutId: ReturnType<typeof setTimeout>;
    return ((...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    }) as T;
}
