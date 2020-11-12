import { strict } from 'assert';
import { observable, computed, configure, action } from 'mobx';
import eventT from '../models/EventModel'
import dataItem from '../models/DataItemModel'

let dateTime: Date = new Date(2020, 10, 12, 12, 30);



class Store {
    events: eventT[] = [
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
            day: 11,
            month: 10,
            year: 2019,
            time: '09:31',
            event: 'событие21',
            repeating: false,
            position: 'left',
            prior: 'средний',
        },
        {
            key: '3',
            day: 11,
            month: 10,
            year: 2019,
            time: '19:31',
            event: 'событие333333',
            repeating: false,
            position: 'left',
            prior: 'низкий',
        },
    ]

    sortType: string = 'day'

    func = (events: eventT[]): dataItem[] => {

        let myDay = events.map((i) => i.day)
        let arr = Array.from(new Set(myDay));

        let a = arr.map((i) => {
            return {
                day: i,
                event: events.filter((v) => v.day === i)
            }
        })
        console.log(a)
        return a;
    }

    @observable eventData: dataItem[] = this.func(this.events);


}



export default new Store();
