import { defineComponent, ref, watch } from 'vue'
import { SBtn, SInput, SLabel } from '../components/'

export default defineComponent({
  name: 'App',
  setup() {
    const text = ref('Text')
    watch(text, () => {
      // eslint-disable-next-line no-console
      console.log('updated from App.tsx', text.value)
    })

    return () => (
      <div id="app">
        <SBtn>
          Button
        </SBtn>
        <SInput
          v-model={text.value}
          placeholder="input text here..."
        />
        <SLabel text="label" />
      </div>
    )
  },
})
