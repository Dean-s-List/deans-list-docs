/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars = {
  

  docs: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'Getting Started/dean-dao',
        'Getting Started/purpose-and-goals',
        
        // other items...
      ],
    },

    {
      type: 'category',
      label: 'Governance Structure',
      items: [
        'Governance Structure/Governance-model',
        'Governance Structure/proposals',
        'Governance Structure/voting',
        'Governance Structure/decision-making',
        // other items...
      ],
    },

    {
      type: 'category',
      label: 'Member Onboarding',
      items: [
        'Member Onboarding/On-boarding-Process',
        'Member Onboarding/Buisness-Visa-Program',
        'Member Onboarding/Contrbution Guidlines',
        // other items...
      ],
    },
    
    {
    type: 'category',
    label: 'Operational Framework',
    items: [
      'Operational Framework/intro',
      // other items...
    ],
    },

    {
      type: 'category',
      label: 'Resources',
      items: [
        'Resources/Literature',
        // other items...
      ],
    },
  ],

  
};

module.exports = sidebars;
