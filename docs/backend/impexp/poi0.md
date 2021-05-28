---
autoGroup-3: POI
title: POI版本差异
---

## poi版本升级 

::: tip

 poi3.15 =>3.16  4.01

:::

## 设置excel样式CellStyle相关的代码


### 3.15
```java
CellStyle titleCellStyle = workbook.createCellStyle();

titleCellStyle.setAlignment(CellStyle.ALIGN_CENTER);
titleCellStyle.setVerticalAlignment(CellStyle.VERTICAL_CENTER);
titleCellStyle.setFillForegroundColor(HSSFColor.GREY_25_PERCENT.index);
titleCellStyle.setFillPattern(CellStyle.SOLID_FOREGROUND);

titleCellStyle.setBorderBottom(CellStyle.BORDER_THIN);
titleCellStyle.setBorderLeft(CellStyle.BORDER_THIN);
titleCellStyle.setBorderTop(CellStyle.BORDER_THIN);
titleCellStyle.setBorderRight(CellStyle.BORDER_THIN); 
```

* 其中，CellStyle.ALIGN_CENTER，CellStyle.VERTICAL_CENTER，HSSFColor.GREY_25_PERCENT.index，CellStyle.SOLID_FOREGROUND，CellStyle.BORDER_THIN都会报错异常，应改为：

### 3.16>4.10

```java
CellStyle titleCellStyle = workbook.createCellStyle();

titleCellStyle.setAlignment(HorizontalAlignment.CENTER);//水平居中
titleCellStyle.setVerticalAlignment(VerticalAlignment.CENTER);//垂直居中
titleCellStyle.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.index);//设置图案颜色
titleCellStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);//设置图案样式

titleCellStyle.setBorderBottom(BorderStyle.THIN);//下边框
titleCellStyle.setBorderLeft(BorderStyle.THIN);//左边框
titleCellStyle.setBorderTop(BorderStyle.THIN);//上边框
titleCellStyle.setBorderRight(BorderStyle.THIN);//右边框

```

### 读取及操作excel单元格数据，对数据做类型判断时：

- **Cell.CELL_TYPE_STRING，HSSFCell.CELL_TYPE_NUMERIC，HSSFCell.CELL_TYPE_BOOLEAN，HSSFCell.CELL_TYPE_FORMULA，HSSFCell.CELL_TYPE_BLANK** 都会提示不存在
- 应该成对应的**CellType.STRING,CellType.NUMERIC,CellType.BOOLEAN,CellType.FORMULA,CellType.BLANK**



| poi3.+版本                      | poi4.+版本                                     | 用途               |
| ------------------------------- | ---------------------------------------------- | ------------------ |
| Cell.CELL_TYPE_STRING           | CellType.STRING                                | 单元格数据格式判断 |
| HSSFCell.CELL_TYPE_NUMERIC      | CellType.NUMERIC                               | 单元格数据格式判断 |
| CellStyle.ALIGN_CENTER          | HorizontalAlignment.CENTER                     | 单元格水平居中     |
| CellStyle.VERTICAL_CENTER       | VerticalAlignment.CENTER                       | 单元格垂直居中     |
| HSSFColor.GREY_25_PERCENT.index | IndexedColors.GREY_25_PERCENT.index            | 设置图案颜色       |
| CellStyle.SOLID_FOREGROUND      | FillPatternType.SOLID_FOREGROUND               | 设置图案样式       |
| CellStyle.BORDER_THIN           | BorderStyle.THIN                               | 边框               |
| ClientAnchor.MOVE_DONT_RESIZE   | ClientAnchor.AnchorType.MOVE_DONT_RESIZE.value | 单元格插入图片     |