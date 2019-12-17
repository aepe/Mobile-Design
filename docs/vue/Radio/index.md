<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-17 11:56:03
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-17 17:53:20
 -->

# Radio

::: b-info Radio 使用

```vue
<ZMTabs>默认按钮</ZMTabs>
```

:::

::: explain

<templateMobile name="Radio-index">

<<< @/docs/.vuepress/components/Radio/index.vue

</templateMobile>
:::

::: explain api RadioGroup

| 参数    | 描述                                                    | 类型    | 是否必填 | 可选值     | 默认值 |
| :------ | :------------------------------------------------------ | :------ | :------- | :--------- | :----- |
| v-model | 绑定值，radio.RadioItem 绑定值，radio.RadioBotton label | string  | true     | string     | 默认   |
| inline  | 是否为内联                                              | boolean | false    | true/false | false  |

:::

::: explain api RadioItem

| 参数     | 描述           | 类型    | 是否必填 | 可选值     | 默认值 |
| :------- | :------------- | :------ | :------- | :--------- | :----- |
| label    | Radio 的 value | string  | true     | string     | 默认   |
| disabled | 原生属性       | boolean | false    | true/false | 默认   |

:::
