import{_ as a}from"./10-6fc1faef.js";import{_ as t,p as i,q as l,a1 as e}from"./framework-d81ad7e5.js";const d={},n=e('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>微服务是一种架构风格，是架构设计层面的概念；而分布式是一种项目系统的部署方式，是部署层面的概念</p></div><ul><li>base理论</li><li>CAP理论</li><li>分布式事务</li><li>强弱一致性</li></ul><h2 id="微服务解决复杂问题" tabindex="-1"><a class="header-anchor" href="#微服务解决复杂问题" aria-hidden="true">#</a> 微服务解决复杂问题</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><h2 id="匮乏即是富足-自律产生喜悦" tabindex="-1"><a class="header-anchor" href="#匮乏即是富足-自律产生喜悦" aria-hidden="true">#</a> 🎉 匮乏即是富足 自律产生喜悦 🎉</h2></div><p><img src="'+a+`" alt="Alt text"></p><h3 id="微服务" tabindex="-1"><a class="header-anchor" href="#微服务" aria-hidden="true">#</a> 微服务</h3><p>2014年，Docker 出现了，彻底改变了软件开发的面貌。它让<strong>程序运行在容器中</strong>，每个容器可以分别设定运行环境，并且只占用很少的系统资源。</p><ul><li><p>显而易见，可以用容器来实现&quot;面向服务架构&quot;，每个服务不再占用一台服务器，而是占用一个容器。</p></li><li><p>这样就不需要多台服务器了，最简单的情况下，本机运行多个容器，只用一台服务器就实现了面向服务架构，这在以前是做不到的。这种实现方式就叫做微服务。</p></li></ul><ul><li>简单说，<strong>微服务就是采用容器技术的面向服务架构</strong>。它依然使用&quot;服务&quot;作为功能单元，但是变成了轻量级实现，不需要新增服务器，只需要新建容器 <strong>（一个进程）</strong>，所以才叫做&quot;微服务&quot;。</li></ul><ul><li><p>一个微服务就是一个独立的进程。 这个进程可以运行在本机，也可以运行在别的服务器，或者在云端（比如云服务和云函数 FaaS）。</p></li><li><p>它的特点与面向服务架构是一样的，但因为更轻量级，所以功能的解耦和服务化可以做得更彻底。而且，它可以标准化，同样的容器不管在哪里运行，结果都是一样的，所以市场上有很多 SaaS 产品，提供标准化的微服务。</p></li></ul><ol><li><p>Spring Cloud技术点</p><p>Eureka：服务注册与发现，用于服务管理。</p><p>Feign： web调用客户端，能够简化HTTP接口的调用。</p><p>Ribbon：基于客户端的负载均衡。</p><p>Hystrix：熔断降级，防止服务雪崩。</p><p>Zuul：网关路由，提供路由转发、请求过滤、限流降级等功能。</p><p>Config：配置中心，分布式配置管理。</p><p>Sleuth：服务链路追踪</p><p>Admin：健康管理</p></li></ol><ul><li>持续集成，持续部署，持续交付。 <ul><li>集成:是指软件个人研发的部分向软件整体部分集成，以便尽早发现个人开发部分的问题；</li><li>部署: 是代码尽快向可运行的开发/测试节交付，以便尽早测试；</li><li>交付: 是指研发尽快向客户交付，以便尽早发现生产环境中存在的问题。 <ul><li>如果说等到所有东西都完成了才向下个环节交付，导致所有的问题只能在最后才爆发出来，解决成本巨大甚至无法解决。而所谓的持续，就是说每完成一个完整的部分，就向下个环节交付，发现问题可以马上调整。使问题不会放大到其他部分和后面的环节。</li><li>这种做法的核心思想在于：既然事实上难以做到事先完全了解完整的、正确的需求，那么就干脆一小块一小块的做，并且加快交付的速度和频率，使得交付物尽早在下个环节得到验证。早发现问题早返工。</li></ul></li></ul></li></ul><h3 id="微服务概况" tabindex="-1"><a class="header-anchor" href="#微服务概况" aria-hidden="true">#</a> 微服务概况</h3><ul><li>无严格定义。</li><li>微服务是一种架构风格，将单体应用划分为小型的服务单元。</li><li>微服务架构是一种使用一系列粒度较小的服务来开发单个应用的方式；每个服务运行在自己的进程中；服务间采用轻量级的方式进行通信(通常是HTTP API)；这些服务是基于业务逻辑和范围，通过自动化部署的机制来独立部署的，并且服务的集中管理应该是最低限度的，即每个服务可以采用不同的编程语言编写，使用不同的数据存储技术。</li><li>英文定义：</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>看这篇文章：
http://www.martinfowler.com/articles/microservices.html
</code></pre></div><ul><li><p>小类比</p><p>合久必分。分开后通信，独立部署，独立存储。</p></li></ul><h3 id="微服务特性" tabindex="-1"><a class="header-anchor" href="#微服务特性" aria-hidden="true">#</a> 微服务特性</h3><p>独立运行在自己进程中。</p><p>一系列独立服务共同构建起整个系统。</p><p>一个服务只关注自己的独立业务。</p><p>轻量的通信机制RESTful API</p><p>使用不同语言开发</p><p>全自动部署机制</p><h3 id="微服务组件介绍" tabindex="-1"><a class="header-anchor" href="#微服务组件介绍" aria-hidden="true">#</a> 微服务组件介绍</h3><p>不局限与具体的微服务实现技术。</p><ul><li><p>服务注册与发现：服务提供方将己方调用地址注册到服务注册中心，让服务调用方能够方便地找到自己；服务调用方从服务注册中心找到自己需要调用的服务的地址。</p></li><li><p>负载均衡：服务提供方一般以多实例的形式提供服务，负载均衡功能能够让服务调用方连接到合适的服务节点。并且，服务节点选择的过程对服务调用方来说是透明的。</p></li><li><p>服务网关：服务网关是服务调用的唯一入口，可以在这个组件中实现用户鉴权、动态路由、灰度发布、A/B测试、负载限流等功能。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>灰度发布（又名金丝雀发布）是指在黑与白之间，能够平滑过渡的一种发布方式。在其上可以进行A/B testing，即让一部分用户继续用产品特性A，一部分用户开始用产品特性B，如果用户对B没有什么反对意见，那么逐步扩大范围，把所有用户都迁移到B上面来。灰度发布可以保证整体系统的稳定，在初始灰度的时候就可以发现、调整问题，以保证其影响度。
</code></pre></div></li><li><p>配置中心：将本地化的配置信息(Properties、XML、YAML等形式)注册到配置中心，实现程序包在开发、测试、生产环境中的无差别性，方便程序包的迁移，也是无状态特性。</p></li><li><p>集成框架：微服务组件都以职责单一的程序包对外提供服务，集成框架以配置的形式将所有微服务组件(特别是管理端组件)集成到统一的界面框架下，让用户能够在统一的界面中使用系统。Spring Cloud就是一个集成框架。</p></li><li><p>调用链监控：记录完成一次请求的先后衔接和调用关系，并将这种串行或并行的调用关系展示出来。在系统出错时，可以方便地找到出错点。</p></li><li><p>支撑平台：系统微服务化后，各个业务模块经过拆分变得更加细化，系统的部署、运维、监控等都比单体应用架构更加复杂，这就需要将大部分的工作自动化。现在，Docker等工具可以给微服务架构的部署带来较多的便利，例如持续集成、蓝绿发布、健康检查、性能监控等等。如果没有合适的支撑平台或工具，微服务架构就无法发挥它最大的功效。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>1. 蓝绿部署是不停老版本，部署新版本然后进行测试，确认OK，将流量切到新版本，然后老版本同时也升级到新版本。
2. 灰度是选择部分部署新版本，将部分流量引入到新版本，新老版本同时提供服务。等待灰度的版本OK，可全量覆盖老版本。

灰度是不同版本共存，蓝绿是新旧版本切换，2种模式的出发点不一样。
</code></pre></div></li></ul><h3 id="微服务优点" tabindex="-1"><a class="header-anchor" href="#微服务优点" aria-hidden="true">#</a> 微服务优点</h3><ol><li>独立部署。不依赖其他服务，耦合性低，不用管其他服务的部署对自己的影响。</li><li>易于开发和维护：关注特定业务，所以业务清晰，代码量少，模块变的易开发、易理解、易维护。</li><li>启动块：功能少，代码少，所以启动快，有需要停机维护的服务，不会长时间暂停服务。</li><li>局部修改容易：只需要部署 相应的服务即可，适合敏捷开发。</li><li>技术栈不受限：java，node.js等</li><li>按需伸缩：某个服务受限，可以按需增加内存，cpu等。</li><li>职责专一。专门团队负责专门业务，有利于团队分工。</li><li>代码复用。不需要重复写。底层实现通过接口方式提供。</li><li>便于团队协作：每个团队只需要提供API就行，定义好API后，可以并行开发。</li></ol><h3 id="微服务缺点" tabindex="-1"><a class="header-anchor" href="#微服务缺点" aria-hidden="true">#</a> 微服务缺点</h3><ol><li><p>分布式固有的复杂性：容错（某个服务宕机），网络延时，调用关系、分布式事务等，都会带来复杂。</p></li><li><p>分布式事务的挑战：每个服务有自己的数据库，有点在于不同服务可以选择适合自身业务的数据库。订单用MySQL，评论用Mongodb等。目前最理想解决方案是：柔性事务的最终一致性。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>刚性事务：遵循ACID原则，强一致性。
柔性事务：遵循BASE理论，最终一致性；与刚性事务不同，柔性事务允许一定时间内，不同节点的数据不一致，但要求最终一致。

BASE 是 Basically Available<span class="token punctuation">(</span>基本可用<span class="token punctuation">)</span>、Soft state<span class="token punctuation">(</span>软状态<span class="token punctuation">)</span>和 Eventually consistent <span class="token punctuation">(</span>最终一致性<span class="token punctuation">)</span>三个短语的缩写。BASE理论是对CAP中AP的一个扩展，通过牺牲强一致性来获得可用性，当出现故障允许部分不可用但要保证核心功能可用，允许数据在一段时间内是不一致的，但最终达到一致状态。满足BASE理论的事务，我们称之为“柔性事务”。
</code></pre></div></li><li><p>接口调整成本高：改一个接口，调用方都要改。</p></li><li><p>测试难度提升：一个接口改变，所有调用方都得测。自动化测试就变的重要了。API文档的管理也尤为重要。推荐：yapi。</p></li><li><p>运维要求高：需要维护 几十 上百个服务。监控变的复杂。并且还要关注多个集群，不像原来单体，一个应用正常运行即可。</p></li><li><p>重复工作：比如java的工具类可以在共享common.jar中，但在多语言下行不通，C++无法直接用java的jar包。</p></li></ol><h3 id="设计原则" tabindex="-1"><a class="header-anchor" href="#设计原则" aria-hidden="true">#</a> 设计原则</h3><p>单一职责原则：关注整个系统功能中单独，有界限的一部分。</p><p>服务自治原则：可以独立开发，测试，构建，部署，运行，与其他服务解耦。</p><p>轻量级通信原则：轻，跨平台，跨语言。REST,AMQP 等。</p><p>粒度把控：与自己实际相结合。 不要追求完美，随业务进化而调整。《淘宝技术这10年》。</p><h2 id="spring-cloud和dubbo组件比较" tabindex="-1"><a class="header-anchor" href="#spring-cloud和dubbo组件比较" aria-hidden="true">#</a> Spring Cloud和dubbo组件比较</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>dubbo：zookeeper+dubbo+springmvc/springboot
通信方式：rpc
注册中心：zookeeper，nacos
配置中心：diamond（淘宝开发）

spring cloud：spring+Netflix
通信方式：http restful
注册中心：eureka，consul，nacos				
配置中心：config
断路器：hystrix
网关：zuul，gateway
分布式追踪系统：sleuth+zipkin

</code></pre></div><ol start="2"><li><p>差别</p><table><thead><tr><th></th><th><strong>dubbo</strong></th><th><strong>spring cloud</strong></th><th></th></tr></thead><tbody><tr><td>背景</td><td>国内影响大</td><td>国外影响大</td><td>平手</td></tr><tr><td>社区活跃度</td><td>低(现在又好了)</td><td>高</td><td>cloud胜出</td></tr><tr><td>架构完整度</td><td>不完善（dubbo有些不提供，需要用第三方，它只关注服务治理）</td><td>比较完善，微服务组件应有尽有。</td><td>cloud胜出</td></tr><tr><td>学习成本</td><td>dubbo需要配套学习</td><td>无缝spring</td><td>cloud胜出</td></tr><tr><td>性能</td><td>高。（基于Netty）</td><td>低。（基于http，每次都要创建）。 此性能的损耗对大部分应用是可以接受的。而HTTP风格的API,是很方便的。用小的性能损耗换来了方便。</td><td>dubbo胜出</td></tr></tbody></table></li></ol><h3 id="_6个9" tabindex="-1"><a class="header-anchor" href="#_6个9" aria-hidden="true">#</a> 6个9</h3><p>99.9999%</p><p>可用性、数据一致性</p><h3 id="acid特性" tabindex="-1"><a class="header-anchor" href="#acid特性" aria-hidden="true">#</a> ACID特性</h3><p>以传统数据库为代表，依然坚守：原子性、一致性、隔离性、持久性</p>`,43),p=[n];function r(s,o){return i(),l("div",null,p)}const u=t(d,[["render",r],["__file","index.html.vue"]]);export{u as default};
