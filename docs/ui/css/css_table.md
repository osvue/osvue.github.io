#   css table

## `<col>` 标签
```text
HTML <col> 标签

定义和用法
width 属性规定 col 元素的宽度。

通常，col 元素占用的空间就是它显示内容需要的空间。width 属性用于为 col 元素设置预定义的宽度。

注释：该属性会覆盖 colgroup 元素中的任何宽度设置。
```
### 用法
```html
 
				<col style="width:20%" />
				<col style="width:20%" />
				<col style="width:10%" />
				<col style="width:20%" />
				<col style="width:10%" />
				<col style="width:20%" />
                
<table border="1" width="100%">
  <col width="100" />
  <col width="50" />
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
</table>
```
