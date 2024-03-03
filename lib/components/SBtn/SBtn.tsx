import type { PropType } from 'vue'
import { computed, defineComponent, renderSlot } from 'vue'
import './SBtn.scss'

export type ButtonSize = 'x-large' | 'large' | 'default' | 'small' | 'x-small'

export const SBtn = defineComponent({
  name: 'SBtn',
  props: {
    size: {
      type: String as PropType<ButtonSize>,
      default: 'default',
    },
    text: {
      type: String as PropType<string | undefined>,
      required: false,
    },
  },
  setup(props, { slots }) {
    const useClass = computed(() => [
      `s-btn`,
      `s-btn--${props.size}`,
    ])
    return () => (
      <button class={useClass.value}>
        {slots.default ? renderSlot(slots, 'default') : props.text || ''}
      </button>
    )
  },
})
