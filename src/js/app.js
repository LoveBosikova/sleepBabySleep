// Наши главные файлы - в сасс можно работать с js, плюс подключены момент и чарт

import moment from 'moment';
import Chart from 'chart.js/auto';
import onChange from 'on-change';
import render from './view.js';
import createDays from './createDays.js'
import {
    dayForward,
    dayBackward
} from './changeDay.js'
import renderTags from './renderTags.js';
import regForm from './registration_form.js';
import 'chartjs-adapter-date-fns';
import {
    enUS,
    ru
} from 'date-fns/locale';
//import changeQuotes from './changeQuotes.js';
import perfectTimingByAge from './sleepingData.js';
import changeQoutesBackward from './changeQoutesBackward.js';
import changeQoutesForward from './changeQuotesForward.js';
import changeBurgerMenu from './changeBurgerMenu.js';
import renderChart from './renderChart.js';

const app = async () => {

    const btnDayForward = document.getElementById('btn-dayForward');
    const btnDayBackward = document.getElementById('btn-dayBackward');
    const btnQuoteForward = document.getElementById('quotesForward');
    const btnQuoteBackward = document.getElementById('qoutesBackward');
    const btnBurger = document.getElementById('burger__btn');
    const headerLogo = document.querySelector('.header__logo');

    const canvas = window.document.querySelector('canvas');
    const chart = new Chart(canvas, {
        type: 'bar',
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'График дня вашего малыша',
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                },
                legend: {
                    display: false,
                },
            },
            responsive: true,
            scales: {
            y: {
                beginAtZero: true,
                stacked: true,
                min: 0,
                max: 1440,
                ticks: {
                    display: false 
                }
            }, 
            x: {
                beginAtZero: true,
                stacked: true,
            }
        }
        }
    });

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
            introBlocks: 'visible',
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
            burger: 'close',
            chart: {
                chartInit: chart,
                // Возможные варианты chartDataType: 'allSleepingsTypes', 'onlyDayNappings', 'onlyNightSleepings', 'perfectSleepings', 'overSleepings','overAwakings'
                chartDataType: 'allSleepingsTypes',
                // Возможные варианты chartDataType: 'currentDay', 'currentWeek', 'currentMonth', 'perfectDay'
                chartViewPeriod: 'currentWeek',
                clue: "hidden",
            },
        }
    }
    
    // Рендеринг при инициализации приложения
    render(state);
    renderChart(state.stateUI);

    // Календарь
    btnDayForward.addEventListener('click', () => {
        dayForward(state)
    });
    btnDayBackward.addEventListener('click', () => {
        dayBackward(state)
    });


    btnQuoteBackward.addEventListener('click', () => {
        changeQoutesBackward();
    });
    btnQuoteForward.addEventListener('click', () => {
        changeQoutesForward();
    });

    btnBurger.addEventListener('click', () => {
        state.stateUI.burger == 'close' ? state.stateUI.burger = 'open' : state.stateUI.burger = 'close';
        render(state);
    });

    if(window.localStorage.getItem('introBlocks') === 'visible') {
        state.stateUI.introBlocks = 'visible';
    } else if(window.localStorage.getItem('introBlocks') === 'hidden') {
        state.stateUI.introBlocks = 'hidden';
    };

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
    };

    // Отображение статистики в чарте
    const chartBtnAllSleepings = document.getElementById('allSleepingsTypes');
    chartBtnAllSleepings.addEventListener('click', () => {
        state.stateUI.chart.chartDataType = 'allSleepingsTypes';
        if (state.stateUI.chart.chartViewPeriod === 'perfectDay') {
            state.stateUI.chart.chartViewPeriod = 'currentWeek';
        };
        state.stateUI.chart.clue = 'hidden';
        renderChart(state.stateUI)
    })

    const chartBtnDayNaps = document.getElementById('onlyDayNappings');
    chartBtnDayNaps.addEventListener('click', () => {
        state.stateUI.chart.chartDataType = 'onlyDayNappings';
        if (state.stateUI.chart.chartViewPeriod === 'perfectDay') {
            state.stateUI.chart.chartViewPeriod = 'currentWeek';
        };
        state.stateUI.chart.clue = 'hidden';
        renderChart(state.stateUI);
    })

    const chartBtnNightSleeping = document.getElementById('onlyNightSleepings');
    chartBtnNightSleeping.addEventListener('click', () => {
        state.stateUI.chart.chartDataType = 'onlyNightSleepings';
        if (state.stateUI.chart.chartViewPeriod === 'perfectDay') {
            state.stateUI.chart.chartViewPeriod = 'currentWeek';
        };
        state.stateUI.chart.clue = 'hidden';
        renderChart(state.stateUI);
    })

    const chartBtnOverSleepingStatistic = document.getElementById('overSleepings');
    chartBtnOverSleepingStatistic.addEventListener('click', () => {
        state.stateUI.chart.chartDataType = 'overSleepings';
        if (state.stateUI.chart.chartViewPeriod === 'perfectDay') {
            state.stateUI.chart.chartViewPeriod = 'currentWeek';
        };
        state.stateUI.chart.clue = 'hidden';
        renderChart(state.stateUI);
    })

    const chartBtnOverAwakingStatistic = document.getElementById('overAwakings');
    chartBtnOverAwakingStatistic.addEventListener('click', () => {
        if (state.stateUI.chart.chartViewPeriod === 'perfectDay') {
            state.stateUI.chart.chartViewPeriod = 'currentWeek';
        };
        state.stateUI.chart.clue = 'hidden';
        state.stateUI.chart.chartDataType = 'overAwakings';
        renderChart(state.stateUI);
    })

    const oneDayStatisticBtn = document.getElementById('currentDay');
    oneDayStatisticBtn.addEventListener('click', () => {
        state.stateUI.chart.chartViewPeriod = 'currentDay';
        state.stateUI.chart.clue = 'hidden';
        renderChart(state.stateUI);
    })

    const weekStatisticBtn = document.getElementById('currentWeek');
    weekStatisticBtn.addEventListener('click', () => {
        state.stateUI.chart.chartViewPeriod = 'currentWeek';
        state.stateUI.chart.clue = 'hidden';
        renderChart(state.stateUI);
    })

    const monthStatisticBtn = document.getElementById('currentMonth');
    monthStatisticBtn.addEventListener('click', () => {
        state.stateUI.chart.chartViewPeriod = 'currentMonth';
        state.stateUI.chart.clue = 'hidden';
        renderChart(state.stateUI);
    })

    const chartBtnAgeStatistic = document.getElementById('perfectDay');
    chartBtnAgeStatistic.addEventListener('click', () => {
        state.stateUI.chart.chartDataType = 'perfectSleepings';
        state.stateUI.chart.chartViewPeriod = 'perfectDay';
        state.stateUI.chart.clue = 'visible';
        renderChart(state.stateUI);
    })
    
    const closeClueStatisticBtn = document.querySelector('.statistic__closeBtn');
    console.log(closeClueStatisticBtn);
    closeClueStatisticBtn.addEventListener('click', () => {
        state.stateUI.chart.clue = 'hidden';
        console.log(state.stateUI.chart.clue);
        renderChart(state.stateUI);
    })


    // Гармошка
    const btnsAcc = [...document.getElementsByClassName('accordion__question-title')];
    const contents = [...document.getElementsByClassName('accordion__question-content')]

    btnsAcc.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            state.stateUI.accordion[i].display == 'none' ? state.stateUI.accordion[i].display = 'block' : state.stateUI.accordion[i].display = 'none';
            render(state);
        })
    });
    contents.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            state.stateUI.accordion[i].display == 'none' ? state.stateUI.accordion[i].display = 'block' : state.stateUI.accordion[i].display = 'none';
            render(state);
        })
    })

    setTimeout(() => changeQoutesForward(), 0);
    setInterval(() => changeQoutesForward(), 60000);

    // Работаем с видимостью блоков интро
    const hideInrtoBtn = document.getElementById('hideIntroBtn');
    
    hideInrtoBtn.addEventListener('click', () => {
        state.stateUI.introBlocks = state.stateUI.introBlocks === 'visible' ? 'hidden' : 'visible';
        console.log(window.localStorage);
        render(state);
    })
    // Начинаем работать с чартом
    let canvas = window.document.querySelector('canvas');

    const DATA_COUNT = 7;

    const labels = state.stateUI.calendarWeek.map(el => {
        return el[2].format("dd, D")
    });

    const data = {
        labels: labels,
        datasets: [{
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
    };

    new Chart(canvas, {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'График дня вашего малыша',
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                },
                legend: {
                    display: false,
                },
            },
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    stacked: true,
                    min: 0,
                    max: 1440,
                    ticks: {
                        display: false
                    }
                }
            }
        }
    })

}

export default app;