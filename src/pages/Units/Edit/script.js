/* Import components */
import RAlert from '@/components/Alert'
import RCard from '@/components/Card'
import RButton from '@/components/Button'
import RInputField from '@/components/InputField'
import RUnits from '@/components/Units'

/* Import services */
import Api from '@/services/ApiService'

/* Import other helpers */
import Router from '@/router'

export default {
  components: {
    RAlert,
    RCard,
    RButton,
    RInputField,
    RUnits
  },

  data () {
    return {
      unit: {
        unit: {
          name: ''
        },
        children: []
      }
    }
  },

  created () {
    Api.check()
  },

  async mounted () {
    await this.getUnit(this.$route.params.id)
  },
  
  methods: {
    async getUnit (id) {
      try {
        this.unit = (await Api.getUnit(id)).data.data
        this.unit.employees = []
      } catch (error) {
        this.$refs.alert.open('Невозможно загрузить подразделение', 'error_outline') 
      }
    },

    async updateUnit () {
      try {
        await Api.updateUnit({...this.unit.unit})
        this.back()
      } catch (error) {
        this.$refs.alert.open('Невозможно обновить подразделение', 'error_outline') 
      }
    },

    async deleteUnit () {
      try {
        await Api.deleteUnit(this.unit.unit.id)
        this.back()
      } catch (error) {
        this.$refs.alert.open('Невозможно обновить подразделение', 'error_outline') 
      }
    },

    back () {
      Router.back()
    }
  }
}
