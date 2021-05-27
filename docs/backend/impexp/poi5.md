---
autoGroup-3: POI
title: 渲染本地模板
---


## poi 渲染本地模板

## 注意区分模板, 当前使用 xls 格式! xlsx 格式修改名称无用!

## 自动换行的设置： 
```java
HSSFCellStyle cellStyle=workbook.createCellStyle();         
cellStyle.setWrapText(true);         
cell.setCellStyle(cellStyle);   
```

