import { type PropType, defineComponent } from 'vue'
import './SLabel.scss'

export const SLabel = defineComponent({
  name: 'SLabel',
  props: {
    text: {
      type: String as PropType<string | undefined>,
      required: false,
    },
  },
  setup(props) {
    return () => (
      <label
        class="s-label"
      >
        {props.text || ''}
      </label>
    )
  },
})
