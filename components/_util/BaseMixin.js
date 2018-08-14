export default {
  directives: {
    ref: {
      bind: function (el, binding, vnode) {
        binding.value(vnode.componentInstance ? vnode.componentInstance : vnode.elm)
      },
      update: function (el, binding, vnode) {
        binding.value(vnode.componentInstance ? vnode.componentInstance : vnode.elm)
      },
      unbind: function (el, binding, vnode) {
        binding.value(null)
      },
    },
  },
  methods: {
    setState (state, callback) {
      Object.assign(this.$data, typeof state === 'function' ? state(this.$data) : state)
      this.$nextTick(() => {
        callback && callback()
      })
    },
    __emit () { // 直接调用listeners，底层组件不需要vueTool记录events
      const args = [].slice.call(arguments, 0)
      const filterEvent = []
      const eventName = args[0]
      if (args.length && this.$listeners[eventName]) {
        if (filterEvent.includes(eventName)) {
          this.$emit(eventName, ...args.slice(1))
        } else {
          this.$listeners[eventName](...args.slice(1))
        }
      }
    },
  },
}
