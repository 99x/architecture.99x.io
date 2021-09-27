module.exports = {
  docs: [
    'architecture-at-99x',
    'arthitecture-process',
    '99x-well-architected-framework',
    {
      type: 'category',
      label: 'Architecture Assessment',
      collapsed: true,
      items: [
        'architecture-assessment/health-review',
        'architecture-assessment/due-diligence-process',   
        'architecture-assessment/security-assessment'
      ]
    },
    {
      type: 'category',
      label: 'Architecture Artifacts',
      collapsed: true,
      items: [
        'templates/introduction',
        'templates/decision-logs',
        'templates/meeting-minutes',
        'templates/health-checklist',
        'templates/security-checklist',
        'templates/diagram-samples',
      ]
    }
    // {
    //   type: 'category',
    //   label : 'Focus Areas',
    //   collapsed:true,
    //   items : [ 
    //     'focus-areas/web-application',
    //     'focus-areas/cloud-architecture',
    //     'focus-areas/devops',
    //     'focus-areas/secops'
    //   ]
    // },
    // {
    //   type: 'category',
    //   label : 'Case Studies',
    //   collapsed:true,
    //   items : [ 
    //     'case-studies/design-system',
    //     'case-studies/microservices',
    //     'case-studies/microfrontends',
    //     'case-studies/serverless',
    //     'case-studies/multi-tenancy',
    //   ]
    // }
  ]
};
