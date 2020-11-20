import { makeAutoObservable, configure } from 'mobx';
import eventT from '../models/EventModel'
import ModalService from './ModalService'
import { eventsAPI } from '../api/api'
import TabService from './TabService'
import TabModel from '../models/TabServiceModel'
import ModalServiceModel from '../models/ModalServiceModel'
import EventServiceModel from '../models/EventServiceModel';
import EventService from './EventService'

configure({ enforceActions: 'observed' });

class Store {

    constructor() {
        this.modalService = new ModalService();
        this.tabService = new TabService(this);
        this.eventService = new EventService(this);
        makeAutoObservable(this)
    };

    tabService: TabModel;
    modalService: ModalServiceModel;
    eventService: EventServiceModel;
}


export default new Store();
