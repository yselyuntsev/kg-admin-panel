export default {
  props: {
    placeholder: String,
    label: String,
    id: String,
    password: Boolean,
    value: String,
    disabled: Boolean
  },

  computed: {
    type () {
      return this.password ? 'password' : 'text'
    }
  }
}
