import{_ as e,p as n,q as r,a1 as t}from"./framework-d81ad7e5.js";const o={},a=t(`<div class="language-conf" data-ext="conf"><pre class="language-conf"><code># 负载均衡
	 upstream luisfer{
		server 192.168.1.101:8080 weight=5;
		server 192.168.1.102:8080 weight=5;
	 }


  location / {
   
        root   /app/hoom/ui/dist;  # node js  静态文件
        index  index.html index.htm;

  }

 location /prod-api/ {
      proxy_http_version 1.1;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Host $http_host;
      proxy_set_header X-NginX-Proxy true;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection &quot;upgrade&quot;;

      proxy_pass http://127.0.0.1:8080/;
                            # 结尾 带 /  请求不加 location prod-api
                            # 结尾 无 /  请求=》  http://127.0.0.1:8080/prod-api

      proxy_pass http://luisfer/;  #负载均衡，配合 upstream

      #proxy_pass http://127.0.0.1:$node_port$request_uri;

      proxy_redirect off;
  }





</code></pre></div><h3 id="路径匹配细节" tabindex="-1"><a class="header-anchor" href="#路径匹配细节" aria-hidden="true">#</a> 路径匹配细节</h3><p><a href="/os/nginx/README">参考开篇</a></p><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>
upstream lusifer {
      server 192.168.1.60:8881;
      server 192.168.1.60:8882;

}

server {
      listen       80;
      server_name  localhost;

      location /api {
            proxy_pass http://lusifer/;
            # proxy_pass http://lusifer;  匹配
            # proxy_pass http://lusifer/;
      }
}
</code></pre></div>`,4),s=[a];function p(d,_){return n(),r("div",null,s)}const c=e(o,[["render",p],["__file","use_a.html.vue"]]);export{c as default};
