import { observable, action, computed, reaction } from "mobx"

let dateTime: Date = new Date(2020, 10, 12, 12, 30);

interface dataT {
    key: string;
    event: string;
    date: string;
    time: string;
    prior: string;
};


class Store {
    @observable events: dataT[] = [
        {
            key: '1',
            event: 'событие1',
            date: dateTime.toLocaleDateString(),
            time: dateTime.toLocaleTimeString(),
            prior: 'высокий',
        },
        {
            key: '2',
            event: 'событие12',
            date: new Date(2019, 1, 12, 6, 30).toLocaleDateString(),
            time: new Date(2019, 1, 12, 6, 30).toLocaleTimeString(),
            prior: 'средний',
        },
        {
            key: '3',
            event: 'событие123',
            date: new Date(2020, 11, 21, 10, 36).toLocaleDateString(),
            time: new Date(2020, 11, 21, 10, 36).toLocaleTimeString(),
            prior: 'низкий',
        },
        {
            key: '4',
            event: 'событие4',
            date: dateTime.toLocaleDateString(),
            time: dateTime.toLocaleTimeString(),
            prior: 'высокий',
        },
    ]
}

export default new Store()
