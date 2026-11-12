// Painéis animados (parte inferior) para os trechos sem fala do Theo.
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const S='/tmp/claude-0/-home-user-hsc-ac-r7m2k9/6e8ea84e-b557-5cd8-93f5-3a8b1eb84531/scratchpad/theo',F='/home/user/hsc-ac-r7m2k9/carrosseis-black-november/assets',FPS=30;
const font=w=>`@font-face{font-family:B;font-weight:${w};src:url(file://${F}/BlauerNue-${w}.ttf)}`;
const css=`${[500,600,700].map(font).join('')}*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1080px;height:1920px;background:transparent;font-family:B;color:#fff;overflow:hidden}
.pan{position:absolute;left:0;right:0;top:1068px;bottom:0;background:radial-gradient(700px 520px at 0% 100%,rgba(20,40,190,.45),transparent 70%),#08080F;
 -webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 26px);mask-image:linear-gradient(to bottom,transparent 0,#000 26px)}
.lab{position:absolute;top:1096px;left:0;right:0;text-align:center;font-size:38px;font-weight:600}
.acc{color:#8F9BFF}
.card{position:absolute;top:1183px;width:460px;height:312px;border-radius:26px;padding:34px 36px}
.blue{background:linear-gradient(150deg,#4F6CF9 0%,#2A3CD0 55%,#18259F 100%);border:1px solid rgba(160,175,255,.45);box-shadow:0 0 50px rgba(74,108,247,.45)}
.dark{background:linear-gradient(150deg,#1D1E25,#121219);border:1px solid rgba(255,255,255,.07)}
.num{font-size:132px;font-weight:700;line-height:1;letter-spacing:-3px}.num small{font-size:66px;letter-spacing:0}
.off{font-size:40px;font-weight:700;margin-top:14px}.sm{font-size:30px;font-weight:500;margin-top:10px;color:rgba(255,255,255,.88)}
.sub{position:absolute;top:1584px;left:40px;right:40px;text-align:center;font-size:50px;font-weight:700;line-height:1.12}
.chips{position:absolute;top:1726px;left:0;right:0;display:flex;justify-content:center;gap:16px}
.chips div{padding:14px 26px;border-radius:999px;font-size:31px}
`;
const chips='<div class="chips"><div style="background:#E5233B;font-weight:700">10/11 a 15/12</div><div style="background:rgba(74,108,247,.22);border:2px solid #4A6CF7;font-weight:600;color:#F0F2FF">1 ano de acesso aos cursos EAD</div></div>';
const P={
 p1:{dur:4.6,html:`<div class=pan></div><div class="lab e" data-t=0>Até <span class=acc>15/12</span></div>
  <div class="card blue e" data-t=.15 style="left:65px"><div class=num><span class=cnt data-to=40 data-t=.3>0</span><small>%</small></div><div class=off>OFF</div><div class=sm>nos cursos EAD</div></div>
  <div class="card dark e" data-t=.9 style="left:555px"><div class=num><span class=cnt data-to=30 data-t=1.05>0</span><small>%</small></div><div class=off>OFF</div><div class=sm>nas turmas ao vivo</div></div>
  <div class="sub e" data-t=.4>Cursos EAD com <span class=acc>40%</span><br>e turmas ao vivo com <span class=acc>30%</span></div>
  <div class=e data-t=1.6>${chips}</div>`},
 p2:{dur:4.2,html:`<div class=pan></div><div class="lab e" data-t=0>Vai inscrever sua <span class=acc>equipe</span>?</div>
  <div class="card dark e" data-t=.15 style="left:65px"><div class=num>5+</div><div class=sm style="margin-top:22px;font-size:32px">alunos da mesma empresa</div></div>
  <div class="card blue e" data-t=.7 style="left:555px"><div class=sm style="margin-top:0;font-size:30px">desconto de até</div><div class=num style="margin-top:10px"><span class=cnt data-to=50 data-t=.85>0</span><small>%</small></div></div>
  <div class="sub e" data-t=.4>A partir de 5 alunos,<br>o desconto chega a <span class=acc>50%</span></div>
  <div class=e data-t=1.3>${chips}</div>`},
};
const ease=x=>1-Math.pow(1-Math.min(Math.max(x,0),1),3);
(async()=>{const b=await chromium.launch();const pg=await b.newPage({viewport:{width:1080,height:1920}});
for(const [k,p] of Object.entries(P)){
  const dir=path.join(S,'pan_'+k);fs.rmSync(dir,{recursive:true,force:true});fs.mkdirSync(dir);
  fs.writeFileSync(dir+'/p.html',`<!doctype html><meta charset=utf-8><style>${css}</style><body>${p.html}</body>`);
  await pg.goto('file://'+dir+'/p.html');await pg.evaluate(()=>document.fonts.ready);
  const n=Math.round(p.dur*FPS);
  for(let f=0;f<n;f++){
    await pg.evaluate(([t,easeSrc])=>{const ease=eval(easeSrc);
      document.querySelectorAll('.e').forEach(e=>{const k=ease((t-(+e.dataset.t))/0.55);e.style.opacity=k;e.style.transform='translateY('+(30*(1-k))+'px)';});
      document.querySelectorAll('.cnt').forEach(e=>{const k=ease((t-(+e.dataset.t))/0.9);e.textContent=Math.round(k*(+e.dataset.to));});
    },[f/FPS,ease.toString()]);
    await pg.screenshot({path:dir+'/f'+String(f).padStart(4,'0')+'.png',omitBackground:true});
  }
  console.log('ok',k,n);
}
await b.close()})();
