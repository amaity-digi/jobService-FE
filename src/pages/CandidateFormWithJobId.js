// Packages
import React from 'react'
import { useParams, withRouter } from 'react-router-dom'

// View
import CandidateFormWithJobIdComponenet from '../components/Admin/CandidateForm'
import { PageTitle } from '../components/atoms/page-title/page-title'

function CandidateFormWithJobId() {
  const { jobId, jobTitle } = useParams();
  console.log(jobId,'shhs');
  return (
    <div className='edit_candidate_wrapper'>
      <PageTitle>Candidate Page</PageTitle>
      <CandidateFormWithJobIdComponenet jobId={jobId} jobTitle={jobTitle}/>
      
    </div>
  )
}

export default withRouter(CandidateFormWithJobId)
