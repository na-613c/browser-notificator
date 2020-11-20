import { makeAutoObservable, configure } from 'mobx';
import eventT from '../models/EventModel'
import ModalService from './ModalService'
import { eventsAPI } from '../api/api'
import TabService from './TabService'
import TabModel from '../models/TabServiceModel'
import ModalServiceModel from '../models/ModalServiceModel'


configure({ enforceActions: 'observed' });

class Store {

    constructor() {
        this.modalService = new ModalService();
        this.tabService = new TabService(this);
        makeAutoObservable(this)
    };

    tabService: TabModel;
    modalService: ModalServiceModel;

    events: eventT[] = [];

    loading: boolean = true;
    eventCome: string = '';

    getEvents = async () => {
        const data = await eventsAPI.getData()

        if (typeof data === 'string') {
            this.events = (JSON.parse(data))
            this.tabService._updateStore()
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
        this.tabService._updateStore();
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

        this.tabService._updateStore();
    };

    deleteEvent = (key: string) => {
        this.events = this.events.filter((a) => a.key !== key);
        this.tabService._updateStore();
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


export default new Store();
