export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d893aaf682e3736fabaa63f',
                  title: 'Sanity Studio',
                  name: 'mozaik-studio',
                  apiId: '8e3ca008-c0b3-4415-a9b0-9b8d5e5d99a3'
                },
                {
                  buildHookId: '5d893aaf4857ce57eb572911',
                  title: 'Portfolio Website',
                  name: 'mozaik',
                  apiId: 'a5a1a52e-10d3-4586-8046-55a2155ca88d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ahzorek/mozaik',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://mozaik.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
