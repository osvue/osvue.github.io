import{_ as s,o as a,c as t,a as p}from"./app-215c512d.js";const o={};function c(e,n){return a(),t("div",null,n[0]||(n[0]=[p(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sub-page<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left-diamond<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        课题2：融合协同传输关键技术研究
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right-diamond<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content-area<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left-section<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>leftSectionRef<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>curve-controls<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>control-item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(curve, index) in curves<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-checkbox</span> 
              <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>curve.visible<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(e) =&gt; handleCurveVisibilityChange(index, e.target.checked)<span class="token punctuation">&quot;</span></span>
            <span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>curve-color<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ backgroundColor: curve.color }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
              {{ curve.name }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-checkbox</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>canvasRef<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>curve-layer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
        
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scroll_table</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scroll_table</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right-section<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SubSection</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>基于混合遥测感知的异构网络状态<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>network-status-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>filter-bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>filter-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>域：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-select</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectedDomain<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 15vh</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-select-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>通信车站<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>通信车站<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-select-option</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-select</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>filter-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>省市：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-select</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectedCity<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 15vh</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-select-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>北京<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>北京<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-select-option</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-select</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>filter-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>设备：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-select</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectedDevice<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 15vh</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-select-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>北京01<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>北京01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-select-option</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-select</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>filter-buttons<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>查询<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span><span class="token punctuation">&gt;</span></span>重置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tabs-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-tabs</span> <span class="token attr-name"><span class="token namespace">v-model:</span>activeKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>activeTabKey<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-tab-pane</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>network<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tab</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>链路状态<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-tab-pane</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-tab-pane</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4g5g<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tab</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4G/5G端口流量<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-tab-pane</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-tab-pane</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wifi<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tab</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>WiFi端口流量<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-tab-pane</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-tab-pane</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lan<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tab</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LAN端口流量<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-tab-pane</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-tabs</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            
            <span class="token comment">&lt;!-- 链路状态 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>traffic-charts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>activeTabKey === &#39;network&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链路状态<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart-section<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>network-status-grid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status-card<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in networkStatus<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>链路 {{index + 1}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status-icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.status<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status-info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>状态: {{item.statusText}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>延迟: {{item.delay}}ms<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>丢包率: {{item.packetLoss}}%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            
            <span class="token comment">&lt;!-- 4G/5G端口流量 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>traffic-charts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>activeTabKey === &#39;4g5g&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>4G/5G端口流量<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart-section<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>section-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>发送速率(Kb/s)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-chart</span> <span class="token attr-name">:option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sendRateOptions<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 30vh<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart-section<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>section-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>接收速率(Kb/s)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-chart</span> <span class="token attr-name">:option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>receiveRateOptions<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 30vh<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            
            <span class="token comment">&lt;!-- WiFi端口流量 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>traffic-charts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>activeTabKey === &#39;wifi&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>WiFi端口流量<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart-section<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>section-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>发送速率(Kb/s)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-chart</span> <span class="token attr-name">:option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wifiSendOptions<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 30vh<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart-section<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>section-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>接收速率(Kb/s)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-chart</span> <span class="token attr-name">:option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wifiReceiveOptions<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 30vh<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            
            <span class="token comment">&lt;!-- LAN端口流量 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>traffic-charts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>activeTabKey === &#39;lan&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>LAN端口流量<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart-section<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>section-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>发送速率(Kb/s)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-chart</span> <span class="token attr-name">:option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lanSendOptions<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 30vh<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart-section<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>section-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>接收速率(Kb/s)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-chart</span> <span class="token attr-name">:option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lanReceiveOptions<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 30vh<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SubSection</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> onUnmounted<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@ant-design/icons-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ant-design-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> SubSection <span class="token keyword">from</span> <span class="token string">&quot;@/components/SubSection.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> scroll_table <span class="token keyword">from</span> <span class="token string">&quot;@/components/scroll_table.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> use <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;echarts/core&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VChart <span class="token keyword">from</span> <span class="token string">&quot;vue-echarts&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LineChart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;echarts/charts&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> 
  TitleComponent<span class="token punctuation">,</span> 
  TooltipComponent<span class="token punctuation">,</span> 
  LegendComponent<span class="token punctuation">,</span> 
  GridComponent 
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;echarts/components&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CanvasRenderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;echarts/renderers&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> 
  Tabs <span class="token keyword">as</span> ATabs<span class="token punctuation">,</span> 
  TabPane <span class="token keyword">as</span> ATabPane<span class="token punctuation">,</span> 
  Select <span class="token keyword">as</span> ASelect<span class="token punctuation">,</span> 
  SelectOption <span class="token keyword">as</span> ASelectOption<span class="token punctuation">,</span>
  Button <span class="token keyword">as</span> AButton<span class="token punctuation">,</span>
  Checkbox <span class="token keyword">as</span> ACheckbox
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>

<span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">[</span>LineChart<span class="token punctuation">,</span> TitleComponent<span class="token punctuation">,</span> TooltipComponent<span class="token punctuation">,</span> LegendComponent<span class="token punctuation">,</span> GridComponent<span class="token punctuation">,</span> CanvasRenderer<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 表格列定义</span>
<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;ID&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;接入标识&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&quot;identifier&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;identifier&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">220</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;接入标识类型&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&quot;identifierType&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;identifierType&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;路由标识&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&quot;routerIdentifier&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;routerIdentifier&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">220</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;路由标识类型&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&quot;routerType&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;routerType&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;缓存时间&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">&quot;cacheTime&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;cacheTime&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;操作&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;action&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 搜索参数</span>
<span class="token keyword">const</span> searchParams <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">identifier</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routerIdentifier</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routerType</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 表格数据</span>
<span class="token keyword">const</span> tableData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token comment">// ... 保持原有的表格数据不变 ...</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 分页配置</span>
<span class="token keyword">const</span> pagination <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
  <span class="token literal-property property">showSizeChanger</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">showTotal</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">total</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">共 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>total<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 条</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 模态框相关</span>
<span class="token keyword">const</span> modalVisible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> modalTitle <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;新增标识&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">identifier</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">identifierType</span><span class="token operator">:</span> <span class="token string">&quot;未设置&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routerIdentifier</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routerType</span><span class="token operator">:</span> <span class="token string">&quot;未设置&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cacheTime</span><span class="token operator">:</span> <span class="token number">1800</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 方法</span>
<span class="token keyword">const</span> <span class="token function-variable function">searchData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&quot;搜索成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleAddNew</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>formData<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">identifier</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">identifierType</span><span class="token operator">:</span> <span class="token string">&quot;未设置&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">routerIdentifier</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">routerType</span><span class="token operator">:</span> <span class="token string">&quot;未设置&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cacheTime</span><span class="token operator">:</span> <span class="token number">1800</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  modalTitle<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;新增标识&quot;</span><span class="token punctuation">;</span>
  modalVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleEdit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">record</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>formData<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token operator">...</span>record <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  modalTitle<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;编辑标识&quot;</span><span class="token punctuation">;</span>
  modalVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleDelete</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">record</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  tableData<span class="token punctuation">.</span>value <span class="token operator">=</span> tableData<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>id <span class="token operator">!==</span> record<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&quot;删除成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleView</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">record</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>formData<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token operator">...</span>record <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  modalTitle<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;查看标识&quot;</span><span class="token punctuation">;</span>
  modalVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleModalOk</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>formData<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> tableData<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>id <span class="token operator">===</span> formData<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      tableData<span class="token punctuation">.</span>value<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>formData <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newRecord <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>formData<span class="token punctuation">,</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">new-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">...</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    tableData<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>newRecord<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>modalTitle<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">&quot;新增标识&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;添加成功&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;更新成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  modalVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleModalCancel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  modalVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleTableChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">pag</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  pagination<span class="token punctuation">.</span>current <span class="token operator">=</span> pag<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">onDropdownChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">open</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理下拉菜单状态变化</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 选择过滤项的响应式数据</span>
<span class="token keyword">const</span> selectedDomain <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;通信车站&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> selectedCity <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;北京&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> selectedDevice <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;北京01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> activeTabKey <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;4g5g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 生成时间轴数据</span>
<span class="token keyword">const</span> timeData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> currentTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">12</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> time <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>currentTime<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">11</span> <span class="token operator">-</span> i<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> hours <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> minutes <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> seconds <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  timeData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hours<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>minutes<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>seconds<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 链路状态数据</span>
<span class="token keyword">const</span> networkStatus <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;normal&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">statusText</span><span class="token operator">:</span> <span class="token string">&#39;正常&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token literal-property property">packetLoss</span><span class="token operator">:</span> <span class="token number">0.01</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">statusText</span><span class="token operator">:</span> <span class="token string">&#39;注意&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token literal-property property">packetLoss</span><span class="token operator">:</span> <span class="token number">1.2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">statusText</span><span class="token operator">:</span> <span class="token string">&#39;异常&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">156</span><span class="token punctuation">,</span> <span class="token literal-property property">packetLoss</span><span class="token operator">:</span> <span class="token number">6.8</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;normal&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">statusText</span><span class="token operator">:</span> <span class="token string">&#39;正常&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token literal-property property">packetLoss</span><span class="token operator">:</span> <span class="token number">0.05</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;normal&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">statusText</span><span class="token operator">:</span> <span class="token string">&#39;正常&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token literal-property property">packetLoss</span><span class="token operator">:</span> <span class="token number">0.12</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">statusText</span><span class="token operator">:</span> <span class="token string">&#39;注意&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">58</span><span class="token punctuation">,</span> <span class="token literal-property property">packetLoss</span><span class="token operator">:</span> <span class="token number">2.3</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加 canvas 相关的引用</span>
<span class="token keyword">const</span> canvasRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> animationFrameId <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 修改曲线数据结构</span>
<span class="token keyword">const</span> curves <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;链路1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#4990f9&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">points</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.05</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">control1</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">control2</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.75</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.5</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;链路2&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#52c41a&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">points</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.05</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">control1</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">control2</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.75</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.6</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.95</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.5</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;链路3&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#f5222d&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">points</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.05</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.7</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">control1</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.6</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">control2</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.75</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.8</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.95</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.7</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 初始化 Canvas</span>
<span class="token keyword">const</span> <span class="token function-variable function">initCanvas</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>canvasRef<span class="token punctuation">.</span>value <span class="token operator">||</span> <span class="token operator">!</span>leftSectionRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  
  <span class="token keyword">const</span> canvas <span class="token operator">=</span> canvasRef<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token keyword">const</span> rect <span class="token operator">=</span> leftSectionRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 设置 canvas 尺寸</span>
  canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> rect<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
  canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> rect<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
  
  <span class="token comment">// 获取上下文</span>
  ctx<span class="token punctuation">.</span>value <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 开始动画</span>
  <span class="token function">startAnimation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 绘制曲线</span>
<span class="token keyword">const</span> <span class="token function-variable function">drawCurve</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">curve<span class="token punctuation">,</span> progress</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ctx<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  
  <span class="token keyword">const</span> <span class="token punctuation">{</span> start<span class="token punctuation">,</span> control1<span class="token punctuation">,</span> control2<span class="token punctuation">,</span> end <span class="token punctuation">}</span> <span class="token operator">=</span> curve<span class="token punctuation">.</span>points<span class="token punctuation">;</span>
  <span class="token keyword">const</span> width <span class="token operator">=</span> canvasRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
  <span class="token keyword">const</span> height <span class="token operator">=</span> canvasRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
  
  <span class="token comment">// 计算实际坐标</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getPoint</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">point</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> point<span class="token punctuation">.</span>x <span class="token operator">*</span> width<span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> point<span class="token punctuation">.</span>y <span class="token operator">*</span> height
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">const</span> startPoint <span class="token operator">=</span> <span class="token function">getPoint</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> controlPoint1 <span class="token operator">=</span> <span class="token function">getPoint</span><span class="token punctuation">(</span>control1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> controlPoint2 <span class="token operator">=</span> <span class="token function">getPoint</span><span class="token punctuation">(</span>control2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> endPoint <span class="token operator">=</span> <span class="token function">getPoint</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 创建渐变</span>
  <span class="token keyword">const</span> gradient <span class="token operator">=</span> ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span>
    startPoint<span class="token punctuation">.</span>x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> endPoint<span class="token punctuation">.</span>x<span class="token punctuation">,</span> <span class="token number">0</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> curve<span class="token punctuation">.</span>color <span class="token operator">+</span> <span class="token string">&#39;99&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加透明度</span>
  gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> curve<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 设置样式</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> gradient<span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span>lineCap <span class="token operator">=</span> <span class="token string">&#39;round&#39;</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span>lineJoin <span class="token operator">=</span> <span class="token string">&#39;round&#39;</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 开始绘制路径</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>startPoint<span class="token punctuation">.</span>x<span class="token punctuation">,</span> startPoint<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 计算动画进度点</span>
  <span class="token keyword">const</span> t <span class="token operator">=</span> progress<span class="token punctuation">;</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> t<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> startPoint<span class="token punctuation">.</span>x <span class="token operator">+</span>
            <span class="token number">3</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> t<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> t <span class="token operator">*</span> controlPoint1<span class="token punctuation">.</span>x <span class="token operator">+</span>
            <span class="token number">3</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> t<span class="token punctuation">)</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> controlPoint2<span class="token punctuation">.</span>x <span class="token operator">+</span>
            Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> endPoint<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> t<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> startPoint<span class="token punctuation">.</span>y <span class="token operator">+</span>
            <span class="token number">3</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> t<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> t <span class="token operator">*</span> controlPoint1<span class="token punctuation">.</span>y <span class="token operator">+</span>
            <span class="token number">3</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> t<span class="token punctuation">)</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> controlPoint2<span class="token punctuation">.</span>y <span class="token operator">+</span>
            Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> endPoint<span class="token punctuation">.</span>y<span class="token punctuation">;</span>
  
  <span class="token comment">// 绘制到当前进度点</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">quadraticCurveTo</span><span class="token punctuation">(</span>
    controlPoint1<span class="token punctuation">.</span>x<span class="token punctuation">,</span> controlPoint1<span class="token punctuation">.</span>y<span class="token punctuation">,</span>
    x<span class="token punctuation">,</span> y
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 添加阴影</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span>shadowColor <span class="token operator">=</span> <span class="token string">&#39;rgba(0, 0, 0, 0.2)&#39;</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span>shadowBlur <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span>shadowOffsetY <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 重置阴影</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span>shadowColor <span class="token operator">=</span> <span class="token string">&#39;transparent&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 动画循环</span>
<span class="token keyword">const</span> <span class="token function-variable function">animate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ctx<span class="token punctuation">.</span>value <span class="token operator">||</span> <span class="token operator">!</span>canvasRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 清除画布</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvasRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvasRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 更新和绘制每条曲线</span>
  curves<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">curve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>curve<span class="token punctuation">.</span>visible<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>curve<span class="token punctuation">.</span>progress <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        curve<span class="token punctuation">.</span>progress <span class="token operator">+=</span> <span class="token number">0.01</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">drawCurve</span><span class="token punctuation">(</span>curve<span class="token punctuation">,</span> curve<span class="token punctuation">.</span>progress<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 继续动画循环</span>
  animationFrameId<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animate<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 开始动画</span>
<span class="token keyword">const</span> <span class="token function-variable function">startAnimation</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>animationFrameId<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">cancelAnimationFrame</span><span class="token punctuation">(</span>animationFrameId<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 更新曲线可见性</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleCurveVisibilityChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> checked</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  curves<span class="token punctuation">.</span>value<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>visible <span class="token operator">=</span> checked<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>checked<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    curves<span class="token punctuation">.</span>value<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>progress <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 重置进度</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 移除重复的 handleResize 函数声明，合并为一个</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleResize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">updateSvgSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 保留原有的图表更新</span>
  <span class="token function">initCanvas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 添加 canvas 初始化</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 组件挂载和卸载</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">updateSvgSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">initCanvas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> handleResize<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">updateChartData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">updateNetworkStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 每30秒更新一次数据</span>
  updateTimer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>activeTabKey<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">&#39;network&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">updateNetworkStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">updateChartData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">30000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>updateTimer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>updateTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>animationFrameId<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">cancelAnimationFrame</span><span class="token punctuation">(</span>animationFrameId<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> handleResize<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 基础图表配置生成函数</span>
<span class="token keyword">const</span> <span class="token function-variable function">createBaseOptions</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">title<span class="token punctuation">,</span> yMax<span class="token punctuation">,</span> interval</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;axis&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisPointer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;shadow&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ppp6&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ppp5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ppp4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ppp3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ppp2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ppp1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;3%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&#39;4%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&#39;3%&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">boundaryGap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> timeData
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">max</span><span class="token operator">:</span> yMax<span class="token punctuation">,</span>
      <span class="token literal-property property">interval</span><span class="token operator">:</span> interval
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ppp6&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#5470c6&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">6</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ppp5&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#91cc75&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">6</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ppp4&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fac858&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">6</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ppp3&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#ee6666&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">6</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ppp2&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#73c0de&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">6</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ppp1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#3ba272&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">6</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 随机数据生成函数</span>
<span class="token keyword">const</span> <span class="token function-variable function">generateRandomData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token punctuation">,</span> max<span class="token punctuation">,</span> count <span class="token operator">=</span> <span class="token number">12</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> min<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 创建所有图表选项</span>
<span class="token keyword">const</span> sendRateOptions <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token function">createBaseOptions</span><span class="token punctuation">(</span><span class="token string">&#39;发送速率&#39;</span><span class="token punctuation">,</span> <span class="token number">21000</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> receiveRateOptions <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token function">createBaseOptions</span><span class="token punctuation">(</span><span class="token string">&#39;接收速率&#39;</span><span class="token punctuation">,</span> <span class="token number">18000</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> wifiSendOptions <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token function">createBaseOptions</span><span class="token punctuation">(</span><span class="token string">&#39;WiFi发送速率&#39;</span><span class="token punctuation">,</span> <span class="token number">15000</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> wifiReceiveOptions <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token function">createBaseOptions</span><span class="token punctuation">(</span><span class="token string">&#39;WiFi接收速率&#39;</span><span class="token punctuation">,</span> <span class="token number">12000</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> lanSendOptions <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token function">createBaseOptions</span><span class="token punctuation">(</span><span class="token string">&#39;LAN发送速率&#39;</span><span class="token punctuation">,</span> <span class="token number">24000</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> lanReceiveOptions <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token function">createBaseOptions</span><span class="token punctuation">(</span><span class="token string">&#39;LAN接收速率&#39;</span><span class="token punctuation">,</span> <span class="token number">20000</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 更新图表数据函数</span>
<span class="token keyword">const</span> <span class="token function-variable function">updateChartData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 4G/5G数据</span>
  sendRateOptions<span class="token punctuation">.</span>value<span class="token punctuation">.</span>series<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">series</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    series<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">generateRandomData</span><span class="token punctuation">(</span><span class="token number">9000</span><span class="token punctuation">,</span> <span class="token number">18000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  receiveRateOptions<span class="token punctuation">.</span>value<span class="token punctuation">.</span>series<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">series</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    series<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">generateRandomData</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">,</span> <span class="token number">16000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// WiFi数据</span>
  wifiSendOptions<span class="token punctuation">.</span>value<span class="token punctuation">.</span>series<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">series</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    series<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">generateRandomData</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">,</span> <span class="token number">14000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  wifiReceiveOptions<span class="token punctuation">.</span>value<span class="token punctuation">.</span>series<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">series</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    series<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">generateRandomData</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">,</span> <span class="token number">11000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// LAN数据</span>
  lanSendOptions<span class="token punctuation">.</span>value<span class="token punctuation">.</span>series<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">series</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    series<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">generateRandomData</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">,</span> <span class="token number">22000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  lanReceiveOptions<span class="token punctuation">.</span>value<span class="token punctuation">.</span>series<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">series</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    series<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">generateRandomData</span><span class="token punctuation">(</span><span class="token number">9000</span><span class="token punctuation">,</span> <span class="token number">19000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 网络状态数据更新函数</span>
<span class="token keyword">const</span> <span class="token function-variable function">updateNetworkStatus</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  networkStatus<span class="token punctuation">.</span>value <span class="token operator">=</span> networkStatus<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> random <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>random <span class="token operator">&lt;</span> <span class="token number">0.2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> 
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">statusText</span><span class="token operator">:</span> <span class="token string">&#39;异常&#39;</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">delay</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">100</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">packetLoss</span><span class="token operator">:</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>random <span class="token operator">&lt;</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> 
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">statusText</span><span class="token operator">:</span> <span class="token string">&#39;注意&#39;</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">delay</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">40</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">packetLoss</span><span class="token operator">:</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> 
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;normal&#39;</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">statusText</span><span class="token operator">:</span> <span class="token string">&#39;正常&#39;</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">delay</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">packetLoss</span><span class="token operator">:</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 初始更新数据</span>
<span class="token function">updateChartData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 监听标签页切换</span>
<span class="token function">watch</span><span class="token punctuation">(</span>activeTabKey<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">===</span> <span class="token string">&#39;network&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">updateNetworkStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">updateChartData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 数据自动更新</span>
<span class="token keyword">let</span> updateTimer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> leftSectionRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> svgSize <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 更新 SVG 尺寸</span>
<span class="token keyword">const</span> <span class="token function-variable function">updateSvgSize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>leftSectionRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> rect <span class="token operator">=</span> leftSectionRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    svgSize<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> rect<span class="token punctuation">.</span>width<span class="token punctuation">,</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> rect<span class="token punctuation">.</span>height
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 强制更新曲线路径</span>
    curves<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>curves<span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 监听 SVG 尺寸变化，更新路径</span>
<span class="token function">watch</span><span class="token punctuation">(</span>svgSize<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 触发路径重新计算</span>
  curves<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>curves<span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.sub-page</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f0f2f5<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 0 0 auto<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 2vh<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0.2vh 0.8vh <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.06<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 8vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.title</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2.4vh<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1.5vh 6vh<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #f8f9fa 0%<span class="token punctuation">,</span> #e9ecef 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0.2vh solid #4990f9<span class="token punctuation">;</span>
  <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>
    0% 0%<span class="token punctuation">,</span>
    <span class="token comment">/* 左上角 */</span> 100% 0%<span class="token punctuation">,</span>
    <span class="token comment">/* 右上角 */</span> 95% 100%<span class="token punctuation">,</span>
    <span class="token comment">/* 右下角 */</span> 5% 100% <span class="token comment">/* 左下角 */</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0.4vh 1.2vh <span class="token function">rgba</span><span class="token punctuation">(</span>73<span class="token punctuation">,</span> 144<span class="token punctuation">,</span> 249<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 添加左侧倾斜线 */</span>
<span class="token selector">.title::before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -0.2vh<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> -0.2vh<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 5vh<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0.2vh<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #4990f9<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transform-origin</span><span class="token punctuation">:</span> left bottom<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 添加右侧倾斜线 */</span>
<span class="token selector">.title::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> -0.2vh<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> -0.2vh<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 5vh<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0.2vh<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #4990f9<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-2deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transform-origin</span><span class="token punctuation">:</span> right bottom<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 添加左侧装饰菱形 */</span>
<span class="token selector">.title .left-diamond</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 1vh<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1.2vh<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1.2vh<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #4990f9<span class="token punctuation">;</span>
  <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>50% 0%<span class="token punctuation">,</span> 100% 50%<span class="token punctuation">,</span> 50% 100%<span class="token punctuation">,</span> 0% 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 添加右侧装饰菱形 */</span>
<span class="token selector">.title .right-diamond</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 1vh<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1.2vh<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1.2vh<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #4990f9<span class="token punctuation">;</span>
  <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>50% 0%<span class="token punctuation">,</span> 100% 50%<span class="token punctuation">,</span> 50% 100%<span class="token punctuation">,</span> 0% 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.title:hover</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-0.2vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0.6vh 1.6vh <span class="token function">rgba</span><span class="token punctuation">(</span>73<span class="token punctuation">,</span> 144<span class="token punctuation">,</span> 249<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #e9ecef 0%<span class="token punctuation">,</span> #f8f9fa 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.title:hover::before,
.title:hover::after</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #1976d2<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0.3vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.title:hover .left-diamond,
.title:hover .right-diamond</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #1976d2<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content-area</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 2vh<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 2vh<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh - 8vh - 4vh<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 减去header高度和padding */</span>
<span class="token punctuation">}</span>

<span class="token selector">.left-section</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 6<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.4vh<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0.2vh 0.8vh <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.06<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;@/assets/topic2_topo.jpg&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f8f9fa<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 添加一个内部容器来控制背景图的实际显示区域 */</span>
<span class="token selector">.left-section::before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token comment">/* 确保不影响交互 */</span>
<span class="token punctuation">}</span>

<span class="token selector">.info-box</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 2%<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 1%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 40%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 1vh<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0.2vh solid #4990f9<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0.4vh 1.2vh <span class="token function">rgba</span><span class="token punctuation">(</span>73<span class="token punctuation">,</span> 144<span class="token punctuation">,</span> 249<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s ease<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span> <span class="token comment">/* 提高层级，确保在背景图之上 */</span>
<span class="token punctuation">}</span>

<span class="token selector">.info-box:hover</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-0.2vh<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0.6vh 1.6vh <span class="token function">rgba</span><span class="token punctuation">(</span>73<span class="token punctuation">,</span> 144<span class="token punctuation">,</span> 249<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #1976d2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.info-content</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0vh<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right-section</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.4vh<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0.2vh 0.8vh <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.06<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 2vh<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0.2vh solid transparent<span class="token punctuation">;</span>
  <span class="token property">background-clip</span><span class="token punctuation">:</span> padding-box<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right-section::before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.4vh<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0.2vh<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #4990f9<span class="token punctuation">,</span> #1976d2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-mask</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>#fff 0 0<span class="token punctuation">)</span> content-box<span class="token punctuation">,</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>#fff 0 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-mask-composite</span><span class="token punctuation">:</span> xor<span class="token punctuation">;</span>
  <span class="token property">mask-composite</span><span class="token punctuation">:</span> exclude<span class="token punctuation">;</span>
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 添加内部装饰线 */</span>
<span class="token selector">.right-section::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 1vh<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 1vh<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 1vh<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 1vh<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0.1vh dashed <span class="token function">rgba</span><span class="token punctuation">(</span>73<span class="token punctuation">,</span> 144<span class="token punctuation">,</span> 249<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.2vh<span class="token punctuation">;</span>
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 添加悬停效果 */</span>
<span class="token selector">.right-section:hover</span> <span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0.4vh 1.2vh <span class="token function">rgba</span><span class="token punctuation">(</span>73<span class="token punctuation">,</span> 144<span class="token punctuation">,</span> 249<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right-section:hover::before</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #1976d2<span class="token punctuation">,</span> #4990f9<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right-section:hover::after</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>73<span class="token punctuation">,</span> 144<span class="token punctuation">,</span> 249<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.network-status-container</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 2vh<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.filter-bar</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 0 0 auto<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1.5vh<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.4vh<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0.2vh 0.8vh <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.06<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 2vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.filter-item</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 0.8vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.filter-item span</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.4vh<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.filter-buttons</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 1vh<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.tabs-container</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 0 0 auto<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.4vh<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0.2vh 0.8vh <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.06<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 1.5vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.traffic-charts</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.4vh<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 2vh<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0.2vh 0.8vh <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.06<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 2vh<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.chart-title</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.6vh<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.chart-container</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 3vh<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.chart-section</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.chart-section .section-title</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 0 0 auto<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.4vh<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 修改图表容器样式 */</span>
<span class="token selector">:deep(.echarts)</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100% <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100% <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 网络状态网格样式调整 */</span>
<span class="token selector">.network-status-grid</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fit<span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span>20vh<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 2vh<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1vh<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.status-card</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.8vh<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1.6vh<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0.2vh 1vh <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.08<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.card-title</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.6vh<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1.2vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.status-icon</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 4vh<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 4vh<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1.2vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.status-icon.normal</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #52c41a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.status-icon.warning</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #faad14<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.status-icon.error</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f5222d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.status-info</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.4vh<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.status-info &gt; div</span> <span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0.6vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 自定义 ant-design-vue 组件样式 */</span>
<span class="token selector">:deep(.ant-tabs-nav)</span> <span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.ant-tabs-tab)</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.4vh<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1vh 2vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.ant-btn)</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.4vh<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 3vh<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 1.5vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.ant-select-selector)</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.4vh <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 3vh <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 3vh <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.ant-select-selection-item)</span> <span class="token punctuation">{</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 3vh <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.ant-select-dropdown)</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.4vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 响应式调整 */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.network-status-grid</span> <span class="token punctuation">{</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fit<span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span>15vh<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token selector">.filter-bar</span> <span class="token punctuation">{</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> stretch<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token selector">.filter-buttons</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 曲线图层样式 */</span>
<span class="token selector">.curve-layer</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.curve-path</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> opacity 0.3s ease<span class="token punctuation">;</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>0 0.2vh 0.4vh <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">stroke-linecap</span><span class="token punctuation">:</span> round<span class="token punctuation">;</span>
  <span class="token property">stroke-linejoin</span><span class="token punctuation">:</span> round<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 修改动画效果 */</span>
<span class="token atrule"><span class="token rule">@keyframes</span> dash</span> <span class="token punctuation">{</span>
  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.curve-path</span> <span class="token punctuation">{</span>
  <span class="token property">stroke-dasharray</span><span class="token punctuation">:</span> 2000<span class="token punctuation">;</span>
  <span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> 2000<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> dash 3s linear forwards<span class="token punctuation">;</span>
  <span class="token property">animation-play-state</span><span class="token punctuation">:</span> paused<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.curve-path[v-show=&quot;true&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">animation-play-state</span><span class="token punctuation">:</span> running<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 曲线控制按钮组样式 */</span>
<span class="token selector">.curve-controls</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 2vh<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 2vh<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.95<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1.5vh<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.4vh<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0.2vh 0.8vh <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
  <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0.1vh solid <span class="token function">rgba</span><span class="token punctuation">(</span>73<span class="token punctuation">,</span> 144<span class="token punctuation">,</span> 249<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 12vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.control-item</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1vh<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0.5vh<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.2vh<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> background-color 0.3s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.control-item:hover</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>73<span class="token punctuation">,</span> 144<span class="token punctuation">,</span> 249<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.control-item:last-child</span> <span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.curve-color</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1.4vh<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1.4vh<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 1vh<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0.1vh 0.2vh <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 自定义复选框样式 */</span>
<span class="token selector">:deep(.ant-checkbox-wrapper)</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.4vh<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.ant-checkbox)</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.4vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.ant-checkbox-inner)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1.6vh<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1.6vh<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.2vh<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #4990f9<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.ant-checkbox-checked .ant-checkbox-inner)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #4990f9<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #4990f9<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.ant-checkbox-wrapper:hover .ant-checkbox-inner),
:deep(.ant-checkbox:hover .ant-checkbox-inner)</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #1976d2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.ant-checkbox-checked:hover .ant-checkbox-inner)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #1976d2<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #1976d2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 确保info-box在曲线图层之上 */</span>
<span class="token selector">.info-box</span> <span class="token punctuation">{</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span> 

</code></pre></div><p>在 <code>curves</code> 数组中的每个曲线对象中，<code>points</code> 对象定义了曲线的形状和位置，包含四个关键点：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">points</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>    <span class="token comment">// 起点</span>
  <span class="token literal-property property">control1</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 第一个控制点</span>
  <span class="token literal-property property">control2</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.7</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 第二个控制点</span>
  <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.5</span> <span class="token punctuation">}</span>       <span class="token comment">// 终点</span>
<span class="token punctuation">}</span>
</code></pre></div><p>参数说明：</p><ol><li><p>坐标值范围：</p><ul><li><code>x</code> 值范围是 0-1，表示从左到右的位置（0 是最左边，1 是最右边）</li><li><code>y</code> 值范围是 0-1，表示从上到下的位置（0 是最上边，1 是最下边）</li></ul></li><li><p>各点的作用：</p><ul><li><p><code>start</code>: 曲线的起点</p><ul><li><code>x: 0.1</code> 表示在容器宽度的 10% 处</li><li><code>y: 0.5</code> 表示在容器高度的 50% 处（中间位置）</li></ul></li><li><p><code>control1</code>: 第一个控制点，控制曲线起始部分的弯曲</p><ul><li><code>x: 0.3</code> 表示在容器宽度的 30% 处</li><li><code>y: 0.3</code> 表示在容器高度的 30% 处（偏上位置）</li></ul></li><li><p><code>control2</code>: 第二个控制点，控制曲线结束部分的弯曲</p><ul><li><code>x: 0.5</code> 表示在容器宽度的 50% 处</li><li><code>y: 0.7</code> 表示在容器高度的 70% 处（偏下位置）</li></ul></li><li><p><code>end</code>: 曲线的终点</p><ul><li><code>x: 0.9</code> 表示在容器宽度的 90% 处</li><li><code>y: 0.5</code> 表示在容器高度的 50% 处（中间位置）</li></ul></li></ul></li></ol><p>调整建议：</p><ol><li><p>调整曲线高度：</p><ul><li>增大 <code>y</code> 值会使曲线向下移动</li><li>减小 <code>y</code> 值会使曲线向上移动</li><li>例如：<code>y: 0.4</code> 表示在容器高度的 40% 处</li></ul></li><li><p>调整曲线宽度：</p><ul><li>增大 <code>x</code> 值会使曲线向右移动</li><li>减小 <code>x</code> 值会使曲线向左移动</li><li>例如：<code>x: 0.2</code> 表示在容器宽度的 20% 处</li></ul></li><li><p>调整曲线弯曲程度：</p><ul><li>控制点（<code>control1</code> 和 <code>control2</code>）的 <code>y</code> 值与起点/终点的 <code>y</code> 值差距越大，曲线弯曲越明显</li><li>控制点的 <code>x</code> 值决定了弯曲的位置</li></ul></li><li><p>调整曲线间距：</p><ul><li>修改不同曲线的 <code>y</code> 值可以调整曲线之间的垂直间距</li><li>例如：第一条曲线 <code>y: 0.4</code>，第二条 <code>y: 0.5</code>，第三条 <code>y: 0.6</code></li></ul></li></ol><p>示例调整：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 更平缓的曲线</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">control1</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.45</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 控制点更接近起点</span>
  <span class="token literal-property property">control2</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.55</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 控制点更接近终点</span>
  <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.5</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 更弯曲的曲线</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">control1</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 控制点离起点更远</span>
  <span class="token literal-property property">control2</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.8</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 控制点离终点更远</span>
  <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.5</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 更宽的曲线</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.05</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 起点更靠左</span>
  <span class="token literal-property property">control1</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">control2</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.7</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.95</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.5</span> <span class="token punctuation">}</span>     <span class="token comment">// 终点更靠右</span>
<span class="token punctuation">}</span>
</code></pre></div><p>我来帮您在 Canvas 中实现流动的虚线效果。我们需要修改绘制曲线的方法，添加虚线动画效果。以下是具体实现方法：</p><ol><li>首先，我们需要在 <code>curves</code> 数据中添加虚线相关的属性：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> curves <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;链路1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#4990f9&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">points</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.05</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">control1</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">control2</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.75</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0.95</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0.3</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dashOffset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>  <span class="token comment">// 添加虚线偏移量</span>
    <span class="token literal-property property">dashLength</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// 虚线长度</span>
    <span class="token literal-property property">gapLength</span><span class="token operator">:</span> <span class="token number">10</span>   <span class="token comment">// 间隔长度</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ... 其他曲线</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>然后，我们需要修改 <code>drawCurve</code> 函数来实现虚线动画效果：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 绘制曲线</span>
<span class="token keyword">const</span> <span class="token function-variable function">drawCurve</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">curve<span class="token punctuation">,</span> progress</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ctx<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  
  <span class="token keyword">const</span> <span class="token punctuation">{</span> start<span class="token punctuation">,</span> control1<span class="token punctuation">,</span> control2<span class="token punctuation">,</span> end <span class="token punctuation">}</span> <span class="token operator">=</span> curve<span class="token punctuation">.</span>points<span class="token punctuation">;</span>
  <span class="token keyword">const</span> width <span class="token operator">=</span> canvasRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
  <span class="token keyword">const</span> height <span class="token operator">=</span> canvasRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
  
  <span class="token comment">// 计算实际坐标</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getPoint</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">point</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> point<span class="token punctuation">.</span>x <span class="token operator">*</span> width<span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> point<span class="token punctuation">.</span>y <span class="token operator">*</span> height
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">const</span> startPoint <span class="token operator">=</span> <span class="token function">getPoint</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> controlPoint1 <span class="token operator">=</span> <span class="token function">getPoint</span><span class="token punctuation">(</span>control1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> controlPoint2 <span class="token operator">=</span> <span class="token function">getPoint</span><span class="token punctuation">(</span>control2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> endPoint <span class="token operator">=</span> <span class="token function">getPoint</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 创建渐变</span>
  <span class="token keyword">const</span> gradient <span class="token operator">=</span> ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span>
    startPoint<span class="token punctuation">.</span>x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> endPoint<span class="token punctuation">.</span>x<span class="token punctuation">,</span> <span class="token number">0</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> curve<span class="token punctuation">.</span>color <span class="token operator">+</span> <span class="token string">&#39;99&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> curve<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 设置样式</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> gradient<span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span>lineCap <span class="token operator">=</span> <span class="token string">&#39;round&#39;</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span>lineJoin <span class="token operator">=</span> <span class="token string">&#39;round&#39;</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 设置虚线样式</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">setLineDash</span><span class="token punctuation">(</span><span class="token punctuation">[</span>curve<span class="token punctuation">.</span>dashLength<span class="token punctuation">,</span> curve<span class="token punctuation">.</span>gapLength<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span>lineDashOffset <span class="token operator">=</span> curve<span class="token punctuation">.</span>dashOffset<span class="token punctuation">;</span>
  
  <span class="token comment">// 开始绘制路径</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>startPoint<span class="token punctuation">.</span>x<span class="token punctuation">,</span> startPoint<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 计算动画进度点</span>
  <span class="token keyword">const</span> t <span class="token operator">=</span> progress<span class="token punctuation">;</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> t<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> startPoint<span class="token punctuation">.</span>x <span class="token operator">+</span>
            <span class="token number">3</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> t<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> t <span class="token operator">*</span> controlPoint1<span class="token punctuation">.</span>x <span class="token operator">+</span>
            <span class="token number">3</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> t<span class="token punctuation">)</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> controlPoint2<span class="token punctuation">.</span>x <span class="token operator">+</span>
            Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> endPoint<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> t<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> startPoint<span class="token punctuation">.</span>y <span class="token operator">+</span>
            <span class="token number">3</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> t<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> t <span class="token operator">*</span> controlPoint1<span class="token punctuation">.</span>y <span class="token operator">+</span>
            <span class="token number">3</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> t<span class="token punctuation">)</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> controlPoint2<span class="token punctuation">.</span>y <span class="token operator">+</span>
            Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> endPoint<span class="token punctuation">.</span>y<span class="token punctuation">;</span>
  
  <span class="token comment">// 绘制到当前进度点</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">quadraticCurveTo</span><span class="token punctuation">(</span>
    controlPoint1<span class="token punctuation">.</span>x<span class="token punctuation">,</span> controlPoint1<span class="token punctuation">.</span>y<span class="token punctuation">,</span>
    x<span class="token punctuation">,</span> y
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 添加阴影</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span>shadowColor <span class="token operator">=</span> <span class="token string">&#39;rgba(0, 0, 0, 0.2)&#39;</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span>shadowBlur <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span>shadowOffsetY <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 重置阴影和虚线样式</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span>shadowColor <span class="token operator">=</span> <span class="token string">&#39;transparent&#39;</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">setLineDash</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 更新虚线偏移量</span>
  curve<span class="token punctuation">.</span>dashOffset <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 控制流动速度</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>curve<span class="token punctuation">.</span>dashOffset <span class="token operator">&lt;=</span> <span class="token operator">-</span><span class="token punctuation">(</span>curve<span class="token punctuation">.</span>dashLength <span class="token operator">+</span> curve<span class="token punctuation">.</span>gapLength<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    curve<span class="token punctuation">.</span>dashOffset <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ol start="3"><li>修改动画循环函数，确保虚线动画持续进行：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 动画循环</span>
<span class="token keyword">const</span> <span class="token function-variable function">animate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ctx<span class="token punctuation">.</span>value <span class="token operator">||</span> <span class="token operator">!</span>canvasRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 清除画布</span>
  ctx<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvasRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvasRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 更新和绘制每条曲线</span>
  curves<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">curve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>curve<span class="token punctuation">.</span>visible<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>curve<span class="token punctuation">.</span>progress <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        curve<span class="token punctuation">.</span>progress <span class="token operator">+=</span> <span class="token number">0.01</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">drawCurve</span><span class="token punctuation">(</span>curve<span class="token punctuation">,</span> curve<span class="token punctuation">.</span>progress<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 继续动画循环</span>
  animationFrameId<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animate<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ol start="4"><li>在初始化曲线数据时，为每条曲线添加虚线属性：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">initCurves</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  curves<span class="token punctuation">.</span>value <span class="token operator">=</span> curves<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">curve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>curve<span class="token punctuation">,</span>
    <span class="token literal-property property">dashOffset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dashLength</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>  <span class="token comment">// 虚线长度</span>
    <span class="token literal-property property">gapLength</span><span class="token operator">:</span> <span class="token number">10</span>    <span class="token comment">// 间隔长度</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 在组件挂载时调用</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">initCurves</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ... 其他初始化代码</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>您可以通过调整以下参数来自定义虚线效果：</p><ol><li><p><code>dashLength</code>：虚线段的长度</p><ul><li>值越大，虚线越长</li><li>建议范围：10-30</li></ul></li><li><p><code>gapLength</code>：虚线间隔的长度</p><ul><li>值越大，间隔越大</li><li>建议范围：5-15</li></ul></li><li><p>流动速度：</p><ul><li>在 <code>drawCurve</code> 函数中修改 <code>curve.dashOffset -= 1</code> 的值</li><li>值越大，流动越快</li><li>建议范围：0.5-2</li></ul></li><li><p>线条粗细：</p><ul><li>修改 <code>ctx.value.lineWidth</code> 的值</li><li>建议范围：2-6</li></ul></li><li><p>透明度：</p><ul><li>修改渐变的透明度值（<code>curve.color + &#39;99&#39;</code>）</li><li>&#39;99&#39; 表示 60% 透明度</li><li>可以调整为 &#39;66&#39;（40%）到 &#39;CC&#39;（80%）</li></ul></li></ol>`,20)]))}const l=s(o,[["render",c],["__file","canvas_b.html.vue"]]);export{l as default};
