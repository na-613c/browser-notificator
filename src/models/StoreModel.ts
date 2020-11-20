import ModalServiceModel from './ModalServiceModel'
import TabModel from './TabServiceModel'
import EventServiceModel from './EventServiceModel'


export default interface StoreT {
    tabService: TabModel;
    modalService: ModalServiceModel;
    eventService: EventServiceModel;
}