---
autoGroup-3: POI
title: POI 设置单元格背景颜色
---


```java
CellStyle style = workbook.createCellStyle();
		style.setFillForegroundColor(IndexedColors.AQUA.getIndex());
		style.setFillPattern(CellStyle.SOLID_FOREGROUND);
		Cell cell = row.createCell((short) 1);
		cell.setCellValue("X1");
		cell.setCellStyle(style);
		// font color.
		style = workbook.createCellStyle();
		style.setFillForegroundColor(IndexedColors.AUTOMATIC.getIndex());
		style.setFillPattern(CellStyle.SOLID_FOREGROUND);
		cell = row.createCell((short) 2);
		cell.setCellValue("X2");
		cell.setCellStyle(style);
 
		style = workbook.createCellStyle();
		style.setFillForegroundColor(IndexedColors.BLUE.getIndex());
		style.setFillPattern(CellStyle.SOLID_FOREGROUND);
		cell = row.createCell((short) 3);
		cell.setCellValue("X3");
		cell.setCellStyle(style);

```

![](/img/color.bmp)

**上面的单元格颜色对应下面的英语颜色表示，从X1-X49 按顺序对应；
将下面对应的code填入上述代码加粗斜体位置即可。**

```
1.IndexedColors.AQUA.getIndex()
2.IndexedColors.AUTOMATIC.getIndex()
3.IndexedColors.BLUE.getIndex()
4.IndexedColors.BLUE_GREY.getIndex()
5.IndexedColors.BRIGHT_GREEN.getIndex()
6.IndexedColors.BROWN.getIndex()
7.IndexedColors.CORAL.getIndex()
8.IndexedColors.CORNFLOWER_BLUE.getIndex()
9.IndexedColors.DARK_BLUE.getIndex()
10.IndexedColors.DARK_GREEN.getIndex()
11.IndexedColors.DARK_RED.getIndex()
12.IndexedColors.DARK_TEAL.getIndex()
13.IndexedColors.DARK_YELLOW.getIndex()
14.IndexedColors.GOLD.getIndex()
15.IndexedColors.GREEN.getIndex()
16.IndexedColors.GREY_25_PERCENT.getIndex()
17.IndexedColors.GREY_40_PERCENT.getIndex()
18.IndexedColors.GREY_50_PERCENT.getIndex()
19.IndexedColors.GREY_80_PERCENT.getIndex()
20.IndexedColors.INDIGO.getIndex()
21.IndexedColors.LAVENDER.getIndex()
22.IndexedColors.LEMON_CHIFFON.getIndex()
23.IndexedColors.LIGHT_BLUE.getIndex()
24.IndexedColors.LEMON_CHIFFON.getIndex()
25.IndexedColors.LIGHT_BLUE.getIndex()
26.IndexedColors.LIGHT_CORNFLOWER_BLUE.getIndex()
27.IndexedColors.LIGHT_GREEN.getIndex()
28.IndexedColors.LIGHT_ORANGE.getIndex()
29.IndexedColors.LIGHT_TURQUOISE.getIndex()
30.IndexedColors.LIGHT_YELLOW.getIndex()
31.IndexedColors.LIME.getIndex()
32.IndexedColors.MAROON.getIndex()
33.IndexedColors.OLIVE_GREEN.getIndex()
34.IndexedColors.ORANGE.getIndex()
35.IndexedColors.ORCHID.getIndex()
36.IndexedColors.PALE_BLUE.getIndex()
37.IndexedColors.PINK.getIndex()
38.IndexedColors.PLUM.getIndex()
39.IndexedColors.RED.getIndex()
40.IndexedColors.ROSE.getIndex()
41.IndexedColors.ROYAL_BLUE.getIndex()
42.IndexedColors.SEA_GREEN.getIndex()
43.IndexedColors.SKY_BLUE.getIndex()
44.IndexedColors.TAN.getIndex()
45.IndexedColors.TEAL.getIndex()
46.IndexedColors.TURQUOISE.getIndex()
47.IndexedColors.VIOLET.getIndex()
48.IndexedColors.WHITE.getIndex()
49.IndexedColors.YELLOW.getIndex()
```

