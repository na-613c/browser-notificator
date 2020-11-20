import eventT from './EventModel'

export default interface EventServiceModel {

    events: eventT[];
    loading: boolean;
    eventCome: string;

    getEvents: { (): void };
    setEvent: { (event: any): void };
    updateEvent: { (event: any, key: string): void };
    deleteEvent: { (key: string): void };

    _eventTime: { (): void };
}