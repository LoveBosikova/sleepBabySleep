import Chart from 'chart.js/auto';

// data - это данные, которые визуализирует чарт. В них обязательно должен быть параметр labels - это массив по числу столбцов с названиями столбцов. В нашем случае это даты
// chartName - это название графика

function createChart (data, chartName) {
    const canvas = window.document.querySelector('canvas');
    new Chart(canvas, {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: chartName,
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
};

export default createChart;