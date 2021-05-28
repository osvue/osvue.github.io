---
title: 花里胡哨且实用的命令
---

## 快速备份

```bash
cp test.txt{,.bak}
ls -al test.txt* # 验证
```

## 启动

```bash
#! /bin/bash
nohup /usr/java/jdk1.8.0_161/bin/java -Dfile.encoding=UTF-8 -jar znsj_zy-1.0.jar --spring.config.location=application.properties &>./lg.txt &
tail -f lg.txt
```

## 创建文件夹

```bash
mkdir /app/{template,logs,package/src} -p
```



## 生成序列文件内容

```bash
for i in  {1..3}; do echo $i > $i;done
```

