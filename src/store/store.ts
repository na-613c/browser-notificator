import { observable, computed, configure, action, makeAutoObservable } from 'mobx';
import eventT from '../models/EventModel'
import dataItem from '../models/DataItemModel'

type monthType = {
    year: number,
    month: number
}

type dayType = {
    year: number,
    month: number,
    day: number
}

const getDay = (events: eventT[]): dataItem[] => {
    let arr = events.map((i) => ({ year: i.year, month: i.month, day: i.day }))
    let dayArr: dayType[] = []

    arr.forEach((i) => {
        if (dayArr.some((j) => JSON.stringify(i) === JSON.stringify(j))) {
            return null
        }
        return dayArr.push(i)
    })

    const sortDay = (a: dayType, b: dayType) => {
        if (a.year === b.year && a.month === b.month) return b.day - a.day
        if (a.year === b.year) return b.month - a.month
        return b.year - a.year
    }

    return dayArr.sort(sortDay).map((i) => {
        let monthString = i.month.toString().length === 1 ? 0 + i.month.toString() : i.month;
        let dayString = i.day.toString().length === 1 ? 0 + i.day.toString() : i.day;

        return {
            title: `${dayString}.${monthString}.${i.year}`,
            event: events.filter((v) => v.year === i.year && v.month === i.month && v.day === i.day)
        }
    })
}

const getMonth = (events: eventT[]): dataItem[] => {

    let arr = events.map((i) => ({ year: i.year, month: i.month }))
    let monthArr: monthType[] = []

    arr.forEach((i) => {
        if (monthArr.some((j) => JSON.stringify(i) === JSON.stringify(j))) {
            return null
        }
        return monthArr.push(i)
    })

    const sortMonth = (a: monthType, b: monthType) => {
        if (a.year === b.year) return b.month - a.month
        return b.year - a.year
    }

    return monthArr.sort(sortMonth).map((i) => {
        let monthString = i.month.toString().length === 1 ? 0 + i.month.toString() : i.month;
        return {
            title: `${monthString}.${i.year}`,
            event: events.filter((v) => v.year === i.year && v.month === i.month)
        }
    })
}

const getYear = (events: eventT[]): dataItem[] => {
    let yearArr = events.map((i) => i.year)

    return Array.from(new Set(yearArr)).sort().reverse().map((i) => {
        return {
            title: i.toString(),
            event: events.filter((v) => v.year === i)
        }
    })
}

class Store {

    constructor() {
        makeAutoObservable(this)
    }

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
            day: 12,
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
            prior: 'высокий',
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

    eventData: dataItem[] = getDay(this.events);

    isEditMode: boolean = true;

    setEditMode = () => {
        this.isEditMode = !this.isEditMode
        console.log(this.isEditMode)
    };

    setTabDay = () => this.eventData = getDay(this.events);

    setTabMonth = () => this.eventData = getMonth(this.events);

    setTabYear = () => this.eventData = getYear(this.events);
}

export default new Store();
