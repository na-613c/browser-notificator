import React, { FunctionComponent } from 'react';
import StoreT from '../../models/StoreModel';
import { Switch } from 'antd';

function onChange(checked: boolean) {
  console.log(`switch to ${checked}`);
}

type Props = { setEditMode: { (): void } };

const ModController: FunctionComponent<Props> = ({ setEditMode }) => {
  return <Switch defaultChecked onChange={() => setEditMode()} />;
};

export default ModController;
