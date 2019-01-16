import vueZeeroCalendar from './zeero-calendar.vue' 
const calendar = {
    install (Vue, options) {
        Vue.component(vueZeeroCalendar.name, vueZeeroCalendar)
    }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(calendar);
}
export default calendar 