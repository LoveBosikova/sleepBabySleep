// Наши главные файлы - в сасс можно работать с js, плюс подключены момент и чарт

import moment from 'moment';
import onChange from 'on-change';
import Chart from 'chart.js/auto';
import Day from './Day.js';
import render from './view.js';

// Примеры импортов кода и картинок

const app = () => {

    const fullformat = 'DD.MM.YYYY';

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
    // Когда страница будет грузится, состояние отобразится начальное (плюс то, которое зависит от локальных хранилищ данных)
    render(state);

}

export default app;