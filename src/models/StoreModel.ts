import eventT from './EventModel'
import dataItem from './DataItemModel'

export default interface StoreT {
    events: eventT[];
    eventData: dataItem[];
    setTypeDay: { (): void };
    setTypeMonth: { (): void };
    setTypeYear: { (): void };
}