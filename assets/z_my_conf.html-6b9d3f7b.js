import{_ as n,p as e,q as l,a1 as t}from"./framework-d81ad7e5.js";const a={},s=t(`<h3 id="mysql-配置文件" tabindex="-1"><a class="header-anchor" href="#mysql-配置文件" aria-hidden="true">#</a> mysql 配置文件</h3><ul><li>my.conf (linux)</li><li>my.ini (win)</li></ul><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>[mysqld]
#设置3306端口
port = 3306
# 设置mysql的安装目录
basedir=D:\\MySql\\mysql-5.7.29-winx64
# 设置mysql数据库的数据的存放目录
datadir=D:\\MySql\\mysql-5.7.29-winx64\\data
# 允许最大连接数
max_connections=200
# 允许连接失败的次数。
max_connect_errors=10
# 服务端使用的字符集默认为utf8mb4
character-set-server=utf8mb4
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
explicit_defaults_for_timestamp=true
sql_mode=ONLY_FULL_GROUP_BY,NO_AUTO_VALUE_ON_ZERO,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION,PIPES_AS_CONCAT,ANSI_QUOTES
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8mb4
[client]
# 设置mysql客户端连接服务端时默认使用的端口
port=3306
default-character-set=utf8mb4
</code></pre></div><ul><li>二进制日志文件 <code>log-bin</code></li><li>错误日志 <code>log-error</code></li><li>数据文件 <ul><li><strong>frm</strong> 文件 存放表结构</li><li><strong>myd</strong> 文件 存放表数据</li><li><strong>myi</strong> 文件 存放表索引</li></ul></li></ul><h3 id="mysql-总体架构" tabindex="-1"><a class="header-anchor" href="#mysql-总体架构" aria-hidden="true">#</a> mysql 总体架构</h3>`,5),_=[s];function r(i,o){return e(),l("div",null,_)}const d=n(a,[["render",r],["__file","z_my_conf.html.vue"]]);export{d as default};
