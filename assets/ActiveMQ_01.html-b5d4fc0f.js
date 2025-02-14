import{_ as e,a}from"./image-20200110192613518-1891f8c2.js";import{_ as i,p,q as r,a1 as h}from"./framework-d81ad7e5.js";const t={},d=h('<p>一、消息队列概述 消息队列中间件是分布式系统中重要的组件，主要解决应用解耦，异步消息，流量削锋等问题，实现高性能，高可用，可伸缩和最终一致性架构。目前使用较多的消息队列有ActiveMQ，RabbitMQ，ZeroMQ，Kafka，MetaMQ，RocketMQ</p><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2><p>异步处理，应用解耦，流量削锋和消息通讯四个场景。</p><h3 id="异步处理" tabindex="-1"><a class="header-anchor" href="#异步处理" aria-hidden="true">#</a> 异步处理</h3><p>场景说明：用户注册后，需要发注册邮件和注册短信。传统的做法有两种 1.串行的方式；2.并行方式 a、串行方式：将注册信息写入数据库成功后，发送注册邮件，再发送注册短信。以上三个任务全部完成后，返回给客户端。</p><p>b、并行方式：将注册信息写入数据库成功后，发送注册邮件的同时，发送注册短信。以上三个任务完成后，返回给客户端。与串行的差别是，并行的方式可以提高处理的时间</p><p>假设三个业务节点每个使用50毫秒钟，不考虑网络等其他开销，则串行方式的时间是150毫秒，并行的时间可能是100毫秒。 因为CPU在单位时间内处理的请求数是一定的，假设CPU1秒内吞吐量是100次。则串行方式1秒内CPU可处理的请求量是7次（1000/150）。并行方式处理的请求量是10次（1000/100）</p><p>按照以上约定，用户的响应时间相当于是注册信息写入数据库的时间，也就是50毫秒。注册邮件，发送短信写入消息队列后，直接返回，因此写入消息队列的速度很快，基本可以忽略，因此用户的响应时间可能是50毫秒。因此架构改变后，系统的吞吐量提高到每秒20 QPS。比串行提高了3倍，比并行提高了两倍。</p><h3 id="应用解耦" tabindex="-1"><a class="header-anchor" href="#应用解耦" aria-hidden="true">#</a> 应用解耦</h3><p>场景说明：用户下单后，订单系统需要通知库存系统。传统的做法是，订单系统调用库存系统的接口。如下图：</p><p>传统模式的缺点：假如库存系统无法访问，则订单减库存将失败，从而导致订单失败，订单系统与库存系统耦合</p><p>订单系统：用户下单后，订单系统完成持久化处理，将消息写入消息队列，返回用户订单下单成功 库存系统：订阅下单的消息，采用拉/推的方式，获取下单信息，库存系统根据下单信息，进行库存操作 假如：在下单时库存系统不能正常使用。也不影响正常下单，因为下单后，订单系统写入消息队列就不再关心其他的后续操作了。实现订单系统与库存系统的应用解耦</p><h3 id="流量削锋" tabindex="-1"><a class="header-anchor" href="#流量削锋" aria-hidden="true">#</a> 流量削锋</h3><p>流量削锋也是消息队列中的常用场景，一般在秒杀或团抢活动中使用广泛。 应用场景：秒杀活动，一般会因为流量过大，导致流量暴增，应用挂掉。为解决这个问题，一般需要在应用前端加入消息队列。 a、可以控制活动的人数 b、可以缓解短时间内高流量压垮应用</p><p>用户的请求，服务器接收后，首先写入消息队列。假如消息队列长度超过最大数量，则直接抛弃用户请求或跳转到错误页面。 秒杀业务根据消息队列中的请求信息，再做后续处理</p><h3 id="日志处理" tabindex="-1"><a class="header-anchor" href="#日志处理" aria-hidden="true">#</a> 日志处理</h3><p>日志处理是指将消息队列用在日志处理中，比如Kafka的应用，解决大量日志传输的问题。架构简化如下</p><p>日志采集客户端，负责日志数据采集，定时写受写入Kafka队列 Kafka消息队列，负责日志数据的接收，存储和转发 日志处理应用：订阅并消费kafka队列中的日志数据</p><h3 id="消息通讯" tabindex="-1"><a class="header-anchor" href="#消息通讯" aria-hidden="true">#</a> 消息通讯</h3><p>消息通讯是指，消息队列一般都内置了高效的通信机制，因此也可以用在纯的消息通讯。比如实现点对点消息队列，或者聊天室等 点对点通讯：</p><p>客户端A和客户端B使用同一队列，进行消息通讯。</p><p>聊天室通讯：</p><p>客户端A，客户端B，客户端N订阅同一主题，进行消息发布和接收。实现类似聊天室效果。</p><p>以上实际是消息队列的两种消息模式，点对点或发布订阅模式</p><h3 id="消息消费" tabindex="-1"><a class="header-anchor" href="#消息消费" aria-hidden="true">#</a> 消息消费</h3><p>在JMS中，消息的产生和消费都是异步的。对于消费来说，JMS的消息者可以通过两种方式来消费消息。 （1）同步 订阅者或接收者通过receive方法来接收消息，receive方法在接收到消息之前（或超时之前）将一直阻塞；</p><p>（2）异步 订阅者或接收者可以注册为一个消息监听器。当消息到达之后，系统自动调用监听器的onMessage方法。</p><p>JNDI：Java命名和目录接口,是一种标准的Java命名系统接口。可以在网络上查找和访问服务。通过指定一个资源名称，该名称对应于数据库或命名服务中的一个记录，同时返回资源连接建立所必须的信息。 JNDI在JMS中起到查找和访问发送目标或消息来源的作用。</p><h2 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h2><h3 id="point-to-point" tabindex="-1"><a class="header-anchor" href="#point-to-point" aria-hidden="true">#</a> Point-to-Point</h3><p>基于点对点的消息模型</p><p>消息生产者生产消息发送到 queue 中，然后消息消费者从 queue 中取出并且消费消息。 消息被消费以后，queue 中不再有存储，所以消息消费者不可能消费到已经被消费的消 息。 Queue 支持存在多个消费者，但是对一个消息而言，只会有一个消费者可以消费、其它 的则不能消费此消息了。 当消费者不存在时，消息会一直保存，直到有消费消费</p><p><img src="'+e+'" alt="image-20200110192535698"></p><h3 id="pub-sub" tabindex="-1"><a class="header-anchor" href="#pub-sub" aria-hidden="true">#</a> pub/sub</h3><p><img src="'+a+'" alt="image-20200110192613518"></p><p>基于订阅/发布的消息模型</p><p>消息生产者（发布）将消息发布到 topic 中，同时有多个消息消费者（订阅）消费该消 息。 和点对点方式不同，发布到 topic 的消息会被所有订阅者消费。 当生产者发布消息，不管是否有消费者。都不会保存消息 一定要先有消息的消费者，后有消息的生产者。</p><h3 id="queue" tabindex="-1"><a class="header-anchor" href="#queue" aria-hidden="true">#</a> Queue</h3><p>队列存储，常用与点对点消息模型</p><p>默认只能由唯一的一个消费者处理。一旦处理消息删除。</p><h3 id="topic" tabindex="-1"><a class="header-anchor" href="#topic" aria-hidden="true">#</a> Topic</h3><p>主题存储，用于订阅/发布消息模型</p><p>主题中的消息，会发送给所有的消费者同时处理。只有在消息可以重复处 理的业务场景中可使用。</p><p>Queue/Topic都是 Destination 的子接口</p><blockquote><p>JMS中定义了两种消息模型：点对点（point to point， queue）和发布/订阅（publish/subscribe，topic）。主要区别就是是否能重复消费。</p></blockquote><h3 id="点对点-queue-不可重复消费" tabindex="-1"><a class="header-anchor" href="#点对点-queue-不可重复消费" aria-hidden="true">#</a> 点对点：Queue，不可重复消费</h3><p>消息生产者生产消息发送到queue中，然后消息消费者从queue中取出并且消费消息。 消息被消费以后，queue中不再有存储，所以消息消费者不可能消费到已经被消费的消息。 Queue支持存在多个消费者，但是对一个消息而言，只会有一个消费者可以消费、其它的则不能消费此消息了。 当消费者不存在时，消息会一直保存，直到有消费消费</p><h3 id="发布-订阅-topic-可以重复消费" tabindex="-1"><a class="header-anchor" href="#发布-订阅-topic-可以重复消费" aria-hidden="true">#</a> 发布/订阅：Topic，可以重复消费</h3><p>消息生产者（发布）将消息发布到topic中，同时有多个消息消费者（订阅）消费该消息。 和点对点方式不同，发布到topic的消息会被所有订阅者消费。 当生产者发布消息，不管是否有消费者。都不会保存消息</p>',49),c=[d];function n(o,u){return p(),r("div",null,c)}const l=i(t,[["render",n],["__file","ActiveMQ_01.html.vue"]]);export{l as default};
