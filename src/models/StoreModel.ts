import eventT from './EventModel'
import ModalServiceModel from './ModalServiceModel'
import TabModel from './TabModel'



export default interface StoreT {

    tabService: TabModel;
    modalService: ModalServiceModel;

    events: eventT[];
    loading: boolean;
    eventCome: string;

    getEvents: { (): void };
    setEvent: { (event: any): void };
    updateEvent: { (event: any, key: string): void };
    deleteEvent: { (key: string): void };

    _eventTime: { (): void };

}