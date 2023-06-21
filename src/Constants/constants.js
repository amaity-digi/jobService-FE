export const microsoftLoginPath =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjZmY1NzIyIiBkPSJNNiA2SDIyVjIySDZ6IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDE0IDE0KSI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0Y2FmNTAiIGQ9Ik0yNiA2SDQyVjIySDI2eiIgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCAzNCAxNCkiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZjMTA3IiBkPSJNMjYgMjZINDJWNDJIMjZ6IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDM0IDM0KSI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwM2E5ZjQiIGQ9Ik02IDI2SDIyVjQySDZ6IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDE0IDM0KSI+PC9wYXRoPjwvc3ZnPg=='
export const Auth = {
  authority: 'https://login.microsoftonline.com/digisprint.com',
  clientId: 'ba6f6865-88a9-43b7-ac2b-b002b3168225'
}

export const stepStatus = {
  Applied: 'finish ',
  NotShortListed: 'error',
  NotSelectedRound1: 'error',
  NotSelectedRound2: 'error',
  RejectedOffer: 'error',
  NotOffered: 'error',
  Absconded: 'error',
  NotJoined: 'error',
  AdminReject: 'error'
}
export const UpcomingStatusTitle = {
  Applied: 'Waiting for selection',
  ShortListed: 'Waiting to Schedule round 1',
  ScheduleRound1: 'Awaiting for round 1 feedback',
  SelectedRound1: 'Waiting to schedule round 2',
  RescheduleRound1: 'Awaiting for round 1 feedback',
  ScheduleRound2: 'Awaiting for round 2 feedback',
  RescheduleRound2: 'Awaiting for round 2 feedback',
  SelectedRound2: 'Waiting to schedule HR round',
  NotShortListed: 'Not Shortlisted',
  NotSelectedRound1: 'Not selected in round 1',
  ScheduledHr: 'Awaiting for HR Feedback',
  RescheduledHr: 'Awaiting for HR Feedback',
  Offered: 'Awaiting to accept/reject offer',
  NotSelectedRound2: 'Not selected in Round 2',
  RejectedOffer: 'Rejected Offer',
  NotOffered: 'Not Offered',
  AcceptedOffer: 'Waiting to Join',
  Joined: 'Joined',
  OfferDeclined: 'Offer Declined',
  NotJoined: 'Not Joined',
  Absconded: 'Absconded',
  ReEvaluateRound1: "Waiting to Reschedule Round 1",
  ReEvaluateRound2: "Waiting to Reschedule Round 2",
  ReEvaluateRoundHr: "Waiting to Reschedule Round HR"
}

export const HistoryStatusTitle = {
  Applied: 'Applied',
  ShortListed: 'ShortListed',
  ScheduleRound1: 'Scheduled Round 1',
  RescheduleRound1: 'Rescheduled Round 1',
  SelectedRound1: 'Selected Round 1',
  ScheduleRound2: 'Scheduled Round 2',
  RescheduleRound2: 'Rescheduled Round 2',
  SelectedRound2: 'Selected Round 2',
  NotShortListed: 'Not Shortlisted',
  NotSelectedRound1: 'Not selected in round 1',
  ScheduledHr: 'Scheduled HR Round',
  RescheduleHr: 'Rescheduled HR Round',
  Offered: 'Offered',
  NotSelectedRound2: 'Not selected in Round 2',
  RejectedOffer: 'Rejected Offer',
  NotOffered: 'Not Offered',
  AcceptedOffer: 'Accepted Offer',
  Joined: 'Joined',
  OfferDeclined: 'Offer Declined',
  NotJoined: 'Not Joined',
  Absconded: 'Absconded',
  ReEvaluateRound1: "Re-Evaluate Round 1",
  ReEvaluateRound2: "Re-Evaluate Round 2",
  ReEvaluateRoundHr: "Re-Evaluate Round HR"
}

export const skillSet = [
  {
    value: "javascript",
    label: "Javascript"
  },
  {
    value: "node",
    label: "Node"
  },
  {
    value: "html",
    label: "Html"
  },
  {
    value: "css",
    label: "Css"
  },
  {
    value: "react",
    label: "React"
  },
  {
    value: "next",
    label: "Next"
  },
  {
    value: "java",
    label: "Java"
  },
  {
    value: "atg",
    label: "Atg"
  }
]

export const locations = [
  {
    value: "delhi",
    label: "Delhi"
  },
  {
    value: "mumbai",
    label: "Mumbai"
  },
  {
    value: "hyderabad",
    label: "Hyderabad"
  },
  {
    value: "bangalore",
    label: "Bangalore"
  },
  {
    value: "pune",
    label: "Pune"
  },
  {
    value: "chennai",
    label: "Chennai"
  }
];

export const jobTitle = [
  {
    label: 'Development',
    options: [
      { label: 'Junier Software Engineer', value: 'Junier Software Engineer' },
      { label: 'Senier Software Engineer', value: 'Senier Software Engineer' },
      { label: 'Full-stack Developer', value: 'Full-stack Developer' },
      { label: 'Front-end Developer', value: 'Front-end Developer' },
      { label: 'Back-end Developer', value: 'Back-end Developer' },
      { label: 'Mobile Developer', value: 'Mobile Developer' },
      { label: 'DevOps Engineer', value: 'DevOps Engineer' },
      { label: 'Database Developer/Administrator', value: 'Database Developer/Administrator' }
    ],
  },
  {
    label: 'Quality Assurance',
    options: [
      { label: 'QA Engineer', value: 'qa-engineer' },
      { label: 'Test Automation Engineer', value: 'test-automation-engineer' },
      { label: 'Test Manager', value: 'test-manager' },
      { label: 'Quality Manager', value: 'quality-manager' },
      { label: 'Release Manager', value: 'release-manager' }
    ],
  },
  {
    label: 'Project Management',
    options: [
      { label: 'Project Manager', value: 'project-manager' },
      { label: 'Scrum Master', value: 'scrum-master' },
      { label: 'Product Owner', value: 'product-owner' },
      { label: 'Agile Coach', value: 'agile-coach' },
      { label: 'Program Manager', value: 'program-manager' }
    ],
  },
  {
    label: 'Design',
    options: [
      { label: 'UX Designer', value: 'ux-designer' },
      { label: 'UI Designer', value: 'ui-designer' },
      { label: 'Graphic Designer', value: 'graphic-designer' },
      { label: 'Web Designer', value: 'web-designer' }
    ],
  },
  {
    label: 'Data Science',
    options: [
      { label: 'Data Scientist', value: 'data-scientist' },
      { label: 'Data Analyst', value: 'data-analyst' },
      { label: 'Machine Learning Engineer', value: 'machine-learning-engineer' },
      { label: 'Business Intelligence Analyst', value: 'business-intelligence-analyst' }
    ],
  },
  {
    label: 'Sales and Marketing',
    options: [
      { label: 'Sales Engineer', value: 'sales-engineer' },
      { label: 'Account Manager', value: 'account-manager' },
      { label: 'Marketing Manager', value: 'marketing-manager' },
      { label: 'Product Marketing Manager', value: 'product-marketing-manager' },
      { label: 'Technical Writer', value: 'technical-writer' },
      { label: 'Content Strategist', value: 'content-strategist' }
    ],
  }
]

