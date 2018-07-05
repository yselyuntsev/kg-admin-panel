/* Import components */
import RAlert from '@/components/Alert'
import RButton from '@/components/Button'
import RCard from '@/components/Card'
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
    RInputField
  },

  data () {
    return {
      unit: { parent_id: this.$route.params.id }
    }
  },

  created () {
    Api.check()
  },

  methods: {
    async createUnit () {
      try {
        await Api.createUnit({...this.unit})
        Router.back()
      } catch (error) {
        this.$refs.alert.open('Невозможно создать подразделение', 'error_outline')
      }
    }
  }
}
