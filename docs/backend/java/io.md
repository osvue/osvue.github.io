# IO


### 加解密
```java

 if(in != null){
            //out = response.getOutputStream();
            int count;
            byte datad[] = new byte[1024 * 1024];
            while((count = in.read(datad, 0, 1024 * 1024)) != -1){
                for (int i = 0; i < count; i++) {
                    datad[i] = (byte) (-1 - (int) datad[i]);
                }
                out.write(datad, 0, count);
            }
            out.flush();
        }
```        