export { default as CreatedPost } from '../..\\components\\CreatedPost.vue'
export { default as MainHeader } from '../..\\components\\MainHeader.vue'
export { default as Posts } from '../..\\components\\Posts.vue'
export { default as SignIn } from '../..\\components\\sign_in.vue'
export { default as SinglePost } from '../..\\components\\SinglePost.vue'
export { default as UserHome } from '../..\\components\\UserHome.vue'
export { default as UserLogin } from '../..\\components\\UserLogin.vue'
export { default as UserRegister } from '../..\\components\\UserRegister.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
