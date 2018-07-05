export default {
  data () {
    return {
      username: sessionStorage.getItem('username') || 'configuration'
    }
  }
}
