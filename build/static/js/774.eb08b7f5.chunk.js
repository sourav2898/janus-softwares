"use strict";(self.webpackChunkjanus_softwares_v2=self.webpackChunkjanus_softwares_v2||[]).push([[774],{6697:function(e,s,t){t.r(s),t.d(s,{default:function(){return v}});var r=t(1413),i=t(885),n=t(890),o=t(6934),l=t(3879),a=t(4554),c=t(6151),f=t(9658),u=t(2791),d=t.p+"static/media/contact_bg.17019597890e24f0fd43.png";var m=t.p+"static/media/phone.062d06a927035166940e67a2dec1dcf4.svg";var p=t.p+"static/media/email.4eebbd555290562a26aa56dd1a965bfd.svg";var x=t.p+"static/media/location.73c216d1a492424ce82e354a44c2df71.svg",h=t(184),g=function(e){return(0,h.jsx)(n.Z,{className:"poppins-medium",fontSize:"1rem",color:"#ffffff",lineHeight:"154%",mb:1,children:e.text})},j=(0,o.ZP)(l.Z)({"& label.Mui-focused":{color:"#ffffff"},"& .MuiInput-underline:after":{borderBottomColor:"#B2BAC2"},"& .MuiOutlinedInput-root":{color:"#fff","& fieldset":{borderColor:"#E0E3E7"},"&:hover fieldset":{borderColor:"#ffffff"},"&.Mui-focused fieldset":{borderColor:"#30DCCA"}}}),b=function(e){var s=e.img,t=e.title,r=e.desc;return(0,h.jsxs)(a.Z,{display:"flex",flexDirection:"row",alignItems:"center",gap:3,children:[(0,h.jsx)("img",{src:s}),(0,h.jsxs)(a.Z,{children:[(0,h.jsx)(n.Z,{className:"poppins-regular",fontSize:"1rem",lineHeight:"1.8rem",color:"#ffffff",mb:.5,children:t.toUpperCase()}),(0,h.jsx)(n.Z,{className:"poppins-bold",fontSize:"1rem",lineHeight:"1.8rem",color:"#ffffff",children:r})]})]})},v=function(e){var s=(0,u.useState)({fullName:"",email:"",phone:"",description:""}),t=(0,i.Z)(s,2),o=t[0],l=t[1],v=(0,u.useState)({success:"",error:""}),Z=(0,i.Z)(v,2),C=Z[0],y=Z[1],w=function(){y({success:"",error:""})};return(0,u.useEffect)((function(){w()}),[o]),(0,h.jsxs)(a.Z,{ref:e.contactRef,display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:{xs:"center",md:"start"},justifyContent:"space-around",sx:{backgroundImage:"url(".concat(d,")"),backgroundRepeat:"no-repeat",backgroundSize:"100%",height:"100%",width:"100%"},py:10,zIndex:999,children:[(0,h.jsxs)(a.Z,{px:{xs:2.5,md:5},py:{xs:5,md:10},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:3,bgcolor:"#262626",children:[(0,h.jsx)(n.Z,{className:"poppins-medium",fontSize:{xs:"1rem",md:"1.2rem"},lineHeight:{xs:"1.2rem",md:"1.4rem"},color:"#30DCCA",children:"Want To Disscuss About A Project?"}),(0,h.jsxs)("form",{style:{width:"100%",display:"flex",flexDirection:"column",gap:10},children:[(0,h.jsxs)(a.Z,{width:"100%",children:[(0,h.jsx)(g,{text:"Full Name"}),(0,h.jsx)(j,{fullWidth:!0,variant:"outlined",type:"text",value:o.fullName,onChange:function(e){return l((function(s){return(0,r.Z)((0,r.Z)({},s),{},{fullName:e.target.value})}))}})]}),(0,h.jsxs)(a.Z,{width:"100%",children:[(0,h.jsx)(g,{text:"Email"}),(0,h.jsx)(j,{fullWidth:!0,type:"email",variant:"outlined",value:o.email,onChange:function(e){return l((function(s){return(0,r.Z)((0,r.Z)({},s),{},{email:e.target.value})}))}})]}),(0,h.jsxs)(a.Z,{width:"100%",children:[(0,h.jsx)(g,{text:"Phone"}),(0,h.jsx)(j,{fullWidth:!0,type:"number",variant:"outlined",value:o.phone,onChange:function(e){return l((function(s){return(0,r.Z)((0,r.Z)({},s),{},{phone:e.target.value})}))},inputProps:{min:0,inputMode:"numeric",style:{"-moz-appearance":"textfield"}}})]}),(0,h.jsxs)(a.Z,{width:"100%",children:[(0,h.jsx)(g,{text:"Description"}),(0,h.jsx)(j,{fullWidth:!0,id:"outlined-textarea",multiline:!0,minRows:6,variant:"outlined",value:o.description,onChange:function(e){return l((function(s){return(0,r.Z)((0,r.Z)({},s),{},{description:e.target.value})}))}})]}),(0,h.jsx)(c.Z,{variant:"contained",type:"submit",sx:{bgcolor:"#30DCCA",py:2,"&:hover":{bgcolor:"#30DCCA"},marginTop:5},onClick:function(e){!function(e){e.preventDefault(),o.email.trim()&&o.fullName.trim()&&o.description.trim()&&o.phone.trim()?(y({success:"",error:""}),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)?(y({success:"",error:""}),y({success:"Email sent successfully",error:""}),console.log("Form submitted:",o)):y({success:"",error:"Invalid Email"})):y({success:"",error:"Please fill all the fields before submit"})}(e)},children:"Submit"})]}),!!C.success&&(0,h.jsx)(f.Z,{severity:"success",onClose:w,children:C.success}),!!C.error&&(0,h.jsx)(f.Z,{severity:"error",onClose:w,children:C.error})]}),(0,h.jsxs)(a.Z,{display:"flex",flexDirection:"column",gap:3,mt:{xs:5,md:0},children:[(0,h.jsx)(n.Z,{className:"poppins-bold",fontSize:{xs:"2rem",md:"2.6rem"},lineHeight:{xs:"2rem",md:"2.6rem"},color:"#ffffff",display:{xs:"none",md:"block"},children:"Let\u2019s work together?"}),(0,h.jsxs)(n.Z,{className:"poppins-regular",fontSize:{xs:"1rem",md:"1.2rem"},lineHeight:{xs:"1.2rem",md:"1.4rem"},color:"#ffffff",display:{xs:"none",md:"block"},children:["\"Let's connect for shared success and endless possibilities. ",(0,h.jsx)("br",{})," ",'Together, we can create something extraordinary."']}),(0,h.jsx)(b,{img:m,title:"Have any questions?",desc:"Call on +91 9029050299"}),(0,h.jsx)(b,{img:p,title:"Send us an email",desc:"janus.softwares@gmail.com"}),(0,h.jsx)(b,{img:x,title:"Visit US",desc:"104/105, A Wing, Manas Residency, Thane(W), Maharashtra"})]})]})}}}]);
//# sourceMappingURL=774.eb08b7f5.chunk.js.map