// Наши главные файлы - в сасс можно работать с js, плюс подключены момент и чарт

import moment from 'moment';
import onChange from 'on-change';
import Chart from 'chart.js/auto';
import render from './view.js';
import createDays from './createDays.js'
import { dayForward, dayBackward } from './changeDay.js'

// Примеры импортов кода и картинок

const app = async () => {

    const fullformat = 'DD.MM.YYYY';
    const btnDayForward = document.getElementById('btn-dayForward');
    const btnDayBackward = document.getElementById('btn-dayBackward');
    console.log(btnDayForward);
    console.log(btnDayBackward);

    //Комплексное состояние приложения. Здесь всё, что влияет на отображение объектов на странице
    const state = {
        registrationForm: {
            valid: false,
            errors: [],
            fields: {
                name: '',
            },
            },
    }
    // Это наш вотчерю он смотрит за любыми изменениями, которые происходят в состоянии
    // Первый параметр - за каким объектом следим, второй - какую функцию запускаем
    const watchedState = onChange(state, render);

    // Обработчики событий ничего не меняют во внешнем виде приложения, они меняют состояние. 
    // А уже функция рендеринга обрабатывает состояние и меняет внешний вид

    btnDayForward.addEventListener('click', ()=> { dayForward(state)});
    btnDayBackward.addEventListener('click', ()=> { dayBackward(state)});



    // Когда страница будет грузится, состояние отобразится начальное (плюс то, которое зависит от локальных хранилищ данных)
    render(state);

}

export default app;