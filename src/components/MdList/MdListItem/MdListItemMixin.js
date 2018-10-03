import MdRipple from 'core/mixins/MdRipple/MdRipple'
import MdListItemContent from './MdListItemContent'

export default {
  mixins: [MdRipple],
  components: {
    MdListItemContent
  },
  props: {
    disabled: Boolean,
    noButton: Boolean
  },
  computed: {
    isDisabled () {
      return !this.mdRipple || this.disabled
    },
    isNoButton() {
      return !this.mdRipple || this.noButton
    }
  }
}
