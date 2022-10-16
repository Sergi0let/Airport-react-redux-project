import moment from 'moment';

export const getTime = (time) => moment(time).format('hh:mm');
