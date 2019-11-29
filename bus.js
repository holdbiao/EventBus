class Bus {
  constructor () {
    this.callbacks = {} // 回调队列
  }
  $on (key, fn) {
    this.callbacks[key] = fn  // 订阅，将对应的事件回调保存到回调队列中
  }
  $emit (name, args = null) {
    if (this.callbacks[name]) {
      this.callbacks[name](args) // 触发回调函数， 并传递参数
    } else {
      throw Error ('事件不存在')
    }
  }
  $off (name) {
    delete this.callbacks[name] // 删除事件队列对应的事件
  }
}