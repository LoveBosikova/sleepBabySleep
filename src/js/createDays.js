import moment from 'moment';
import createDayDiv from './createDayDiv';

moment.locale('ru');

function createDays (week){
    const datesWrap = document.getElementById('datesWrap');
    week.forEach( el => {
        datesWrap.append(createDayDiv(el));
    });
};

export default createDays;