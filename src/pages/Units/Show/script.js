/* Import components */
import R404 from '@/components/404'
import RAlert from '@/components/Alert'
import RButton from '@/components/Button'
import RCard from '@/components/Card'
import RInputField from '@/components/InputField'
import RModal from '@/components/Modal'
import RUnits from '@/components/Units'

/* Import services */
import Api from '@/services/ApiService'

/* Import other helpers */
import Router from '@/router'

export default {
  components: {
    R404,
    RAlert,
    RButton,
    RCard,
    RInputField,
    RModal,
    RUnits
  },

  data () {
    return {
      unit: {
        unit: {
          name: ''
        },
        children: [],
        keys: [],
        employees: [],
      }
    }
  },

  created () {
    Api.check()
  },

  async mounted () {
    await this.getUnit(this.$route.params.id)
  },

  computed: {
    newLink () {
      return `/units/${this.$route.params.id}/new`
    }
  },

  methods: {
    async getUnit (id) {
      try {
        let unit = (await Api.getUnit(id)).data.data
        unit.employees = []
        let employees = (await Api.getEmployees()).data.data.employees

        for (let employee of employees) {
          if (employee.unit_ids.includes(parseInt(id))) {
            unit.employees.push(employee)
          }
        }

        this.unit = unit
      } catch (error) {
        if (error.response.status === 404) {
          this.$refs.e404.toggle()
        } else {
          this.$refs.alert.open('Невозможно загрузить данные', 'error_outline')
        }
      }
    },

    async addKeyToUnit (data) {
      try {
        await Api.addKeyToUnit(data.id, this.unit.unit.id)
        this.unit.keys.unshift(data)
        this.$refs.alert.open('Ключ успешно добавлен в подразделение', 'check')
      } catch (error) {
        this.$refs.alert.open('Невозможно добавить ключ в подразделение', 'close')
      }
    },

    async addEmployeeToUnit (data) {
      try {
        if (data.unit_ids.indexOf(parseInt(this.$route.params.id))) {
          data.unit_ids.push(parseInt(this.$route.params.id))
          this.$refs.alert.open('Сотрудник успешно добавлен в подразделение', 'check')
          await Api.updateEmployee({...data})
          this.unit.employees.unshift(data)
        } else {
          this.$refs.alert.open('Сотрудник уже находится в подразделении', 'close')
        }
      } catch (error) {
        console.log(error)
        this.$refs.alert.open('Невозможно добавить сотрудника в подразделение', 'close')
      }
    },

    async removeEmployeeFromUnit (data) {
      try {
        let employee = this.unit.employees.find(employee => employee.id === data.id)
        employee.unit_ids.splice(employee.unit_ids.indexOf(parseInt(this.$route.params.id)), 1)
        await Api.updateEmployee({...data})
        this.unit.employees.splice(data.index, 1)
        this.$refs.alert.open('Сотрудник успешно удален из подразделения', 'check')
      } catch (error) {
        this.$refs.alert.open('Невозможно удалить сотрудника из подразделения', 'close')   
      }
    },

    async removeKeyFromUnit (data) {
      try {
        await Api.removeKeyFromUnit(data.id, this.unit.unit.id)
        this.unit.keys.splice(data.index, 1)
        this.$refs.alert.open('Ключ успешно удален из подразделения', 'check')
      } catch (error) {
        this.$refs.alert.open('Невозможно удалить ключ из подразделения', 'close')   
      }
    },

    back () {
      Router.back()
    }
  }
}
