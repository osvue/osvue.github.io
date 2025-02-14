import{_ as e,p as a,q as i,a1 as l}from"./framework-d81ad7e5.js";const p="/assets/bio-d669592b.png",r={},o=l('<h2 id="同步异步" tabindex="-1"><a class="header-anchor" href="#同步异步" aria-hidden="true">#</a> 同步异步</h2><ul><li>同步异步 针对调用者</li><li>阻塞非阻塞 针对被调用者</li></ul><h3 id="同步、异步、阻塞、非阻塞" tabindex="-1"><a class="header-anchor" href="#同步、异步、阻塞、非阻塞" aria-hidden="true">#</a> 同步、异步、阻塞、非阻塞</h3><p>在进行网络编程时，我们常常见到同步(Sync)/异步(Async)，阻塞(Block)/非阻塞(Unblock)四种调用方式：</p><p>同步/异步主要针对C端:</p><p>同步（Sync）</p><p>所谓同步，就是发出一个功能调用时，在没有得到结果之前，该调用就不返回或继续执行后续操作。</p><p>根据这个定义，Java中所有方法都是同步调用，应为必须要等到结果后才会继续执行。我们在说同步、异步的时候，一般而言是特指那些需要其他端协作或者需要一定时间完成的任务。</p><p>简单来说，同步就是必须一件一件事做，等前一件做完了才能做下一件事。</p><p>例如：B/S模式中的表单提交，具体过程是：客户端提交请求-&gt;等待服务器处理-&gt;处理完毕返回，在这个过程中客户端（浏览器）不能做其他事。</p><p>异步（Async）</p><p>异步与同步相对，当一个异步过程调用发出后，调用者在没有得到结果之前，就可以继续执行后续操作。当这个调用完成后，一般通过状态、通知和回调来通知调用者。对于异步调用，调用的返回并不受调用者控制。</p><p>对于通知调用者的三种方式，具体如下：</p><p>状态</p><p>即监听被调用者的状态（轮询），调用者需要每隔一定时间检查一次，效率会很低。</p><p>通知</p><p>当被调用者执行完成后，发出通知告知调用者，无需消耗太多性能。</p><p>回调</p><p>与通知类似，当被调用者执行完成后，会调用调用者提供的回调函数。</p><p>例如：B/S模式中的ajax请求，具体过程是：客户端发出ajax请求-&gt;服务端处理-&gt;处理完毕执行客户端回调，在客户端（浏览器）发出请求后，仍然可以做其他的事。</p><p>总结来说，同步和异步的区别：请求发出后，是否需要等待结果，才能继续执行其他操作。</p><p>阻塞/非阻塞主要针对S端:</p><p>阻塞 阻塞调用是指调用结果返回之前，当前线程会被挂起（线程进入非可执行状态，在这个状态下，cpu不会给线程分配时间片，即线程暂停运行）。函数只有在得到结果之后才会返回。</p><p>有人也许会把阻塞调用和同步调用等同起来，实际上他是不同的。对于同步调用来说，很多时候当前线程还是激活的，只是从逻辑上当前函数没有返回而已。 例如，我们在socket中调用recv函数，如果缓冲区中没有数据，这个函数就会一直等待，直到有数据才返回。而此时，当前线程还会继续处理各种各样的消息。</p><p>快递的例子：比如到你某个时候到A楼一层（假如是内核缓冲区）取快递，但是你不知道快递什么时候过来，你又不能干别的事，只能死等着。但你可以睡觉（进程处于休眠状态），因为你知道快递把货送来时一定会给你打个电话（假定一定能叫醒你）。</p><p>非阻塞 非阻塞和阻塞的概念相对应，指在不能立刻得到结果之前，该函数不会阻塞当前线程，而会立刻返回。</p><p>还是等快递的例子：如果用忙轮询的方法，每隔5分钟到A楼一层(内核缓冲区）去看快递来了没有。如果没来，立即返回。而快递来了，就放在A楼一层，等你去取。</p><p>对象的阻塞模式和阻塞函数调用 对象是否处于阻塞模式和函数是不是阻塞调用有很强的相关性，但是并不是一一对应的。阻塞对象上可以有非阻塞的调用方式，我们可以通过一定的API去轮询状 态，在适当的时候调用阻塞函数，就可以避免阻塞。而对于非阻塞对象，调用特殊的函数也可以进入阻塞调用。函数select就是这样的一个例子。</p><ol><li>同步，就是我客户端（c端调用者）调用一个功能，该功能没有结束前，我（c端调用者）死等结果。</li><li>异步，就是我（c端调用者）调用一个功能，不需要知道该功能结果，该功能有结果后通知我（c端调用者）即回调通知。</li></ol><p>同步/异步主要针对C端, 但是跟S端不是完全没有关系，同步/异步机制必须S端配合才能实现. 同步/异步是由c端自己控制, 但是S端是否阻塞/非阻塞, C端完全不需要关心.</p><ol start="3"><li>阻塞， 就是调用我（s端被调用者，函数），我（s端被调用者，函数）没有接收完数据或者没有得到结果之前，我不会返回。</li><li>非阻塞， 就是调用我（s端被调用者，函数），我（s端被调用者，函数）立即返回，通过select通知调用者</li></ol><p>同步IO和异步IO的区别就在于：数据访问的时候进程是否阻塞！</p><p>阻塞IO和非阻塞IO的区别就在于：应用程序的调用是否立即返回！</p><p>同步和异步都只针对于本机SOCKET而言的。</p><p>同步和异步,阻塞和非阻塞,有些混用,其实它们完全不是一回事,而且它们修饰的对象也不相同。 阻塞和非阻塞是指当server端的进程访问的数据如果尚未就绪,进程是否需要等待,简单说这相当于函数内部的实现区别,也就是未就绪时是直接返回还是等待就绪;</p><p>而同步和异步是指client端访问数据的机制,同步一般指主动请求并等待I/O操作完毕的方式,当数据就绪后在读写的时候必须阻塞(区别就绪与读写二个阶段,同步的读写必须阻塞),异步则指主动请求数据后便可以继续处理其它任务,随后等待I/O,操作完毕的通知,这可以使进程在数据读写时也不阻塞。(等待&quot;通知&quot;)</p><h4 id="i-o-模型简单的理解-就是用什么样的通道进行数据的发送和接收-很大程度上决定了程序通信的性能" tabindex="-1"><a class="header-anchor" href="#i-o-模型简单的理解-就是用什么样的通道进行数据的发送和接收-很大程度上决定了程序通信的性能" aria-hidden="true">#</a> I/O 模型简单的理解：就是用什么样的通道进行数据的发送和接收，很大程度上决定了程序通信的性能</h4><ul><li>Java共支持3种网络编程模型/IO模式：BIO、NIO、AIO</li></ul><blockquote><p>Java BIO ： 同步并阻塞(传统阻塞型)，服务器实现模式为一个连接一个线程，即客户端有连接请求时服务器端就需要启动一个线程进行处理，如果这个连接不做任何事情会造成不必要的线程开销 【简单示意图】</p></blockquote><blockquote><p>Java NIO ： 同步非阻塞，服务器实现模式为一个线程处理多个请求(连接)，即客户端发送的连接请求都会注册到多路复用器上，多路复用器轮询到连接有I/O请求就进行处理 【简单示意图】</p></blockquote><blockquote><p>Java AIO(NIO.2) ： 异步非阻塞，AIO 引入异步通道的概念，采用了 Proactor 模式，简化了程序编写，有效的请求才启动线程，它的特点是先由操作系统完成后才通知服务端程序启动线程去处理，一般适用于连接数较多且连接时间较长的应用</p></blockquote><h2 id="bio" tabindex="-1"><a class="header-anchor" href="#bio" aria-hidden="true">#</a> BIO</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Java BIO 就是传统的java io 编程，其相关的类和接口在 java.io <br> BIO(blocking I/O) ： 同步阻塞，服务器实现模式为一个连接一个线程<br> 即客户端有连接请求时服务器端就需要启动一个线程进行处理，如果这个连接不做任何事情会造成不必要的线程开销<br> 可以通过线程池机制改善(实现多个客户连接服务器)。</p></div><p><img src="'+p+'" alt="alt"></p><ol><li>服务器端启动一个ServerSocket</li><li>客户端启动Socket对服务器进行通信，默认情况下服务器端需要对每个客户 建立一个线程与之通讯</li><li>客户端发出请求后, 先咨询服务器是否有线程响应，如果没有则会等待，或者被拒绝</li><li>如果有响应，客户端线程会等待请求结束后，在继续执行</li></ol><h2 id="nio" tabindex="-1"><a class="header-anchor" href="#nio" aria-hidden="true">#</a> NIO</h2><h4 id="channel-通道" tabindex="-1"><a class="header-anchor" href="#channel-通道" aria-hidden="true">#</a> Channel(通道)</h4><h4 id="buffer-缓冲区" tabindex="-1"><a class="header-anchor" href="#buffer-缓冲区" aria-hidden="true">#</a> Buffer(缓冲区)</h4><h4 id="selector-选择器" tabindex="-1"><a class="header-anchor" href="#selector-选择器" aria-hidden="true">#</a> Selector(选择器)</h4><ol><li><p>Java NIO 全称 java non-blocking IO，是指 JDK 提供的新 API。从 JDK1.4 开始，Java 提供了一系列改进的输入/输出的新特性，被统称为 NIO(即 New IO)，是同步非阻塞的</p></li><li><p>NIO 相关类都被放在 java.nio 包及子包下，并且对原 java.io 包中的很多类进行改写。</p></li><li><p>NIO 有三大核心部分：Channel(通道)，Buffer(缓冲区), Selector(选择器)</p></li><li><p>NIO是 面向缓冲区 ，或者面向 块 编程的。数据读取到一个它稍后处理的缓冲区，需要时可在缓冲区中前后移动，这就增加了处理过程中的灵活性，使用它可以提供非阻塞式的高伸缩性网络</p></li><li><p>Java NIO的非阻塞模式，使一个线程从某通道发送请求或者读取数据，但是它仅能得到目前可用的数据，如果目前没有数据可用时，就什么都不会获取，而不是保持线程阻塞，所以直至数据变的可以读取之前，该线程可以继续做其他的事情。 非阻塞写也是如此，一个线程请求写入一些数据到某通道，但不需要等待它完全写入，这个线程同时可以去做别的事情。【后面有案例说明】</p></li><li><p>通俗理解：NIO是可以做到用一个线程来处理多个操作的。假设有10000个请求过来,根据实际情况，可以分配50或者100个线程来处理。不像之前的阻塞IO那样，非得分配10000个。</p></li><li><p>HTTP2.0使用了多路复用的技术，做到同一个连接并发处理多个请求，而且并发请求的数量比HTTP1.1大了好几个数量级。</p></li></ol><h2 id="nio-bio-比较" tabindex="-1"><a class="header-anchor" href="#nio-bio-比较" aria-hidden="true">#</a> NIO BIO 比较</h2><ol><li><p>BIO 以流的方式处理数据,而 NIO 以块的方式处理数据,块 I/O 的效率比流 I/O 高很多</p></li><li><p>BIO 是阻塞的，NIO 则是非阻塞的</p></li><li><p>BIO基于字节流和字符流进行操作，而 NIO 基于 Channel(通道)和 Buffer(缓冲区)进行操作，数据总是从通道读取到缓冲区中，或者从缓冲区写入到通道中。Selector(选择器)用于监听多个通道的事件（比如：连接请求，数据到达等），因此使用单个线程就可以监听多个客户端通道</p></li><li><p>Selector 、 Channel 和 Buffer 的关系图(简单版)</p></li><li><p>关系图的说明:</p></li><li><p>每个channel 都会对应一个Buffer</p></li><li><p>Selector 对应一个线程， 一个线程对应多个channel(连接)</p></li><li><p>该图反应了有三个channel 注册到 该selector //程序</p></li><li><p>程序切换到哪个channel 是有事件决定的, Event 就是一个重要的概念</p></li><li><p>Selector 会根据不同的事件，在各个通道上切换</p></li><li><p>Buffer 就是一个内存块 ， 底层是有一个数组</p></li><li><p>数据的读取写入是通过Buffer, 这个和BIO , BIO 中要么是输入流，或者是输出流, 不能双向，但是NIO的Buffer 是可以读也可以写, 需要 flip 方法切换</p></li><li><p>channel 是双向的, 可以返回底层操作系统的情况, 比如Linux ， 底层的操作系统通道就是双向的.</p></li></ol>',52),n=[o];function c(t,h){return a(),i("div",null,n)}const d=e(r,[["render",c],["__file","nio_b.html.vue"]]);export{d as default};
