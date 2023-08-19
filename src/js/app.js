// Наши главные файлы - в сасс можно работать с js, плюс подключены момент и чарт

import moment from 'moment';
import onChange from 'on-change';
import render from './view.js';
import createDays from './createDays.js'
import {
    dayForward,
    dayBackward
} from './changeDay.js'
import regForm from './registration_form.js';
import 'chartjs-adapter-date-fns';
import {
    enUS,
    ru
} from 'date-fns/locale';
import changeQuotes from './changeQuotes.js';
import perfectTimingByAge from './sleepingData.js';

const app = async () => {

    const btnDayForward = document.getElementById('btn-dayForward');
    const btnDayBackward = document.getElementById('btn-dayBackward');

    //Комплексное состояние приложения. Здесь всё, что влияет на отображение объектов на странице
    const state = {
        registrationForm: {
            valid: false,
            errors: [],
            fields: {
                name: '',
            },
        },
        stateUI: {
            calendarWeek: [
                [moment().day(-3).format('ddd'), moment().day(-3).format('DD'), moment().day(-3)],
                [moment().day(-2).format('ddd'), moment().day(-2).format('DD'), moment().day(-2)],
                [moment().day(-1).format('ddd'), moment().day(-1).format('DD'), moment().day(-1)],
                [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(0)],
                [moment().day(1).format('ddd'), moment().day(1).format('DD'), moment().day(1)],
                [moment().day(2).format('ddd'), moment().day(2).format('DD'), moment().day(2)],
                [moment().day(3).format('ddd'), moment().day(3).format('DD'), moment().day(3)],
            ],
            tags: [{
                    value: 'nipple',
                    text: 'Соска',
                    isChecked: false
                },
                {
                    value: 'bottle',
                    text: 'Бутылочка',
                    isChecked: false
                },
                {
                    value: 'sleepHisteria',
                    text: 'Заснул с истерикой',
                    isChecked: false
                },
                {
                    value: 'perfectSleeping',
                    text: 'Хорошо заснул',
                    isChecked: false
                },
                {
                    value: 'weakingUpHisteria',
                    text: 'Проснулся с истерикой',
                    isChecked: false
                },
                {
                    value: 'perfectWeakingUp',
                    text: 'Проснулся в настроении',
                    isChecked: false
                }
            ],
            accordion: [{
                    id: 'question1',
                    content: 'content1',
                    display: 'none',
                },
                {
                    id: 'question2',
                    content: 'content2',
                    display: 'none',
                },
                {
                    id: 'question3',
                    content: 'content3',
                    display: 'none',
                },
                {
                    id: 'question3',
                    content: 'content3',
                    display: 'none',
                },

            ],
            dataForWeek: {
                labels: [
                    [moment().day(-3).format('ddd'), moment().day(-3).format('DD'), moment().day(-3)],
                    [moment().day(-2).format('ddd'), moment().day(-2).format('DD'), moment().day(-2)],
                    [moment().day(-1).format('ddd'), moment().day(-1).format('DD'), moment().day(-1)],
                    [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(0)],
                    [moment().day(1).format('ddd'), moment().day(1).format('DD'), moment().day(1)],
                    [moment().day(2).format('ddd'), moment().day(2).format('DD'), moment().day(2)],
                    [moment().day(3).format('ddd'), moment().day(3).format('DD'), moment().day(3)],
                ].map(el => {
                    return el[2].format("dd, D")
                }),
                datasets: [
                {
                    label: 'Ночной сон - перед пробуждением',
                    data: [480, 500, 400, 420, 470, 410, 460],
                    backgroundColor: '#2F80ECA3',
                },
                {
                    label: 'Бодрстование1',
                    data: [300, 320, 231, 387, 300, 307, 280],
                    backgroundColor: '#10132F',
                },
                {
                    label: 'Первый  дневной сон',
                    data: [70, 60, 120, 45, 60, 77, 100],
                    backgroundColor: '#85b0e7',
                },
                {
                    label: 'Бодрстование2',
                    data: [250, 220, 231, 100, 200, 207, 180],
                    backgroundColor: '#10132F',
                },
                {
                    label: 'Второй дневной сон',
                    data: [100, 130, 40, 110, 90, 95, 60],
                    backgroundColor: '#85b0e7',
                },
                {
                    label: 'Бодрстование3',
                    data: [120, 120, 131, 70, 113, 127, 129],
                    backgroundColor: '#10132F',
                },
                {
                    label: 'Ночной сон - вечер',
                    data: [120, 90, 287, 293, 207, 229, 231],
                    backgroundColor: '#2F80ECA3',
                },
                ]
            },
        }
    }

    // Обработчики событий ничего не меняют во внешнем виде приложения, они меняют состояние. 
    // А уже функция рендеринга обрабатывает состояние и меняет внешний вид

    btnDayForward.addEventListener('click', () => {
        dayForward(state)
    });
    btnDayBackward.addEventListener('click', () => {
        dayBackward(state)
    });

    // Когда страница будет грузится, состояние отобразится начальное (плюс то, которое зависит от локальных хранилищ данных)
    render(state);

    const tags = document.querySelectorAll('.calendar__tagLabel');
    for (const tag of tags) {
        tag.addEventListener('click', (e) => {
            for (const item of state.stateUI.tags) {
                if (item.value == e.target.previousElementSibling.value) {
                    item.isChecked = item.isChecked == false ? true : false;
                }
            };
            render(state);
        })
    }

    const btnsAcc = [...document.getElementsByClassName('accordion__question-title')];
    const contents = [...document.getElementsByClassName('accordion__question-content')]

    btnsAcc.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            if (state.stateUI.accordion[i].display == 'none') {
                state.stateUI.accordion[i].display = 'block';
            } else {
                state.stateUI.accordion[i].display = 'none';
            }
            render(state);
        })
    });

    contents.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            if (state.stateUI.accordion[i].display == 'none') {
                state.stateUI.accordion[i].display = 'block';
            } else {
                state.stateUI.accordion[i].display = 'none';
            }
            render(state);
        })
    })
    setTimeout(() => changeQuotes(), 0);
    setInterval(() => changeQuotes(), 30000);
}

export default app;