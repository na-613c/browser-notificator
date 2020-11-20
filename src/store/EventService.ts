import dataItem from '../models/DataItemModel'
import eventT from '../models/EventModel'
import storeModel from '../models/StoreModel'
import { makeAutoObservable } from 'mobx';
import { eventsAPI } from '../api/api'



class EventService {

    constructor(store: storeModel) {
        makeAutoObservable(this);
        this.store = store;
    };

    store;
    events: eventT[] = [];
    loading: boolean = true;
    eventCome: string = '';

    getEvents = async () => {
        const data = await eventsAPI.getData()

        if (typeof data === 'string') {
            this.events = (JSON.parse(data))
            this.store.tabService._updateStore()
        }
        this.loading = false;
    };

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
        this.store.tabService._updateStore();
    };

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
        };

        this.events = this.events.map((a) => {
            if (a.key === key) return event;
            return a
        });

        this.store.tabService._updateStore();
    };

    deleteEvent = (key: string) => {
        this.events = this.events.filter((a) => a.key !== key);
        this.store.tabService._updateStore();
    };

    _eventTime = () => {
        this.events.forEach((e) => {
            let timeOut = Number(Date.parse(`${e.year}-${e.month}-${e.day}T${e.time}`)) - Number(new Date().getTime())
            if (timeOut < 0) return
            new Promise((resolve, reject) => {
                setTimeout(resolve => this.eventCome = e.key, timeOut)
            })
        })
    };

}

export default EventService;