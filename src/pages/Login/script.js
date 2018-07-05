/* Import components */
import RAlert from '@/components/Alert'
import RButton from '@/components/Button'
import RInputField from '@/components/InputField'
import RLogo from '@/components/Logo'

/* Import services */
import Api from '@/services/ApiService'

/* Import other helpers */
import Router from '@/router/index'

export default {
  components: {
    RAlert,
    RButton,
    RInputField,
    RLogo
  },

  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    async auth () {
      event.preventDefault()
      try {
        sessionStorage.setItem('authorization-token', (await Api.auth(this.username, this.password)).data.data.token)
        sessionStorage.setItem('username', this.username)
        Router.push('/')
      } catch (error) {
        this.$refs.alert.open('Ошибка имени пользователя/пароля!', 'error_outline')
      }
    }
  }
}
