import { observable, computed, configure, action, makeAutoObservable } from 'mobx';
import eventT from '../models/EventModel'
import dataItem from '../models/DataItemModel'
import initEvents from './InitEvents'
import modalT from '../models/ModalModel'

const day = "DAY"
const month = "MONTH"
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

const initValue = {
    key: '0',
    day: 1,
    month: 1,
    year: 2000,
    time: '00:00:00',
    event: 'событие',
    repeating: false,
    position: 'left',
    prior: 'высокий',
}

class Store {

    constructor() {
        makeAutoObservable(this)
    }

    events: eventT[] = initEvents;
    eventData: dataItem[] = getDay(this.events);
    isEditMode: boolean = true;
    showModal: modalT = { isShowModal: false, event: initValue };
    activeTab: string = day;

    setEvent = (obj: any) => {
        const date = new Date(obj['date-picker']);

        const event: eventT = {
            key: (new Date().getTime()).toString(),
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
            time: obj['time-picker'],
            event: obj.event,
            repeating: !!obj.repeating,
            position: obj.position,
            prior: obj.prior,
        }



        this.events.push(event);

        switch (this.activeTab) {
            case (year):
                this.setTabYear();
                break;
            case (month):
                this.setTabMonth();
                break;
            default:
                this.setTabDay();
                break;
        }
    }

    updateEvent = (obj: any, key: string) => {

        const date = new Date(obj['date-picker']);

        const event: eventT = {
            key: key,
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
            time: obj['time-picker'],
            event: obj.event,
            repeating: !!obj.repeating,
            position: obj.position,
            prior: obj.prior,
        }

        this.events = this.events.map((a) => {
            if (a.key === key) return event;
            return a
        })

        switch (this.activeTab) {
            case (year):
                this.setTabYear();
                break;
            case (month):
                this.setTabMonth();
                break;
            default:
                this.setTabDay();
                break;
        }
    }


    deleteEvent = (key: string) => {

        this.events = this.events.filter((a) => a.key !== key)

        switch (this.activeTab) {
            case (year):
                this.eventData = getYear(this.events)
                break;
            case (month):
                this.eventData = getMonth(this.events)
                break;
            default:
                this.eventData = getDay(this.events)
                break;
        }
    }

    setEditMode = () => {
        this.isEditMode = !this.isEditMode
    };

    setModal = () => {
        this.showModal = {
            ...this.showModal,
            isShowData: false,
            isShowModal: !this.showModal.isShowModal,
        }
    };

    addModal = () => {
        this.showModal = {
            ...this.showModal,
            isShowData: false,
            isShowModal: true,
        }
    }

    updModal = (event: eventT) => {
        this.showModal = {
            event: event,
            isShowData: true,
            isShowModal: true,
        }
    }



    setTabDay = () => {
        this.activeTab = day;
        this.eventData = getDay(this.events)
    };

    setTabMonth = () => {
        this.activeTab = month;
        this.eventData = getMonth(this.events)
    };

    setTabYear = () => {
        this.activeTab = year;
        this.eventData = getYear(this.events)
    };
}

export default new Store();
