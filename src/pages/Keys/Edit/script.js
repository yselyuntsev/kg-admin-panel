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

  async mounted () {
    try {
      this.key = (await Api.getKeyById(this.$route.params.id)).data.data.key
    } catch (error) {
      this.$refs.alert.open('Ошибка загрузки ключа', 'error_outline')
    }
  },

  methods: {
    async updateKey () {
      try {
        await Api.updateKey({...this.key})
        Router.back()
      } catch (error) {
        this.$refs.alert.open('Ошибка обновления ключа', 'error_outline')
      }
    },

    async deleteKey () {
      try {
        await Api.deleteKey(this.key.id)
        Router.back()
      } catch (error) {
        this.$refs.alert.open('Ошибка удаления ключа', 'error_outline')
      }
    }
  }
}
