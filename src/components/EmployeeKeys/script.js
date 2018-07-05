/* Import nested components */
import REmpty from '@/components/Empty'

export default {
  components: {
    REmpty
  },

  props: {
    data: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      search: ''
    }
  },

  computed: {
    filtered () {
      return this.data.filter(row => {
        let values = Object.values(row)
        return values.find(value => {
          if (value) {
            return value
              .toString()
              .toLowerCase()
              .match(this.search.toLowerCase())
          }
        })
      })
    }
  },

  methods: {
    getAccess (access) {
      switch (access) {
        case 'true':
          return 'Разрешен'
        case 'false':
          return 'Запрещен'
        default:
          return 'Неизвестно'
      }
    }
  }
}
