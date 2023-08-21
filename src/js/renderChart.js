import moment from 'moment';
import sleepingData from './sleepingData';

function renderChart (stateUI) {
    const chartUI = stateUI.chart
    const canvaChart = chartUI.chartInit;
    console.log(canvaChart);

    // Создать функцию создания даты? 
    // Меняем отображение снов в зависимости от состояния кнопки
    // Подписи столбцом меняются в data.labels!
    if (chartUI.chartDataType === 'allSleepingsTypes') {
        canvaChart.options.plugins.title.text = 'Суточный режим малыша';
        canvaChart.data = stateUI.dataForWeek;
    } else if (chartUI.chartDataType === 'onlyDayNappings') {
        canvaChart.options.plugins.title.text = 'Статистика по дневным снам малыша';
        // Подключаем в дату данные только по дневным снам
    } else if (chartUI.chartDataType === 'onlyNightSleepings') {
        // Подключаем в дату данные только по ночным снам
        canvaChart.options.plugins.title.text = 'Статистика по ночному сну малыша';
    } else if (chartUI.chartDataType === 'perfectSleepings') {
        // Подключаем в дату данные по идеальному режиму в зависимости от текущего возраста ребенка
        canvaChart.options.plugins.title.text = 'Примерный режим для по возрасту вашего малыша';

        console.log(sleepingData.month1.perfectDay);
        // Добавить логику по возрасту
        canvaChart.data = sleepingData.month1.perfectDay;
    }

    // Далее логика отображения в зависимости от выбранного периода - день, неделя, тд
    if (chartUI.chartViewPeriod === 'currentDay') {
        canvaChart.data = {
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
            }
    }

    canvaChart.update();
}

export default renderChart;

