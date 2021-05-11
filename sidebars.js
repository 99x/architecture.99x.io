module.exports = {
  docs: [
    'why-architecture',
    'role-of-architect',
    {
        type: 'category',
        label : 'Our Process',
        collapsed:true,
        items : [ 
          'our-process/product-architecture',
          'our-process/continuous-architecture',
          'our-process/product-health',
          'our-process/due-diligence'
        ]
    },
    {
      type: 'category',
      label : 'Focus Areas',
      collapsed:true,
      items : [ 
        'focus-areas/web-application',
        'focus-areas/cloud-architecture',
        'focus-areas/devops',
        'focus-areas/secops'
      ]
    }
  ]
};
