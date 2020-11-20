import dataItem from '../models/DataItemModel'
import eventT from '../models/EventModel'
import storeModel from '../models/StoreModel'
import { makeAutoObservable } from 'mobx';
import { eventsAPI } from '../api/api'

const day = 'DAY'
const month = 'MONTH'
const year = 'YEAR'

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


class TabService {

    constructor(store: storeModel) {
        makeAutoObservable(this);
        this.store = store;
    };

    store;
    eventData: dataItem[] = [];
    activeTab: string = '';

    setTabAll = () => {
        this.activeTab = '';
        this.eventData = [{
            title: 'Все уведомления',
            event: [...this.store.events]
        }];
    };

    setTabDay = () => {
        this.activeTab = day;
        this.eventData = getDay(this.store.events)
    };

    setTabMonth = () => {
        this.activeTab = month;
        this.eventData = getMonth(this.store.events)
    };

    setTabYear = () => {
        this.activeTab = year;
        this.eventData = getYear(this.store.events)
    };

    _updateStore = () => {
        this.store._eventTime()
        eventsAPI.setData(this.store.events);
        switch (this.activeTab) {
            case (year):
                this.setTabYear();
                break;
            case (month):
                this.setTabMonth();
                break;
            case (day):
                this.setTabDay();
                break;
            default:
                this.setTabAll();
                break;
        }
    };

}

export default TabService;