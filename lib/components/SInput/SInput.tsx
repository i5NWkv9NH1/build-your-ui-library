import { defineComponent, ref, watch } from 'vue'
import './SInput.scss'

export const SInput = defineComponent({
  name: 'SInput',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const modelValue = ref(props.modelValue)
    watch(() => props.modelValue, () => modelValue.value = props.modelValue)
    watch(modelValue, () => {
      emit('update:modelValue', modelValue.value)
    })

    return () => (
      <input
        v-model={modelValue}
      />
    )
  },
})
