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
        values[4] = ''
        return values.find(value => (
          value
            .toString()
            .toLowerCase()
            .match(this.search.toLowerCase())
        ))
      })
    }
  },

  methods: {
    sendData (row) {
      this.$emit('send', row)
    },

    clear () {
      this.search = ''
    },

    color (value) {
      return value.toString().charAt(0) === '#'
    }
  }
}
