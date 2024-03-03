import { type PropType, defineComponent, ref, watch } from 'vue'
import './SInput.scss'

export const SInput = defineComponent({
  name: 'SInput',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String as PropType<string>,
      required: false,
    },
  },
  setup(props, { emit }) {
    const modelValue = ref(props.modelValue)
    watch(() => props.modelValue, () => modelValue.value = props.modelValue)
    watch(modelValue, () => emit('update:modelValue', modelValue.value))

    return () => (
      <input
        class="s-input"
        v-model={modelValue.value}
        placeholder={props.placeholder}
      />
    )
  },
})
