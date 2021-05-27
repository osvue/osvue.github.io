---
autoGroup-3: POI
title: POI各种样式
---


## poi 

```java
 
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.CellRangeAddress;
import org.apache.poi.hssf.util.Region;

public class CellStyleUtil {

	
	public void renderBorder(){
		
		
		HSSFWorkbook wb = new HSSFWorkbook();

		HSSFSheet sheet = wb.createSheet();

		HSSFCellStyle setBorder = wb.createCellStyle();

		//	一、设置背景色：

		setBorder.setFillForegroundColor((short) 13);// 设置背景色

		setBorder.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);

		//	二、设置边框:

		setBorder.setBorderBottom(HSSFCellStyle.BORDER_THIN); //下边框

		setBorder.setBorderLeft(HSSFCellStyle.BORDER_THIN);//左边框

		setBorder.setBorderTop(HSSFCellStyle.BORDER_THIN);//上边框

		setBorder.setBorderRight(HSSFCellStyle.BORDER_THIN);//右边框

		//	三、设置居中:

		setBorder.setAlignment(HSSFCellStyle.ALIGN_CENTER); // 居中

		//四、设置字体:

		HSSFFont font = wb.createFont();

		font.setFontName("黑体");

		font.setFontHeightInPoints((short) 16);//设置字体大小

		HSSFFont font2 = wb.createFont();

		font2.setFontName("仿宋_GB2312");

		font2.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);//粗体显示

		font2.setFontHeightInPoints((short) 12);

		setBorder.setFont(font);//选择需要用到的字体格式

		//五、设置列宽:

		sheet.setColumnWidth(0, 3766); //第一个参数代表列id(从0开始),第2个参数代表宽度值 参考 ："2012-08-10"的宽度为2500

		//六、设置自动换行:

		setBorder.setWrapText(true);//设置自动换行

		//七、合并单元格:
		 

			Region region1 = new Region(0, (short) 0, 0, (short) 6);

			//参数1：行号 参数2：起始列号 参数3：行号 参数4：终止列号

			//或者用

			//	CellRangeAddress region1 = new CellRangeAddress(rowNumber, rowNumber, (short) 0, (short) 11);

			//但应注意两个构造方法的参数不是一样的，具体使用哪个取决于POI的不同版本。

		   sheet.addMergedRegion(region1);
	}
}

```