/* Import nested components */
import RInputField from '@/components/InputField'

/* Import other helpers */
import ClickOutside from 'vue-click-outside'

export default {
  directives: {
    ClickOutside
  },

  components: {
    RInputField
  },
  
  props: {
    label: [String],
    selected: [String],
    id: [String],
    placeholder: [String]
  },

  data () {
    return {
      selectedColor: null,
      colors: ['#CC444B', '#58BF4A', '#FFD166', '#33A5F7', '#B5E2FA'],
      showMenu: false,
      placeholderText: 'Пожалуйста выберите элемент из списка'
    }
  },

  computed: {
    currentColor () {
      return this.selected || this.selectedColor
    }
  },

  mounted () {
    if (this.placeholder) {
      this.placeholderText = this.placeholder
    }
  },

  methods: {
    update (color) {
      this.selectedColor = color
      this.showMenu = false

      this.$emit('input', this.selectedColor)
    },

    toggle () {
      this.showMenu = !this.showMenu
    }
  }
}
