/* Import components */
import RAlert from '@/components/Alert'
import RButton from '@/components/Button'
import RCard from '@/components/Card'
import RInputField from '@/components/InputField'
import RWebcam from '@/components/Webcam'

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
    RWebcam
  },

  data () {
    return {
      employee: {
        encoded_photo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUPnLkPwAFKQKcMnBnVAAAAABJRU5ErkJggg=='
      },
      keys: []
    }
  },

  created () {
    Api.check()
  },

  methods: {
    async createEmployee () {
      try {
        await Api.createEmployee({...this.employee})
        Router.back()
      } catch (error) {
        this.$refs.alert.open('Ошибка создания сотрудника', 'error_outline')
      }
    }
  }
}
