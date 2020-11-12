import React, { FunctionComponent } from 'react';
import { Switch } from 'antd';


type Props = { setEditMode: { (): void } };

const ModController: FunctionComponent<Props> = ({ setEditMode }) => {
  return <Switch defaultChecked onChange={() => setEditMode()} />;
};

export default ModController;
