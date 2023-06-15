---
title: 用于 Web 开发的 Mac 设置
date: 2022-10-06
---


## MacBook Pro 规格

  

- 13 英寸

- M2 芯片

- 16GB 内存

- 512GB 固态硬盘

- macOS Monterey

  

## 系统偏好

  

- 通用

- 外观：深色

- 程序坞与菜单栏

- 大小缩小

- 自动隐藏和显示程序坞 ☑️

- 在程序坞中显示最近使用的应用程序 ✖️

- 电池，显示百分比 ☑️

- Siri

- 禁用

- 触控板

- 光标与点按——轻点来点按 ☑️

- 滚动缩放——滚动方向：自然 ✖️

- 更多手势，App Expose ☑️

- 辅助功能

- 指针控制——鼠标与触摸板——触控板选项——启用拖移：三指拖移

  

## Homebrew

  

安装 brew (大概需要 10 多分钟，视网络情况而定，需要一些耐心)

  

```bash

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

```

  

更新 brew 到最新版本

  

```bash

brew update

```

  

安装 GUI 应用

  

```bash

brew install --cask \

google-chrome \

iterm2 \

visual-studio-code \

docker \

maccy \

raycast

```

  

安装终端应用

  

```bash

brew install \

wget \

nvm \

pnpm \

commitizen

```

  

## GUI 应用

  

- Google Chrome (浏览器)

- iterm2 (一个很强大的终端)

- Visual Studio Code (IDE)

- Docker (Docker)

- Maccy (剪贴板管理)

  

## 终端应用

  

- wget (curl 替代)

- nvm (node 版本管理)

- pnpm (npm 替代)

- commitizen (git 提交规范)

  

## Oh My Zsh

  

iTerm2 自带 zsh，这里安装 omz 来管理插件

  

安装

  

```bash

sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

  

```

  

更新到最新版

  

```bash

omz update

```

  

插件配置 (.zshrc)

  

```bash

# zsh-completions: https://github.com/zsh-users/zsh-completions

# zsh-autosuggestions: https://github.com/zsh-users/zsh-autosuggestions

# zsh-syntax-highlighting: https://github.com/zsh-users/zsh-syntax-highlighting

plugins=(

git

zsh-completions

zsh-autosuggestions

zsh-syntax-highlighting

)

```

  

## SSH

  

创建一个 SSH 密钥

  

```bash

ssh-keygen -t ed25519 -C

# 按照提示下一步

```

  

## 通过 nvm 安装 node

  

因为切换了 zsh，所以 nvm 命令可能找不到，通过下面的 command 将 nvm 加入 zsh 中

  

```bash

echo "source $(brew --prefix nvm)/nvm.sh" >> ~/.zshrc

  

source ~/.zshrc

```

  

安装 node

  

```bash

nvm install --lts

```