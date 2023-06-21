import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import HiringsForm from './HiringsForm';
import JobList from './JobList';

const { TabPane } = Tabs;

const HiringForm = () => {
  const history = useHistory();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    const storedTab = localStorage.getItem('activeTab');
    return storedTab ? storedTab : '1';
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tab = queryParams.get('tab');
    if (tab && ['1', '2'].includes(tab)) {
      setActiveTab(tab);
      localStorage.setItem('activeTab', tab);
    }
  }, [location]);

  const handleTabChange = (key) => {
    setActiveTab(key);
    history.push(`?tab=${key}`);
    localStorage.setItem('activeTab', key);
  };

  return (
    <Tabs activeKey={activeTab} onChange={handleTabChange}>
      <TabPane tab={<span>Hiring Form</span>} key="1">
        <HiringsForm />
      </TabPane>
      <TabPane tab={<span>View Jobs</span>} key="2">
        <JobList />
      </TabPane>
    </Tabs>
  );
};

export default HiringForm;
