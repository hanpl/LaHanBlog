// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addMetadata, addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    addMetadata('siteName', 'AnKhueTech')
    addMetadata('siteTitle', 'Chia sẻ công nghệ - phục vụ cuộc sống')
    addMetadata('siteAuthor', 'tanduongbk@gmail.com')
    addMetadata('siteAuthorUrl', 'tanduongbk@gmail.com')
    addMetadata('archive_title', 'ankhuetech')
    addMetadata('archive_text', 'ankhuetech')

    const category = addCollection('Category')
    category.addReference('categories', 'Category')
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
