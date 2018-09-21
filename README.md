# vue-demo

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## vue 父子间的通讯以及使用 sync 同步父子间的数据

vue 间常见的父子组件的通讯主要有三种：

- 通过 props，从父组件向自组件传递数据，通过调用函数改变父组件的数据
- 通过自定义事件从子组件向父组件中传递数据
- 通过 ref 属性在父组件中直接取得子组件的数据（data）

### 通过 props，从父组件向自组件传递数据，通过调用函数改变父组件的数

父组件 -----> 子组件（props） ###子组件传递参数给父组件

1. 回调方法传参

```js
   父组件通过 `props` 传递给子组件一个函数
   父组件-----------------------------> 子组件
   子组件调用函数传递给父组件参数
```

2. 子组件通过`自定义事件`传参

```js
   父组件监听该事件，并通过绑定的函数获取传递的参数
   父组件--------------------------------> 子组件
   子组件自定义事件，通过 this.$emit 方法注册要触发的事件，并传参
```

3. 兄弟节点之间的通讯（有共同的父组件）

```js
   data function
   兄弟节点一 <----------------父组件---------------->兄弟节点二
   通过调用函数修改数据
   两个兄弟组件间存在这种数据关系的话，我们可以尝试寻找其共同的父组件，使数据和相关方法“提升”到父组件内部，并向下传给两个子组件
   局限性：要求两个组件必须有共同的父组件
```

4. 通过 `ref` 属性在父组件中直接取得子组件的数据（data）

```js
   上边两种情况子组件向父组件传递参数都是以事件为基础，即发生事件时才能传递参数。若没有事件时，如何直接获取子组件的参数呢，这就需要通过 ref 直接获取
```

5. 通过 `sync` 实现数据双向绑定， 从而同步父子组件数据

```js
   从子组件向父组件传递数据时，父子组件中的数据仍不是每时每刻都同步的.
   在某些特殊的需求场景下，我们可能会希望父子组件中的数据时刻保持同步.
   双向数据绑定：https://www.w3cplus.com/vue/component-data-and-props-part2.html
   #### 好处：
   1. 它实现了父子组件数据的“实时”同步， 在某些数据场景下可能会使用到这一点
   2. sync 提供的语法糖使得双向绑定的代码变得很简单
   #### 坏处：
   3. 它破环了单向数据流的简洁性， 这增加了分析数据时的难度
```

6. 全局组件间的数据交流 Vuex

```js
   1. `通过 props 从父组件传递给子组件`:数据流显得很简洁明确，大型应用里面，上下嵌套许多个组件的时，就会导致代码非常地繁琐，并难以维护
   2. `对于没有共同的父组件的兄弟组件`:函数传参的数据传递方式也无能为力了，Vue 文档里介绍到，可以通过以$emit 和$on 函数为基础的“事件总线”沟通数据，但它无法应对更加大型的应用
   3. vuex 拥有全部顶层状态的单一数据源（state）
   ![image](https://github.com/xue1992115/vuex/src/assets/vuex.jpg)
```

### 参考资料：

```js
https://www.cnblogs.com/penghuwan/p/7473375.html#_label0
https://www.w3cplus.com/vue/component-data-and-props-part2.html
```
