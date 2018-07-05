export default {
  props: {
    half: Boolean
  },

  computed: {
    size () {
      return this.half ? 'r-card--half' : ''
    }
  }
}
