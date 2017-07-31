# FdsMockDemo

本项目是fds工具的一个demo，主要演示fds的用法。

&#160; &#160; &#160; &#160;fds是用nodejs开发的一个mock工具([原始github项目地址](https://github.com/zhex/fe-dev-server))，可以模拟http请求的响应。安装后只需两步配置即可mock一个接口。
####安装方法
1. 首先安装nodejs的包管理工具npm([怎么安装npm](https://github.com/nodejs-tw/nodejs-little-book/blob/master/zh-tw/node_npm.rst))。安装好npm,执行以下命令即可安装fds：
  > npm install -g fe-dev-server

2. clone demo工程到本地，demo项目包括了mock server的配置文件，以及几个mock接口的demo。
  > git clone git@github.com:zyc945/FdsMockDemo.git

3. 运行mock服务器
  在 FdsMockDemo 目录运行以下命令：
  > fds

#### 使用方法
  mock服务器运行以后，默认监听9999端口。使用mock接口时修改接口host为"本机ip:9999"即可。

新增一个mock接口需要两步
  * 第一步：编辑接口的mock数据
  * 第二步：配置router，让接口找到mock数据

******
下面以一个demo来说明：
模拟一个 "http://localhost:9999/api/users" 的接口数据。

1. 编辑接口的mock数据
  在mocks子目录api下创建users.json文件，编辑json数据
> [
    {
      "id": 1,
      "name": "lac"
    },
    {
      "id": 2,
      "name": "mac"
    },
    {
      "id": 3,
      "name": "nac"
    },
    {
      "id": 4,
      "name": "zac"
    }
  ]

2. 配置router规则即编辑接口、数据映射路径
  打开工程目录下的routes.js文件，添加如下配置：
>   '/api/users': 'mock::/api/users.json',

  这句配置命令的前半部分是需要mock的接口，后半部分是mock数据的地址。‘mock::’表示mock数据根路径固定为mocks目录，数据统一放在mocks子目录下。

配置完成后，打开http://localhost:9999/api/users 即可得到mock的接口数据。
