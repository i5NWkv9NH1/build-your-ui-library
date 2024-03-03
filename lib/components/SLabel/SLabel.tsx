import { defineComponent } from 'vue'
import './SLabel.scss'

export const SLabel = defineComponent({
  name: 'SLabel',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <label>
        {props.text}
      </label>
    )
  },
})
