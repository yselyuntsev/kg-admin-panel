/* Import components */
import RAlert from '@/components/Alert'
import RButton from '@/components/Button'
import RCard from '@/components/Card'
import RInputField from '@/components/InputField'
import RKeys from '@/components/Keys'

/* Import services */
import Api from '@/services/ApiService'

/* Import other helpers */
import Router from '@/router'

export default {
  components: {
    RAlert,
    RButton,
    RCard,
    RInputField,
    RKeys
  },

  data () {
    return {
      keys: []
    }
  },

  created () {
    Api.check()
  },

  async mounted () {
    try {
      this.keys = (await Api.getKeys()).data.data.keys
    } catch (error) {
      this.$refs.alert.open('Ошибка загрузки ключей', 'error_outline')
    }
  },

  methods: {
    openKey (data) {
      Router.push(`/keys/${data.id}/edit`)
    }
  }
}
