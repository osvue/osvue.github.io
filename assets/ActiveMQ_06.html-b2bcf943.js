import{_ as e,p as a,q as r,a1 as i}from"./framework-d81ad7e5.js";const h={},t=i('<h3 id="queuerequestor" tabindex="-1"><a class="header-anchor" href="#queuerequestor" aria-hidden="true">#</a> QueueRequestor</h3><p>同步阻塞</p><h3 id="temporaryqueue" tabindex="-1"><a class="header-anchor" href="#temporaryqueue" aria-hidden="true">#</a> TemporaryQueue</h3><p>异步监听，当消息过多时会创建响应的临时queue</p><h3 id="jmscorrelationid-消息属性" tabindex="-1"><a class="header-anchor" href="#jmscorrelationid-消息属性" aria-hidden="true">#</a> JMSCorrelationID 消息属性</h3><p>异步监听，公用queue</p><h2 id="调优总结" tabindex="-1"><a class="header-anchor" href="#调优总结" aria-hidden="true">#</a> 调优总结</h2><h3 id="topic加强-可追溯消息" tabindex="-1"><a class="header-anchor" href="#topic加强-可追溯消息" aria-hidden="true">#</a> Topic加强 可追溯消息</h3><p>http://activemq.apache.org/retroactive-consumer.html</p><p>避免topic下错过消息</p><h3 id="消息堆积内存上涨" tabindex="-1"><a class="header-anchor" href="#消息堆积内存上涨" aria-hidden="true">#</a> 消息堆积内存上涨</h3><ul><li>检查消息是否持久化</li><li>检查消息 消费速度与生产速度</li><li>调整xms xmx参数</li></ul><h3 id="磁盘满" tabindex="-1"><a class="header-anchor" href="#磁盘满" aria-hidden="true">#</a> 磁盘满</h3><p>当非持久化消息堆积到一定程度，ActiveMQ会将非持久化消息写入临时文件，但是在重启的时候不会恢复</p><p>当存储持久化数据的磁盘满了的时候</p><p><strong>持久化消息</strong></p><p>生产者阻塞，消费正常，当消费一部分消息后，腾出空间，生产者继续</p><p><strong>非持久化消息</strong></p><p>由于临时文件造成磁盘满了，生产者阻塞，消费异常，无法提供服务</p><h3 id="开启事务" tabindex="-1"><a class="header-anchor" href="#开启事务" aria-hidden="true">#</a> 开启事务</h3><p>在发送非持久化消息的时候，可以有效防止消息丢失</p><h3 id="prefetchsize影响消费倾斜" tabindex="-1"><a class="header-anchor" href="#prefetchsize影响消费倾斜" aria-hidden="true">#</a> prefetchSize影响消费倾斜</h3><p>慢速消费的时候可以将prefetchSize设为1，每次取一条</p><h3 id="prefetchsize造成消费者内存溢出" tabindex="-1"><a class="header-anchor" href="#prefetchsize造成消费者内存溢出" aria-hidden="true">#</a> prefetchSize造成消费者内存溢出</h3><h3 id="auto-acknowledge造成消息丢失-乱序" tabindex="-1"><a class="header-anchor" href="#auto-acknowledge造成消息丢失-乱序" aria-hidden="true">#</a> AUTO_ACKNOWLEDGE造成消息丢失/乱序</h3><p>消息消费失败后，无法复原消息，可以手动ack 避免broker把消息自动确认删除</p><p>receive()方法接受到消息后立即确认</p><p>listener 的onmessage方法执行完毕才会确认</p><p>手动ack的时候要等connection断开 才会重新推送给其他的consumer，所以有可能会导致消费顺序错乱</p><h3 id="exclusive-和selector有可能造成消息堆积" tabindex="-1"><a class="header-anchor" href="#exclusive-和selector有可能造成消息堆积" aria-hidden="true">#</a> exclusive 和selector有可能造成消息堆积</h3>',30),c=[t];function d(n,s){return a(),r("div",null,c)}const p=e(h,[["render",d],["__file","ActiveMQ_06.html.vue"]]);export{p as default};