/* Import nested components */
import RCard from '@/components/Card'
import REmployees from '@/components/Employees'
import RKeys from '@/components/Keys'

/* Import services */
import Api from '@/services/ApiService'

export default {
  components: {
    RKeys,
    RCard,
    REmployees
  },

  props: {
    type: String,
    title: String
  },

  data () {
    return {
      show: false,
      keys: [],
      employees: []
    }
  },

  methods: {
    async toggle () {
      this.show = !this.show
      if (this.show) {
        try {
          switch (this.type) {
            case 'keys':
              this.keys = (await Api.getKeys()).data.data.keys
              break
            case 'employees':
              this.employees = (await Api.getEmployees()).data.data.employees
              break
          }
        } catch (error) {}
      }
    },

    add (data) {
      this.$emit('add', data)
    }
  }
}
