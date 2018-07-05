/* Import components */
import RAlert from '@/components/Alert'
import RButton from '@/components/Button'
import RCard from '@/components/Card'
import RInputField from '@/components/InputField'

/* Import services */
import Configuration from '@/services/ConfigurationService'

export default {
  components: {
    RAlert,
    RButton,
    RCard,
    RInputField
  },

  data () {
    return {
      configuration: Configuration.getCurrent()
    }
  },

  methods: {
    saveConfiguration () {
      Configuration.store(this.configuration)
      this.$refs.alert.open('Конфигурация успешно сохранена!', 'check')
      setTimeout(() => location.reload(), 500)
    }
  }
}
