import Button from './button/button.vue'
import HeadLine from './headline/headline.vue'

export default {
  install (Vue) {
    Vue.component('MyButton', Button)
    Vue.component('MyHeadline', HeadLine)
  }
}
