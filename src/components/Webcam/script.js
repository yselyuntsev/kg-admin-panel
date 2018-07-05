/* Import nested components */
import RButton from '@/components/Button'

/* Import other helpers */
import Webcam from 'webcamjs'

export default {
  components: {
    RButton
  },

  props: {
    value: String
  },

  data () {
    return {
      result: this.value
    }
  },

  computed: {
    photo: {
      get () {
        return this.value
      },

      set (photo) {
        return photo
      }
    }
  },

  mounted () {
    Webcam.set({
      width: 320,
      height: 240,
      dest_width: 320,
      dest_height: 240,
      crop_width: 196,
      crop_height: 196,
      image_format: 'jpeg',
      jpeg_quality: 90
    })

    Webcam.on('error', error => {
      console.log(error)
    })

    Webcam.attach('.r-webcam__camera')
  },

  methods: {
    capture () {
      Webcam.snap(result => {
        this.photo = result
        this.$emit('input', result)
      })
    }
  }
}
