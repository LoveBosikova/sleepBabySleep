// Наши главные файлы - в сасс можно работать с js, плюс подключены момент и чарт

import moment from 'moment';
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
import {
    enUS,
    ru
} from 'date-fns/locale';
import perfectTimingByAge from './sleepingData.js';
import changeQoutesBackward from './changeQoutesBackward.js';
import changeQoutesForward from './changeQuotesForward.js';
import changeBurgerMenu from './changeBurgerMenu.js'; 
import renderChart from './renderChart.js';
import favicon from '../assets/favicon.svg'

// Примеры импортов кода и картинок

const app = async () => {

    const fullformat = 'DD.MM.YYYY';
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

    const icon = document.getElementById('favicon');
    icon.href = `${favicon}`;

    //Комплексное состояние приложения. Здесь всё, что влияет на отображение объектов на странице
    const state = {
        
        stateUI: {
            introBlocks: window.localStorage.getItem('introBlocks') === null ? 'visible' : window.localStorage.getItem('introBlocks'),
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
            modals: {
                donate: 'hidden',
                hint: 'hidden',
                autorization: 'hidden',
            }

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

    if (window.localStorage.getItem('introBlocks') === 'visible') {
        state.stateUI.introBlocks = 'visible';
    } else if (window.localStorage.getItem('introBlocks') === 'hidden') {
        state.stateUI.introBlocks = 'hidden';
    };

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
        render(state);
    })

    // Работа с отображением модального окна donat - показываем каждые три минуты
    function makeDonatVisible () {
        state.stateUI.modals.donate = 'visible';
        render(state);
    }

    function makeDonatHidden () {
        state.stateUI.modals.donate = 'hidden';
        render(state);
    }
    setInterval(makeDonatVisible, 300000);

    const btnCloseDonate = document.getElementById('btnCloseDonate');
    btnCloseDonate.addEventListener('click', makeDonatHidden);

    // Работа с отображением модального окна подсказки
    function makeHintVisible () {
        state.stateUI.modals.hint = 'visible';
        render(state);
    }

    function makeHintHidden () {
        state.stateUI.modals.hint = 'hidden';
        render(state);
    }

    const dataSaveBtn = document.getElementById('data-save');
    dataSaveBtn.addEventListener('click', makeHintVisible);

    const closeHintBtn = document.querySelector('.hint__close');
    closeHintBtn.addEventListener('click', makeHintHidden);

    const okayHintBtn = document.querySelector('.hint__btn');
    okayHintBtn.addEventListener('click', makeHintHidden);

    // Работа с отображением модального окна авторизации
    function makeAutorizationVisible () {
        state.stateUI.modals.autorization = 'visible';
        render(state);
    }

    function makeAutorizationHidden () {
        state.stateUI.modals.autorization = 'hidden';
        render(state);
    };

    const loginBtn = document.querySelector('.log-in__btn');
    loginBtn.addEventListener('click', makeAutorizationVisible);

    const closeAutorizationBtn = document.querySelector('.autorization__close');
    closeAutorizationBtn.addEventListener('click', makeAutorizationHidden);

    const autorizeSubmitBtn = document.querySelector('.autorization__enterBtn');

    // !Добавить логику корректно заполненных полей!!
    autorizeSubmitBtn.addEventListener('click', makeAutorizationHidden);

    // Работаем с анимациями parallax
    const paths = [...document.querySelectorAll('.anim-svg')];

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            entry.target.classList.add('--active')
        } else {
            entry.target.classList.remove('--active')
        }
        })
    }
    const options = {
        threshold: 0,
    }

    const observer = new IntersectionObserver(callback, options);
    paths.forEach((path) => observer.observe(path))

}

export default app;