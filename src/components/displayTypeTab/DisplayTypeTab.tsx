import React, { FunctionComponent, Component } from 'react';
import DateTab from './DateTab/DateTab';
import StoreT from '../../models/StoreModel';
import { Tabs } from 'antd';
import { Typography } from 'antd';
import { observer } from 'mobx-react';

const { Title } = Typography;
const { TabPane } = Tabs;

type Props = { store: StoreT };

class DisplayTypeTab extends React.Component<Props> {
  

  render() {
    return (
      <div className="card-container">
        <Title level={2}>Выберите тип отображения</Title>
        <Tabs
          defaultActiveKey="1"
          onChange={(activeKey) => {
            switch (activeKey) {
              case '1':
                return this.props.store.setTabDay();
              case '2':
                return this.props.store.setTabMonth();
              default:
                return this.props.store.setTabYear();
            }
          }}>
          <TabPane tab="День" key="1">
            <DateTab store={this.props.store} />
          </TabPane>
          <TabPane tab="Месяц" key="2">
            <DateTab store={this.props.store} />
          </TabPane>
          <TabPane tab="Год" key="3">
            <DateTab store={this.props.store} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default observer(DisplayTypeTab);
