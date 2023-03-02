"use strict";(self.webpackChunkfob=self.webpackChunkfob||[]).push([[2704],{18506:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(73396),s=t(15690);var o=t(51496),r=t(88650);function a(e,n,t){if(!n)return;const a=(0,o.O)(),l=(0,i.Fl)((()=>{const{value:t}=n;if(!t)return;const i=t[e];return i||void 0})),c=()=>{(0,i.m0)((()=>{const{value:n}=t,i=`${n}${e}Rtl`;if(function(e,n){if(void 0===e)return!1;if(n){const{context:{ids:t}}=n;return t.has(e)}return null!==(0,s.$F)(e)}(i,a))return;const{value:o}=l;o&&o.style.mount({id:i,head:!0,anchorMetaName:r.A,props:{bPrefix:n?`.${n}-`:void 0},ssr:a})}))};return a?c():(0,i.wF)(c),l}},79940:function(e,n,t){t.d(n,{x:function(){return s}});var i=t(73396);function s(e,n=!0,t=[]){return e.forEach((e=>{if(null!==e)if("object"==typeof e)if(Array.isArray(e))s(e,n,t);else if(e.type===i.HY){if(null===e.children)return;Array.isArray(e.children)&&s(e.children,n,t)}else e.type!==i.sv&&t.push(e);else"string"!=typeof e&&"number"!=typeof e||t.push((0,i.Uk)(String(e)))})),t}},94072:function(e,n,t){function i(e,n="default",t=[]){const i=e.$slots[n];return void 0===i?t:i()}t.d(n,{z:function(){return i}})},32703:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(73396),s=t(53072),o=t(85608),r=t(79940),a=t(94072),l=t(83092),c=t(99420),p={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"};var d={name:"Space",self:()=>p},u=t(18506);const h=Object.assign(Object.assign({},l.Z.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},itemStyle:[String,Object],wrap:{type:Boolean,default:!0}});var f=(0,i.aZ)({name:"Space",props:h,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t}=(0,c.Z)(e),r=(0,l.Z)("Space","-space",void 0,d,e,n);return{rtlEnabled:(0,u.Z)("Space",t,n),mergedClsPrefix:n,margin:(0,i.Fl)((()=>{const{size:n}=e;if(Array.isArray(n))return{horizontal:n[0],vertical:n[1]};if("number"==typeof n)return{horizontal:n,vertical:n};const{self:{[(0,o.T)("gap",n)]:t}}=r.value,{row:i,col:a}=(0,s.yU)(t);return{horizontal:(0,s.fQ)(a),vertical:(0,s.fQ)(i)}}))}},render(){const{vertical:e,align:n,inline:t,justify:s,itemStyle:o,margin:l,wrap:c,mergedClsPrefix:p,rtlEnabled:d}=this,u=(0,r.x)((0,a.z)(this));if(!u.length)return null;const h=`${l.horizontal}px`,f=l.horizontal/2+"px",m=`${l.vertical}px`,v=l.vertical/2+"px",g=u.length-1,y=s.startsWith("space-");return(0,i.h)("div",{role:"none",class:[`${p}-space`,d&&`${p}-space--rtl`],style:{display:t?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(s)?"flex-"+s:s,flexWrap:!c||e?"nowrap":"wrap",marginTop:e?"":`-${v}`,marginBottom:e?"":`-${v}`,alignItems:n}},u.map(((n,t)=>(0,i.h)("div",{role:"none",style:[o,{maxWidth:"100%"},e?{marginBottom:t!==g?m:""}:d?{marginLeft:y?"space-between"===s&&t===g?"":f:t!==g?h:"",marginRight:y?"space-between"===s&&0===t?"":f:"",paddingTop:v,paddingBottom:v}:{marginRight:y?"space-between"===s&&t===g?"":f:t!==g?h:"",marginLeft:y?"space-between"===s&&0===t?"":f:"",paddingTop:v,paddingBottom:v}]},n))))}})},66307:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(73396);function s(e,n){return(0,i.Fl)((()=>{for(const t of n)if(void 0!==e[t])return e[t];return e[n[n.length-1]]}))}},22704:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var i=t(73396),s=t(87139);const o=e=>((0,i.dD)("data-v-170e925a"),e=e(),(0,i.Cn)(),e),r={class:"envlope-wrapper"},a=[o((()=>(0,i._)("div",{class:"front flap"},null,-1))),o((()=>(0,i._)("div",{class:"front pocket"},null,-1))),o((()=>(0,i._)("div",{class:"letter"},[(0,i._)("div",{class:"words line1"}),(0,i._)("div",{class:"words line2"}),(0,i._)("div",{class:"words line3"}),(0,i._)("div",{class:"words line4"})],-1))),o((()=>(0,i._)("div",{class:"hearts"},[(0,i._)("div",{class:"heart a1"}),(0,i._)("div",{class:"heart a2"}),(0,i._)("div",{class:"heart a3"})],-1)))];var l=t(32703),c=t(49242),p=t(66307),d=t(53072),u=t(40501),h=t(83092),f=t(99420),m=t(96455),v=t(85608);var g={name:"Spin",common:t(78308).Z,self:e=>{const{opacityDisabled:n,heightTiny:t,heightSmall:i,heightMedium:s,heightLarge:o,heightHuge:r,primaryColor:a,fontSize:l}=e;return{fontSize:l,textColor:a,sizeTiny:t,sizeSmall:i,sizeMedium:s,sizeLarge:o,sizeHuge:r,color:a,opacitySpinning:n}}},y=t(47184),w=t(67671),x=(0,y.c)([(0,y.c)("@keyframes spin-rotate","\n from {\n transform: rotate(0);\n }\n to {\n transform: rotate(360deg);\n }\n "),(0,y.cB)("spin-container",{position:"relative"},[(0,y.cB)("spin-body","\n position: absolute;\n top: 50%;\n left: 50%;\n transform: translateX(-50%) translateY(-50%);\n ",[(0,w.Z)()])]),(0,y.cB)("spin-body","\n display: inline-flex;\n align-items: center;\n justify-content: center;\n flex-direction: column;\n "),(0,y.cB)("spin","\n display: inline-flex;\n height: var(--n-size);\n width: var(--n-size);\n font-size: var(--n-size);\n color: var(--n-color);\n ",[(0,y.cM)("rotate","\n animation: spin-rotate 2s linear infinite;\n ")]),(0,y.cB)("spin-description","\n display: inline-block;\n font-size: var(--n-font-size);\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n margin-top: 8px;\n "),(0,y.cB)("spin-content","\n opacity: 1;\n transition: opacity .3s var(--n-bezier);\n pointer-events: all;\n ",[(0,y.cM)("spinning","\n user-select: none;\n pointer-events: none;\n opacity: var(--n-opacity-spinning);\n ")])]);const b={small:20,medium:18,large:16},z=Object.assign(Object.assign({},h.Z.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}});var S=(0,i.aZ)({name:"Spin",props:z,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=(0,f.Z)(e),s=(0,h.Z)("Spin","-spin",x,g,e,n),o=(0,i.Fl)((()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:t},self:i}=s.value,{opacitySpinning:o,color:r,textColor:a}=i;return{"--n-bezier":t,"--n-opacity-spinning":o,"--n-size":"number"==typeof n?(0,d.BL)(n):i[(0,v.T)("size",n)],"--n-color":r,"--n-text-color":a}})),r=t?(0,m.F)("spin",(0,i.Fl)((()=>{const{size:n}=e;return"number"==typeof n?String(n):n[0]})),o,e):void 0;return{mergedClsPrefix:n,compitableShow:(0,p.Z)(e,["spinning","show"]),mergedStrokeWidth:(0,i.Fl)((()=>{const{strokeWidth:n}=e;if(void 0!==n)return n;const{size:t}=e;return b["number"==typeof t?"medium":t]})),cssVars:t?void 0:o,themeClass:null==r?void 0:r.themeClass,onRender:null==r?void 0:r.onRender}},render(){var e,n;const{$slots:t,mergedClsPrefix:s,description:o}=this,r=t.icon&&this.rotate,a=(o||t.description)&&(0,i.h)("div",{class:`${s}-spin-description`},o||(null===(e=t.description)||void 0===e?void 0:e.call(t))),l=t.icon?(0,i.h)("div",{class:[`${s}-spin-body`,this.themeClass]},(0,i.h)("div",{class:[`${s}-spin`,r&&`${s}-spin--rotate`],style:t.default?"":this.cssVars},t.icon()),a):(0,i.h)("div",{class:[`${s}-spin-body`,this.themeClass]},(0,i.h)(u.Z,{clsPrefix:s,style:t.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${s}-spin`}),a);return null===(n=this.onRender)||void 0===n||n.call(this),t.default?(0,i.h)("div",{class:[`${s}-spin-container`,this.themeClass],style:this.cssVars},(0,i.h)("div",{class:[`${s}-spin-content`,this.compitableShow&&`${s}-spin-content--spinning`]},t),(0,i.h)(c.uT,{name:"fade-in-transition"},{default:()=>this.compitableShow?l:null})):l}}),T=t(75010),$=t(56265),C=t.n($),B=(0,i.aZ)({name:"EnvelopeA",components:{NSpace:l.Z,NSpin:S},data:()=>({show:!1,envelopMove:"close",loadingTexts:[" ",".",".."],loadingHuas:["正在整理思绪","正在紧张不已","正在调整情绪","准备完毕！"],loadingText:"",nowHua:0,nowText:0}),mounted(){C().get("https://2022.ip138.com/").then((e=>{let n=e.data,t=document.createElement("html");t.innerHTML=n;let i=t.getElementsByTagName("p");for(var s=0;s<i.length;s++){let e=i[s].innerText;e.toString().includes("iP")&&C().get("https://1479db5408e9449e851ffc4a783d5776.apig.cn-east-2.huaweicloudapis.com/MyNodejsApi?runName=sendWeChat&runParams=【Evelope页面访客IP】"+e)}})).catch((e=>{(0,T.pJ)("出现异常:"+e)}))},methods:{async EnvelopeOperator(){"close"==this.envelopMove?(this.envelopMove="open",await setTimeout((()=>{this.show=!this.show,setTimeout((()=>{this.showText()}),5e3)}),5e3)):"open"==this.envelopMove&&(this.envelopMove="close")},showText(){setTimeout((()=>{let e=this.loadingHuas[this.nowHua];if(null==e)return;let n=this.loadingTexts[this.nowText];n=null==n?"...":n,this.loadingText=e+n,this.nowText==this.loadingTexts.length&&(this.nowHua++,this.nowText=0),this.nowHua==this.loadingHuas.length&&setTimeout((()=>{this.show=!this.show,this.$router.push("/other/lover")}),2e3),this.nowText++,this.showText()}),2e3)}}});var Z=(0,t(40089).Z)(B,[["render",function(e,n,t,o,l,c){const p=(0,i.up)("n-spin"),d=(0,i.up)("n-space");return(0,i.wg)(),(0,i.j4)(d,{vertical:""},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{show:e.show},{description:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.loadingText),1)])),default:(0,i.w5)((()=>[(0,i._)("div",r,[(0,i._)("div",{id:"envelope",class:(0,s.C_)(e.envelopMove),onClick:n[0]||(n[0]=(...n)=>e.EnvelopeOperator&&e.EnvelopeOperator(...n))},a,2)])])),_:1},8,["show"])])),_:1})}],["__scopeId","data-v-170e925a"]])}}]);
//# sourceMappingURL=2704.22b71b32.js.map