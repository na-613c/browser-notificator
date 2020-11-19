import eventT from './EventModel'

export default interface ModalServiceModel {
    isEditMode: boolean;
    showModal: {
        event: eventT;
        isShowData?: boolean;
        isShowModal: boolean;
    };
    addModal: { (): void };
    updModal: { (event: eventT): void };
    setModal: { (): void };
    setEditMode: { (): void };

}