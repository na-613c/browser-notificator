import React, { FunctionComponent } from 'react';
import DateTab from './DateTab/DateTab';
import StoreT from '../../models/StoreModel';
import { Tabs } from 'antd';
import { Typography } from 'antd';
import { observer } from 'mobx-react';

const { Title } = Typography;
const { TabPane } = Tabs;

type Props = { store: StoreT };

const DisplayTypeTab: FunctionComponent<Props> = ({ store }) => {

  return (
    <div className="card-container">
      <Title level={2}>Выберите тип отображения</Title>

      {store.isEditMode ? 'editMode ' : 'noEditMode '}

      <Tabs
        defaultActiveKey="1"
        onChange={(activeKey) => {
          switch (activeKey) {
            case '1':
              return store.setTabDay();
            case '2':
              return store.setTabMonth();
            default:
              return store.setTabYear();
          }
        }}>
        <TabPane tab="День" key="1">
          <DateTab store={store} />
        </TabPane>
        <TabPane tab="Месяц" key="2">
          <DateTab store={store} />
        </TabPane>
        <TabPane tab="Год" key="3">
          <DateTab store={store} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default observer(DisplayTypeTab);
