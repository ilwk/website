---
title: 在Windows上面设置开发环境
date: 2023-06-29
description: 我的 Windows 电脑环境设置
---

## 软件

优先使用 winget 安装

一键安装：

```bash
winget install  Git.Git \
                Microsoft.PowerShell \
                Microsoft.VisualStudioCode \
                Microsoft.PowerToys \
                Starship.Starship
```

### 应用程序

- [PowerShell](https://github.com/PowerShell/PowerShell) - 非常好用
- [Windows Terminal](https://github.com/microsoft/terminal) - 漂亮的终端
- [Git](https://git-scm.com/) - 版本管理
- [Visual Studio Code](https://code.visualstudio.com/) - VS Code
- [PowerToys](https://github.com/microsoft/PowerToys) - Microsoft PowerToys 是一组实用程序，供高级用户调整和简化其 Windows 体验以提高工作效率。
- [WSL2](https://learn.microsoft.com/en-us/windows/wsl/) - Linux 子系统

### 终端应用

- [Starship](https://starship.rs/) - 漂亮的 shell 主题

## WSL

- [Git](https://git-scm.com/) - 版本管理
- [fnm](https://github.com/Schniz/fnm) - NodeJS 版本管理
- [pnpm](https://github.com/pnpm/pnpm) - npm 替代
- [yarn](https://github.com/yarnpkg/berry) - 有的项目可能会用到
- [fish](https://github.com/fish-shell/fish-shell) - 更友好的 shell
