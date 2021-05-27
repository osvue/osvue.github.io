---
autoGroup-3: POI
title: POI细节方面
---

## 用数组将大概的宽度设置好,手动set宽度

```java
int[] width = {xxx,xxx};
for循环
sheet.setColumnWidth(i,width[i]);
```

## 设置行高

```java
titleRow.setHeightInPoints(20);//目的是想把行高设置成20px
```

## 设置字体,颜色

**创建CellStyle , 然后创建HSSFFont , 再把HSSFFont注入给CellStyle , 在把CellStyle给cell设置**

```java
// 设置字体
CellStyle redStyle = workbook.createCellStyle();
HSSFFont redFont = workbook.createFont();
//颜色
redFont.setColor(Font.COLOR_RED);
//设置字体大小
redFont.setFontHeightInPoints((short) 10);
//字体
//redFont.setFontName("宋体");
redStyle.setFont(redFont);

HSSFCell cell13 = titleRow.createCell(13);
cell13.setCellStyle(redStyle);
cell13.setCellValue("注意:只允许修改销售价,供应价,市场价和库存");
```

## 合并单元格

合并单元格的话,建议先合并,合并之后,在合并的第一行第一列set值就可以了

```java
//这里代表在第0行开始,到0行结束,从0列开始,到10列结束,进行合并,也就是合并第0行的0-10个单元格
CellRangeAddress cellRange1 = new CellRangeAddress(0, 0, (short) 0, (short) 10);
            sheet.addMergedRegion(cellRange1);
            CellRangeAddress
```
* 合并单元格:

`Region region1 = new Region(0, (short) 0, 0, (short) 6);`

**//参数1：行号 参数2：起始列号 参数3：行号 参数4：终止列号**

或者用

CellRangeAddress region1 = new CellRangeAddress(rowNumber, rowNumber, (short) 0, (short) 11);

但应注意两个构造方法的参数不是一样的，具体使用哪个取决于POI的不同版本。
sheet.addMergedRegion(region1);
```javascript
//设置字体:

HSSFFont font = wb.createFont();
font.setFontName("黑体");
font.setFontHeightInPoints((short) 16);//设置字体大小

HSSFFont font2 = wb.createFont();
font2.setFontName("仿宋_GB2312");
font2.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);//粗体显示
font2.setFontHeightInPoints((short) 12);

setBorder.setFont(font);//选择需要用到的字体格式
```
示例:

```java
// 创建Excel文件
HSSFWorkbook workbook = new HSSFWorkbook();
HSSFSheet sheet = workbook.createSheet("sheet");
//设置样式
 CellStyle blackStyle = workbook.createCellStyle();
//自动换行*重要*
 blackStyle.setWrapText(true);

//存储最大列宽
Map<Integer,Integer> maxWidth = new HashMap<>();
// 标题行
HSSFRow titleRow = sheet.createRow(0);
titleRow.setHeightInPoints(20);//目的是想把行高设置成20px
titleRow.createCell(0).setCellValue("sku编号");
titleRow.createCell(1).setCellValue("商品标题");
titleRow.createCell(2).setCellValue("商品名");
// 初始化标题的列宽,字体
for (int i= 0; i<=3;i++){
    maxWidth.put(i,titleRow.getCell(i).getStringCellValue().getBytes().length  * 256 + 200);
    titleRow.getCell(i).setCellStyle(blackStyle);//设置自动换行
}

for (Map<String, Object> map : list) {
    int currentRowNum = sheet.getLastRowNum() + 1;
    //数据行
    HSSFRow dataRow = sheet.createRow(currentRowNum);
    // 记录这一行的每列的长度
    List<Object> valueList = new ArrayList<Object>();

    String val0 = map.get("skuId") == null ? "—" : ((Double) (map.get("skuId"))).intValue()+"";
    valueList.add(val0);
    dataRow.createCell(0).setCellValue(val0);
    String val1 = map.get("title") == null ? "" : map.get("title").toString();
    valueList.add(val1);
    dataRow.createCell(1).setCellValue(val1);
    String val2 = map.get("goodsName") == null ? "" : map.get("goodsName").toString();
    valueList.add(val2);
    dataRow.createCell(2).setCellValue(val2);
    String val3 = map.get("catName") == null ? "" : map.get("catName").toString();
    valueList.add(val3);
    dataRow.createCell(3).setCellValue(val3);
    String val4 = map.get("brandName") == null ? "" : map.get("brandName").toString();

     for(int i = 0;i<=3;i++){
         int length = valueList.get(i).toString().getBytes().length  * 256 + 200;
         //这里把宽度最大限制到15000
         if (length>15000){
             length = 15000;
         }
         maxWidth.put(i,Math.max(length,maxWidth.get(i)));
          dataRow.getCell(i).setCellStyle(blackStyle);//设置自动换行
    }
}


for (int i= 0; i<=3;i++){
      //设置列宽
     sheet.setColumnWidth(i,maxWidth.get(i));
 }
```

