import dataItem from './DataItemModel'


export default interface TabModel {

    eventData: dataItem[];
    activeTab: string;

    setTabAll: { (): void };
    setTabDay: { (): void };
    setTabMonth: { (): void };
    setTabYear: { (): void };

    _updateStore: { (): void };
}