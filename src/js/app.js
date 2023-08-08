// Наши главные файлы - в сасс можно работать с js, плюс подключены момент и чарт
import './sass/main.scss';
import moment from 'moment';
import Chart from 'chart.js/auto';
import Day from './js/Day.js';

// Примеры импортов кода и картинок
import tesla from './assets/picture.jpg';
import hello from'./js/hello';

const app = () => {

    const fullformat = 'DD.MM.YYYY';

    //Комплексное состояние приложения
    const state = {
        registrationForm: {
            valid: false,
            errors: [],
            fields: {
                name: '',
            },
            },
    }

}

export default app;


