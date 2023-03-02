"use strict";(self.webpackChunkfob=self.webpackChunkfob||[]).push([[1615],{79940:function(e,t,n){n.d(t,{x:function(){return i}});var r=n(73396);function i(e,t=!0,n=[]){return e.forEach((e=>{if(null!==e)if("object"==typeof e)if(Array.isArray(e))i(e,t,n);else if(e.type===r.HY){if(null===e.children)return;Array.isArray(e.children)&&i(e.children,t,n)}else e.type!==r.sv&&n.push(e);else"string"!=typeof e&&"number"!=typeof e||n.push((0,r.Uk)(String(e)))})),n}},94072:function(e,t,n){function r(e,t="default",n=[]){const r=e.$slots[t];return void 0===r?n:r()}n.d(t,{z:function(){return r}})},17786:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(73396),i=n(83092),l=n(99420),o=n(96455);var a={name:"Divider",common:n(78308).Z,self:e=>{const{textColor1:t,dividerColor:n,fontWeightStrong:r}=e;return{textColor:t,color:n,fontWeight:r}}},s=n(47184),d=(0,s.cB)("divider","\n position: relative;\n display: flex;\n width: 100%;\n box-sizing: border-box;\n font-size: 16px;\n color: var(--n-text-color);\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n",[(0,s.u4)("vertical","\n margin-top: 24px;\n margin-bottom: 24px;\n ",[(0,s.u4)("no-title","\n display: flex;\n align-items: center;\n ")]),(0,s.cE)("title","\n display: flex;\n align-items: center;\n margin-left: 12px;\n margin-right: 12px;\n white-space: nowrap;\n font-weight: var(--n-font-weight);\n "),(0,s.cM)("title-position-left",[(0,s.cE)("line",[(0,s.cM)("left",{width:"28px"})])]),(0,s.cM)("title-position-right",[(0,s.cE)("line",[(0,s.cM)("right",{width:"28px"})])]),(0,s.cM)("dashed",[(0,s.cE)("line","\n background-color: #0000;\n height: 0px;\n width: 100%;\n border-style: dashed;\n border-width: 1px 0 0;\n ")]),(0,s.cM)("vertical","\n display: inline-block;\n height: 1em;\n margin: 0 8px;\n vertical-align: middle;\n width: 1px;\n "),(0,s.cE)("line","\n border: none;\n transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);\n height: 1px;\n width: 100%;\n margin: 0;\n "),(0,s.u4)("dashed",[(0,s.cE)("line",{backgroundColor:"var(--n-color)"})]),(0,s.cM)("dashed",[(0,s.cE)("line",{borderColor:"var(--n-color)"})]),(0,s.cM)("vertical",{backgroundColor:"var(--n-color)"})]);const u=Object.assign(Object.assign({},i.Z.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean});var p=(0,r.aZ)({name:"Divider",props:u,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=(0,l.Z)(e),s=(0,i.Z)("Divider","-divider",d,a,e,t),u=(0,r.Fl)((()=>{const{common:{cubicBezierEaseInOut:e},self:{color:t,textColor:n,fontWeight:r}}=s.value;return{"--n-bezier":e,"--n-color":t,"--n-text-color":n,"--n-font-weight":r}})),p=n?(0,o.F)("divider",void 0,u,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:u,themeClass:null==p?void 0:p.themeClass,onRender:null==p?void 0:p.onRender}},render(){var e;const{$slots:t,titlePlacement:n,vertical:i,dashed:l,cssVars:o,mergedClsPrefix:a}=this;return null===(e=this.onRender)||void 0===e||e.call(this),(0,r.h)("div",{role:"separator",class:[`${a}-divider`,this.themeClass,{[`${a}-divider--vertical`]:i,[`${a}-divider--no-title`]:!t.default,[`${a}-divider--dashed`]:l,[`${a}-divider--title-position-${n}`]:t.default&&n}],style:o},i?null:(0,r.h)("div",{class:`${a}-divider__line ${a}-divider__line--left`}),!i&&t.default?(0,r.h)(r.HY,null,(0,r.h)("div",{class:`${a}-divider__title`},this.$slots),(0,r.h)("div",{class:`${a}-divider__line ${a}-divider__line--right`})):null)}})},27108:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(73396),i=n(44870),l=n(10668);const o={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};const a={};var s=function(e=o){if(!l.j)return(0,r.Fl)((()=>[]));if("function"!=typeof window.matchMedia)return(0,r.Fl)((()=>[]));const t=(0,i.iH)({}),n=Object.keys(e),s=(e,n)=>{e.matches?t.value[n]=!0:t.value[n]=!1};return n.forEach((t=>{const n=e[t];let r,i;void 0===a[n]?(r=window.matchMedia(`(min-width: ${n}px)`),r.addEventListener?r.addEventListener("change",(e=>{i.forEach((n=>{n(e,t)}))})):r.addListener&&r.addListener((e=>{i.forEach((n=>{n(e,t)}))})),i=new Set,a[n]={mql:r,cbs:i}):(r=a[n].mql,i=a[n].cbs),i.add(s),r.matches&&i.forEach((e=>{e(r,t)}))})),(0,r.Jd)((()=>{n.forEach((t=>{const{cbs:n}=a[e[t]];n.has(s)&&n.delete(s)}))})),(0,r.Fl)((()=>{const{value:e}=t;return n.filter((t=>e[t]))}))},d=n(64498),u=n(69738);function p(e,t){var n;if(null==e)return;const r=function(e){if("number"==typeof e)return{"":e.toString()};const t={};return e.split(/ +/).forEach((e=>{if(""===e)return;const[n,r]=e.split(":");void 0===r?t[""]=n:t[n]=r})),t}(e);if(void 0===t)return r[""];if("string"==typeof t)return null!==(n=r[t])&&void 0!==n?n:r[""];if(Array.isArray(t)){for(let e=t.length-1;e>=0;--e){const n=t[e];if(n in r)return r[n]}return r[""]}{let e,n=-1;return Object.keys(r).forEach((i=>{const l=Number(i);!Number.isNaN(l)&&t>=l&&l>=n&&(n=l,e=r[i])})),e}}var c=n(5805),v=n(53072);const f={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920};var h=n(99420),m=n(79940),g=n(94072),w=n(45353);const x={responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:24},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}};var y=(0,r.aZ)({name:"Grid",inheritAttrs:!1,props:x,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:n}=(0,h.Z)(e),l=/^\d+$/,o=(0,i.iH)(void 0),a=s((null==n?void 0:n.value)||f),u=(0,d.Z)((()=>!!e.itemResponsive||(!l.test(e.cols.toString())||(!l.test(e.xGap.toString())||!l.test(e.yGap.toString()))))),m=(0,r.Fl)((()=>{if(u.value)return"self"===e.responsive?o.value:a.value})),g=(0,d.Z)((()=>{var t;return null!==(t=Number(p(e.cols.toString(),m.value)))&&void 0!==t?t:24})),x=(0,d.Z)((()=>p(e.xGap.toString(),m.value))),y=(0,d.Z)((()=>p(e.yGap.toString(),m.value))),b=e=>{o.value=e.contentRect.width},S=e=>{(0,c.J)(b,e)},R=(0,i.iH)(!1),C=(0,r.Fl)((()=>{if("self"===e.responsive)return S}));return(0,r.JJ)(w.r,{itemStyleRef:(0,i.Vh)(e,"itemStyle"),xGapRef:x,overflowRef:R}),{mergedClsPrefix:t,style:(0,r.Fl)((()=>({width:"100%",display:"grid",gridTemplateColumns:`repeat(${g.value}, minmax(0, 1fr))`,columnGap:(0,v.BL)(x.value),rowGap:(0,v.BL)(y.value)}))),isResponsive:u,responsiveQuery:m,responsiveCols:g,handleResize:C,overflow:R}},render(){const e=()=>{var e,t,n,i,l,o;this.overflow=!1;const a=(0,m.x)((0,g.z)(this)),s=[],{collapsed:d,collapsedRows:u,responsiveCols:c,responsiveQuery:v}=this;a.forEach((e=>{var t,n,i;if(!0!==(null===(t=null==e?void 0:e.type)||void 0===t?void 0:t.__GRID_ITEM__))return;const l=(0,r.Ho)(e),o=Number(null!==(i=p(null===(n=l.props)||void 0===n?void 0:n.span,v))&&void 0!==i?i:w.L);0!==o&&s.push({child:l,rawChildSpan:o})}));let f=0;const h=null===(e=s[s.length-1])||void 0===e?void 0:e.child;if(null==h?void 0:h.props){const e=null===(t=h.props)||void 0===t?void 0:t.suffix;void 0!==e&&!1!==e&&(f=null!==(i=null===(n=h.props)||void 0===n?void 0:n.span)&&void 0!==i?i:w.L,h.props.privateSpan=f,h.props.privateColStart=c+1-f,h.props.privateShow=!0)}let x=0,y=!1;for(const{child:r,rawChildSpan:m}of s){if(y&&(this.overflow=!0),!y){const e=Number(null!==(o=p(null===(l=r.props)||void 0===l?void 0:l.offset,v))&&void 0!==o?o:0),t=Math.min(m+e,c)||1;if(r.props?(r.props.privateSpan=t,r.props.privateOffset=e):r.props={privateSpan:t,privateOffset:e},d){const e=x%c;t+e>c&&(x+=c-e),t+x+f>u*c?y=!0:x+=t}}y&&(r.props?!0!==r.props.privateShow&&(r.props.privateShow=!1):r.props={privateShow:!1})}return(0,r.h)("div",(0,r.dG)({class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),s.map((({child:e})=>e)))};return this.isResponsive&&"self"===this.responsive?(0,r.h)(u.Z,{onResize:this.handleResize},{default:e}):e()}})},85210:function(e,t,n){var r=n(73396),i=n(53072),l=n(61838),o=n(45353);const a=1,s={span:{type:[Number,String],default:a},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}};(0,l.u)(s);t.ZP=(0,r.aZ)({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:s,setup(){const{xGapRef:e,itemStyleRef:t,overflowRef:n}=(0,r.f3)(o.r),l=(0,r.FN)();return{overflow:n,itemStyle:t,deriveStyle:()=>{const{privateSpan:t=a,privateShow:n=!0,privateColStart:r,privateOffset:o=0}=l.vnode.props,{value:s}=e,d=(0,i.BL)(s||0);return{display:n?"":"none",gridColumn:`${null!=r?r:`span ${t}`} / span ${t}`,marginLeft:o?`calc((100% - (${t} - 1) * ${d}) / ${t} * ${o} + ${d} * ${o})`:""}}}},render(){var e,t;return(0,r.h)("div",{style:[this.itemStyle,this.deriveStyle()]},null===(t=(e=this.$slots).default)||void 0===t?void 0:t.call(e,{overflow:this.overflow}))}})},45353:function(e,t,n){n.d(t,{L:function(){return i},r:function(){return l}});var r=n(11295);const i=1,l=(0,r.U)("n-grid")},5805:function(e,t,n){n.d(t,{J:function(){return o}});let r=[];const i=new WeakMap;function l(){r.forEach((e=>e(...i.get(e)))),r=[]}function o(e,...t){i.set(e,t),r.includes(e)||1===r.push(e)&&requestAnimationFrame(l)}},10668:function(e,t,n){n.d(t,{j:function(){return r}});const r="undefined"!=typeof window},61615:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(73396);const i=(0,r.Uk)(" 替换 ");var l=n(45377),o=n(66914),a=n(76296),s=n(17786),d=n(27108),u=n(85210),p=n(75010),c=(0,r.aZ)({name:"TextReplace",data:()=>({textValue:"",waitReplace:"",toReplace:""}),components:{NButton:l.Z,NInput:o.Z,NCard:a.ZP,NDivider:s.Z,NGrid:d.Z,NGi:u.ZP},methods:{txtReplace(){if(this.textValue.length<1)return void(0,p.pJ)("请输入数据后再转换！");if(this.waitReplace.length<1)return void(0,p.pJ)("无待替换词!");if(this.toReplace.length<1)return void(0,p.pJ)("无替换词!");let e=this.waitReplace.replaceAll("  ","").replaceAll(" ","").replaceAll("\r\n","\n").replaceAll("\n"," ").split(" "),t=this.toReplace.replaceAll("  ","").replaceAll(" ","").replaceAll("\r\n","\n").replaceAll("\n"," ").split(" "),n=this.textValue;if(e.length==t.length){for(let r=0;r<e.length-1;r++)n=n.replaceAll(e[r],t[r]);this.textValue=n,(0,p.K7)("转换完成！")}else(0,p.pJ)("替换词和待替换词数目不一样！！！无法一一对应！！！")}}});var v=(0,n(40089).Z)(c,[["render",function(e,t,n,l,o,a){const s=(0,r.up)("n-input"),d=(0,r.up)("n-divider"),u=(0,r.up)("n-gi"),p=(0,r.up)("n-grid"),c=(0,r.up)("n-button"),v=(0,r.up)("n-card");return(0,r.wg)(),(0,r.j4)(v,{title:"文本替换"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{value:e.textValue,"onUpdate:value":t[0]||(t[0]=t=>e.textValue=t),type:"textarea",placeholder:"文本内容",autosize:{minRows:3}},null,8,["value"]),(0,r.Wm)(d),(0,r.Wm)(p,{"x-gap":"12",cols:2},{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,{value:e.waitReplace,"onUpdate:value":t[1]||(t[1]=t=>e.waitReplace=t),type:"textarea",placeholder:"待替换关键词",autosize:{minRows:3}},null,8,["value"])])),_:1}),(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,{value:e.toReplace,"onUpdate:value":t[2]||(t[2]=t=>e.toReplace=t),type:"textarea",placeholder:"替换关键词(与左边一一对应)",autosize:{minRows:3}},null,8,["value"])])),_:1})])),_:1}),(0,r.Wm)(d),(0,r.Wm)(v,{title:"操作"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{type:"primary",onClick:e.txtReplace},{default:(0,r.w5)((()=>[i])),_:1},8,["onClick"])])),_:1})])),_:1})}]])}}]);
//# sourceMappingURL=1615.40cbd33f.js.map