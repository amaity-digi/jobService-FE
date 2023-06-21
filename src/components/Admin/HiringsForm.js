import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'antd/lib/form/Form';
import { Form, Input, Select, Button, InputNumber, Row, Col, message, Layout, Switch, DatePicker, Radio } from 'antd';
import { request, requestPost } from '../../services/request';
import { skillSet,jobTitle,locations } from '../../Constants/constants';
import { getFromLocal } from '../../utils/storage/index';
import CandidateForm from './CandidateForm';

const { TextArea } = Input;
const { Option } = Select;
const { Content } = Layout;

const HiringsForm = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [interviewerPanelData, setInterviewerPanelData] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchInterviewerPanelData = async () => {
      try {
        const res = await request('/interviewer/selectors');
        setInterviewerPanelData(res.data);
        console.log(res.data,'resssss');
      } catch (error) {
        console.error(error);
        message.error('Failed to fetch interviewer panel data');
      }
    };

    fetchInterviewerPanelData();
  }, []);

  const renderOptions = (data) => {
    return (
      data &&
      data.map((value, index) => {
        const { id, interviewerName, interviewerEmail } = value;
        return (
          <Option key={id} value={JSON.stringify(value)}>
            {interviewerName} - {interviewerEmail}
          </Option>
        );
      })
    );
  };

  const onFinish = async (values) => {
    const { minimumSalary, maximumSalary, minimumExperience, maximumExperience, ...restValues } = values;
    setIsLoading(true);
    const { jobTitle } = values;
      // Convert skillSet array to a comma-separated string
        const skillSetString = values.skillSet.join(",");
    // Convert interviewerPanel value to an object
    const interviewerPanel = values.interviewerPanel ? [JSON.parse(values.interviewerPanel)] : [];
    const recurtierAssigned = values.recurtierAssigned ? [JSON.parse(values.recurtierAssigned)] : [];
   // const isInternal = values.isInternal === 'yes';
    // Update the values object with the converted array
    const updatedValues = {
      ...values, skillSet: skillSetString,
      location: values.location.join(","), 
      interviewerPanel,
      recurtierAssigned,
      minimumAndMaximumSalary: `${minimumSalary} - ${maximumSalary}`,
      minimumAndMaximumExprience: `${minimumExperience} - ${maximumExperience}`,
    //  isInternal: isInternal,
    };
  
    try {
      const response = await requestPost('/job', updatedValues);
  
      if (response.status === 200) {
        message.success('Job created successfully');
        form.resetFields();
      } else {
        message.error('Failed to create job');
      }
    } catch (error) {
      console.error(error);
      message.error('An error occurred. Please try again.');
    } 
    setIsLoading(false);
  };

  const handleDateChange = (date, dateString, field) => {
    form.setFieldsValue({ [field]: date });
  };

  const handleChange = () => {};

  const handleSkillsChange = (selectedSkills) => {
    const skillsString = selectedSkills.join(',');
    setSkills(skillsString);
  };


  // Save the interviewer panel data
  const saveInterviewerPanelData = async (data) => {
    try {
      const formattedData = data.map((item) => ({
        _id: item._id,
        interviewerName: item.interviewerName,
        interviewerEmail: item.interviewerEmail,
        interviewerPassword: item.interviewerPassword,
        selector: item.selector,
        hr: item.hr,
        admin: item.admin,
        externalUser: item.externalUser,
      }));
  
      const response = await requestPost('/interviewer/panel', formattedData);
      if (response.status === 200) {
        // message.success('Interviewer panel data saved successfully');
      } else {
        message.error('Failed to save interviewer panel data');
      }
    } catch (error) {
      console.error(error);
      message.error('An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    saveInterviewerPanelData(interviewerPanelData);
  }, [interviewerPanelData]);

  return (
    <Content>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Row gutter={24}>
          <Col span={12}>
          <Form.Item
              name='jobTitle'
              label='Job Title'
              rules={[
                {
                  required: true,
                  message: 'Please enter Job Title!',
                  whitespace: true,
                  max: 50
                }
              ]}
            >
              <Select allowClear options={jobTitle} />
            </Form.Item>
          </Col>
        
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              name='location'
              label='Location'
              tooltip="Select multiple"
              rules={[
                {
                  required: true,
                  message: 'Select location' ,
                }
              ]}
            >
              <Select allowClear options={locations} mode='multiple'/>
            </Form.Item>
          </Col>
         
        </Row>
        
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item label="Number of Positions Available" name="numberOfPositionsAvaiable" rules={[{ required: true, message: 'Please enter the number of positions available' }]}>
              <InputNumber min={0} type='number'/>
            </Form.Item>
          </Col>
         
        </Row>
       
        <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="Minimum Salary"
                name="minimumSalary"
                rules={[
                  {
                    required: true,
                    message: 'Please enter the minimum salary',
                  },
                ]}
              >
                <InputNumber type="number"  min='0' step='1'/>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Maximum Salary"
                name="maximumSalary"
                rules={[
                  {
                    required: true,
                    message: 'Please enter the maximum salary',
                  },
                ]}
              >
                <InputNumber type="number"  min='0' step='1'/>
              </Form.Item>
            </Col>
          </Row>

                
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="Minimum Experience"
                name="minimumExperience"
                rules={[
                  {
                    required: true,
                    message: 'Please enter the minimum experience',
                  },
                ]}
              >
                <InputNumber type="number"  min='0' step='1'/>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Maximum Experience"
                name="maximumExperience"
                rules={[
                  {
                    required: true,
                    message: 'Please enter the maximum experience',
                  },
                ]}
              >
                <InputNumber type="number"  min='0' step='1'/>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
        <Col span={12}>
          <Form.Item label="Recruiter Assigned" name="recurtierAssigned" rules={[{ required: true, message: 'Please enter the assigned recruiter' }]}>
          <Select mode='multiple' onChange={handleChange} allowClear>
               {renderOptions(interviewerPanelData || [])}
             </Select>

      

            </Form.Item>
       
            </Col>
        </Row>

        <Col span={12}>
        <Form.Item
  label="Is Internal"
  name="internal"
  rules={[{ required: true }]}
>
<Radio.Group defaultValue="yes">
  <Radio value="true">Yes</Radio>
  <Radio value="false">No</Radio>
</Radio.Group>
</Form.Item>
          </Col>


        <Row gutter={24}>
        <Col span={12}>
            {getFromLocal('external') !== 'true' && (
             <Form.Item  label="Interviewer Panel" name="interviewerPanel">
             <Select mode='multiple' onChange={handleChange} allowClear>
               {renderOptions(interviewerPanelData || [])}
             </Select>
           </Form.Item>
            )}
          </Col>
          <Col span={12}>
            <Form.Item label="Open for Vendors" name="openForVendors" valuePropName="checked">
              <Switch />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
                 <Form.Item
              name='skillSet'
              label='Skill Sets'
              tooltip='Select multiple'
              rules={[
                {
                  required: true,
                  message: 'Please select at least one Skill Set',
                },
              ]}
            >
              <Select
                mode="tags"
                placeholder="Please select at least one Skill Set"
                options={skillSet}
                onChange={handleSkillsChange}
               
              />
            </Form.Item>

          </Col>
          <Col span={12}>
            <Form.Item
  label="Work Type"
  name="workType"
  rules={[{ required: true, message: 'Please select the work type' }]}
>
  <Radio.Group>
    <Radio value="Work From Home">Work From Home</Radio>
    <Radio value="Hybrid">Hybrid</Radio>
    <Radio value="Onsite">Onsite</Radio>
  </Radio.Group>
</Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item label="Starting Date of Hiring" name="startingDateOfHiring" rules={[{ required: true, message: 'Please select the starting date of hiring' }]}>
              <DatePicker onChange={(date, dateString) => handleDateChange(date, dateString, 'startingDateOfHiring')} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Ending Date of Hiring" name="endingDateOfHiring" rules={[{ required: true, message: 'Please select the ending date of hiring' }]}>
              <DatePicker onChange={(date, dateString) => handleDateChange(date, dateString, 'endingDateOfHiring')} />
            </Form.Item>
          </Col>
        </Row>

        <Col span={12}>
            <Form.Item label="Job Description" name="jobDescription" rules={[{ required: true, message: 'Please enter a job description' }]}>
              <TextArea rows={4} />
            </Form.Item>
          </Col>

        <Row gutter={24}>
          <Col span={24}>
            <Form.Item wrapperCol={{ span: 24 }}>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Content>
  );
};

export default HiringsForm;
