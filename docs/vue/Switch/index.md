<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-17 11:56:03
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-18 15:44:59
 -->

# Switch

::: b-info Switch 使用

```vue
<ZMTabs>默认按钮</ZMTabs>
```

:::

::: explain

<templateMobile name="Switch-index">

<<< @/docs/.vuepress/components/Switch/index.vue

</templateMobile>
:::

::: explain api switch

| 参数        | 描述           | 类型    | 是否必填 | 可选值           | 默认值 |
| :---------- | :------------- | :------ | :------- | :--------------- | :----- |
| v-model     | 绑定值         | Boolean | yes      | true/false       |        |
| size        | 大小           | string  | false    | large/small/mini | def    |
| activeColor | 活跃颜色       | string  | false    | color            | blue   |
| disabled    | 是否禁用       | Boolean | false    | rue/false        | false  |
| customSize  | 用户自定义大小 | number  | false    | number           | 30     |

:::

::: explain Event

| 名称          | 描述        |
| :------------ | :---------- |
| @changeStatus | change 事件 |

:::
