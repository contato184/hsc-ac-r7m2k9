const {chromium}=require('playwright');const fs=require('fs');
const S='/tmp/claude-0/-home-user-hsc-ac-r7m2k9/6e8ea84e-b557-5cd8-93f5-3a8b1eb84531/scratchpad/theo',F='/home/user/hsc-ac-r7m2k9/carrosseis-black-november/assets';
const font=w=>`@font-face{font-family:B;font-weight:${w};src:url(file://${F}/BlauerNue-${w}.ttf)}`;
const base=`${[500,600,700].map(font).join('')}*{margin:0;padding:0;box-sizing:border-box}html,body{width:1080px;height:1920px;background:transparent;font-family:B}.c{position:absolute;left:0;right:0;display:flex;justify-content:center}`;
const L={
 patch:`<div class=c style="top:1092px"><div style="width:330px;height:64px;border-radius:32px;background:radial-gradient(closest-side,rgba(8,8,17,1) 70%,rgba(8,8,17,0));display:flex;align-items:center;justify-content:center;font-size:37px;font-weight:600;color:#fff">Até&nbsp;<span style="color:#8F9BFF">15/12</span></div></div>`,
 intro:`<div class=c style="top:1470px"><div style="display:flex;align-items:center;gap:18px;padding:16px 34px;border-radius:999px;background:#E5233B;box-shadow:0 10px 40px rgba(229,35,59,.45);color:#fff;font-weight:700;font-size:40px;letter-spacing:1px">De 10/11 a 15/12</div></div>`,
 strip:`<div class=c style="top:1726px;gap:16px">
  <div style="padding:14px 26px;border-radius:999px;background:rgba(229,35,59,.95);color:#fff;font-weight:700;font-size:31px">10/11 a 15/12</div>
  <div style="padding:14px 26px;border-radius:999px;background:rgba(74,108,247,.22);border:2px solid #4A6CF7;color:#F0F2FF;font-weight:600;font-size:31px">1 ano de acesso aos cursos EAD</div></div>`,
 fim:`<div class=c style="top:1418px"><div style="text-align:center">
  <div style="display:inline-block;padding:14px 30px;border-radius:999px;background:#E5233B;color:#fff;font-weight:700;font-size:32px">Black November de 10/11 a 15/12</div>
  <div style="margin-top:10px;font-size:33px;font-weight:700;color:#F0F2FF">1 ano de acesso aos cursos EAD</div></div></div>`,
};
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
for(const [k,h] of Object.entries(L)){fs.writeFileSync(S+'/ov/'+k+'.html',`<!doctype html><meta charset=utf-8><style>${base}</style><body>${h}</body>`);await p.goto('file://'+S+'/ov/'+k+'.html');await p.evaluate(()=>document.fonts.ready);await p.screenshot({path:S+'/ov/'+k+'.png',omitBackground:true});}
await b.close()})();
