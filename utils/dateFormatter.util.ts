import moment from 'moment';

export default class DateFormatter {
    static formatDate = (date: Date) => moment(date).format('MMM YYYY');
}
