/* Import components */
import RAlert from '@/components/Alert'
import RButton from '@/components/Button'
import RCard from '@/components/Card'
import RInputField from '@/components/InputField'
import RUnits from '@/components/Units'

/* Import services */
import Api from '@/services/ApiService'

export default {
  components: {
    RAlert,
    RButton,
    RCard,
    RInputField,
    RUnits
  },

  data () {
    return {
      unit: {
        children: []
      }
    }
  },

  computed: {
    newLink () {
      return this.$route.params.id ? `/units/${this.$route.params.id}/new` : '/units/new'
    }
  },

  created () {
    Api.check()
  },

  async mounted () {
    try {
      this.unit = (await Api.getRootUnits()).data.data
    } catch (error) {
      this.$refs.alert.open('Невозможно загрузить корневое подразделение', 'error_outline')
    }
  }
}
