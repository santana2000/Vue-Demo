1. el----表示将该vue作用到哪个元素节点下

2. data----分清绑定元素内容 {{message}} (声明式渲染) & 绑定元素属性 <div v-bind:title = message > </div>

3. 条件与循环
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>

  var app = new Vue({
    el: '#app',
    data: {
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
    }
  })

4. methods----用户交互 v-on:click

5. 任何界面都可以抽象为一个组件树,组件之间的数据交互,父子通信

6. 数据与方法,数据调用时可以直接 vue.a == data.a, 不用vue.data.a

7. 指令( v- xxx )与参数( : xxx = '')  修饰符 .prevent, 简写 ：和 @

8. computed----对于任何复杂逻辑,都应当使用计算属性,而不是简便的模板表达式,
相比较于方法,计算属性使用缓存,方法每次都要调用一次函数

9. 样式的绑定,绑定在元素的类上 v-bind:class="{ active: isActive }"
   绑定内联样式 v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"
   或者直接使用更简洁的样式对象v-bind:style="styleObject"

10. v-model 指令在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定,它负责监听用户的输入事件以更新数据


11. 组件的注册和基础组件



