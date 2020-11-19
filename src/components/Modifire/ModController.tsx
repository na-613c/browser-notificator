import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react';
import { Row, Col, Switch, Button } from 'antd';

import ModalServiceModel from '../../models/ModalServiceModel';

type Props = { modalService: ModalServiceModel };

const ModController: FunctionComponent<Props> = ({ modalService }) => {
  return (
    <Row justify="center" align="middle">
      <Col xs={16} sm={12} md={12} lg={8} xl={4} xxl={4}>
        <div style={{ marginBottom: 8 }}>
          <p>Режим редактирования</p>
          <Switch defaultChecked onChange={() => modalService.setEditMode()} />
        </div>
      </Col>
      <Col xs={16} sm={12} md={12} lg={8} xl={4} xxl={4}>
        {modalService.isEditMode && (
          <Button type="primary" onClick={() => modalService.addModal()}>
            Добавить новое событие
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default observer(ModController);
