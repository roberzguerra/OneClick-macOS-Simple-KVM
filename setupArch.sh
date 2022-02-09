#!/bin/bash

sudo pacman -S qemu python python3-pip python-wheel

(ls macOS.qcow2 >> /dev/null 2>&1 && echo "") || qemu-img create -f qcow2 macOS.qcow2 64G

./fetch-macOS-v2.py

qemu-img convert BaseSystem.dmg -O raw BaseSystem.img

sudo ./basic.sh
