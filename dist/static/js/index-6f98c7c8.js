import{d as p,n as x,Y as h,aG as g,r as n,o as w,h as U,i as l,e,q as S,u,f as m,v as C,G as B,$ as N,g as z}from"./index-4f32348e.js";const j={class:"card-header"},G=p({name:"Profile"}),D=p({...G,setup($){var i;const _=x(()=>({width:"85vw",justifyContent:"start"})),o=h({name:(i=g())==null?void 0:i.username,city:"Beijing",date:"1997-02-06",school:"Northern Arizona University",skill:["前端","移动端"],intro:"Sunny and positive, love web and mobile technologies."}),c=()=>{};return(q,t)=>{const r=n("el-input"),s=n("el-form-item"),f=n("el-date-picker"),d=n("el-checkbox"),b=n("el-checkbox-group"),V=n("el-button"),y=n("el-form"),k=n("el-card"),v=n("el-space");return w(),U(v,{direction:"vertical",size:"large"},{default:l(()=>[e(k,{shadow:"never",style:S(u(_))},{header:l(()=>[m("div",j,[m("span",null,C(u(B)(u(N)("profile.personalinformation"))),1)])]),default:l(()=>[e(y,{model:o,"label-width":"120px"},{default:l(()=>[e(s,{label:"姓名"},{default:l(()=>[e(r,{modelValue:o.name,"onUpdate:modelValue":t[0]||(t[0]=a=>o.name=a)},null,8,["modelValue"])]),_:1}),e(s,{label:"居住城市"},{default:l(()=>[e(r,{modelValue:o.city,"onUpdate:modelValue":t[1]||(t[1]=a=>o.city=a)},null,8,["modelValue"])]),_:1}),e(s,{label:"出生日期"},{default:l(()=>[e(f,{modelValue:o.date,"onUpdate:modelValue":t[2]||(t[2]=a=>o.date=a),type:"date",placeholder:"选择你的出生日期",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(s,{label:"技能/工作经验"},{default:l(()=>[e(b,{modelValue:o.skill,"onUpdate:modelValue":t[3]||(t[3]=a=>o.skill=a)},{default:l(()=>[e(d,{label:"前端"}),e(d,{label:"后端"}),e(d,{label:"移动端"}),e(d,{label:"营销"}),e(d,{label:"策划"})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"个人简介"},{default:l(()=>[e(r,{modelValue:o.intro,"onUpdate:modelValue":t[4]||(t[4]=a=>o.intro=a),type:"textarea"},null,8,["modelValue"])]),_:1}),e(s,null,{default:l(()=>[e(V,{type:"primary",onClick:c},{default:l(()=>[z("保存")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["style"])]),_:1})}}});export{D as default};
