/* Import components */
import REmpty from '@/components/Empty'

/* Import other helpers */
import Router from '@/router'

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

  methods: {
    openUnit (id) {
      Router.push(`/units/${id}`)
    }
  }
}
