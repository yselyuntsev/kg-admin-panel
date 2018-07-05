/* Import nested components */
import REmpty from '@/components/Empty'

/* Imoport other helpers */
import Router from '@/router'

export default {
  components: {
    REmpty
  },

  props: {
    data: {
      type: Object,
      required: true
    },
    type: {
      type: String,
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
      return this.data[this.type].filter(row => {
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
    openUnit (id) {
      if (id) {
        Router.push(`/units/${id}`)
      }
      this.$emit('open', id)
    },

    editUnit (id) {
      Router.push(`/units/${id}/edit`)
    },

    clear () {
      this.search = ''
    }
  }
}
