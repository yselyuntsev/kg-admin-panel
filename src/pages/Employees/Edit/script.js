/* Import components */
import RAlert from '@/components/Alert'
import RButton from '@/components/Button'
import RCard from '@/components/Card'
import REmployeeKeys from '@/components/EmployeeKeys'
import REmployeeUnits from '@/components/EmployeeUnits'
import RInputField from '@/components/InputField'
import RLoad from '@/components/Load';
import RModal from '@/components/Modal'
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
    REmployeeKeys,
    REmployeeUnits,
    RInputField,
    RLoad,
    RModal,
    RWebcam
  },

  data () {
    return {
      employee: {},
      keys: [],
      keyAccess: [],
      units: []
    }
  },

  created () {
    Api.check()
  },
  
  async mounted () {
    this.$refs.load.toggle()
    
    this.employee = (await Api.getEmployeeByCardId(this.$route.params.id)).data.data.employee
    await this.getKeyAccess()
    await this.getUnits()

    this.$refs.load.toggle()
  },

  methods: {
    async getUnits () {
      try {
        for (let unit of this.employee.unit_ids) {
          let response = (await Api.getUnit(unit)).data.data.unit
          this.units.push({id: response.id, title: response.name})
        }
      } catch (error) {
        this.$refs.alert.open('Невозможно загрузить подразделения', 'error_outline')
        
      }
    },

    async addKeyToKeyAccess (data) {
      data.access = 'false'
      try {
        if (this.keys.filter(key => key.id === data.id).length == 0) {
          await Api.createKeyAccess({
            key_id: data.id,
            employee_id: this.employee.id,
            access_type: data.access
          })
          this.keys.push(data)
        }  
      } catch (error) {
        this.$refs.alert.open('Невозможно добавить доступ к ключу', 'error_outline')
      }
    },

    async changeAccessType (id) {
      try {
        let keyAccess = (this.keyAccess.find(access => access.key_id === id))
        keyAccess.access_type = (!(keyAccess.access_type === 'true')).toString()
        await Api.updateKeyAccess({...keyAccess})
      } catch (error) {
        this.$refs.alert.open('Невозможно изменить доступ к ключу', 'error_outline')
      }
      this.keys.findIndex(key => {if (key.id === id) {key.access = (!(key.access === 'true')).toString()}})
    },

    async removeKeyAccess (data) {
      try {
        let keyAccessID = (this.keyAccess.find(access => access.key_id === data.id)).id
        let keyAccessIndex = this.keyAccess.findIndex(access => access.key_id === data.id)

        await Api.deleteKeyAccess(keyAccessID)

        this.keyAccess.splice(keyAccessIndex, 1)
        this.keys.splice(data.index, 1)

        this.$refs.alert.open('Достпу к ключу успешно удален', 'check')
      } catch (error) {
        this.$refs.alert.open('Невозможно удалить доступ к ключу', 'error_outline')
      }
    },

    async getKeyAccess () {
      try {
        this.keyAccess = (await Api.getEmployeeKeyAccess(this.employee.id)).data.data.key_access
        for (let access of this.keyAccess) {
          let key = (await Api.getKeyById(access.key_id)).data.data.key
          key.access = access.access_type
          this.keys.push(key)
        }
      } catch (error) {
        this.$refs.alert.open('Невозможно загрузить таблицу доступа', 'error_outline')
      }
    },
    async updateEmployee () {
      try {
        await Api.updateEmployee({...this.employee})
        Router.back()
      } catch (error) {
        this.$refs.alert.open('Ошибка обновления сотрудника', 'error_outline')
      }
    },

    async deleteEmployee () {
      try {
        await Api.deleteEmployee(this.employee.id)
        Router.back()
      } catch (error) {
        this.$refs.alert.open('Ошибка удаления сотрудника', 'error_outline')
      }
    }
  }
}
