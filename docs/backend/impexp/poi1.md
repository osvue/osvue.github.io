---
autoGroup-3: POI
title: POI常用操作
---

 1、遍历workbook 

代码
```javascript

// load源文件   

POIFSFileSystem fs = new POIFSFileSystem(new FileInputStream(filePath));   

HSSFWorkbook wb = new HSSFWorkbook(fs);   

for (int i = 0; i < wb.getNumberOfSheets(); i++) {   

  HSSFSheet sheet = wb.getSheetAt(i);   

  for (int i = sheet.getFirstRowNum(); i < sheet.getLastRowNum(); i ++) {   

  HSSFRow row = sheet.getRow(i);   

      if (row != null) {   

    。。。操作}   

     }   

    }   

 // 目标文件   

 FileOutputStream fos = new FileOutputStream(objectPath);   

 //写文件   

 swb.write(fos);   

 fos.close(); 
``` 

 2、得到列和单元格 

代码
```javascript
HSSFRow row = sheet.getRow(i);   

HSSFCell cell = row.getCell((short) j);  
```


 3、设置sheet名称和单元格内容为中文 

代码

```javascript
wb.setSheetName(n, "中文",HSSFCell.ENCODING_UTF_16);     

cell.setEncoding((short) 1);   

cell.setCellValue("中文");  
```

 4、单元格内容未公式或数值，可以这样读写 

代码
```javascript
  cell.setCellType(HSSFCell.CELL_TYPE_NUMERIC);   

  cell.getNumericCellValue()  
```


 5、设置列宽、行高 

代码
```javascript
 sheet.setColumnWidth((short)column,(short)width);   

 row.setHeight((short)height);  
```

 6、添加区域，合并单元格 

代码
```javascript
 Region region = new Region((short)rowFrom,(short)columnFrom,(short)rowTo,(short)columnTo);   

 sheet.addMergedRegion(region);   

 //得到所有区域   

 sheet.getNumMergedRegions() 
```
 

 7、常用方法 
根据单元格不同属性返回字符串数值

代码
```javascript

public String getCellStringValue(HSSFCell cell) {   

    String cellValue = "";   

    switch (cell.getCellType()) {   

    case HSSFCell.CELL_TYPE_STRING:   

      cellValue = cell.getStringCellValue();   

      if(cellValue.trim().equals("")||cellValue.trim().length()<=0)   

        cellValue=" ";   

      break;   

    case HSSFCell.CELL_TYPE_NUMERIC:   

       cellValue = String.valueOf(cell.getNumericCellValue());   

       break;   

     case HSSFCell.CELL_TYPE_FORMULA:   

       cell.setCellType(HSSFCell.CELL_TYPE_NUMERIC);   

       cellValue = String.valueOf(cell.getNumericCellValue());   

       break;   

     case HSSFCell.CELL_TYPE_BLANK:   

       cellValue=" ";   

       break;   

     case HSSFCell.CELL_TYPE_BOOLEAN:   

       break;   

     case HSSFCell.CELL_TYPE_ERROR:   

       break;   

     default:   

       break;   

     }   

     return cellValue;   

   }  

```

 8、常用单元格边框格式 

虚线HSSFCellStyle.BORDER_DOTTED 
实线HSSFCellStyle.BORDER_THIN

代码
```java
public static HSSFCellStyle getCellStyle(short type)   

  {    

    HSSFWorkbook wb = new HSSFWorkbook();   

    HSSFCellStyle style = wb.createCellStyle();   

    style.setBorderBottom(type);//下边框   

    style.setBorderLeft(type);//左边框   

    style.setBorderRight(type);//右边框   

    style.setBorderTop(type);//上边框   

   return style;   

   }  
```

 9、设置字体和内容位置 

代码
```javascript

HSSFFont f  = wb.createFont();   

f.setFontHeightInPoints((short) 11);//字号   

f.setBoldweight(HSSFFont.BOLDWEIGHT_NORMAL);//加粗   

style.setFont(f);   

style.setAlignment(HSSFCellStyle.ALIGN_CENTER);//左右居中   

style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);//上下居中   

style.setRotation(short rotation);//单元格内容的旋转的角度   

HSSFDataFormat df = wb.createDataFormat();   

style1.setDataFormat(df.getFormat("0.00%"));//设置单元格数据格式   

cell.setCellFormula(string);//给单元格设公式   

style.setRotation(short rotation);//单元格内容的旋转的角度   

cell.setCellStyle(style);   


```
 10、插入图片  

代码

 //先把读进来的图片放到一个ByteArrayOutputStream中，以便产生ByteArray   
```javascript


ByteArrayOutputStream byteArrayOut = new ByteArrayOutputStream();   

BufferedImage bufferImg = ImageIO.read(new File("ok.jpg"));   

ImageIO.write(bufferImg,"jpg",byteArrayOut);   

 //读进一个excel模版   

FileInputStream fos = new FileInputStream(filePathName+"/stencil.xlt");   

fs = new POIFSFileSystem(fos);   

//创建一个工作薄   

HSSFWorkbook wb = new HSSFWorkbook(fs);   

HSSFSheet sheet = wb.getSheetAt(0);   

HSSFPatriarch patriarch = sheet.createDrawingPatriarch();   

HSSFClientAnchor anchor = new HSSFClientAnchor(0,0,1023,255,(short) 0,0,(short)10,10);     

patriarch.createPicture(anchor , wb.addPicture(byteArrayOut
```
