<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-26 16:53:25
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-04 11:11:05
 -->

# Button 组件

::: b-info button 使用

```vue
<ZMbutton>默认按钮</ZMbutton>
```

:::

## 代码演示

::: explain 基本用法

<templateMobile name="Button-index">

<<< @/docs/.vuepress/components/Button/index.vue

</templateMobile>

:::

## api

::: explain 参数说明

| 参数     | 描述 | 类型    | 是否必填 | 可选值                         | 默认值 |
| :------- | :--- | :------ | :------- | :----------------------------- | :----- |
| shape    | 形状 | string  | false    | square/round/plain             | 默认   |
| disabled | 禁用 | Boolean | false    | true/false                     | false  |
| type     | 类型 | string  | false    | primary/success/warning/danger | false  |
| size     | 类型 | string  | false    | large/small/mini               | false  |

:::

---

::: explain Event

| 名称   | 描述     |
| :----- | :------- |
| @click | 点击事件 |

:::
