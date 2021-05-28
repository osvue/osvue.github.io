---
autoGroup-2: SpringMVC
title:  上传文件
---

## 
> 使用apache的开源jar包完成上传功能，使用jar包分别是：common-fileupload.jar和common-io.jar

```java
/**
	 * 批量上传文件
	 * 
	 * @param request
	 * @param response
	 * @param username
	 *            用户名; 用于区分用户上传的图片
	 * @param moduleName
	 *            模块名称; 用于区分该图片是位于那个模块进行上传
	 * @return
	 * @throws FileNotFoundException
	 */
	public static List<String> uploadFile(HttpServletRequest request, String username, String moduleName)
			throws FileNotFoundException {

		// 创建list集合，用于接收上传文件的路径
		List<String> filePathList = new ArrayList<String>();

		// 拼接文件上传位置，这里使用Tomcat服务器，将文件上传到webapps中，和项目同目录，files将用于保存上传的文件，将上传的文件于项目分开
		String strPath = ",webapps,files," + moduleName + "," + username;

		// 解析出文件存放路径位置
		String filepath = System.getProperty("catalina.base") + strPath.replace(',', File.separatorChar);

		log.debug("文件上传位置-------->>>>>>>>>>>>" + filepath);

		// 转换request，解析出request中的文件
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;

		// 获取文件map集合
		Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();

		String fileName = null;

		// 循环遍历，取出单个文件
		for (Map.Entry<String, MultipartFile> entity : fileMap.entrySet()) {

			// 获取单个文件
			MultipartFile mf = entity.getValue();

			// 获得原始文件名
			fileName = mf.getOriginalFilename();

			// 截取文件类型; 这里可以根据文件类型进行判断
			String fileType = fileName.substring(fileName.lastIndexOf('.'));

			try {
				// 截取上传的文件名称
				String newFileName = fileName.substring(0, fileName.lastIndexOf('.'));

				log.debug("上传来的文件名称------->>>>>>>>>" + newFileName);

				// 拼接上传文件位置
				String newfilePath = filepath + File.separatorChar + newFileName + fileType;

				log.debug("拼接好的文件路径地址------------->>>>>>>>" + newfilePath);

				// 重新组装文件路径，用于保存在list集合中
				String filepathUrl = "files" + File.separatorChar + moduleName + File.separatorChar + username
						+ File.separatorChar + newFileName + fileType;

				log.debug("文件位置---------------->>>>>>>>>>" + filepathUrl);

				// 创建文件存放路径实例
				File dest = new File(filepath);

				// 判断文件夹不存在就创建
				if (!dest.exists()) {
					dest.mkdirs();
				}
				// 创建文件实例
				File uploadFile = new File(newfilePath);

				// 判断文件已经存在，则删除该文件
				if (uploadFile.exists()) {
					uploadFile.delete();
				}

				log.debug("start upload file-------------->>>>>>> " + fileName);

				// 利于spring中的FileCopyUtils.copy()将文件复制
				FileCopyUtils.copy(mf.getBytes(), uploadFile);

				// 将文件路径存入list集合中
				filePathList.add(filepathUrl);

			} catch (IOException e) {
				e.printStackTrace();
				log.error("upload failed. filename: " + fileName + "---->>>error message ----->>>>> " + e.getMessage());
				return null;
			}
		}
		return filePathList;
	}
```    

## FormData

```js
function file_upload() {

			// 创建表单数据对象
			var obj = new FormData();

			// 获取文件框中的数据
			var file1 = document.getElementById("file1").files[0];
			var file2 = document.getElementById("file2").files[0];

			// 将文件数据添加至表单数据对象中
			obj.append("file1", file1);
			obj.append("file2", file2);

			console.log("请求参数---》》》" + obj);

			// 使用ajax异步文件上传
			$.ajax({
				url : util.basePath() + 'secure/upload-file/uploadDemo',
				type : 'POST',
				data : obj,
				contentType : false,
				processData : false,
				mimeType : 'multipart/form-data',
				success : function(data) {

					console.log(data);
				}
			})
}
```