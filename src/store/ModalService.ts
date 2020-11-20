import initValue from './InitValue'
import eventT from '../models/EventModel'
import { makeAutoObservable } from 'mobx';


class ModalService {

    constructor() {
        makeAutoObservable(this)
    };

    isEditMode: boolean = true;

    showModal: {
        event: eventT,
        isShowData?: boolean,
        isShowModal: boolean,
    } = { isShowModal: false, event: initValue }

    setModal = () => {
        this.showModal = {
            ...this.showModal,
            isShowData: false,
            isShowModal: !this.showModal.isShowModal,
        }
    };

    addModal = () => {
        this.showModal = {
            ...this.showModal,
            isShowData: false,
            isShowModal: true,
        }
    };

    updModal = (event: eventT) => {
        this.showModal = {
            event: {...event},
            isShowData: true,
            isShowModal: true,
        }
    };

    setEditMode = () => {
        this.isEditMode = !this.isEditMode
    };

}


export default ModalService;