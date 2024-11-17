import moment from 'moment';

/**
 * A utility class for formatting dates using the Moment.js library.
 * Provides static methods for converting `Date` objects to formatted strings.
 */
export default class DateFormatter {
    /**
     * Formats a given date into a human-readable string of the form 'MMM YYYY'.
     * Example: 'Nov 2024'
     *
     * @param {Date} date - The Date object to format.
     *
     * @returns {string} A string representing the formatted date in 'MMM YYYY' format.
     *
     * @example
     * const formattedDate = DateFormatter.formatDate(new Date());
     * console.log(formattedDate); // Output: 'Nov 2024' (for example)
     */
    static formatDate = (date: Date): string => moment(date).format('MMM YYYY');
}
