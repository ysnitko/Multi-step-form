export const steps = [
  { step: 1, chapter: 'YOUR INFO', stepHeader: 'STEP 1' },
  { step: 2, chapter: 'SELECT PLAN', stepHeader: 'STEP 2' },
  { step: 3, chapter: 'ADD-ONS', stepHeader: 'STEP 3' },
  { step: 4, chapter: 'SUMMARY', stepHeader: 'STEP 4' },
];

export const addons = [
  {
    id: 1,
    title: 'Online service',
    cost_mo: '1',
    cost_yr: '10',
    requirements: 'Access to multiplayer games',
  },
  {
    id: 2,
    title: 'Larger storage',
    cost_mo: '2',
    cost_yr: '20',
    requirements: 'Extra 1TB of cloud save',
  },
  {
    id: 3,
    title: 'Custimixable Profile',
    cost_mo: '2',
    cost_yr: '20',
    requirements: 'Custom theme on oyur profile',
  },
];

export const programs = [
  {
    id: '1',
    title: 'Arcade',
    cost_mo: '9',
    cost_yr: '90',
  },
  {
    id: '2',
    title: 'Advanced',
    cost_mo: '12',
    cost_yr: '120',
  },
  {
    id: '3',
    title: 'Pro',
    cost_mo: '15',
    cost_yr: '150',
  },
];

export const inputs = [
  {
    id: 1,
    name: 'username',
    type: 'text',
    placeholder: 'e.g. Stephen King',
    label: 'Name',
    errorMessage: 'Incorrect name',
    pattern: '^[a-zA-Z]{3,16}$',
    required: true,
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'e.g stephenking@lorem.com',
    label: 'Email Address',
    errorMessage: 'Incorrect e-mail address',
    required: true,
  },
  {
    id: 3,
    name: 'phone',
    type: 'text',
    placeholder: 'e.g. +1234567890',
    label: 'Phone Number',
    errorMessage: 'Incorrect phone number',
    pattern: '^[+][0-9]{3,16}$',
    required: true,
  },
];
