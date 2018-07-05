/* Import components */
import RAlert from '@/components/Alert'
import RButton from '@/components/Button'
import RCard from '@/components/Card'
import RColor from '@/components/Color'
import RInputField from '@/components/InputField'

/* Import services */
import Api from '@/services/ApiService'

/* Import other helpers */
import Router from '@/router'

export default {
  components: {
    RAlert,
    RButton,
    RCard,
    RColor,
    RInputField
  },

  data () {
    return {
      key: {}
    }
  },

  created () {
    Api.check()
  },

  methods: {
    async createKey () {
      try {
        await Api.createKey({...this.key})
        Router.back()
      } catch (error) {
        this.$refs.alert.open('Ошибка создания ключа', 'error_outline')
      }
    }
  }
}
