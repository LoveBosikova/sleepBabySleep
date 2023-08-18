// Наши главные файлы - в сасс можно работать с js, плюс подключены момент и чарт

import moment from 'moment';
import onChange from 'on-change';
import Chart from 'chart.js/auto';
import render from './view.js';
import createDays from './createDays.js'
import {
    dayForward,
    dayBackward
} from './changeDay.js'
import renderTags from './renderTags.js';
import regForm from './registration_form.js';
import 'chartjs-adapter-date-fns';
import { enUS, ru } from 'date-fns/locale';

// Примеры импортов кода и картинок

const app = async () => {

    const fullformat = 'DD.MM.YYYY';
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

    // Начинаем работать с чартом
    // Получаем контекст для рисования
    // Получение контекста для рисования
    let canvas = window.document.querySelector('canvas');
    let context = canvas.getContext('2d');
    // Функции
    const createLineChart = (xData, yData) => {
      let data = {
        labels: xData,
        datasets: [{
          label: 'Дневной сон',
          data: yData,
          pointStyle: false,
          fill: true,
          borderWidth: 1,
          backgroundColor: '#2CB57F',
        }]
      }
      let config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    type: 'timeseries',
                    max: 24, 
                    adapters: { 
                        date: {
                            locale: ru, 
                        },
                    },
                    time: {
                        unit: 'hour'
                    }
                },
                y: {
                    type: 'timeseries',
                    adapters: { 
                        date: {
                            locale: ru, 
                        },
                    },
                    time: {
                        unit: 'minute'
                    }
                }
            }
        }
      }
      let chart = new Chart(context, config);
    }
    // Получение данных с сервера

    const days = state.stateUI.calendarWeek.map(el => {
        return el[2].format("dd, D")
    });
    
    console.log(days);
      let xData = days;
      let yData = [184, 218, 11, 118, 11, 1, 55];
      createLineChart(xData, yData);

  
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
}

export default app;