require('es6-promise').polyfill()

// CSRFHelper = require('./components/shared/CSRFHelper')

let axios = require('axios')
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.headers.common['X-CSRF-Token'] = CSRFHelper.token()

axios.defaults.validateStatus = (status) => {
  if (status == 401) {
    window.alert('Due to a long period of inactivity, you have been logged out.')
    window.location.pathname = '/'
  }
  status >= 200 && status < 300
}

// let injectTapEventPlugin = require('react-tap-event-plugin')
// injectTapEventPlugin()

let request = require('superagent')
