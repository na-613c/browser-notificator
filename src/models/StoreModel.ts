import eventT from './EventModel'
import dataItem from './DataItemModel'
import modalT from './ModalModel'



export default interface StoreT {
    events: eventT[];
    eventData: dataItem[];
    isEditMode: boolean;
    showModal: modalT;
    activeTab: string;

    addModal: { (): void };
    updModal: { (event: eventT): void };
    setModal: { (): void };

    setEvent: { (event: any): void };
    updateEvent: { (event: any, key: string): void };
    deleteEvent: { (key: string): void };
    
    setEditMode: { (): void };

    setTabAll: { (): void };
    setTabDay: { (): void };
    setTabMonth: { (): void };
    setTabYear: { (): void };
}