import{_ as s,p as n,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<h3 id="deploy-docker" tabindex="-1"><a class="header-anchor" href="#deploy-docker" aria-hidden="true">#</a> deploy docker</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>

<span class="token builtin class-name">source</span> /etc/init.d/functions

 

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> ./docker_sh.config <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token punctuation">\\</span><span class="token punctuation">[</span>ERROR<span class="token punctuation">]</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m docker_sh.config,文件不存在！<span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
	<span class="token builtin class-name">exit</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">source</span> ./docker_sh.config
<span class="token keyword">fi</span>

<span class="token comment">#镜像版本</span>
<span class="token comment">#DOCKER_CR_VERSION=1.0</span>

<span class="token comment">##检查docker环境是否安装</span>
<span class="token function">nohup</span> <span class="token function">docker</span> <span class="token parameter variable">-v</span> <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
<span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$RETVAL</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token function">docker</span> <span class="token parameter variable">-v</span>
<span class="token keyword">else</span> 
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token punctuation">\\</span><span class="token punctuation">[</span>ERROR<span class="token punctuation">]</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m 请安装Docker环境 <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment">#镜像仓库信息</span>
<span class="token assign-left variable">REGISTRY_CR</span><span class="token operator">=</span><span class="token variable">$REGISTRY_CR_DEV</span>

<span class="token comment">#成功数值</span>
<span class="token assign-left variable">SUCCEED_NUM</span><span class="token operator">=</span>

<span class="token comment">###</span>
<span class="token comment">## 输出显示日志</span>
<span class="token comment">###</span>
<span class="token function-name function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token assign-left variable">TYPE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">tr</span> <span class="token string">&#39;[a-z]&#39;</span> <span class="token string">&#39;[A-Z]&#39;</span> <span class="token operator">&lt;&lt;&lt;</span><span class="token string">&quot;<span class="token variable">$1</span>&quot;</span><span class="token variable">\`</span></span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$3</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span><span class="token punctuation">[</span><span class="token variable">\${TYPE}</span><span class="token punctuation">]</span>: <span class="token variable">$2</span>
	<span class="token keyword">else</span>
		<span class="token builtin class-name">echo</span> -<span class="token variable">$3</span> <span class="token punctuation">\\</span><span class="token punctuation">[</span><span class="token variable">\${TYPE}</span><span class="token punctuation">]</span>: <span class="token variable">$2</span>
	<span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment">###</span>
<span class="token comment">## 获取时间戳</span>
<span class="token comment">###</span>
<span class="token function-name function">get_timestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">#获取当前时间</span>
	<span class="token assign-left variable">CURRENT</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&quot;+%Y-%m-%d %H:%M:%S&quot;</span><span class="token variable">\`</span></span>
	<span class="token comment">#获取当前时间戳</span>
	<span class="token assign-left variable">TIMESTAMP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$current</span>&quot;</span> +%s<span class="token variable">\`</span></span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${TIMESTAMP}</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">###</span>
<span class="token comment">## write docker file</span>
<span class="token comment">###</span>
<span class="token function-name function">write_docker_file</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;------------------------------------华丽的分割线--------------------------------------&quot;</span>
	<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token variable">$1</span>
	<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
	log info <span class="token string">&quot;<span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile write Staring...&quot;</span>
	<span class="token assign-left variable">TIMESTAMP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>get_timestamp<span class="token variable">)</span></span>
	log info <span class="token string">&quot;Dockerfile content&quot;</span>
	log info <span class="token string">&quot;&quot;</span>
	log info <span class="token string">&quot;&quot;</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$NAME</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;display&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;FROM cr.registry.hn-1.res.sgmc.sgcc.com.cn/prod/k8sbase_images:k8s_templates_v2&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;MAINTAINER bingo&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;ADD <span class="token variable">\${PROJECT_TOMCAT_NAME}</span> /home/admin/app/<span class="token variable">\${PROJECT_TOMCAT_NAME}</span><span class="token variable">\${TIMESTAMP}</span>&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;EXPOSE 18080&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&#39;CMD [&quot;/bin/bash&quot;, &quot;/home/admin/app/&#39;</span><span class="token variable">\${PROJECT_TOMCAT_NAME}</span><span class="token variable">\${TIMESTAMP}</span><span class="token string">&#39;/bin/catalina.sh&quot;,&quot;run&quot;]&#39;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		log info <span class="token string">&quot;FROM cr.registry.hn-1.res.sgmc.sgcc.com.cn/prod/k8sbase_images:k8s_templates_v2&quot;</span>
		log info <span class="token string">&quot;&quot;</span> 
		log info <span class="token string">&quot;MAINTAINER bingo&quot;</span>
		log info <span class="token string">&quot;&quot;</span>
		log info <span class="token string">&quot;ADD <span class="token variable">\${PROJECT_TOMCAT_NAME}</span> /home/admin/app/<span class="token variable">\${PROJECT_TOMCAT_NAME}</span><span class="token variable">\${TIMESTAMP}</span>&quot;</span>
		log info <span class="token string">&quot;&quot;</span>
		log info <span class="token string">&quot;EXPOSE 18080&quot;</span>
		log info <span class="token string">&quot;&quot;</span>
		log info <span class="token string">&#39;CMD [&quot;/bin/bash&quot;, &quot;/home/admin/app/&#39;</span><span class="token variable">\${PROJECT_TOMCAT_NAME}</span><span class="token variable">\${TIMESTAMP}</span><span class="token string">&#39;/bin/catalina.sh&quot;,&quot;run&quot;]&#39;</span>
	<span class="token keyword">else</span>
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;FROM cr.registry.hn-1.res.sgmc.sgcc.com.cn/prod/k8sbase_images:k8s_templates_v2&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;ADD <span class="token variable">\${PROJECT_JAR_NAME}</span> /home/admin/app/<span class="token variable">\${TIMESTAMP}</span>_<span class="token variable">\${PROJECT_JAR_NAME}</span>&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;RUN echo &#39;java -jar <span class="token variable">$CATALINA_OPTS</span> -Dalicoud.deployment.mode=EDAS_MANAGED -javaagent:/home/admin/ArmsAgent/arms-bootstrap-1.7.0-SNAPSHOT.jar -Darms.licenseKey=&#39;1533476027868199@28c7c127c7c86c5&#39; -Darms.appName=&#39;hn-znsj-cloud&#39; /home/admin/app/<span class="token variable">\${TIMESTAMP}</span>_<span class="token variable">\${PROJECT_JAR_NAME}</span> --server.port=9090&#39; &gt;&gt; /home/admin/start.sh&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;RUN chmod +x /home/admin/start.sh&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&#39;WORKDIR $ADMIN_HOME&#39;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&#39;CMD [&quot;/bin/bash&quot;, &quot;/home/admin/start.sh&quot;]&#39;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile
		log info <span class="token string">&quot;FROM cr.registry.hn-1.res.sgmc.sgcc.com.cn/prod/k8sbase_images:k8s_templates_v2&quot;</span>
		log info <span class="token string">&quot;&quot;</span>
		log info <span class="token string">&quot;ADD <span class="token variable">\${PROJECT_JAR_NAME}</span> /home/admin/app/<span class="token variable">\${TIMESTAMP}</span>_<span class="token variable">\${PROJECT_JAR_NAME}</span>&quot;</span>
		log info <span class="token string">&quot;&quot;</span>
		log info <span class="token string">&quot;RUN echo &#39;java -jar <span class="token variable">$CATALINA_OPTS</span> -Dalicoud.deployment.mode=EDAS_MANAGED -javaagent:/home/admin/ArmsAgent/arms-bootstrap-1.7.0-SNAPSHOT.jar -Darms.licenseKey=&#39;1533476027868199@28c7c127c7c86c5&#39; -Darms.appName=&#39;znsj_in&#39; /home/admin/app/<span class="token variable">\${TIMESTAMP}</span>_<span class="token variable">\${PROJECT_JAR_NAME}</span> --server.port=9090&#39; &gt;&gt; /home/admin/start.sh&quot;</span>
		log info <span class="token string">&quot;&quot;</span>
		log info <span class="token string">&quot;RUN chmod +x /home/admin/start.sh&quot;</span>
		log info <span class="token string">&quot;&quot;</span>
		log info <span class="token string">&#39;WORKDIR $ADMIN_HOME&#39;</span>
		log info <span class="token string">&quot;&quot;</span>
		log info <span class="token string">&#39;CMD [&quot;/bin/bash&quot;, &quot;/home/admin/start.sh&quot;]&#39;</span>
		log info <span class="token string">&quot;&quot;</span>
	<span class="token keyword">fi</span>
	log info <span class="token string">&quot;<span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>/Dockerfile write succeed...&quot;</span>
<span class="token punctuation">}</span>


<span class="token comment">###</span>
<span class="token comment">## docker部署推送</span>
<span class="token comment">###</span>
<span class="token function-name function">docker_deploy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;------------------------------------华丽的分割线--------------------------------------&quot;</span>
	<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token variable">$1</span>
	log info <span class="token string">&quot;<span class="token variable">$NAME</span>&quot;</span>
	log info <span class="token string">&quot;del old images Staring ....&quot;</span>
	del_images <span class="token variable">\${NAME}</span>
	log info <span class="token string">&quot;del old images end ....&quot;</span>
	<span class="token comment">#ALI_IMAGES_TAG=$(select_ali_tag_images $NAME)</span>
	<span class="token comment">#获取当前时间</span>
	<span class="token assign-left variable">CURRENT</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&quot;+%Y%m%d%H%M%S&quot;</span><span class="token variable">\`</span></span>
	<span class="token assign-left variable">ALI_IMAGES_TAG</span><span class="token operator">=</span><span class="token variable">\${NAME}</span><span class="token variable">\${CURRENT}</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$NAME</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;display&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">cd</span> <span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>
	<span class="token keyword">else</span>
		<span class="token builtin class-name">cd</span> <span class="token variable">\${PROJECT_PATH}</span>/docker<span class="token variable">\${NAME}</span>
	<span class="token keyword">fi</span>
	log info <span class="token string">&quot;************************<span class="token variable">\${REGISTRY_HOST}</span><span class="token variable">\${REGISTRY_CR}</span>:<span class="token variable">\${ALI_IMAGES_TAG}</span>**************************&quot;</span>
	<span class="token function">nohup</span> <span class="token function">docker</span> build <span class="token parameter variable">-t</span> <span class="token variable">$REGISTRY_HOST</span><span class="token variable">$REGISTRY_CR</span><span class="token builtin class-name">:</span><span class="token variable">$ALI_IMAGES_TAG</span> <span class="token builtin class-name">.</span> <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
	select_tag_images <span class="token variable">$ALI_IMAGES_TAG</span>
	log info <span class="token string">&quot;************push Alibaba Registry Staring************&quot;</span>
	log info <span class="token string">&quot;login Registry Staring ....&quot;</span>
	<span class="token function">docker</span> login <span class="token parameter variable">--username</span><span class="token operator">=</span><span class="token variable">$REGISTRY_USER_NAME</span> <span class="token variable">$REGISTRY_HOST</span> <span class="token parameter variable">-p</span> <span class="token variable">$REGISTRY_USER_PASWD</span>
	log info <span class="token string">&quot;login Registry end ....&quot;</span>
	log info <span class="token string">&quot;push Registry Staring ....&quot;</span>
	<span class="token function">docker</span> push <span class="token variable">$REGISTRY_HOST</span><span class="token variable">$REGISTRY_CR</span><span class="token builtin class-name">:</span><span class="token variable">$ALI_IMAGES_TAG</span>
	action <span class="token string">&quot;docker file <span class="token variable">\${ALI_IMAGES_TAG}</span> push succeed &quot;</span> /bin/true
	log info <span class="token string">&quot;************push Alibaba Registry end************&quot;</span>
	<span class="token builtin class-name">cd</span> <span class="token variable">\${PROJECT_PATH}</span>
<span class="token punctuation">}</span>

<span class="token comment">###</span>
<span class="token comment">## 服务列表</span>
<span class="token comment">###</span>
<span class="token function-name function">service_list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&#39;输入部署环境（dev/prod/d/p）default[dev] Enter continue:&#39;</span> DEPLOY_MODE
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$DEPLOY_MODE</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token assign-left variable">REGISTRY_CR</span><span class="token operator">=</span><span class="token variable">$REGISTRY_CR_DEV</span>
	<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$DEPLOY_MODE</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;prod&quot;</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$DEPLOY_MODE</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;p&quot;</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$DEPLOY_MODE</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;P&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token assign-left variable">REGISTRY_CR</span><span class="token operator">=</span><span class="token variable">$REGISTRY_CR_PROD</span>
	<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$DEPLOY_MODE</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;dev&quot;</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$DEPLOY_MODE</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;d&quot;</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$DEPLOY_MODE</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;D&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token assign-left variable">REGISTRY_CR</span><span class="token operator">=</span><span class="token variable">$REGISTRY_CR_DEV</span>
	<span class="token keyword">else</span>
		log error <span class="token string">&#39;\\033[31m 输入有误，请重新输入！\\033[0m&#39;</span> e
		service_list
	<span class="token keyword">fi</span>
	log info <span class="token string">&#39;\\033[35m selecd deploy mode &#39;</span><span class="token variable">\${REGISTRY_CR}</span><span class="token string">&#39; \\033[0m&#39;</span> e
	<span class="token builtin class-name">echo</span> <span class="token string">&#39;&#39;</span>
	log info <span class="token string">&#39;#####################服务列表########################&#39;</span>
	log info <span class="token string">&#39;#-----------------\\033[31m 0:all \\033[0m---------------------------#&#39;</span> e
	log info <span class="token string">&#39;#-----------------\\033[31m 1:znsj \\033[0m--------------------------#&#39;</span> e
	log info <span class="token string">&#39;#-----------------\\033[31m 2:display \\033[0m-----------------------#&#39;</span> e
	log info <span class="token string">&#39;#------------------**********-----------------------#&#39;</span>
	log info <span class="token string">&#39;#------------------**********-----------------------#&#39;</span>
	log info <span class="token string">&#39;#------------------**********-----------------------#&#39;</span>
	log info <span class="token string">&#39;#------------------**********-----------------------#&#39;</span>
	log info <span class="token string">&#39;#####################################################&#39;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&#39;&#39;</span>
	selecd_services
<span class="token punctuation">}</span>

<span class="token comment">###</span>
<span class="token comment">## 输入选择服务</span>
<span class="token comment">###</span>
<span class="token function-name function">selecd_services</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&#39;输入选择功能(1-2),可以组合选择[1,2...] Enter continue:&#39;</span> SELECD_SERVICE
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$SELECD_SERVICE</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$SELECD_SERVICE</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
			log info <span class="token string">&#39;选择所有服务启动...&#39;</span>
			<span class="token assign-left variable">SELECD_SERVICE</span><span class="token operator">=</span><span class="token string">&#39;1,2&#39;</span>
		<span class="token keyword">fi</span>
		<span class="token assign-left variable">SELECD_SERVICE_NO</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $SELECD_SERVICE<span class="token operator">|</span><span class="token function">sed</span> <span class="token string">&#39;s/[0-9]//g&#39;</span><span class="token variable">\`</span></span>
		<span class="token assign-left variable">SELECD_SERVICE_SYMBOL</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $SELECD_SERVICE_NO<span class="token operator">|</span><span class="token function">sed</span> <span class="token string">&#39;s/[,]//g&#39;</span><span class="token variable">\`</span></span>
		<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$SELECD_SERVICE_SYMBOL</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
			log error <span class="token string">&#39;\\033[31m 输入有误，请重新输入！\\033[0m&#39;</span> e
			selecd_services
		<span class="token keyword">else</span>
			<span class="token assign-left variable">OLD_IFS</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$IFS</span>&quot;</span>
			<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span>
			<span class="token assign-left variable">arr</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable">$SELECD_SERVICE</span><span class="token punctuation">)</span>
			<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$OLD_IFS</span>&quot;</span>
			<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$arr</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
				log error <span class="token string">&#39;\\033[31m 输入有误，请重新输入！\\033[0m&#39;</span> e
				selecd_services
			<span class="token keyword">fi</span>
			<span class="token keyword">for</span> <span class="token for-or-select variable">s</span> <span class="token keyword">in</span> <span class="token variable">\${arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
			<span class="token keyword">do</span>
				<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$s</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
					write_docker_file <span class="token variable">$PROJECT_NAME</span>
					docker_deploy <span class="token variable">$PROJECT_NAME</span>
				<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$s</span> <span class="token parameter variable">-eq</span> <span class="token number">2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
					write_docker_file <span class="token variable">$DISPLAY_NAME</span>
					docker_deploy <span class="token variable">$DISPLAY_NAME</span>
				<span class="token keyword">else</span>
					log error <span class="token string">&#39;\\033[31m 输入有误，请输入(1-2)之间的数字，或者数字0！\\033[0m&#39;</span> e
				<span class="token keyword">fi</span>
			<span class="token keyword">done</span>
		<span class="token keyword">fi</span>
	<span class="token keyword">else</span>
		log error <span class="token string">&#39;\\033[31m 输入有误，请重新输入！\\033[0m&#39;</span> e
		selecd_services
	<span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment">###</span>
<span class="token comment">## 根据部署名称获取新版本名称</span>
<span class="token comment">###</span>
<span class="token function-name function">select_ali_tag_images</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token variable">$1</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$DOCKER_CR_VERSION</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token assign-left variable">DOCKER_CR_VERSION</span><span class="token operator">=</span><span class="token number">1.0</span>
	<span class="token keyword">fi</span>
	<span class="token assign-left variable">IMAGES_NAME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images $REGISTRY_HOST$REGISTRY_CR:$NAME$DOCKER_CR_VERSION <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;2,1p&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$IMAGES_NAME</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token variable">\${IMAGES_NAME<span class="token operator">:</span>\${<span class="token operator">#</span>NAME}</span>:3<span class="token punctuation">}</span>
		<span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token variable">\${VERSION<span class="token operator">%</span>.*}</span>
		<span class="token builtin class-name">let</span> <span class="token string">&quot;NEW_VERSION=<span class="token variable">\${VERSION}</span>+1&quot;</span>
		<span class="token assign-left variable">DOCKER_CR_VERSION</span><span class="token operator">=</span><span class="token variable">\${NEW_VERSION}</span>.0
		select_ali_tag_images <span class="token variable">$NAME</span>
	<span class="token keyword">else</span>
		<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">\${PROJECT_PATH}</span>/docker_cr_version
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;DOCKER_CR_VERSION=<span class="token variable">\${DOCKER_CR_VERSION}</span>&quot;</span><span class="token operator">&gt;&gt;</span><span class="token variable">\${PROJECT_PATH}</span>/docker_cr_version
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${NAME}</span><span class="token variable">\${DOCKER_CR_VERSION}</span>&quot;</span>
	<span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment">###</span>
<span class="token comment">## 查看build的进度条</span>
<span class="token comment">###</span>
<span class="token assign-left variable">NUM</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token function-name function">select_tag_images</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token variable">$1</span>
	<span class="token assign-left variable">IMAGES_NAME</span><span class="token operator">=</span><span class="token variable">$REGISTRY_HOST</span><span class="token variable">$REGISTRY_CR</span><span class="token builtin class-name">:</span><span class="token variable">$NAME</span>
	<span class="token assign-left variable">IMAGES_ID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-q</span> $IMAGES_NAME <span class="token operator">|</span><span class="token function">sort</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$IMAGES_ID</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">printf</span> <span class="token string">&quot;docker file <span class="token variable">\${NAME}</span> build [%-20s]%s%%<span class="token entity" title="\\r">\\r</span>&quot;</span> <span class="token variable">$SUCCEED_NUM</span> <span class="token variable">$NUM</span>
		<span class="token assign-left variable">LENGTH</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>SUCCEED_NUM}</span>
		<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$LENGTH</span>&quot;</span> <span class="token operator">==</span> <span class="token number">20</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
			<span class="token assign-left variable">SUCCEED_NUM</span><span class="token operator">=</span>
			<span class="token assign-left variable">NUM</span><span class="token operator">=</span><span class="token number">0</span>
		<span class="token keyword">else</span>
			<span class="token assign-left variable">NUM</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$NUM<span class="token operator">+</span><span class="token number">5</span><span class="token variable">))</span></span>
			<span class="token assign-left variable">SUCCEED_NUM</span><span class="token operator">=</span><span class="token comment">#$SUCCEED_NUM</span>
		<span class="token keyword">fi</span>
		select_tag_images <span class="token variable">$NAME</span>
	<span class="token keyword">else</span>
		<span class="token assign-left variable">SUCCEED_NUM</span><span class="token operator">=</span>
		action <span class="token string">&quot;docker <span class="token variable">\${NAME}</span> build succeed &quot;</span> /bin/true
	<span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment">###</span>
<span class="token comment">## 删除镜像</span>
<span class="token comment">###</span>
<span class="token function-name function">del_images</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token variable">$1</span>
	<span class="token assign-left variable">IMAGES_ID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-q</span> $REGISTRY_HOST$REGISTRY_CR:$NAME*<span class="token operator">|</span><span class="token function">sort</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$IMAGES_ID</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-q</span> $REGISTRY_HOST$REGISTRY_CR:$NAME*<span class="token operator">|</span><span class="token function">sort</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span>
	<span class="token keyword">else</span>
		log info <span class="token string">&quot;old images is null&quot;</span>
	<span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$PROJECT_PATH</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m 请配置docker_sh.config文件项目路径，变量名为：PROJECT_PATH <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
	<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$PROJECT_PATH</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m 请配置docker_sh.config文件项目路径，变量名为：PROJECT_PATH <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
	<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$PROJECT_JAR_NAME</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m 请配置docker_sh.config文件后台项目jar包名称，变量名为：PROJECT_JAR_NAME <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
	<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$PROJECT_TOMCAT_NAME</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m 请配置docker_sh.config文件前端项目Tomcat名称，变量名为：PROJECT_TOMCAT_NAME <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
	<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$PROJECT_NAME</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m 请配置docker_sh.config文件项目部署服务名称，变量名为：PROJECT_NAME <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
	<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$DISPLAY_NAME</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m 请配置docker_sh.config文件前端部署服务名称，变量名为：DISPLAY_NAME <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
	<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$REGISTRY_HOST</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m 请配置docker_sh.config文件Registry配置信息，变量名为：REGISTRY_HOST <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
	<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$REGISTRY_USER_NAME</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m 请配置docker_sh.config文件Registry配置信息，变量名为：REGISTRY_USER_NAME <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
	<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$REGISTRY_USER_PASWD</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m 请配置docker_sh.config文件Registry配置信息，变量名为：REGISTRY_USER_PASWD <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
	<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$REGISTRY_CR_DEV</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m 请配置docker_sh.config文件开发镜像仓库信息，变量名为：REGISTRY_CR_DEV <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
	<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$REGISTRY_CR_PROD</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m 请配置docker_sh.config文件生产镜像仓库信息，变量名为：REGISTRY_CR_PROD <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
	<span class="token keyword">else</span>
		log info <span class="token string">&quot;************************脚本开始**************************&quot;</span>
		<span class="token builtin class-name">echo</span> <span class="token string">&#39;&#39;</span>
		log info <span class="token string">&#39;=====================================================&#39;</span>
		log info <span class="token string">&#39;=====================================================&#39;</span>
		log info <span class="token string">&#39;=================Docker Deploy=======================&#39;</span>
		log info <span class="token string">&#39;=====================================================&#39;</span>
		log info <span class="token string">&#39;=====================================================&#39;</span>
		<span class="token builtin class-name">echo</span> <span class="token string">&#39;&#39;</span>
		service_list
		log info <span class="token string">&quot;************************脚本结束**************************&quot;</span>
	<span class="token keyword">fi</span>
<span class="token punctuation">}</span>


main



</code></pre></div><p>mysql mysql源码自动安装脚本：将以下脚本复制到mysql源码文件的目录中，执行mysql_install，使用mysql-5.7.33</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#设定mysql目录，端口</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;---------------------欢迎使用mysql-5.7.33一键部署脚本-------------------------&quot;</span>
<span class="token function">sleep</span> <span class="token number">2</span>

<span class="token function-name function">dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;请输入安装路径,格式:/\\<span class="token variable">$dir</span>/\\<span class="token variable">$dir</span>&quot;</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> my_dir<span class="token punctuation">;</span><span class="token keyword">do</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$my_dir</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;!!错误,输入请重新输入!!&quot;</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;安装路径设置完成&quot;</span>
    <span class="token function">sleep</span> <span class="token number">2</span>
    <span class="token builtin class-name">break</span>
  <span class="token keyword">fi</span>
<span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token function-name function">port</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;请输入安装端口&quot;</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> my_port<span class="token punctuation">;</span><span class="token keyword">do</span>
  <span class="token assign-left variable">n1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$my_port</span>&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> s/<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>//g<span class="token variable">\`</span></span>
  <span class="token assign-left variable">port_no</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">netstat</span> <span class="token parameter variable">-antp</span> <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&quot; &quot;</span> <span class="token string">&#39;{print $4}&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-w</span> $my_port <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$my_port</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;!!错误,请重新输入!!&quot;</span>
  <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$n1</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;!!输入的端口号值不符合要求,请重新输入!!&quot;</span> 
  <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$my_port</span>&quot;</span> <span class="token parameter variable">-lt</span> <span class="token number">1</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$my_port</span>&quot;</span> <span class="token parameter variable">-gt</span> <span class="token number">65535</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;!!输入的端口号超出范围,请重新输入!!&quot;</span>
  <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$port_no</span>&quot;</span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;!!端口已被占用,请重新输入!!&quot;</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;端口设置完毕&quot;</span>
    <span class="token function">sleep</span> <span class="token number">2</span>
    <span class="token builtin class-name">break</span>
  <span class="token keyword">fi</span>
<span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token comment">#建立用户、安装目录</span>
<span class="token function-name function">user_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;##########################开始建立用户、安装目录##############################&quot;</span>
<span class="token function">sleep</span> <span class="token number">2</span>
<span class="token assign-left variable">my_name</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">awk</span> -F<span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{ print $1 }&#39;</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-wi</span> mysql<span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span>  <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$my_name</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token function">useradd</span> <span class="token parameter variable">-s</span> /sbin/nologin mysql
  <span class="token function">sleep</span> <span class="token number">2</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;mysql管理用户已设置完成:mysql&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;mysql管理用户已存在,继续安装&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$my_dir</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> $my_dir<span class="token variable">\`</span></span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;!!目录下存在文件,请检查!!&quot;</span>
    <span class="token function">sleep</span> <span class="token number">2</span>
    <span class="token builtin class-name">exit</span> <span class="token number">10</span>
  <span class="token keyword">else</span>
    <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$my_dir</span>/<span class="token punctuation">{</span>mysql_install,data,conf,logs,tmp<span class="token punctuation">}</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;目录建立完成&quot;</span>
    <span class="token function">sleep</span> <span class="token number">2</span>
  <span class="token keyword">fi</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;开始建立目录&quot;</span>
  <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$my_dir</span>/<span class="token punctuation">{</span>mysql_install,data,conf,logs,tmp<span class="token punctuation">}</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;目录建立完成&quot;</span>
  <span class="token function">sleep</span> <span class="token number">2</span>
<span class="token keyword">fi</span>
<span class="token punctuation">}</span>


<span class="token comment">#下载依赖环境</span>
<span class="token function-name function">envir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;############################开始下载编译安装必要程序##########################&quot;</span>
<span class="token function">sleep</span> <span class="token number">2</span>
<span class="token function">ping</span> <span class="token parameter variable">-c3</span> baidu.com <span class="token operator">&amp;&gt;</span>/dev/null
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;网络连通正常&quot;</span>
  <span class="token function">sleep</span> <span class="token number">2</span>
<span class="token keyword">else</span> 
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;!!网络连通异常,请检查!!&quot;</span>
  <span class="token function">sleep</span> <span class="token number">2</span>
  <span class="token builtin class-name">exit</span> <span class="token number">10</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span>  <span class="token parameter variable">-f</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;/etc/yum.repos.d/*.repo&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;yum源存在&quot;</span>
  yum <span class="token parameter variable">-y</span> <span class="token function">install</span> epel-release cmake bison ncurses-devel openssl-devel
  yum <span class="token parameter variable">-y</span> groupinstall <span class="token string">&quot;Development Tools&quot;</span>
  <span class="token function">sleep</span> <span class="token number">2</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;依赖插件安装完毕&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;!!yum源不存在,请检查!!&quot;</span>
  <span class="token function">sleep</span> <span class="token number">2</span>
  <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment">#开始编译、安装</span>
<span class="token function-name function">inst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;###############################开始进行编译###################################&quot;</span>
<span class="token function">sleep</span> <span class="token number">2</span>
<span class="token function">make</span> clean
cmake <span class="token parameter variable">-DDEFAULT_CHARSET</span><span class="token operator">=</span>utf8 <span class="token parameter variable">-DDEFAULT_CHARSET</span><span class="token operator">=</span>utf8 <span class="token parameter variable">-DCMAKE_INSTALL_PREFIX</span><span class="token operator">=</span><span class="token variable">$my_dir</span>/mysql_install <span class="token parameter variable">-DDEFAULT_COLLATION</span><span class="token operator">=</span>utf8_general_ci <span class="token parameter variable">-DWITH_BOOST</span><span class="token operator">=</span>boost
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;编译成功,继续安装&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;!编译失败,请检查!&quot;</span>
  <span class="token function">sleep</span> <span class="token number">2</span>
  <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;###############################开始进行安装###################################&quot;</span>
<span class="token function">make</span>  <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;安装成功&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;!!安装失败,请检查!!&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token number">10</span>
<span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment">#mysql配置文件</span>
<span class="token function-name function">conf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;###############################开始配置文件###################################&quot;</span>
<span class="token function">sleep</span> <span class="token number">2</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span><span class="token variable">$my_dir</span>/conf/mysql.cnf <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[mysqld]
port = <span class="token variable">$my_port</span>
user = mysql
basedir = <span class="token variable">$my_dir</span>/mysql_install
datadir = <span class="token variable">$my_dir</span>/data
pid-file = <span class="token variable">$my_dir</span>/mysql_install/mysql.pid
log_error = <span class="token variable">$my_dir</span>/logs/mysql-error.log
slow_query_log = 1
long_query_time = 1
slow_query_log_file = <span class="token variable">$my_dir</span>/logs/mysql-slow.log

# session memory configure.
read_buffer_size = 8M
read_rnd_buffer_size = 4M
sort_buffer_size = 4M
tmp_table_size = 32M
max_heap_table_size = 32M
join_buffer_size = 4M
thread_cache_size = 64

#innodb engine configure.
innodb_file_per_table = 1
innodb_buffer_pool_size = 5G
innodb_buffer_pool_load_at_startup = 1
innodb_buffer_pool_dump_at_shutdown = 1
innodb_log_file_size = 2G
innodb_log_buffer_size = 32M
innodb_sort_buffer_size = 64M
innodb_write_io_threads = 8
innodb_read_io_threads = 8
innodb_online_alter_log_max_size = 4G
innodb_open_files = 65535
EOF</span>

<span class="token comment">#设置属主属组</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql:mysql <span class="token variable">$my_dir</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;配置文件完毕&quot;</span>
<span class="token function">sleep</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token function-name function">myinit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;###############################开始配置初始化################################&quot;</span>
<span class="token function">sleep</span> <span class="token number">2</span>
<span class="token comment">#mysql初始化</span>
<span class="token variable">$my_dir</span>/mysql_install/bin/mysqld --defaults-file<span class="token operator">=</span><span class="token variable">$my_dir</span>/conf/mysql.cnf --initialize-insecure
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;配置初始化成功&quot;</span>
  <span class="token function">sleep</span> <span class="token number">2</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;!!配置初始化失败,请检查!!&quot;</span>
  <span class="token function">sleep</span> <span class="token number">2</span>
  <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>

<span class="token comment">#配置环境变量</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span>  <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> <span class="token parameter variable">-w</span> <span class="token string">&quot;export PATH=<span class="token variable">$my_dir</span>/mysql_install/bin:\\$\\PATH&quot;</span> /etc/profile<span class="token variable">\`</span></span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;export PATH=<span class="token variable">$my_dir</span>/mysql_install/bin:\\<span class="token environment constant">$PATH</span>&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/profile
  <span class="token builtin class-name">source</span> /etc/profile
<span class="token keyword">else</span>
  <span class="token builtin class-name">:</span>
<span class="token keyword">fi</span>

<span class="token comment">#配置使用systemctl控制</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span>/usr/lib/systemd/system/mysqld.service <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[Unit]
Description=MySQL Server
Documentation=https://dev.mysql.com/doc/refman/en/using-systemd.html
After=network.target

[Install]
WantedBy=multi-user.target

[Service]
User=mysql
ExecStart=<span class="token variable">$my_dir</span>/mysql_install/bin/mysqld --defaults-file=<span class="token variable">$my_dir</span>/conf/mysql.cnf
EOF</span>

systemctl daemon-reload
<span class="token punctuation">}</span>

<span class="token function">dir</span>
port
user_dir
envir
inst
conf
myinit


<span class="token builtin class-name">echo</span> <span class="token string">&quot;########################安装完毕,请使用systemctl启动mysql###################&quot;</span>
<span class="token function">sleep</span> <span class="token number">2</span>
 
</code></pre></div><p>mysql库备份脚本：全库全量备份</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%F-%H-%M-%S<span class="token variable">\`</span></span>
mysqldump <span class="token parameter variable">-uroot</span> -p<span class="token string">&quot;123Abc..&quot;</span> wordpress <span class="token operator">&gt;</span> /mysql/bak/wordpress/wp-<span class="token variable">$DATE</span>.sql
<span class="token assign-left variable">file_name</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> <span class="token parameter variable">-l</span> /mysql/bak/wordpress/ <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> total <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-1</span> <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&quot; &quot;</span> <span class="token string">&#39;{print $9}&#39;</span><span class="token variable">\`</span></span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%F<span class="token variable">\`</span></span>:<span class="token variable">$file_name</span>:successful&quot;</span> <span class="token operator">&gt;&gt;</span> /mysql/bak/wordpress/log/wp_bak.log
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The wordpress sql is fails to backup,please check&quot;</span> <span class="token operator">&gt;&gt;</span> /mysql/bak/wordpress/log/wp_bak_err.log
<span class="token keyword">fi</span>

<span class="token assign-left variable">file_num</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> <span class="token parameter variable">-l</span> /mysql/bak/wordpress/*.sql <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">file_1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> <span class="token parameter variable">-l</span> /mysql/bak/wordpress/*.sql <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> total <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-1</span> <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&quot; &quot;</span> <span class="token string">&#39;{print $9}&#39;</span><span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$file_num</span>&quot;</span> <span class="token parameter variable">-gt</span> <span class="token number">5</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$file_1</span>
<span class="token keyword">fi</span>
</code></pre></div><p>redis redis安装脚本：将安装脚本复制到redis源码目录中执行，按照提示操作即可</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#设置redis安装目录</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> -p<span class="token string">&quot;请输入redis安装路径(按q退出):&quot;</span> redis_dir<span class="token punctuation">;</span><span class="token keyword">do</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$redis_dir</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;值为空,请重新输入&quot;</span>
  <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$redis_dir</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;q&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;现在退出redis安装程序&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">10</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;安装目录设置完毕&quot;</span>
    <span class="token builtin class-name">break</span>
  <span class="token keyword">fi</span>
<span class="token keyword">done</span>

<span class="token comment">#设置redis端口</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> -p<span class="token string">&quot;请输入redis安装端口:&quot;</span> redis_port<span class="token punctuation">;</span><span class="token keyword">do</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$redis_port</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;值为空,请重新输入&quot;</span>
  <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$redis_dir</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;q&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;现在退出redis安装程序&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">10</span>
  <span class="token keyword">else</span>
<span class="token comment">#    lsof -i:$redis_port &amp;&gt;/dev/null</span>
    <span class="token function">netstat</span> <span class="token parameter variable">-lntp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-w</span> <span class="token string">&#39;$redis_port&#39;</span> <span class="token operator">&amp;&gt;</span>/dev/null
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;端口已被占用,请重新输入&quot;</span>
    <span class="token keyword">else</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;端口设置完毕&quot;</span>
      <span class="token builtin class-name">break</span>
    <span class="token keyword">fi</span>
  <span class="token keyword">fi</span>
<span class="token keyword">done</span>

<span class="token comment">#建立redis用户</span>
<span class="token function">useradd</span> redis <span class="token parameter variable">-d</span> <span class="token variable">$redis_dir</span>/redis

<span class="token function-name function">sys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">#进行系统配置调优</span>
<span class="token function">grep</span> <span class="token string">&#39;^vm.overcommit_memory.*$&#39;</span> /etc/sysctl.conf <span class="token operator">&amp;&gt;</span>/dev/null
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token assign-left variable">vm_value</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> <span class="token string">&#39;^vm.overcommit_memory.*$&#39;</span> /etc/sysctl.conf <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&quot;=&quot;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&quot;s/^[ <span class="token entity" title="\\t">\\t</span>]*//g&quot;</span><span class="token variable">\`</span></span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$vm_value</span>&quot;</span> <span class="token operator">!=</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^vm.overcommit_memory.*$/vm.overcommit_memory = 1/g&quot;</span> /etc/sysctl.conf
    <span class="token function">sysctl</span> <span class="token parameter variable">-p</span>
  <span class="token keyword">fi</span>
<span class="token keyword">else</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;vm.overcommit_memory = 1&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/sysctl.conf
   <span class="token function">sysctl</span> <span class="token parameter variable">-p</span>
<span class="token keyword">fi</span>

<span class="token function">egrep</span> <span class="token parameter variable">-w</span> <span class="token string">&quot;^never$&quot;</span> /sys/kernel/mm/transparent_hugepage/enabled <span class="token operator">&amp;&gt;</span>/dev/null
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;never&quot;</span> <span class="token operator">&gt;&gt;</span> /sys/kernel/mm/transparent_hugepage/enabled
<span class="token keyword">fi</span>
<span class="token punctuation">}</span>
sys

<span class="token function-name function">redis_ins</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">#安装redis</span>
<span class="token function">make</span> clean
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/<span class="token variable">$redis_dir</span>/redis <span class="token function">install</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;redis安装成功&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;redis安装失败,请检查&quot;</span>
<span class="token keyword">fi</span>
<span class="token punctuation">}</span>
redis_ins

<span class="token function-name function">file_con</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">#复制配置文件及启停控制文件</span>
<span class="token function">cp</span> redis.conf <span class="token variable">$redis_dir</span>/redis/<span class="token variable">\${redis_port}</span>.conf
<span class="token function">cp</span> utils/redis_init_script /etc/init.d/redis_<span class="token variable">$redis_port</span>

<span class="token comment">#启动文件</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s&amp;^REDISPORT.*$&amp;REDISPORT=<span class="token variable">$redis_port</span>&amp;g&quot;</span> /etc/init.d/redis_<span class="token variable">$redis_port</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s&amp;^EXEC.*$&amp;EXEC=<span class="token variable">$redis_dir</span>\\/redis\\/bin\\/redis-server&amp;g&quot;</span> /etc/init.d/redis_<span class="token variable">$redis_port</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s&amp;^CONF.*$&amp;CONF=<span class="token variable">$redis_dir</span>\\/redis\\/<span class="token variable">\${redis_port}</span>.conf&amp;g&quot;</span> /etc/init.d/redis_<span class="token variable">$redis_port</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s&amp;^CLIEXEC.*$&amp;CLIEXEC=<span class="token variable">$redis_dir</span>\\/redis\\/bin\\/redis-cli&amp;g&quot;</span> /etc/init.d/redis_<span class="token variable">$redis_port</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s&amp;^PIDFILE.*$&amp;PIDFILE=<span class="token variable">$redis_dir</span>\\/redis\\/<span class="token variable">\${redis_port}</span>.pid&amp;g&quot;</span> /etc/init.d/redis_<span class="token variable">$redis_port</span>

<span class="token comment">#redis配置文件</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$redis_dir</span>/redis
<span class="token function">mkdir</span> log
<span class="token function">mkdir</span> backup
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s&amp;^port.*$&amp;port <span class="token variable">$redis_port</span>&amp;g&quot;</span> <span class="token variable">$redis_dir</span>/redis/<span class="token variable">\${redis_port}</span>.conf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s&amp;^daemonize.*$&amp;daemonize yes&amp;g&quot;</span> <span class="token variable">$redis_dir</span>/redis/<span class="token variable">\${redis_port}</span>.conf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s&amp;^pidfile.*$&amp;pidfile <span class="token variable">$redis_dir</span>\\/redis\\/<span class="token variable">\${redis_port}</span>.pid&amp;g&quot;</span> <span class="token variable">$redis_dir</span>/redis/<span class="token variable">\${redis_port}</span>.conf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s&amp;^logfile.*$&amp;logfile <span class="token variable">$redis_dir</span>\\/redis\\/log\\/redis.log&amp;g&quot;</span> <span class="token variable">$redis_dir</span>/redis/<span class="token variable">\${redis_port}</span>.conf

<span class="token function">chown</span> <span class="token parameter variable">-R</span> redis:redis <span class="token variable">$redis_dir</span>/redis
<span class="token punctuation">}</span>

file_con

<span class="token comment">#redis备份</span>
<span class="token function-name function">rebak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">#rdb备份</span>
<span class="token function-name function">rerdb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^save/#save/g&quot;</span> <span class="token variable">$redis_dir</span>/redis/<span class="token variable">\${redis_port}</span>.conf
<span class="token comment">#sed -i &quot;/^#save/isave 900 1/&quot; $redis_dir/redis/\${redis_port}.conf</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;/#   save <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token entity" title="\\&quot;">\\&quot;</span>/asave 900 1&quot;</span> <span class="token variable">$redis_dir</span>/redis/<span class="token variable">\${redis_port}</span>.conf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^stop-writes-on-bgsave-error.*$/stop-writes-on-bgsave-error no/g&quot;</span> <span class="token variable">$redis_dir</span>/redis/<span class="token variable">\${redis_port}</span>.conf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^rdbcompression.*$/rdbcompression yes/g&quot;</span> <span class="token variable">$redis_dir</span>/redis/<span class="token variable">\${redis_port}</span>.conf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^dbfilename.*$/dbfilename dump.rdb/g&quot;</span>  <span class="token variable">$redis_dir</span>/redis/<span class="token variable">\${redis_port}</span>.conf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s&amp;^dir.*$&amp;dir <span class="token variable">$redis_dir</span>\\/redis\\/backup&amp;g&quot;</span> <span class="token variable">$redis_dir</span>/redis/<span class="token variable">\${redis_port}</span>.conf
<span class="token punctuation">}</span>

<span class="token function-name function">reaof</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^appendonly.*$/appendonly yes/g&quot;</span> <span class="token variable">$redis_dir</span>/redis/<span class="token variable">\${redis_port}</span>.conf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^appendfsync/#appendfsync/g&quot;</span> <span class="token variable">$redis_dir</span>/redis/<span class="token variable">\${redis_port}</span>.conf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;/^#appendfsync/iappendfsync everysec&quot;</span> <span class="token variable">$redis_dir</span>/redis/<span class="token variable">\${redis_port}</span>.conf
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s&amp;^dir.*$&amp;dir <span class="token variable">$redis_dir</span>\\/redis\\/backup&amp;g&quot;</span> <span class="token variable">$redis_dir</span>/redis/<span class="token variable">\${redis_port}</span>.conf
<span class="token punctuation">}</span>


<span class="token keyword">while</span> <span class="token builtin class-name">read</span> -p<span class="token string">&quot;是否设置备份[y/n]:&quot;</span> jubak<span class="token punctuation">;</span><span class="token keyword">do</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$jubak</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;y&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token function">cat</span> <span class="token operator">&lt;&lt;-</span><span class="token string">EOF
    1:rdb
    2:aof
    3:ALL
    q:退出
EOF</span>
    <span class="token keyword">while</span> <span class="token builtin class-name">read</span> -p<span class="token string">&quot;请选择开启rdb备份/aof备份:&quot;</span> jumeth<span class="token punctuation">;</span><span class="token keyword">do</span>
      <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$jumeth</span>&quot;</span> <span class="token keyword">in</span>
      <span class="token number">1</span><span class="token punctuation">)</span>
      rerdb
      <span class="token builtin class-name">break</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>
      <span class="token number">2</span><span class="token punctuation">)</span>
      reaof
      <span class="token builtin class-name">break</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>
      <span class="token number">3</span><span class="token punctuation">)</span>
      rerdb
      reaof
      <span class="token builtin class-name">break</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>
      q<span class="token punctuation">)</span>
      <span class="token builtin class-name">return</span> <span class="token number">1</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>
      *<span class="token punctuation">)</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;value is error&quot;</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>
      <span class="token keyword">esac</span>
    <span class="token keyword">done</span>
    <span class="token builtin class-name">break</span> 
 <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$jubak</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;n&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">return</span> <span class="token number">1</span>
<span class="token comment">#   break</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;value is error&quot;</span>
  <span class="token keyword">fi</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;redis备份已设置完毕&quot;</span>

<span class="token punctuation">}</span>
rebak

<span class="token builtin class-name">echo</span> <span class="token string">&quot;redis安装完毕,请切换到redis用户启动&quot;</span>
</code></pre></div>`,8),o=[e];function l(c,i){return n(),a("div",null,o)}const k=s(p,[["render",l],["__file","shell_demo.html.vue"]]);export{k as default};
