import React, { FunctionComponent } from 'react';
import EventList from './EvenList/EventList';
import { Tabs } from 'antd';
import { observer } from 'mobx-react';
import ModalServiceModel from '../../../models/ModalServiceModel';
import TabModel from '../../../models/TabServiceModel';
import EventServiceModel from '../../../models/EventServiceModel';

const { TabPane } = Tabs;

type Props = {
  eventService: EventServiceModel;
  tabService: TabModel;
  modalService: ModalServiceModel;
};

const DateTab: FunctionComponent<Props> = ({ eventService, modalService, tabService }) => {
  let dateTab = tabService.eventData.map((e, id) => {
    return (
      <TabPane tab={e.title} key={id}>
        <EventList event={e.event} eventService={eventService} modalService={modalService} />
      </TabPane>
    );
  });

  if (!dateTab.length)
    dateTab = [
      <TabPane tab="Нет данных" key={1}>
        <EventList event={[]} eventService={eventService} modalService={modalService} />
      </TabPane>,
    ];
  return <Tabs defaultActiveKey="0">{dateTab}</Tabs>;
};

export default observer(DateTab);
