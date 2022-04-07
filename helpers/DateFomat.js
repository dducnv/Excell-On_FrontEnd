/** @format */

const dateFomat = require('moment');
require('moment/locale/vi');

export default {
    formatDate: (date) => dateFomat(date).fromNow(),
    Dayofmonth: (date) => dateFomat(date).format('D'),
    MonthandYear: (date) => dateFomat(date).format('MMM[, ‘]YYYY'),
    FormatDMY: (date) => dateFomat(date).format('Do MMMM, YYYY'),
    FormatMonth: (date) => dateFomat(date).format('MMM'),
};
