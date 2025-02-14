import{_ as n,p as e,q as o,a1 as t}from"./framework-d81ad7e5.js";const r={},s=t(`<h2 id="conf" tabindex="-1"><a class="header-anchor" href="#conf" aria-hidden="true">#</a> conf</h2><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;
    server_tokens off;
    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       80;
        server_name  www.aabc.com;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

	location /cscs {
		proxy_pass http://127.0.0.1:8800;
		proxy_redirect off;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header Host $host:$server_port;
 		client_max_body_size 10m; 
 		client_body_buffer_size 128k; 
 		proxy_connect_timeout 90; 
 		proxy_send_timeout 90; 
 		proxy_read_timeout 90; 
 		proxy_buffer_size 4k; 
		proxy_buffers 4 32k; 
		proxy_busy_buffers_size 64k; 
		proxy_temp_file_write_size 64k;
	}
	
	#  静动分离，就是将css、js、jpg等静态资源和jsp等动态资源分开处理，以此提高服务器响应速度，提高性能。
	# 在nginx的安装根目录下创建resources   ui
	
	# 把项目的resources/static里面的所有内容放到nginx/resources里面
	
	location ~* \\.(css|js|html|png|jpg|gif){
		root ui;     # 当匹配到 .css 这个规则时指向nginx目录里面的/html文件夹
		# 缓存天数  7天
		expires 7d;
	}
  
    }
 
}
</code></pre></div><h2 id="配置解释" tabindex="-1"><a class="header-anchor" href="#配置解释" aria-hidden="true">#</a> 配置解释</h2><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>
    # 负载均衡
    upstream www.cc.com{
        server 27.10.158.252:7011 weight=1 max_fails=2 fail_timeout=30s;
        server 27.10.158.247:8800 weight=2 max_fails=2 fail_timeout=30s;
        # 多应用的 session 共享问题
        ip_hash;
    }

 server {

        listen       80;
        server_name   www.cc.com;
        #osvue为项目名 weblogic 请求地址proxy_pass
	    location /osvue {
            proxy_pass http://www.cc.com;
            proxy_redirect off;
            proxy_set_header X-Real-IP $remote_addr;
            #后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            #以下是一些反向代理的配置，可选。
            proxy_set_header Host $host:$server_port;
            client_max_body_size 10m; #允许客户端请求的最大单文件字节数
            client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
            proxy_connect_timeout 90; #nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_send_timeout 90; #后端服务器数据回传时间(代理发送超时)
            proxy_read_timeout 90; #连接成功后，后端服务器响应时间(代理接收超时)
            proxy_buffer_size 4k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
            proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
            proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
            proxy_temp_file_write_size 64k;
	    }

	    error_page   404  /404.html;
        error_page   500 502 503 504  /50x.html;

        location = /50x.html {
            root   html;
        }

		location = /favicon.ico {
            root   html;
        }

        # 动静分离
        location ~* \\.(css|js|html|png|jpg|gif){
            root ui;
            expires :7d;
        }
    }




#http.server.localtion语法


# 基本语法： location [=|~|~*|^~]/uri/{...} 

# = 严格匹配, 如果这个查询匹配，将停止搜索并立即处理此请求 

# ~ 区分大小写匹配（可用正则表达式） 

# ~* 不区分大小写匹配（可用正则表达式） 

# !~ 区分大小写匹配 

# !~* 不区分大小写匹配 

# ^~ 如果把这个前缀用于一个常规字符串，那么告诉nginx如果路径匹配那么不测试正则表达式

location = /{
#只匹配/查询
}

location /{
#匹配任何查询，因为所有请求都以/开头。但是正则表达式和长的块规则将被优先查询匹配
}

location ^~ /images/{
#匹配任何以/images/开头的查询并停止搜索。任何正则表达式将不会被测试。
}

location ~*.(gif|jpg|jpeg)\${
#匹配任何以gif|jpg|jpeg结尾的请求
}
</code></pre></div>`,4),_=[s];function a(i,c){return e(),o("div",null,_)}const p=n(r,[["render",a],["__file","use_e_conf.html.vue"]]);export{p as default};
