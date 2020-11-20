import eventT from './EventModel'

export default interface EventServiceModel {

    events: eventT[];
    loading: boolean;
    currentEvents: string[];

    getEvents: { (): void };
    setEvent: { (event: any): void };
    updateEvent: { (event: any, key: string): void };
    deleteEvent: { (key: string): void };

    removePastEvent: { (): void };
    _eventTime: { (): void };
}