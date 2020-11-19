import React, { FunctionComponent } from 'react';
import ModalServiceModel from '../../../models/ModalServiceModel';
import AddForm from './AddForm/AddForm';
import UpdForm from './UpdForm/UpdForm';

type Props = { form: any; modalService: ModalServiceModel };

const EventForm: FunctionComponent<Props> = ({ form, modalService }) => {
  let isShow = modalService.showModal.isShowData;

  return (
    <>{isShow ? <UpdForm form={form} modalService={modalService} /> : <AddForm form={form} />}</>
  );
};

export default EventForm;
