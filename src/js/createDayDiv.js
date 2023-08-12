function createDayDiv (data) {
    const [dataNumber, dayWeek, ] = data;
    const divWrap = document.createElement('div');
    divWrap.classList.add('calendar__dayWrap');
    const divData = document.createElement('div');
    divData.classList.add('calendar__dayNumber');
    divData.textContent = dataNumber;

    const divDayWeek = document.createElement('div');
    divDayWeek.classList.add('calendar__dayWeek');
    divDayWeek.textContent = dayWeek;
    divWrap.append(divData);
    divWrap.append(divDayWeek);
    return divWrap;
}

export default createDayDiv;