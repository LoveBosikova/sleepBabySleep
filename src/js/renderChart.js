import moment from 'moment';
import sleepingData from './sleepingData';

const testDataForDay = {
    labels: moment().day(0).format("dd, D"),
    datasets: [{
        label: 'Ночной сон - перед пробуждением',
        data: [480],
        backgroundColor: '#2F80ECA3',
    },
    {
        label: 'Бодрстование1',
        data: [300],
        backgroundColor: '#10132F',
    },
    {
        label: 'Первый  дневной сон',
        data: [70],
        backgroundColor: '#85b0e7',
    },
    {
        label: 'Бодрстование2',
        data: [250],
        backgroundColor: '#10132F',
    },
    {
        label: 'Второй дневной сон',
        data: [100],
        backgroundColor: '#85b0e7',
    },
    {
        label: 'Бодрстование3',
        data: [120],
        backgroundColor: '#10132F',
    },
    {
        label: 'Ночной сон - вечер',
        data: [120],
        backgroundColor: '#2F80ECA3',
    }]
};

const testDataForWeek = {
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
};

const testDataOverSleepForWeek = {
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
        label: 'Милыш переспал (в минутах):',
        data: [40, 30, 0, 20, 120, 10, 87],
        backgroundColor: '#2F80ECA3',
    },
    ]
};

const testDataForMonth = {
    labels: [
        [moment().day(-3).format('ddd'), moment().day(-3).format('DD'), moment().day(-3)],
        [moment().day(-2).format('ddd'), moment().day(-2).format('DD'), moment().day(-2)],
        [moment().day(-1).format('ddd'), moment().day(-1).format('DD'), moment().day(-1)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(0)],
        [moment().day(1).format('ddd'), moment().day(1).format('DD'), moment().day(1)],
        [moment().day(2).format('ddd'), moment().day(2).format('DD'), moment().day(2)],
        [moment().day(3).format('ddd'), moment().day(3).format('DD'), moment().day(3)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(4)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(5)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(6)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(7)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(8)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(9)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(10)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(11)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(12)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(13)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(14)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(15)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(16)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(17)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(18)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(19)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(20)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(21)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(22)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(23)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(24)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(25)],
        [moment().day(0).format('ddd'), moment().day(0).format('DD'), moment().day(26)],
    ].map(el => {
        return el[2].format("dd, D")
    }),
    datasets: [
    {
        label: 'Ночной сон - перед пробуждением',
        data: [480, 500, 400, 420, 470, 410, 460, 480, 500, 400, 420, 470, 410, 460, 480, 500, 400, 420, 470, 410, 460, 480, 500, 400, 420, 470, 410, 460, 410, 460],
        backgroundColor: '#2F80ECA3',
    },
    {
        label: 'Бодрстование1',
        data: [300, 320, 231, 387, 300, 307, 280, 300, 320, 231, 387, 300, 307, 280, 300, 320, 231, 387, 300, 307, 280, 300, 320, 231, 387, 300, 307, 280, 307, 280],
        backgroundColor: '#10132F',
    },
    {
        label: 'Первый  дневной сон',
        data: [70, 60, 120, 45, 60, 77, 100, 70, 60, 120, 45, 60, 77, 100, 70, 60, 120, 45, 60, 77, 100, 70, 60, 120, 45, 60, 77, 100, 77, 100],
        backgroundColor: '#85b0e7',
    },
    {
        label: 'Бодрстование2',
        data: [250, 220, 231, 100, 200, 207, 180, 250, 220, 231, 100, 200, 207, 180, 250, 220, 231, 100, 200, 207, 180, 250, 220, 231, 100, 200, 207, 180, 207, 180],
        backgroundColor: '#10132F',
    },
    {
        label: 'Второй дневной сон',
        data: [100, 130, 40, 110, 90, 95, 60, 100, 130, 40, 110, 90, 95, 60, 100, 130, 40, 110, 90, 95, 60, 100, 130, 40, 110, 90, 95, 60,  95, 60],
        backgroundColor: '#85b0e7',
    },
    {
        label: 'Бодрстование3',
        data: [120, 120, 131, 70, 113, 127, 129, 120, 120, 131, 70, 113, 127, 129, 120, 120, 131, 70, 113, 127, 129, 120, 120, 131, 70, 113, 127, 129, 127, 129],
        backgroundColor: '#10132F',
    },
    {
        label: 'Ночной сон - вечер',
        data: [120, 90, 287, 293, 207, 229, 231, 120, 90, 287, 293, 207, 229, 231, 120, 90, 287, 293, 207, 229, 231, 120, 90, 287, 293, 207, 229, 231,  293, 207],
        backgroundColor: '#2F80ECA3',
    },
    ]
};


function renderChart (stateUI) {
    const chartUI = stateUI.chart;
    const canvaChart = chartUI.chartInit;
    
    const statBtns = [...document.querySelectorAll('.dreams__btn')];
    // Меняем внешний вид кнопок в зависимости от выбранных параметров
    const chosenDataType = chartUI.chartDataType;
    const chosenViewPeriod = chartUI.chartViewPeriod;
    for (const btn of statBtns) {
        btn.classList.remove('activeBtn');
        if(btn.id === chosenDataType || btn.id === chosenViewPeriod) {
            btn.classList.add('activeBtn');
        }
    }

        //Далее логика отображения в зависимости от выбранного периода - день, неделя, тд
        if (chartUI.chartViewPeriod === 'currentDay') {
            canvaChart.data = testDataForDay
        } else if (chartUI.chartViewPeriod === 'currentWeek') {
            canvaChart.data = testDataForWeek;
        } else if (chartUI.chartViewPeriod === 'currentMonth') {
            canvaChart.data = testDataForMonth;
        }

    // Меняем отображение снов в зависимости от состояния кнопки
    // Подписи столбцом меняются в data.labels!
    if (chartUI.chartDataType === 'allSleepingsTypes') {
        canvaChart.options.plugins.title.text = 'Суточный режим малыша';
        //canvaChart.data = stateUI.dataForWeek;
        canvaChart.options.scales.y.max = 1440;

    } else if (chartUI.chartDataType === 'onlyDayNappings') {
        canvaChart.options.plugins.title.text = 'Статистика по дневным снам малыша';
        canvaChart.options.scales.y.max = 1440;

    } else if (chartUI.chartDataType === 'onlyNightSleepings') {
        canvaChart.options.plugins.title.text = 'Статистика по ночному сну малыша';
        canvaChart.options.scales.y.max = 1440;

    } else if (chartUI.chartDataType === 'perfectSleepings') {
        canvaChart.options.plugins.title.text = 'Примерный режим для по возрасту вашего малыша';
        canvaChart.data = sleepingData.month1.perfectDay;
        canvaChart.options.scales.y.max = 1440;
    }
    else if (chartUI.chartDataType === 'overSleepings') {
        canvaChart.options.plugins.title.text = 'Статистика по времени, когда малыш переспал';
        canvaChart.options.scales.y.max = 400;
        canvaChart.data = testDataOverSleepForWeek;
    }else if (chartUI.chartDataType === 'overAwakings') {
        canvaChart.options.plugins.title.text = 'Статистика по времени, когда малыш недоспал';
        canvaChart.options.scales.y.max = 400;
        canvaChart.data = testDataOverSleepForWeek;
    }


    const cluePerfectSleeping = document.querySelector('.statistic__clue');
    // Логика отображения подсказки
    if (chartUI.clue === 'visible') {
        cluePerfectSleeping.style.visibility = 'visible';
    } else {
        cluePerfectSleeping.style.visibility = 'hidden';
    }

    canvaChart.update();
}

export default renderChart;

