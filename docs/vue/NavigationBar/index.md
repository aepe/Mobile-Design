<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-04 13:25:31
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-05 12:23:13
 -->

# NavigationBar 导航条

::: b-info NavigationBar 使用

```vue
<ZMNavigationarBar title="默认导航栏" />
```

:::

## 代码演示

::: explain 基本用法

<templateMobile name="NavigationBar-index">

<<< @/docs/.vuepress/components/NavigationBar/index.vue

</templateMobile>

:::

::: explain API

|      参数       |         说明         |                类型                 |   可选值   | 默认值 |
| :-------------: | :------------------: | :---------------------------------: | :--------: | :----: |
|      title      |    nav bar title     |               string                |            | Title  |
|      theme      |   nav bar 主题颜色   |               string                |    dark    |  null  |
| backgroundColor |    自定义背景颜色    |               string                |   color    |  null  |
|      color      |       文字颜色       |               string                |   color    |  null  |
|     hasBack     |     是否有返回键     |               Boolean               | true/false | false  |
|    backText     | 返回按键后面跟的文字 |               string                |            |  null  |
| leftButtonList  |    左侧自定义按钮    | [{text: string, icon: string}]Array |            |  null  |
| rightButtonList |    左侧自定义按钮    | [{text: string, icon: string}]Array |            |  null  |
    
:::

::: explain slot
| name  |         说明         |
| :---: | :------------------: |
| left  | 用户自定义左部分内容 |
| right | 用户自定义右部分内容 |
:::

::: explain event
|  事件名称   |          说明          |               回调参数                |
| :---------: | :--------------------: | :-----------------------------------: |
|    back     |    返回按键点击事件    |            (event: Event)             |
| buttonclick | 用户自定义按钮点击事件 | ({item: any, key: key, event: Event}) |
:::

