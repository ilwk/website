---
title: ArchLinux最简单设置安全启动的方法
pubDate: 2022-12-01
description: Arch Linux最简单设置安全启动的方法
---

网上一堆讲的云里雾里的，这里整个最直白的

## 说明

本人用的 RedmiBook Pro 15S，也就是红米锐龙版，是在关闭了安全启动的情况下进行的操作
如果你用的是联想电脑，发现密钥写不进去的，请参考官方教程，将安全启动模式设置成“设置模式（Setup mode）”，然后启动进入 arch。

## 开始

```bash
# 安装sbctl
sudo pacman -S sbctl

# 生成密钥
sudo sbctl create-keys

# 注册密钥，我这边要跟win11共存，所以设置了这个参数
sudo sbctl enroll-keys --microsoft

# 把下面的EFI文件签署上去，有些你可能没有，没有的会报错，不用管，不影响，但是不能漏
sudo sbctl sign -s /boot/EFI/Linux/linux.efi
sudo sbctl sign -s /boot/EFI/Linux/fallback.efi
sudo sbctl sign -s /boot/EFI/systemd/systemd-bootx64.efi
sudo sbctl sign -s /boot/EFI/Boot/bootx64.efi
sudo sbctl sign -s /boot/EFI/Microsoft/bootmgfw.efi
sudo sbctl sign -s /boot/EFI/Microsoft/bootmgr.efi
sudo sbctl sign -s /boot/EFI/Microsoft/memtest.efi
sudo sbctl sign -s /boot/vmlinuz-linux


# 检查是否所有文件都签署了，如果有漏的，补上
sudo sbctl list-files
```

完成上面的操作后，重启到 BIOS，开启安全启动，然后试试能不能进入系统

## 参考

---

[Linux Windows Dual Boot with Windows Bitlocker](https://github.com/Foxboron/sbctl/wiki/Linux-Windows-Dual-Boot-with-Windows-Bitlocker)

[Simple way to set up Secure Boot](https://www.reddit.com/r/archlinux/comments/ji0be6/simple_way_to_set_up_secure_boot/)
