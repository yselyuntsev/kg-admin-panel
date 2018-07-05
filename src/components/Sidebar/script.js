/* Import nested components */
import RLogo from '@/components/Logo'
import RNav from '@/components/Nav'
import RNavLabel from '@/components/NavLabel'
import RNavLink from '@/components/NavLink'
import RUser from '@/components/User'

/* Import services */
import Api from '@/services/ApiService'

export default {
  components: {
    RLogo,
    RNav,
    RNavLabel,
    RNavLink,
    RUser
  },

  computed: {
    user () {
      return sessionStorage.getItem('username')
    }
  },

  methods: {
    logout () {
      return Api.logout()
    }
  }
}
