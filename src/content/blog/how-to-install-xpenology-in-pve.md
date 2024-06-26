---
title: 如何在PVE中安装黑群晖
date: 2024-06-26
description: 使用Arc在PVE中安装黑群晖
---

## 准备工作

- 新建一个虚拟机，推荐配置：
- 2 vCPU
- 4GB 内存 取消ballooning
- 网络E1000
- 取消防火墙

## 安装过程

1. 去Arc的官方网站下载img镜像：https://auxxxilium.tech/redpill/
2. 导入到刚刚创建的虚拟机中作为启动盘，打开
3. 选择config mode
4. 选择model, version
5. 输入SN, MAC
6. 选择Addon (增加 addincards 、hostpatch 、multismb3 、nvmevolume 、photofacepatch 、powersched )
7. 选择 2 I want to make changes
8. 修改 keymap 为 qwerty us
9. DSM option 里开启 IPv6
10. build loader
11. boot loader
12. 到群晖官网下载 pat 文件，然后使用 IP 访问黑群晖，导入 pat 文件安装系统

---

## 参考链接

- https://www.v2ex.com/t/1052282#reply11
- https://github.com/AuxXxilium/arc