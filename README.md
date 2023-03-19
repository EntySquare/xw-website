# 玄武数藏

1、安装依赖

`npm i`

2、运行

`npm run dev`



##### 目录结构

```
├── README.md
├── package.json
├── index.html
├── src
│   ├── api  # 请求接口
│   ├── assets  # 静态资源
│          └── style 全局样式
│                └── responsive 媒体查询自适应
│   ├── components  # 通用业务组件
│          └── lockdiv  宽高锁定盒子
│          └── skeleton  骨架组件
│   ├── router # 路由配置
│   ├── store  # 状态管理中心
│   ├── types  # Typescript 类型
│   └── utils  # 工具库
│   ├── views  # 页面模板
│          └── layout  # 布局
│   └── App.vue  # 视图入口
│   └── main.ts  # 入口文件
└── tsconfig.json
```

