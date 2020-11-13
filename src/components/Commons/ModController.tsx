import React, { FunctionComponent } from 'react';
import { Switch, Button } from 'antd';
import { observer } from 'mobx-react';
import { Row, Col } from 'antd';

import StoreT from '../../models/StoreModel';

type Props = { store: StoreT };

const ModController: FunctionComponent<Props> = ({ store }) => {
  return (
    <Row justify="center">
      <Col span={4}>
        <Switch defaultChecked onChange={() => store.setEditMode()} />
      </Col>
      <Col span={4}>
        {store.isEditMode && (
          <Button type="primary" onClick={() => store.setModal()}>
            Добавить новое событие
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default observer(ModController);
