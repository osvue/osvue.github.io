import{_ as n,p as e,q as r,a1 as t}from"./framework-d81ad7e5.js";const o={},s=t(`<h2 id="跨域配置" tabindex="-1"><a class="header-anchor" href="#跨域配置" aria-hidden="true">#</a> 跨域配置</h2><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>
 server {
        listen       80;
        server_name  www.ooxx.com;
        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
            proxy_pass http://localhost:8188/;
            # 设置是否允许 cookie 传输
            add_header Access-Control-Allow-Credentials true;
            # 允许请求地址跨域 * 做为通配符
            add_header Access-Control-Allow-Origin * always;
            # 允许跨域的请求方法
            add_header Access-Control-Allow-Methods &#39;GET, POST, PUT, DELETE, OPTIONS&#39;;
            add_header Access-Control-Allow-Headers &#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;;

            if ($request_method = &#39;OPTIONS&#39;) {
                return 204;
            }
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
 
</code></pre></div><h3 id="指定配置文件" tabindex="-1"><a class="header-anchor" href="#指定配置文件" aria-hidden="true">#</a> 指定配置文件</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 验证配置文件   -p 指定 home</span>

/usr/local/nginx/sbin/nginx <span class="token parameter variable">-tc</span> /usr/local/nginx/conf/nginx.conf
or

/usr/local/nginx/sbin/nginx <span class="token parameter variable">-t</span> <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf
<span class="token comment"># 指定配置文件启动</span>

/usr/local/nginx/sbin/nginx <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf
<span class="token comment"># 指定配置文件重启</span>

/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf
</code></pre></div><h4 id="测试nginx配置文件-nginx-t" tabindex="-1"><a class="header-anchor" href="#测试nginx配置文件-nginx-t" aria-hidden="true">#</a> 测试Nginx配置文件: <code>nginx -t</code></h4><ul><li><strong>启动: -c nginx配置文件地址</strong></li><li><strong>nginx -c /www/server/nginx/conf/nginx.conf</strong></li></ul><h3 id="数据包头部信息过大问题" tabindex="-1"><a class="header-anchor" href="#数据包头部信息过大问题" aria-hidden="true">#</a> 数据包头部信息过大问题</h3><p>如果客户端发出请求的URL头部信息过大,网站将不能及时响应,并通过状态码414报错.</p><ul><li><code>&lt;center&gt;&lt;h1&gt;414 Request-URI Too Large&lt;/h1&gt;&lt;/center&gt;</code> 对此问题,可在Nginx的http容器中优化参数:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@proxy ~<span class="token punctuation">]</span><span class="token comment"># vim /usr/local/nginx/conf/nginx.conf</span>
<span class="token punctuation">..</span>.
http <span class="token punctuation">{</span>
      client_header_buffer_size    1k<span class="token punctuation">;</span>     <span class="token comment">#默认请求包头信息的缓存	</span>
      large_client_header_buffers  <span class="token number">4</span> 4k<span class="token punctuation">;</span>   <span class="token comment">#大请求的包头部信息缓存个数与容量</span>
<span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
<span class="token punctuation">[</span>root@proxy ~<span class="token punctuation">]</span><span class="token comment"># /usr/local/nginx/sbin/nginx -s reload   #重启加载配置</span>

</code></pre></div><h2 id="nginx隐藏版本号操作" tabindex="-1"><a class="header-anchor" href="#nginx隐藏版本号操作" aria-hidden="true">#</a> Nginx隐藏版本号操作</h2><ol><li><p>定位当前nginx所使用的配置文件</p></li><li><p>编缉找到的配置文件，找到**http{}**字段址其中加入：<code>server_tokens off;</code></p></li><li><p>保存退出后，重新加载nginx配置文件：</p></li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> reload 
</code></pre></div><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>load_module modules/ngx_stream_module.so;

user  root;
worker_processes 4;

error_log logs/error.log warn;
pid       logs/nginx.pid;

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

    access_log logs/access.log;

    sendfile        on;
    server_tokens   off;
    tcp_nopush     on;
    keepalive_timeout  1800;

	 upstream backend
    {
    	server 192.168.1.247:9090;
      #  server 192.168.1.238:9090;
    }
    upstream displaybackend
    {
        server 192.168.1.246:18080;
#	server 192.168.1.238:18080;
    }
    upstream sjzh
    {
        server 192.168.135.5:9000;
    }	

    server {
        listen       19093;
        server_name  192.168.1.238;

   location =/ {
	  rewrite ^(.*) http://192.168.1.238:19093/znsj_in permanent;

   }
   location ^~/znsj_in {
	limit_except GET POST { deny  all; }
	proxy_pass http://backend/znsj_in;
	proxy_redirect     off;
	proxy_set_header   Host             $host:$server_port;
	proxy_set_header   X-Real-IP        $remote_addr;
	proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
	proxy_set_header   Via &quot;nginx&quot;;
	proxy_set_header   Upgrade $http_upgrade;
	proxy_set_header   Connection &quot;upgrade&quot;;
	client_max_body_size    512m; #表示最大上传512m，需要多大设置多大。
	client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
            proxy_connect_timeout 600; #nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_send_timeout 600; #后端服务器数据回传时间(代理发送超时)
            proxy_read_timeout 600; #连接成功后，后端服务器响应时间(代理接收超时)
            proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
            proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
            proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
            proxy_temp_file_write_size 64k;
      }

      location ^~/display {
            limit_except GET POST { deny  all; }
            proxy_pass http://displaybackend/display;
            proxy_redirect off;
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
            proxy_connect_timeout 600; #nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_send_timeout 600; #后端服务器数据回传时间(代理发送超时)
            proxy_read_timeout 600; #连接成功后，后端服务器响应时间(代理接收超时)
            proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
            proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
            proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
            proxy_temp_file_write_size 64k;
        }	
		
   
        location ^~/ {
            limit_except GET POST { deny  all; }
            proxy_pass http://sjzh/;
            proxy_redirect off;
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
            proxy_connect_timeout 600; #nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_send_timeout 600; #后端服务器数据回传时间(代理发送超时)
            proxy_read_timeout 600; #连接成功后，后端服务器响应时间(代理接收超时)
            proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
            proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
            proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
            proxy_temp_file_write_size 64k;
        }    

        error_page   500 502 503 504  /50x.html;
    }
}

stream {

    upstream sjzhdb {
        server 192.168.135.5:1521;
    }

    server {
        listen       1521  so_keepalive=on;
        proxy_timeout 1d;
        proxy_pass   sjzhdb;
    }
}

</code></pre></div><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>http {

    map $http_upgrade $connection_upgrade {
        default upgrade;
        &#39;&#39; close;
    }

    upstream websocket {
		ip_hash;   #使用ip固定转发到后端服务器
		server localhost:3100;  
		server localhost:3101;
        server localhost:3102;
	}


    server {
        listen 8020;
        location / {
            proxy_pass http://websocket;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection $connection_upgrade; #      声明支持websocket
        }
    }
}



#http/2 nginx conf

#server{
#    listen 443;
#    server_name example.com www.example.com;
#    root /Users/welefen/Develop/git/firekylin/www;
#    set $node_port 8360;

#    ssl on;
#    ssl_certificate  %path/ssl/chained.pem;
#    ssl_certificate_key %path/ssl/domain.key;

#    ssl_session_timeout 5m;
#    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
#    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA;
#    ssl_session_cache shared:SSL:50m;
#    ssl_dhparam %path/ssl/dhparams.pem;
#    ssl_prefer_server_ciphers on;


#    index index.js index.html index.htm;

#    location ^~ /.well-known/acme-challenge/ {
#      alias %path/ssl/challenges/;
#      try_files $uri = 404;
#    }

#   location / {
#        proxy_http_version 1.1;
#        proxy_set_header X-Real-IP $remote_addr;
#        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
#        proxy_set_header Host $http_host;
#        proxy_set_header X-NginX-Proxy true;
#        proxy_set_header Upgrade $http_upgrade;
#        proxy_set_header Connection &quot;upgrade&quot;;
#        proxy_pass http://127.0.0.1:$node_port$request_uri;
#        proxy_redirect off;
#    }

#    location = /development.js {
#        deny all;
#    }

#    location = /testing.js {
#        deny all;
#    }

#    location = /production.js {
#        deny all;
#   }


#   location ~ /static/ {
#      etag         on;
#      expires      max;
#   }
#}
#server {
#    listen 80;
#    server_name example.com www.example.com;
#    rewrite ^(.*) https://example.com$1 permanent;
#}
</code></pre></div><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>load_module modules/ngx_stream_module.so;

user  root;
worker_processes 4;

error_log logs/error.log warn;
pid       logs/nginx.pid;

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

    access_log logs/access.log;

    sendfile        on;
    server_tokens   off;
    tcp_nopush     on;
    keepalive_timeout  1800;

	 upstream backend
    {
    	server 172.16.140.103:19090;
    }
    upstream displaybackend
    {
        server 172.16.140.103:18080;
    }

	upstream sodatazb
    {
        server 172.16.140.103:18888;
    }
	upstream sodataws
    {
        server 172.16.140.103:16666;
    }
	
	
	upstream serviceClientZb
    {
        server 172.16.140.103:19094;
    }
	upstream serviceClientWs
    {
        server 172.16.140.103:19096;
    }
	
	

    server {
        listen       9095;
        server_name  192.168.1.247;

  
   location ^~/znsj_in {
	limit_except GET POST { deny  all; }
	proxy_pass http://backend/znsj_in;
	proxy_redirect     off;
	proxy_set_header   Host             $host:$server_port;
	proxy_set_header   X-Real-IP        $remote_addr;
	proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
	proxy_set_header   Via &quot;nginx&quot;;
	proxy_set_header   Upgrade $http_upgrade;
	proxy_set_header   Connection &quot;upgrade&quot;;
	client_max_body_size    512m; #表示最大上传512m，需要多大设置多大。
	client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
            proxy_connect_timeout 600; #nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_send_timeout 600; #后端服务器数据回传时间(代理发送超时)
            proxy_read_timeout 600; #连接成功后，后端服务器响应时间(代理接收超时)
            proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
            proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
            proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
            proxy_temp_file_write_size 64k;
      }


      location ^~/display {
            limit_except GET POST { deny  all; }
            proxy_pass http://displaybackend/display;
            proxy_redirect off;
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
            proxy_connect_timeout 600; #nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_send_timeout 600; #后端服务器数据回传时间(代理发送超时)
            proxy_read_timeout 600; #连接成功后，后端服务器响应时间(代理接收超时)
            proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
            proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
            proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
            proxy_temp_file_write_size 64k;
        }	
		 
location ^~/PowerInfo {
	limit_except GET POST { deny  all; }
	proxy_pass http://sodatazb/PowerInfo;
	proxy_redirect     off;
	proxy_set_header   Host             $host:$server_port;
	proxy_set_header   X-Real-IP        $remote_addr;
	proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
	proxy_set_header   Via &quot;nginx&quot;;
	proxy_set_header   Upgrade $http_upgrade;
	proxy_set_header   Connection &quot;upgrade&quot;;
	client_max_body_size    512m; #表示最大上传512m，需要多大设置多大。
	client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
            proxy_connect_timeout 600; #nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_send_timeout 600; #后端服务器数据回传时间(代理发送超时)
            proxy_read_timeout 600; #连接成功后，后端服务器响应时间(代理接收超时)
            proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
            proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
            proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
            proxy_temp_file_write_size 64k;
      }
	
	
	location ^~/PowerInfo2 {
	limit_except GET POST { deny  all; }
	proxy_pass http://sodataws/PowerInfo2;
	proxy_redirect     off;
	proxy_set_header   Host             $host:$server_port;
	proxy_set_header   X-Real-IP        $remote_addr;
	proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
	proxy_set_header   Via &quot;nginx&quot;;
	proxy_set_header   Upgrade $http_upgrade;
	proxy_set_header   Connection &quot;upgrade&quot;;
	client_max_body_size    512m; #表示最大上传512m，需要多大设置多大。
	client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
            proxy_connect_timeout 600; #nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_send_timeout 600; #后端服务器数据回传时间(代理发送超时)
            proxy_read_timeout 600; #连接成功后，后端服务器响应时间(代理接收超时)
            proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
            proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
            proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
            proxy_temp_file_write_size 64k;
    }
	  
	  
	location ^~/serviceClientZbMx {
	limit_except GET POST { deny  all; }
	proxy_pass http://serviceClientZb/serviceClientZbMx;
	proxy_redirect     off;
	proxy_set_header   Host             $host:$server_port;
	proxy_set_header   X-Real-IP        $remote_addr;
	proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
	proxy_set_header   Via &quot;nginx&quot;;
	proxy_set_header   Upgrade $http_upgrade;
	proxy_set_header   Connection &quot;upgrade&quot;;
	client_max_body_size    512m; #表示最大上传512m，需要多大设置多大。
	client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
            proxy_connect_timeout 600; #nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_send_timeout 600; #后端服务器数据回传时间(代理发送超时)
            proxy_read_timeout 600; #连接成功后，后端服务器响应时间(代理接收超时)
            proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
            proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
            proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
            proxy_temp_file_write_size 64k;
    } 
	  
	location ^~/serviceClientWsMx {
	limit_except GET POST { deny  all; }
	proxy_pass http://serviceClientWs/serviceClientWsMx;
	proxy_redirect     off;
	proxy_set_header   Host             $host:$server_port;
	proxy_set_header   X-Real-IP        $remote_addr;
	proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
	proxy_set_header   Via &quot;nginx&quot;;
	proxy_set_header   Upgrade $http_upgrade;
	proxy_set_header   Connection &quot;upgrade&quot;;
	client_max_body_size    512m; #表示最大上传512m，需要多大设置多大。
	client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
            proxy_connect_timeout 600; #nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_send_timeout 600; #后端服务器数据回传时间(代理发送超时)
            proxy_read_timeout 600; #连接成功后，后端服务器响应时间(代理接收超时)
            proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
            proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
            proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
            proxy_temp_file_write_size 64k;
    }  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
        error_page   500 502 503 504  /50x.html;
    }
	
	
	
}



</code></pre></div><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>user  nginx;
worker_processes  2;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

worker_rlimit_nofile 40000;

events {
    use epoll;
    worker_connections  8096;
        multi_accept on;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  /var/log/nginx/access.log  main;

    sendfile           on;
    tcp_nopush         on;
    tcp_nodelay        on;
        keepalive_timeout  15;

    # gzip压缩功能设置
    gzip on;
    gzip_min_length 1k;
    gzip_buffers    4 32k;
    gzip_http_version 1.1;
    gzip_comp_level 6;
    gzip_types text/html text/plain text/css text/javascript application/json application/javascript application/x-javascript application/xml;
    gzip_vary on;

    upstream bootshiro {
      server    192.168.0.3:8085;
      #server    127.0.0.1:8081;
    }

    upstream angular {
      server    192.168.0.3:4200;
    }
    # 缓存配置
        proxy_cache_path /tmp/cache levels=1:2 keys_zone=my_cache:30m max_size=1G;

    server {
      listen    80;
      server_name    http://tom.usthe.com;

      charset    utf-8;
      #access_log    logs/host.access.log main;

      location / {

                proxy_pass    http://angular;

                proxy_redirect     off;
                proxy_set_header  Host  $host:$server_port;

                proxy_buffering on;
                proxy_buffer_size   4k;
                proxy_buffers   4 32k;
                proxy_busy_buffers_size   64k;
                proxy_temp_file_write_size 64k;

      }

      location /api/ {
                #后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
                proxy_pass    http://bootshiro/;
                proxy_redirect     off;
                proxy_set_header  Host  $host;
                proxy_set_header  X-Real-IP  $remote_addr;
                proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;

                proxy_buffer_size   4k;
                proxy_buffers   4 32k;
                proxy_busy_buffers_size   64k;
                proxy_temp_file_write_size 64k;

      }
          #对静态资源缓存
          #location ~* \\.(html|css|jpg|gif|ico|js)$ {
      #  proxy_cache          my_cache;
      #  proxy_cache_key      $host$uri$is_args$args;
      #  proxy_cache_valid    200 301 302 30m;
      #  expires              30m;
      #  proxy_pass  http://angular;
          #}


    }
}

</code></pre></div><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>load_module modules/ngx_stream_module.so;

user  root;
worker_processes 4;

error_log logs/error.log warn;
pid       logs/nginx.pid;

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

    access_log logs/access.log;

    sendfile        on;
    server_tokens   off;
    tcp_nopush     on;
    keepalive_timeout  1800;

	 upstream backend
    {
    	server 172.16.140.103:19090;
    }
    upstream displaybackend
    {
        server 172.16.140.103:18080;
    }


    server {
        listen       9095;
        server_name  192.168.1.247;

  
   location ^~/znsj_in {
	limit_except GET POST { deny  all; }
	proxy_pass http://backend/znsj_in;
	proxy_redirect     off;
	proxy_set_header   Host             $host:$server_port;
	proxy_set_header   X-Real-IP        $remote_addr;
	proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
	proxy_set_header   Via &quot;nginx&quot;;
	proxy_set_header   Upgrade $http_upgrade;
	proxy_set_header   Connection &quot;upgrade&quot;;
	client_max_body_size    512m; #表示最大上传512m，需要多大设置多大。
	client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
            proxy_connect_timeout 600; #nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_send_timeout 600; #后端服务器数据回传时间(代理发送超时)
            proxy_read_timeout 600; #连接成功后，后端服务器响应时间(代理接收超时)
            proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
            proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
            proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
            proxy_temp_file_write_size 64k;
      }

      location ^~/display {
            limit_except GET POST { deny  all; }
            proxy_pass http://displaybackend/display;
            proxy_redirect off;
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
            proxy_connect_timeout 600; #nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_send_timeout 600; #后端服务器数据回传时间(代理发送超时)
            proxy_read_timeout 600; #连接成功后，后端服务器响应时间(代理接收超时)
            proxy_buffer_size 64k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
            proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
            proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
            proxy_temp_file_write_size 64k;
        }	
		 

        error_page   500 502 503 504  /50x.html;
    }
}



</code></pre></div><h3 id="gzip" tabindex="-1"><a class="header-anchor" href="#gzip" aria-hidden="true">#</a> gzip</h3><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>user  nginx;
worker_processes  2;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

worker_rlimit_nofile 40000;

events {
    use epoll;
    worker_connections  8096;
        multi_accept on;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  /var/log/nginx/access.log  main;

    sendfile           on;
    tcp_nopush         on;
    tcp_nodelay        on;
        keepalive_timeout  15;

    # gzip压缩功能设置
    gzip on;
    gzip_min_length 1k;
    gzip_buffers    4 32k;
    gzip_http_version 1.1;
    gzip_comp_level 6;
    gzip_types text/html text/plain text/css text/javascript application/json application/javascript application/x-javascript application/xml;
    gzip_vary on;

    upstream bootshiro {
      server    192.168.0.3:8085;
      #server    127.0.0.1:8081;
    }

    upstream angular {
      server    192.168.0.3:4200;
    }
    # 缓存配置
        proxy_cache_path /tmp/cache levels=1:2 keys_zone=my_cache:30m max_size=1G;

    server {
      listen    80;
      server_name    http://tom.usthe.com;

      charset    utf-8;
      #access_log    logs/host.access.log main;

      location / {

                proxy_pass    http://angular;

                proxy_redirect     off;
                proxy_set_header  Host  $host:$server_port;

                proxy_buffering on;
                proxy_buffer_size   4k;
                proxy_buffers   4 32k;
                proxy_busy_buffers_size   64k;
                proxy_temp_file_write_size 64k;

      }

      location /api/ {
                #后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
                proxy_pass    http://bootshiro/;
                proxy_redirect     off;
                proxy_set_header  Host  $host;
                proxy_set_header  X-Real-IP  $remote_addr;
                proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;

                proxy_buffer_size   4k;
                proxy_buffers   4 32k;
                proxy_busy_buffers_size   64k;
                proxy_temp_file_write_size 64k;

      }
          #对静态资源缓存
          #location ~* \\.(html|css|jpg|gif|ico|js)$ {
      #  proxy_cache          my_cache;
      #  proxy_cache_key      $host$uri$is_args$args;
      #  proxy_cache_valid    200 301 302 30m;
      #  expires              30m;
      #  proxy_pass  http://angular;
          #}


    }
}

</code></pre></div><ul><li>or</li></ul><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>worker_processes  auto;

error_log   /var/log/nginx/error.log;
pid   /run/nginx.pid;

events {
    worker_connections  1024;
}

http {
        include mime.types;
        default_type  application/octet-stream;

        server_names_hash_bucket_size 512;
        client_header_buffer_size 32k;
        large_client_header_buffers 4 32k;
        client_max_body_size 50m;

        sendfile   on;
        tcp_nopush on;

        keepalive_timeout 60;
        tcp_nodelay on;

        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        fastcgi_buffer_size 64k;
        fastcgi_buffers 4 64k;
        fastcgi_busy_buffers_size 128k;
        fastcgi_temp_file_write_size 256k;
        fastcgi_intercept_errors on;

        gzip on;
        gzip_min_length  1k;
        gzip_buffers     16 8k;
        gzip_http_version 1.1;
        gzip_comp_level 6;
        gzip_types     text/plain application/javascript application/x-javascript text/javascript text/css application/xml;
        gzip_vary on;
        gzip_proxied   expired no-cache no-store private auth;
        gzip_disable   &quot;MSIE [1-6]\\.&quot;;

        limit_conn_zone $binary_remote_addr zone=perip:10m;
        limit_conn_zone $server_name zone=perserver:10m;

        server_tokens off;
        access_log off;


    server {
        listen       80;
        server_name  localhost;

        charset utf-8;

        location / {
            root   html;
            index  index.html index.htm;
        }
        location = /50x.html {
            root   html;
        }
    }
}

</code></pre></div>`,22),a=[s];function _(p,i){return e(),r("div",null,a)}const l=n(o,[["render",_],["__file","conf.html.vue"]]);export{l as default};
