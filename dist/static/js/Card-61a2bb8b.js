import{s as V,c as $,a as O,l as j}from"./calendar-754c4a59.js";import{u as D}from"./user_avatar-46325fa9.js";import{d as v,n as C,r as i,o as n,c as A,f as a,e as o,i as s,M as k,u as e,h as l,H as c,g as u,v as d,G as p,$ as _,_ as E}from"./index-4f32348e.js";const F={width:24,height:24,body:'<path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"/>'},G=F,H={class:"list-card-item_detail bg-bg_color"},L={class:"list-card-item_detail--operation"},R={class:"list-card-item_detail--name text-text_color_primary"},T={class:"list-card-item_detail--desc text-text_color_regular"},q=v({name:"ReCard"}),J=v({...q,props:{position:{type:Object}},emits:["manage-position","delete-item"],setup(t,{emit:f}){const y=t,x=r=>{f("manage-position",r)},w=r=>{f("delete-item",r)},b=C(()=>["list-card-item",{"list-card-item__disabled":!y.position.isSetup}]),I=C(()=>["list-card-item_detail--logo",{"list-card-item_detail--logo__disabled":!y.position.isSetup}]);return(r,m)=>{const h=i("el-tag"),S=i("IconifyIconOffline"),g=i("el-dropdown-item"),z=i("el-dropdown-menu"),B=i("el-dropdown"),M=i("el-row");return n(),A("div",{class:k(e(b))},[a("div",H,[o(M,{justify:"space-between"},{default:s(()=>[a("div",{class:k(e(I))},[t.position.type===1?(n(),l(e(V),{key:0})):c("",!0),t.position.type===2?(n(),l(e($),{key:1})):c("",!0),t.position.type===3?(n(),l(e(O),{key:2})):c("",!0),t.position.type===4?(n(),l(e(D),{key:3})):c("",!0),t.position.type===5?(n(),l(e(j),{key:4})):c("",!0)],2),a("div",L,[o(h,{color:t.position.isSetup?"#00a870":"#eee",effect:"dark",class:"mx-1 list-card-item_detail--operation--tag"},{default:s(()=>[u(d(t.position.isSetup?e(p)(e(_)("information.positionstatusyes")):e(p)(e(_)("information.positionstatusno"))),1)]),_:1},8,["color"]),o(B,{trigger:"click",disabled:!t.position.isSetup},{dropdown:s(()=>[o(z,{disabled:!t.position.isSetup},{default:s(()=>[o(g,{onClick:m[0]||(m[0]=N=>x(t.position))},{default:s(()=>[u(d(e(p)(e(_)("information.edit"))),1)]),_:1}),o(g,{onClick:m[1]||(m[1]=N=>w(t.position))},{default:s(()=>[u(d(e(p)(e(_)("information.delete"))),1)]),_:1})]),_:1},8,["disabled"])]),default:s(()=>[o(S,{icon:e(G),class:"text-[24px]"},null,8,["icon"])]),_:1},8,["disabled"])])]),_:1}),a("p",R,d(t.position.name),1),a("p",T,d(t.position.description),1)])],2)}}});const U=E(J,[["__scopeId","data-v-aee1628d"]]);export{U as default};
