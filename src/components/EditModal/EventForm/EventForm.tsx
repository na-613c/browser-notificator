import React, { FunctionComponent } from 'react';
import StoreT from '../../../models/StoreModel';
import AddForm from './AddForm/AddForm';
import UpdForm from './UpdForm/UpdForm';

type Props = { store: StoreT; form: any };

const EventForm: FunctionComponent<Props> = ({ store, form }) => {
  let isShow = store.showModal.isShowData;

  return <>{isShow ? <UpdForm store={store} form={form} /> : <AddForm form={form} />}</>;
};

export default EventForm;
