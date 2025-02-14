import{_ as e,p as n,q as i,R as t}from"./framework-d81ad7e5.js";const a={},o=t("ul",null,[t("li",null,"需要映射目录")],-1),l=t("div",{class:"language-conf","data-ext":"conf"},[t("pre",{class:"language-conf"},[t("code",null,`# 拦截所有/data开头路径访问
location ^~/data{
     autoindex on;
     alias "/www/wwwroot/***.mintimate.cn/resources";
     autoindex_exact_size off;
     autoindex_localtime on;
     charset utf-8;    #解决中文显示乱码问题
}
`)])],-1),_=t("ul",null,[t("li",null,"Fancyindex模块当然，这样的autoindex目录映射，功能少、样式单一")],-1),h=t("div",{class:"language-text","data-ext":"text"},[t("pre",{class:"language-text"},[t("code",null,`./configure \\--prefix=/etc/nginx \\--sbin-path=/usr/sbin/nginx \\--conf-path=/etc/nginx/nginx.conf \\--error-log-path=/var/log/nginx/error.log \\--http-log-path=/var/log/nginx/access.log \\--pid-path=/var/run/nginx.pid \\--lock-path=/var/run/nginx.lock \\--http-client-body-temp-path=/var/cache/nginx/client_temp \\--http-proxy-temp-path=/var/cache/nginx/proxy_temp \\--http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp \\--http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp \\--http-scgi-temp-path=/var/cache/nginx/scgi_temp \\--user=www \\--group=www \\--with-file-aio \\--with-threads \\--with-http_addition_module \\--with-http_auth_request_module \\--with-http_dav_module \\--with-http_flv_module \\--with-http_gunzip_module \\--with-http_gzip_static_module \\--with-http_mp4_module \\--with-http_random_index_module \\--with-http_realip_module \\--with-http_secure_link_module \\--with-http_slice_module \\--with-http_ssl_module \\--with-http_stub_status_module \\--with-http_sub_module \\--with-http_v2_module \\--with-mail \\--with-mail_ssl_module \\--with-stream \\--with-stream_realip_module \\--with-stream_ssl_module \\--with-stream_ssl_preread_module 

`)])],-1),s=[o,l,_,h];function c(p,u){return n(),i("div",null,s)}const r=e(a,[["render",c],["__file","auto_index.html.vue"]]);export{r as default};
