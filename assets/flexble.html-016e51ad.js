import{_ as e,p as n,q as t,a1 as o}from"./framework-d81ad7e5.js";const r={},s=o(`<h3 id="屏幕适配rem" tabindex="-1"><a class="header-anchor" href="#屏幕适配rem" aria-hidden="true">#</a> 屏幕适配rem</h3><p>flexible 插件，通过改变 rem 的值来进行适配，原设计为 1920px。 ，适配区间为：1366px ~ 2560px，本项目有根据实际情况进行源文件的更改，小屏幕（如:宽为 1366px）需要自己舍弃部分动态组件进行适配，如&#39;动态文字变换组件&#39;会影响布局，需要手动换成一般节点，</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// flexible文件位置: \`common/flexible.js\`,修改部分如下</span>
<span class="token keyword">function</span> <span class="token function">refreshRem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> width <span class="token operator">=</span> docEl<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>width<span class="token punctuation">;</span>
  <span class="token comment">// 最小1366px，最大适配2560px</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>width <span class="token operator">/</span> dpr <span class="token operator">&lt;</span> <span class="token number">1366</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    width <span class="token operator">=</span> <span class="token number">1366</span> <span class="token operator">*</span> dpr<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>width <span class="token operator">/</span> dpr <span class="token operator">&gt;</span> <span class="token number">2560</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    width <span class="token operator">=</span> <span class="token number">2560</span> <span class="token operator">*</span> dpr<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 原项目是1920px我设置成24等份，这样1rem就是80px</span>
  <span class="token keyword">var</span> rem <span class="token operator">=</span> width <span class="token operator">/</span> <span class="token number">24</span><span class="token punctuation">;</span>
  docEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> rem <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
  flexible<span class="token punctuation">.</span>rem <span class="token operator">=</span> win<span class="token punctuation">.</span>rem <span class="token operator">=</span> rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>#user  root;
worker_processes 8;
pid        logs/nginx.pid;
worker_rlimit_nofile 65535;

events {
        worker_connections  65535;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
	log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;
    sendfile        on;
    tcp_nopush     on;
    server_tokens off;
    keepalive_timeout  1800;
    access_log logs/access.log;
    client_max_body_size 1024m;
    client_header_buffer_size 512k;
    large_client_header_buffers 4 512k;    
    server {
	
        listen    21001;
        server_name  27.8.4.241; 

      if ($request_method !~* GET|POST) {
            
           return 403;

        }

        location  ^~/znsj_in {
                limit_except GET POST { deny  all; }
                proxy_pass http://27.8.4.206:19090;
                proxy_redirect     off;
                proxy_set_header   Host             $host:$server_port;
                proxy_set_header   X-Real-IP        $remote_addr;
                proxy_set_header   X-Forwarded-For  $remote_addr;
                proxy_set_header   Via &quot;nginx&quot;;
                proxy_set_header   Upgrade $http_upgrade;
                proxy_set_header   Connection &quot;upgrade&quot;;
                client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
                proxy_connect_timeout 1800; #nginx跟后端服务器连接超时时间(代理连接超时)
                proxy_send_timeout 1800; #后端服务器数据回传时间(代理发送超时)
                proxy_read_timeout 1800; #连接成功后，后端服务器响应时间(代理接收超时)
                proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
                proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
                proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
                proxy_temp_file_write_size 64k;
        }
		
		
        location ^~/display {
                limit_except GET POST { deny  all; }
                proxy_pass http://27.8.4.241:18080;
                proxy_redirect     off;
                proxy_set_header   Host             $host:$server_port;
                proxy_set_header   X-Real-IP        $remote_addr;
                proxy_set_header   X-Forwarded-For  $remote_addr;
                proxy_set_header   Via &quot;nginx&quot;;
                proxy_set_header   Upgrade $http_upgrade;
                proxy_set_header   Connection &quot;upgrade&quot;;
                client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
                proxy_connect_timeout 600; #nginx跟后端服务器连接超时时间(代理连接超时)
                proxy_send_timeout 600; #后端服务器数据回传时间(代理发送超时)
                proxy_read_timeout 600; #连接成功后，后端服务器响应时间(代理接收超时)
                proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
                proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
                proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
                proxy_temp_file_write_size 64k;
        }
		
		location ^~/WpsOAAssist {
                
                proxy_pass http://27.8.4.241:18080;
                proxy_redirect     off;
                proxy_set_header   Host             $host:$server_port;
                proxy_set_header   X-Real-IP        $remote_addr;
                proxy_set_header   X-Forwarded-For  $remote_addr;
                proxy_set_header   Via &quot;nginx&quot;;
                proxy_set_header   Upgrade $http_upgrade;
                proxy_set_header   Connection &quot;upgrade&quot;;
                client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
                proxy_connect_timeout 600; #nginx跟后端服务器连接超时时间(代理连接超时)
                proxy_send_timeout 600; #后端服务器数据回传时间(代理发送超时)
                proxy_read_timeout 600; #连接成功后，后端服务器响应时间(代理接收超时)
                proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
                proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
                proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
                proxy_temp_file_write_size 64k;
        }
		
		location ^~/EtOAAssist {
                
                proxy_pass http://27.8.4.241:18080;
                proxy_redirect     off;
                proxy_set_header   Host             $host:$server_port;
                proxy_set_header   X-Real-IP        $remote_addr;
                proxy_set_header   X-Forwarded-For  $remote_addr;
                proxy_set_header   Via &quot;nginx&quot;;
                proxy_set_header   Upgrade $http_upgrade;
                proxy_set_header   Connection &quot;upgrade&quot;;
                client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
                proxy_connect_timeout 600; #nginx跟后端服务器连接超时时间(代理连接超时)
                proxy_send_timeout 600; #后端服务器数据回传时间(代理发送超时)
                proxy_read_timeout 600; #连接成功后，后端服务器响应时间(代理接收超时)
                proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
                proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
                proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
                proxy_temp_file_write_size 64k;
        }
		
		location ^~/WppOAAssist {
                
                proxy_pass http://27.8.4.241:18080;
                proxy_redirect     off;
                proxy_set_header   Host             $host:$server_port;
                proxy_set_header   X-Real-IP        $remote_addr;
                proxy_set_header   X-Forwarded-For  $remote_addr;
                proxy_set_header   Via &quot;nginx&quot;;
                proxy_set_header   Upgrade $http_upgrade;
                proxy_set_header   Connection &quot;upgrade&quot;;
                client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
                proxy_connect_timeout 600; #nginx跟后端服务器连接超时时间(代理连接超时)
                proxy_send_timeout 600; #后端服务器数据回传时间(代理发送超时)
                proxy_read_timeout 600; #连接成功后，后端服务器响应时间(代理接收超时)
                proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
                proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
                proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
                proxy_temp_file_write_size 64k;
        }
       
        location ^~/platform {
		          limit_except GET POST { deny  all; }
                  proxy_pass http://27.8.4.241:19091;
                  proxy_redirect     off;
                  proxy_set_header   Host             $host:$server_port;
                  proxy_set_header   X-Real-IP        $remote_addr;
                  proxy_set_header   X-Forwarded-For  $remote_addr;
                  proxy_set_header   Via &quot;nginx&quot;;
                  proxy_set_header   Upgrade $http_upgrade;
                  proxy_set_header   Connection &quot;upgrade&quot;;
                  client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数
                  proxy_connect_timeout 600; #nginx跟后端服务器连接超时时间(代理连接超时
                  proxy_send_timeout 600; #后端服务器数据回传时间(代理发送超时
                  proxy_read_timeout 600; #连接成功后，后端服务器响应时间(代理接收超时)
                  proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
                  proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
                  proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
                  proxy_temp_file_write_size 64k;
        }  	
		
		
        location ^~/admin {
                  limit_except GET POST { deny  all; }
                  proxy_pass http://27.8.4.241:18161;
                  proxy_redirect     off;
                  proxy_set_header   Host             $host:$server_port;
                  proxy_set_header   X-Real-IP        $remote_addr;
                  proxy_set_header   X-Forwarded-For  $remote_addr;
                  proxy_set_header   Via &quot;nginx&quot;;
                  proxy_set_header   Upgrade $http_upgrade;
                  proxy_set_header   Connection &quot;upgrade&quot;;
                  client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数
                  proxy_connect_timeout 600; #nginx跟后端服务器连接超时时间(代理连接超时
                  proxy_send_timeout 600; #后端服务器数据回传时间(代理发送超时
                  proxy_read_timeout 600; #连接成功后，后端服务器响应时间(代理接收超时)
                  proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
                  proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
                  proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
                  proxy_temp_file_write_size 64k;
        }
		
        error_page   400 404 500 502 503 504 /50x.html;
		
    }
}


</code></pre></div><pre><code>#http://mp.weixin.qq.com/s/5aMN9SqaWa57rYGgtdAF_A
</code></pre><p>三，并发计数器 #AtomicInteger.incrementAndGet 四，JVM调优 #jVisualVm.exe：jdk1.6以上自带的jvm可视化工具，在jdk/bin中。可用它查看本地和远程主机上jvm的状态包括：监控内存泄露，跟踪垃圾回收，执行时内存、cpu分析，线程分析等 ##这是一款非常强大非常方便的在开发和故障排查中都非常有用的工具。 #cpu使用率100% 1：top -c 显示进程运行信息列表，键入大写P，进程按照CPU使用率排序。记录消耗CPU最高的进程PID假设为12345 2：top -Hp 12345显示一个进程的线程运行信息列表，键入大写P，排序 3：将线程PID转化为16进制：printf &quot;%\\n&quot; 12345，因为堆栈里线程id使用16进制表示，12345的16进制为3039 4：stack 12345 | grep &#39;3039&#39; -C5 --color，可查看到消耗CPU最高的线程以及正在执行的代码 #内存溢出 1：-XX:+HeapDumpOmOutOfMemoryError -XX:HeapDumpPath=d:/a.dump jvm发生内存溢出时，将整个堆信息导出到d:/a.dump文件中，方便排查 2：StackOverflowError：java 虚拟机栈内存溢出可能导致的原因是方法递归层级太深导致栈帧创建过多。 3：OutOfMemoryError： #java堆内存溢出(heap space)：也就是当你看到heap相关的时候就肯定是堆栈溢出了，此时如果代码没有问题的情况下，适当调整-Xmx和-Xms是可以避免的，不过一定是代码没有问题的前提， ##为什么会溢出呢，要么代码有问题，要么访问量太多并且每个访问的时间太长或者数据太多，导致数据释放不掉，因为垃圾回收器是要找到那些是垃圾才能回收，这里它不会认为这些东西是垃圾，自然不会去回收了； #方法区内存溢出(Meta space)：jdk1.8HotSpot中方法区的实现用元空间代替永久代，原因系统的代码非常多或引用的第三方包非常多，解决方案：增加MaxPermSize、减少系统需要的类数量、使用ClassLoad合理地装载各个类，并定期回收 #直接内存溢出(Direct buffer memory)：使用NIO的时候，如果你在直接或间接使用了ByteBuffer中的allocateDirect方法的时候，而不做clear的时候就会出现类似的问题，保证直接内存不溢出的方法是合理地进行Full GC的执行 #线程过多导致OOM：由于每个线程的开启都需要占用系统内存，因此线程数量太多也可导致OOM，解决办法：合理减少线程总数，使用线程池等 #GC效率低下引起OOM：GC over head limit exceeded这种情况是当系统处于高频的GC状态，而且回收的效果依然不佳的情况，当发生下面几种情况时，才会开始报这个错误， ##这种情况一般是产生了很多不可以被释放的对象，有可能是引用使用不当导致，或申请大对象导致， #花在GC上的时间是否超过98% #老年代释放的内存是否小于2% #eden去释放的内存是否小于2% #是否连续最近5次GC都同时出现了上述几种情况</p><pre><code>#虚拟机参数优化
	1：将初始化堆-Xms与最大堆-Xmx设置相等，这样可以减少程序运行时垃圾回收次数
	2：-XX:+HeapDumpOmOutOfMemoryError -XX:HeapDumpPath=d:/a.dump jvm发生内存溢出时，将整个堆信息导出到d:/a.dump文件中，方便排查
	3：直接内存适合申请次数较少，访问较频繁的场合，因为直接内存读写速度比堆空间快，但是申请空间的速度比堆空间慢
	4：虚拟机的工作模式：server模式启动慢，性能好。适合后台长期运行的系统。client模式启动快，适合用户界面程序

#跟踪GC：
	#-XX:+PrintGC：打印gc日志
	#-XX:+PrintGCDetails：打印详细gc日志
	#-XX:+PrintHeapAtGC：每次gc前后分别打印堆信息
	#-XX:+PrintGCTimeStamps：在gc日志前面加上虚拟机启动后的时间偏移量
	#-XX:+PrintGCApplicationConcurrentTime：可以打印应用程序的执行时间
	#-XX:+PrintGCApplicationStoppedTime：可以打印由于GC而产生的停顿时间
	#-XX:+PrintReferenceGC：跟踪系统内的软引用、弱引用、虚引用和finallize队列
	#-Xloggc:log/gc.log：将gc日志保存到文件中，便于后续分析和定位问题

#jdk性能监控工具，jdk/bin/
	#jvisualvm：多功能故障诊断和性能监控的可视化工具，集成jstat、jmap、jhat、jstack，甚至代替JConsole。
	#JConsole：jdk自带图形化工具，可监控cpu、内存、线程数、堆信息，元空间使用情况，类加载情况等
	#jstack：查看线程堆栈
	#jps：查看java进程
	#jstat：查看虚拟机运行时信息
	#jinfo：查看虚拟机参数
	#jmap：导出堆到文件
	#jhat：jdk自带堆分析工具	
#推荐书籍：《深入理解java虚拟机》、《实战java虚拟机》
</code></pre><p>五，synchronized实现原理 #深入理解Java并发之synchronized实现原理：https://blog.csdn.net/javazejian/article/details/72828483</p><p>六，linux性能监控工具 #top：显示系统整体资源使用情况 #vmstat：监控内存和CPU #iostat：监控IO #pidstat：不仅可看进程还可看线程信息，例如pidstat -p pid 1 3 -u -t</p>`,9),a=[s];function p(_,i){return n(),t("div",null,a)}const u=e(r,[["render",p],["__file","flexble.html.vue"]]);export{u as default};
