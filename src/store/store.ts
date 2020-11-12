import { observable, computed, configure, action } from 'mobx';
import EventT from '../models/EventModel'

let dateTime: Date = new Date(2020, 10, 12, 12, 30);


class Store {
    @observable events: EventT[] = [
        {
            key: '1',
            day: 4,
            month: 11,
            year: 2020,
            time: '10:30',
            event: 'событие1',
            repeating: true,
            position: 'left',
            prior: 'высокий',
        },
        {
            key: '2',
            day: 1,
            month: 3,
            year: 2019,
            time: '9:31',
            event: 'событие21',
            repeating: false,
            position: 'left',
            prior: 'средний',
        },
    ]
}



export default new Store();
