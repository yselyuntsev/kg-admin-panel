/* Import components */
import RAlert from '@/components/Alert'
import RButton from '@/components/Button'
import RCard from '@/components/Card'
import REmployees from '@/components/Employees'
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
    REmployees,
    RInputField
  },

  data () {
    return {
      employees: []
    }
  },

  created () {
    Api.check()
  },

  async mounted () {
    try {
      this.employees = (await Api.getEmployees()).data.data.employees
    } catch (error) {
      this.$refs.alert.open('Ошибка загрузки сотрудников', 'error_outline')
    }
  },

  methods: {
    openEmployee (data) {
      Router.push(`/employees/${data.card}/edit`)
    }
  }
}
