---
title: 模拟分页
---

## list分页

```java

public Map<String, Integer> getPageInfo(Map<String, Object> param) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		int page = 1;
		int size = 10;
		try {
			Object opage = param.get("page");
			Object osize = param.get("rows");
			page = Integer.valueOf(opage.toString());
			size = Integer.valueOf(osize.toString());
		} catch (Exception e) {
			page = 1;
			size = 10;
		}
		map.put("num", page);
		map.put("size", size);
		return map;
	}

	public static List limitPage(List list, Integer pageNum, Integer pageSize) {
		if (list == null) {
			return null;
		}
		if (list.size() == 0) {
			return null;
		}
		// 记录总数
		Integer count = list.size();
		// 开始索引
		int fromIndex = (pageNum - 1) * pageSize;
		// 结束索引
		int toIndex = pageNum * pageSize;
		if (fromIndex + 1 > count) {
			return null;
		}
		if (pageNum * pageSize > count) {
			toIndex = count;
		}
		List pageList = list.subList(fromIndex, toIndex);
		return pageList;
	}

```