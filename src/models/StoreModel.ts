import eventT from './EventModel'
import dataItem from './DataItemModel'
import ModalServiceModel from './ModalServiceModel'



export default interface StoreT {
    events: eventT[];
    eventData: dataItem[];

    modalService: ModalServiceModel;


    activeTab: string;
    loading: boolean;
    eventCome: string;

    getEvents: { (): void };

    setEvent: { (event: any): void };
    updateEvent: { (event: any, key: string): void };
    deleteEvent: { (key: string): void };


    setTabAll: { (): void };
    setTabDay: { (): void };
    setTabMonth: { (): void };
    setTabYear: { (): void };
}