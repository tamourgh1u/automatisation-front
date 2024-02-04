import { mount } from '@vue/test-utils'
import MyComponent from '@/components/MyComponent.vue'

describe('MyComponent', () => {
  it('affiche le texte correctement', () => {
    const wrapper = mount(MyComponent, {
      props: {
        message: 'Hello World'
      }
    })

    expect(wrapper.text()).toContain('Hello World')
  })

})
