"use strict";(self.webpackChunkfob=self.webpackChunkfob||[]).push([[7117],{77117:function(e,t,l){l.r(t),l.d(t,{default:function(){return i}});var a=l(73396);const n=(0,a.Uk)(" 转为sql值 ");var u=l(45377),r=l(66914),o=l(76296),p=l(75010),c=(0,a.aZ)({name:"ValueFormat",data:()=>({textValue:""}),components:{NButton:u.Z,NInput:r.Z,NCard:o.ZP},methods:{SqlFormat(){let e=[];if(this.textValue.length<1)(0,p.pJ)("请输入数据后再转换！");else{this.textValue.replaceAll("'"," ").replaceAll(","," ").replaceAll("\r\n","").replaceAll("\n"," ").replaceAll("  "," ").split(" ").forEach((t=>{t.length>0&&e.push("'"+t+"'")})),this.textValue=e.join(", "),(0,p.K7)("转换成功！")}}}});var i=(0,l(40089).Z)(c,[["render",function(e,t,l,u,r,o){const p=(0,a.up)("n-input"),c=(0,a.up)("n-button"),i=(0,a.up)("n-card");return(0,a.wg)(),(0,a.j4)(i,{title:"数据格式化"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{value:e.textValue,"onUpdate:value":t[0]||(t[0]=t=>e.textValue=t),type:"textarea",placeholder:"自动调整尺寸",autosize:{minRows:3}},null,8,["value"]),(0,a.Wm)(i,{title:"操作"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{type:"primary",onClick:e.SqlFormat},{default:(0,a.w5)((()=>[n])),_:1},8,["onClick"])])),_:1})])),_:1})}]])}}]);
//# sourceMappingURL=7117.e4433265.js.map