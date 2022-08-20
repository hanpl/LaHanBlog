// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/assets/css/main.css')
import DefaultLayout from '~/layouts/Default.vue'
import GlobalMixin from '~/mixins/GlobalMixin'
import Fuse from 'fuse.js'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.mixin(GlobalMixin)

  Vue.prototype.$search = function (term, list, options) {
    return new Promise(function (resolve, reject) {
      const run = new Fuse(list, options)
      const results = run.search(term)
      resolve(results)
    })
  }
   
  // Add vue filter to capitalise the first letter of each word
  Vue.filter('capitalise', function (value) {
    let output = []
    value.split(' ').forEach(word => {
      output.push(
        word.charAt(0).toUpperCase() +
        word.slice(1).toLowerCase()
      )
    })
    return output.join(' ')
  }
)
}
