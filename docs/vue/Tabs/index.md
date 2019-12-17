<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-05 13:32:35
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-17 11:29:40
 -->

# Tabs

::: b-info Tabs 使用

```vue
<ZMTabs>默认按钮</ZMTabs>
```

:::

::: explain

<templateMobile name="Tabs-index">

<<< @/docs/.vuepress/components/Tabs/index.vue

</templateMobile>
:::

::: explain Api - ZMTabs

| 参数        | 描述                      | 类型    | 是否必填 | 可选值     | 默认值 |
| :---------- | :------------------------ | :------ | :------- | :--------- | :----- |
| v-model     | 绑定值，选中选项卡的 name | string  | false    | card       | 默认   |
| type        | tabs 类型                 | string  | false    | card       | 默认   |
| center      | 居中 tabs                 | boolean | false    | true/false | false  |
| activeColor | 活跃颜色                  | string  | false    | 颜色值     | false  |

:::

::: explain Api - ZMTabsItem

| 参数     | 描述                                              | 类型    | 是否必填 | 可选值     | 默认值 |
| :------- | :------------------------------------------------ | :------ | :------- | :--------- | :----- |
| name     | 与选项卡绑定值 value 对应的标识符，表示选项卡别名 | string  | false    | string     | 默认   |
| label    | 选项卡标题                                        | string  | false    | string     | 默认   |
| disabled | 是否禁用                                          | boolean | false    | true/false | false  |

:::
