import{d as C,y as s,K as U,r as o,b as $,o as r,c,f as j,e as n,i as p,w as v,u,N as _,G as w,$ as h,F as y,p as F,h as O,H as E,I as G}from"./index-4f32348e.js";import H from"./CardView-0ff78490.js";import{g as K}from"./list-eedec2b4.js";import{_ as q}from"./DialogFormView.vue_vue_type_script_setup_true_lang-f762dc3c.js";import{d as J}from"./search-cc37b371.js";import"./calendar-754c4a59.js";import"./user_avatar-46325fa9.js";const Q={class:"main"},R={class:"w-full flex justify-between mb-4"},W=C({name:"InformationView"}),le=C({...W,setup(X){const z=`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,x={name:"",status:"",description:"",type:"",mark:""},e=s({current:1,pageSize:12,total:0}),d=s([]),g=s(!0),L=async()=>{try{const{data:t}=await K();d.value=t.list,e.value={...e.value,total:t.list.length}}catch{}finally{setTimeout(()=>{g.value=!1},500)}};U(()=>{L()});const m=s(!1),f=s({...x}),i=s(""),b=t=>{e.value.pageSize=t,e.value.current=1},S=t=>{e.value.current=t},V=t=>{m.value=!0,G(()=>{f.value={...t,status:t!=null&&t.isSetup?"1":"0"}})};return(t,l)=>{const I=o("IconifyIconOffline"),k=o("el-icon"),D=o("el-input"),P=o("el-empty"),A=o("el-col"),N=o("el-row"),B=o("el-pagination"),T=$("loading");return r(),c("div",Q,[j("div",R,[n(D,{style:{width:"300px"},modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=a=>i.value=a),placeholder:u(w)(u(h)("information.pleaseinputpositionname")),clearable:""},{suffix:p(()=>[n(k,{class:"el-input__icon"},{default:p(()=>[v(n(I,{icon:u(J)},null,8,["icon"]),[[_,i.value.length===0]])]),_:1})]),_:1},8,["modelValue","placeholder"])]),v((r(),c("div",{"element-loading-svg":z,"element-loading-svg-view-box":"-10, -10, 50, 50"},[v(n(P,{description:u(w)(u(h)("information.nodata"))},null,8,["description"]),[[_,d.value.slice(e.value.pageSize*(e.value.current-1),e.value.pageSize*e.value.current).filter(a=>a.name.toLowerCase().includes(i.value.toLowerCase())).length===0]]),e.value.total>0?(r(),c(y,{key:0},[n(N,{gutter:16},{default:p(()=>[(r(!0),c(y,null,F(d.value.slice(e.value.pageSize*(e.value.current-1),e.value.pageSize*e.value.current).filter(a=>a.name.toLowerCase().includes(i.value.toLowerCase())),(a,M)=>(r(),O(A,{key:M,xs:24,sm:12,md:8,lg:6,xl:4},{default:p(()=>[n(H,{position:a,onViewPosition:V},null,8,["position"])]),_:2},1024))),128))]),_:1}),n(B,{class:"float-right",currentPage:e.value.current,"onUpdate:currentPage":l[1]||(l[1]=a=>e.value.current=a),"page-size":e.value.pageSize,total:e.value.total,"page-sizes":[12,24,36],background:!0,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:b,onCurrentChange:S},null,8,["currentPage","page-size","total"])],64)):E("",!0)])),[[T,g.value]]),n(q,{visible:m.value,"onUpdate:visible":l[2]||(l[2]=a=>m.value=a),data:f.value},null,8,["visible","data"])])}}});export{le as default};
