import eventT from './EventModel'
import dataItem from './DataItemModel'

export default interface StoreT {
    events: eventT[];
    eventData: dataItem[];
    isEditMode: boolean;
    setEditMode: { (): void };
    setTabDay: { (): void };
    setTabMonth: { (): void };
    setTabYear: { (): void };
}