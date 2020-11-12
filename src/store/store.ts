import { strict } from 'assert';
import { observable, computed, configure, action } from 'mobx';
import eventT from '../models/EventModel'
import dataItem from '../models/DataItemModel'

type month = {
    year: number,
    month: number
}

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
        {
            key: '4',
            day: 23,
            month: 11,
            year: 2019,
            time: '19:31',
            event: 'событие44',
            repeating: false,
            position: 'left',
            prior: 'низкий',
        },
        {
            key: '5',
            day: 22,
            month: 1,
            year: 2019,
            time: '12:31',
            event: 'событие5',
            repeating: false,
            position: 'left',
            prior: 'низкий',
        },
    ]

    sort = (events: eventT[]): dataItem[] => {
        let myDay = events.map((i) => i.day)

        return Array.from(new Set(myDay)).map((i) => {
            return {
                title: i.toString(),
                event: events.filter((v) => v.day === i)
            }
        })
    }

    sortM = (events: eventT[]): dataItem[] => {

        let arr = events.map((i) => ({ year: i.year, month: i.month }))
        let monthArr: month[] = []

        arr.forEach((i) => {
            if (monthArr.some((j) => JSON.stringify(i) === JSON.stringify(j))) {
                return null
            }
            return monthArr.push(i)
        })

        const sortM = (a: month, b: month) => {
            if (a.year === b.year) return b.month - a.month
            return b.year - a.year
        }

        return monthArr.sort(sortM).map((i) => {
            let title = i.month.toString().length === 1 ? 0 + i.month.toString() : i.month;
            return {
                title: `${title}.${i.year}`,
                event: events.filter((v) => v.year === i.year && v.month === i.month)
            }
        })
    }

    sortY = (events: eventT[]): dataItem[] => {
        let yearArr = events.map((i) => i.year)

        return Array.from(new Set(yearArr)).sort().reverse().map((i) => {
            return {
                title: i.toString(),
                event: events.filter((v) => v.year === i)
            }
        })
    }

    @action setTypeDay = () => {
        console.log('day')
    }
    @action setTypeMonth = () => {
        this.eventData = this.sortM(this.events);
    }

    @action setTypeYear = () => {
        this.eventData = this.sortY(this.events);
    }


    @observable eventData: dataItem[] = this.sort(this.events);


}



export default new Store();
