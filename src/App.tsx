import { defineComponent } from 'vue'

export const App = defineComponent(() => {
  // delete components.global.d.ts to get type error
  return () => <VanButton type="primary">myButton</VanButton>
})
