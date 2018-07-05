/* Import nested components */
import RButton from '@/components/Button'

/* Import other helpers */
import Router from '@/router'

export default {
  components: {
    RButton
  },

  props: {
    title: String
  },

  data () {
    return {
      show: false
    }
  },

  methods: {
    toggle () {
      this.show = !this.show
    },

    back () {
      Router.back()
    }
  }
}
