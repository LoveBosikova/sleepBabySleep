function createDayDiv (data) {
    const [dataNumber, dayWeek, ] = data;
    const divWrap = document.createElement('div');
    divWrap.classList.add('calendar__dayWrap');
    const divData = document.createElement('div');
    divData.classList.add('calendar__dayWeek');
    divData.textContent = dataNumber;

    const divDayWeek = document.createElement('div');
    divDayWeek.classList.add('calendarcalendar__dayNumber');
    divDayWeek.textContent = dayWeek;
    divWrap.prepend(divData);
    divWrap.prepend(divDayWeek);
    return divWrap;
}

export default createDayDiv;