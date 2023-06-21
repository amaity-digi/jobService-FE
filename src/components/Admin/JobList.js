import React, { useEffect, useState } from 'react';
import { request } from '../../services/request';
import { Card, Spin, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const JobList = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    fetchJobPosts();
  }, []);

  const fetchJobPosts = async () => {
    setIsLoading(true);

    try {
      const response = await request('/job');

      if (response && response.data) {
        setJobPosts(response.data);
      } else {
        console.error('Error fetching posts:', response);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }

    setIsLoading(false);
  };

  const applyJob = async (id) => {

    try {
      const res = await request(`/job/${id}`);
      console.log(res.data,'dataaaa')
      setJobData(res.data);
    } catch (error) {
      console.log('Failed to fetch',error)
    }
  };

  return (
    <div>
      <Spin spinning={isLoading}>
        <Row gutter={[16, 16]}>
          {jobPosts.map((post) => (
            <Col span={8} key={post.id}>
              <Card
                title={post.jobTitle }
                style={{
                  marginBottom: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <center>
                <div style={{ flex: '1 0 auto' }}>

                <p>Job ID: {post.id}</p>
                 <p>Skill Set: {post.skillSet}</p>
                  <p>Location: {post.location}</p>
                  <p>Experience Range: {post.minimumAndMaximumExprience}</p>
                  <p>Salary Range: {post.minimumAndMaximumSalary}</p>
                  <p>Number of Positions Available: {post.numberOfPositionsAvaiable}</p>
                  <p>Open to Vendors: {post.openForVendors ? 'Yes' : 'No'}</p>
                  <p>Internal: {post.internal ? 'Yes' : 'No'}</p>
                  <p>Interviewer Panel: {post.interviewerPanel.map(interviewer => interviewer.interviewerName).join(', ')}</p>
                  <p>Recruiter Assigned: {post.recurtierAssigned.map(interviewer => interviewer.interviewerName).join(', ')}</p>
                  <p>Work Type: {post.workType}</p>
                  <p>Job Description: {post.jobDescription}</p>
                 
                </div>
                </center>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
<Link to={{
  pathname: `/admin/candidateCreate/${post.id}`,
  state: { jobTitle: post.jobTitle, skillSet: post.skillSet }
}}>
  <Button type="primary" onClick={() => applyJob(post.id)}>
    Apply Job
  </Button>
</Link>

</div>
              </Card>
            </Col>
          ))}
        </Row>
      </Spin>
    </div>
  );
};

export default JobList;