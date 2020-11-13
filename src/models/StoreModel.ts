import eventT from './EventModel'
import dataItem from './DataItemModel'

export default interface StoreT {
    events: eventT[];
    eventData: dataItem[];
    isEditMode: boolean;
    isShowModal: boolean;
    activeTab: string;
    setEvent: { (event: any): void };
    setModal: { (): void };
    setEditMode: { (): void };
    setTabDay: { (): void };
    setTabMonth: { (): void };
    setTabYear: { (): void };
}