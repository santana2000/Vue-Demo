1. 现在数据和 DOM 已经被建立了关联，所有东西都是响应式的。
   当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。
2. 我们不仅可以把数据绑定到 DOM 文本或特性，还可以绑定到 DOM 结构。
3. 在 reverseMessage 方法中，我们更新了应用的状态，但没有触碰 DOM——所有的 DOM 操作都由 Vue 来处理，
你编写的代码只需要关注逻辑层面即可。
4. 在文档中经常会使用 vm (ViewModel 的缩写) 这个变量名表示 Vue 实例。
5. 生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。

# 2
1. 对于任何复杂逻辑，你都应当使用计算属性
2. 与方法的区别：计算属性是基于它们的依赖进行缓存的。只在相关依赖发生改变时它们才会重新求值
3. Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性
4. 我们可以传给 v-bind:class 一个对象，以动态地切换 class
5. 绑定的数据对象不必内联定义在模板里
6. 直接绑定到一个样式对象通常更好，这会让模板更清晰
7. 条件渲染、列表渲染，渲染就是把vm中的data展示在页面上