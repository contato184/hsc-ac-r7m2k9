// Gera os carrosséis Black November 2026 (LinkedIn, 4:5, 1080 x 1350).
// Uso: node carrosseis-black-november/gerar_carrosseis.js
// Saída: carrosseis-black-november/<curso>/slide_0N.png e carrossel-<curso>.pdf
//
// Estrutura de conversão (5 slides):
// 1 Gancho para o público certo | 2 O que está em jogo | 3 O que você recebe
// 4 Antes e depois (transformação) | 5 Oferta e chamada
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const A = path.join(DIR, 'assets');
const logoBranco = 'data:image/svg+xml;base64,' + fs.readFileSync(path.join(A, 'logo-hsc-global-branco.svg')).toString('base64');
const font = w => `@font-face{font-family:"Blauer Nue";font-weight:${w};src:url(file://${path.join(A, `BlauerNue-${w}.ttf`)})}`;

// Paleta oficial (DESIGN.md). Vermelho apenas como cor de campanha Black November.
const C = { navy: '#011072', accent: '#4A6CF7', deep: '#06091F', off: '#F0F2FF', prataE: '#6E7480', prataC: '#D8DCE3', red: '#E5233B' };

// Itens confirmados pelo Rafael em 09/11/2026.
const garantias = ['1 ano de acesso', 'Certificado HSC Global com QR Code', 'Suporte pelo WhatsApp e pela plataforma'];

const CURSOS = [
  {
    pasta: '_suspenso-mdsap-nao-publicar', suspenso: true, // fora da campanha (instrutora Mari), não gerar
    slides: [
      {
        tipo: 'capa', publico: 'Para profissionais de qualidade e assuntos regulatórios',
        titulo: '1 auditoria.<br><span class="hl">5 mercados.</span>',
        sub: 'Quem domina o MDSAP fala a língua de ANVISA, FDA, Health Canada, TGA e MHLW/PMDA ao mesmo tempo.',
        curso: 'Curso EAD Auditor Líder MDSAP',
      },
      {
        tipo: 'fatos', eyebrow: 'O que está em jogo', titulo: 'O MDSAP já decide o acesso a mercados',
        itens: [
          ['Canadá', 'Certificado MDSAP obrigatório para dispositivos das classes II a IV desde 2019.'],
          ['Estados Unidos', 'O FDA aceita relatórios MDSAP no lugar de inspeções de rotina.'],
          ['Brasil', 'A ANVISA usa relatórios MDSAP na Certificação de Boas Práticas de Fabricação.'],
          ['Ciclo de 3 anos', 'Auditoria inicial, vigilâncias anuais e recertificação.'],
        ],
      },
      {
        tipo: 'recebe', eyebrow: 'O que você recebe', titulo: 'Tudo o que está incluído',
        itens: [
          ['6 módulos e 104 videoaulas', 'O programa MDSAP completo.'],
          ['Apostila por módulo', 'Material de consulta para estudar e revisar.'],
          ['Caderno de exercícios', 'Aplicação prática em cada módulo.'],
          ['Preparação para a prova', 'Revisão dirigida antes da avaliação final.'],
          ['Kit de simulação de auditoria', 'Uma auditoria completa para praticar no Módulo 6.'],
          ['Quizzes e prova final', 'Avaliação por módulo e prova com nota mínima de 80%.'],
        ],
      },
      {
        tipo: 'antesdepois', eyebrow: 'A diferença na prática', titulo: 'Do conhecimento da norma à condução da auditoria',
        itens: [
          ['Conhece a ISO 13485, mas não os requisitos de cada país', 'Relaciona a ISO 13485 aos requisitos das 5 autoridades'],
          ['Nunca conduziu uma auditoria no modelo MDSAP', 'Já praticou uma auditoria completa com o kit de simulação'],
          ['Experiência difícil de comprovar', 'Certificado HSC Global com QR Code verificável'],
        ],
      },
      {
        tipo: 'cta', titulo: 'Comece agora com a condição Black November',
        recap: '6 módulos, 104 videoaulas, apostilas, cadernos de exercícios e kit de simulação de auditoria.',
      },
    ],
  },
  {
    pasta: 'udi',
    slides: [
      {
        tipo: 'capa', publico: 'Para assuntos regulatórios, rotulagem e qualidade',
        titulo: 'Seu rótulo está pronto para o <span class="hl">UDI</span>?',
        sub: 'A RDC 591/2021 trouxe o UDI para o Brasil. Entenda o que muda e como implantar com os padrões GS1.',
        curso: 'Curso EAD UDI: Identificação Única de Dispositivos Médicos',
      },
      {
        tipo: 'fatos', eyebrow: 'O que está em jogo', titulo: 'UDI não é só um código de barras',
        itens: [
          ['Brasil', 'A RDC 591/2021 institui o UDI, com prazos escalonados por classe de risco.'],
          ['Estados Unidos', 'O FDA exige UDI pelo 21 CFR Part 830.'],
          ['União Europeia', 'O EU MDR traz o UDI no Artigo 27.'],
          ['Rastreabilidade', 'O UDI-PI liga cada unidade ao lote, à série e à validade, base de qualquer recolhimento.'],
        ],
      },
      {
        tipo: 'recebe', eyebrow: 'O que você recebe', titulo: 'Tudo o que está incluído',
        itens: [
          ['Videoaulas em módulos', 'RDC 591/2021 e padrões GS1 passo a passo.'],
          ['Laboratório prático de UDI', 'Monte e interprete códigos em exercícios guiados.'],
          ['Kit do laboratório', 'Material para repetir a prática na sua empresa.'],
          ['Novos módulos incluídos', 'Liberados durante o acesso, sem custo adicional.'],
          ['Quizzes e prova final', 'Avaliação por módulo e prova com nota mínima de 80%.'],
          ['Certificado HSC Global', 'Com QR Code de validação.'],
        ],
      },
      {
        tipo: 'antesdepois', eyebrow: 'A diferença na prática', titulo: 'Do requisito à implantação',
        itens: [
          ['Dúvida sobre o que compõe o UDI-DI e o UDI-PI', 'Monta a estrutura do código com segurança, praticada no laboratório'],
          ['UDI visto como tarefa só de TI ou de rotulagem', 'Visão regulatória completa: RDC 591/2021 e GS1'],
          ['Treinamento que fica desatualizado', 'Novos módulos liberados sem pagar de novo'],
        ],
      },
      {
        tipo: 'cta', titulo: 'Comece agora com a condição Black November',
        recap: 'Videoaulas, laboratório prático, kit de apoio e novos módulos incluídos.',
      },
    ],
  },
  {
    pasta: 'avaliacao-clinica',
    slides: [
      {
        tipo: 'capa', publico: 'Para assuntos clínicos, regulatórios e pesquisa',
        titulo: 'Sua investigação clínica resistiria a uma <span class="hl">auditoria</span>?',
        sub: 'A ISO 14155:2020 define as boas práticas clínicas para dispositivos médicos. Conteúdo atualizado em 2026.',
        curso: 'Curso EAD Avaliação Clínica ISO 14155:2020',
      },
      {
        tipo: 'fatos', eyebrow: 'O que está em jogo', titulo: 'O que a edição 2020 passou a exigir',
        itens: [
          ['Risco', 'Abordagem baseada em risco em toda a investigação, inclusive no monitoramento.'],
          ['Transparência', 'Registro da investigação em base de dados de acesso público.'],
          ['Estágios', 'Orientação para as fases piloto, pivotal e pós-comercialização.'],
          ['Ética', 'Orientações específicas para comitês de ética.'],
        ],
      },
      {
        tipo: 'recebe', eyebrow: 'O que você recebe', titulo: 'Tudo o que está incluído',
        itens: [
          ['Videoaulas em módulos', 'Requisitos da ISO 14155:2020 organizados por tema.'],
          ['Atualização 2026', 'Conteúdo revisado e atualizado.'],
          ['Materiais de apoio', 'Arquivos para download e consulta.'],
          ['Quizzes por módulo', 'Questões para fixar cada tema.'],
          ['Prova final', 'Nota mínima de 80% para aprovação.'],
          ['Certificado HSC Global', 'Com QR Code de validação.'],
        ],
      },
      {
        tipo: 'antesdepois', eyebrow: 'A diferença na prática', titulo: 'Da leitura da norma à condução do estudo',
        itens: [
          ['Norma lida, mas sem visão do processo inteiro', 'Entende os requisitos do planejamento ao relatório final'],
          ['Monitoramento igual para qualquer estudo', 'Aplica a abordagem baseada em risco da edição 2020'],
          ['Experiência difícil de comprovar', 'Certificado HSC Global com QR Code verificável'],
        ],
      },
      {
        tipo: 'cta', titulo: 'Comece agora com a condição Black November',
        recap: 'Videoaulas, conteúdo atualizado em 2026, materiais de apoio, quizzes e prova final.',
      },
    ],
  },
  {
    pasta: 'usabilidade',
    slides: [
      {
        tipo: 'capa', publico: 'Para P&amp;D, engenharia de produto e assuntos regulatórios',
        titulo: 'Erro de uso não é culpa do usuário. <span class="hl">É requisito de projeto.</span>',
        sub: 'A IEC 62366-1 mostra como projetar interfaces que reduzem o risco de erro de uso.',
        curso: 'Curso EAD Engenharia de Usabilidade <span class="nw">IEC 62366-1:2015</span>',
      },
      {
        tipo: 'fatos', eyebrow: 'O que está em jogo', titulo: 'O processo que a norma exige',
        itens: [
          ['Especificação de uso', 'Usuários, ambiente de uso e princípio de funcionamento.'],
          ['Cenários de uso', 'Perigos e situações perigosas relacionados ao uso.'],
          ['Formativa e somativa', 'Avaliações durante o projeto e validação final da interface.'],
          ['ISO 14971', 'Integração com o processo de gerenciamento de risco.'],
        ],
      },
      {
        tipo: 'recebe', eyebrow: 'O que você recebe', titulo: 'Tudo o que está incluído',
        itens: [
          ['32 videoaulas', 'O processo de usabilidade passo a passo.'],
          ['Materiais de apoio', 'Arquivos para download e consulta.'],
          ['Quizzes por módulo', 'Questões para fixar cada tema.'],
          ['Prova final', 'Nota mínima de 80% para aprovação.'],
          ['Certificado HSC Global', 'Com QR Code de validação.'],
          ['1 ano de acesso', 'Para estudar e revisar no seu ritmo.'],
        ],
      },
      {
        tipo: 'antesdepois', eyebrow: 'A diferença na prática', titulo: 'Da teoria ao projeto seguro',
        itens: [
          ['Usabilidade avaliada só no fim do projeto', 'Avaliações formativas desde as primeiras fases'],
          ['Usabilidade separada da gestão de risco', 'Processo integrado à ISO 14971'],
          ['Dúvida sobre o que documentar', 'Sabe o que compor no arquivo de engenharia de usabilidade'],
        ],
      },
      {
        tipo: 'cta', titulo: 'Comece agora com a condição Black November',
        recap: '32 videoaulas, materiais de apoio, quizzes e prova final.',
      },
    ],
  },
];

const css = `
${[400, 500, 600, 700].map(font).join('')}
*{box-sizing:border-box;margin:0;padding:0}
body{width:1080px;height:1350px;font-family:"Blauer Nue",sans-serif;color:${C.off};
 background:radial-gradient(900px 700px at 85% 0%,rgba(74,108,247,.32),transparent 60%),radial-gradient(800px 600px at 0% 100%,rgba(1,16,114,.9),transparent 70%),${C.deep};
 position:relative;overflow:hidden}
body:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(216,220,227,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(216,220,227,.035) 1px,transparent 1px);background-size:54px 54px}
.top{position:absolute;top:64px;left:80px;right:80px;display:flex;justify-content:space-between;align-items:center}
.top img{height:50px}
.pg{font-size:24px;color:${C.prataC};font-weight:500;letter-spacing:2px}
.prog{position:absolute;bottom:108px;left:80px;right:80px;display:flex;gap:10px}
.prog i{flex:1;height:6px;border-radius:3px;background:rgba(216,220,227,.18)}
.prog i.on{background:${C.accent}}
.foot{position:absolute;bottom:52px;left:80px;right:80px;display:flex;justify-content:space-between;font-size:23px;color:${C.prataE};font-weight:500}
.wrap{position:absolute;top:180px;left:80px;right:80px;bottom:150px;display:flex;flex-direction:column}
.eyebrow{font-size:25px;letter-spacing:4px;text-transform:uppercase;color:${C.accent};font-weight:600;margin-bottom:20px}
h1{font-size:62px;line-height:1.06;font-weight:700;margin-bottom:40px;letter-spacing:-.5px}
.hl{color:${C.accent}}
.card{background:linear-gradient(160deg,rgba(1,16,114,.88),rgba(6,9,31,.92));border:1px solid rgba(74,108,247,.35);border-radius:24px;
 box-shadow:0 18px 40px rgba(0,0,0,.45);padding:30px 34px}
.tag{display:inline-block;background:${C.red};color:#fff;font-weight:700;font-size:24px;letter-spacing:4px;padding:11px 22px;border-radius:10px}
.nw{white-space:nowrap}
.bar{width:120px;height:8px;background:${C.accent};border-radius:4px}
.anim .a{animation:up .8s cubic-bezier(.2,.75,.2,1) both;animation-delay:var(--d,0s)}
.anim .slide{animation:sl .8s cubic-bezier(.2,.75,.2,1) both,glow 1.4s ease-out both;animation-delay:var(--d,0s),calc(var(--d,0s) + .5s)}
.anim .pop{animation:pop .6s cubic-bezier(.3,1.5,.5,1) both;animation-delay:var(--d,0s)}
.anim .grow{animation:grow .8s cubic-bezier(.2,.75,.2,1) both;animation-delay:var(--d,0s)}
.anim .pulse{animation:up .8s cubic-bezier(.2,.75,.2,1) both,glow 1.6s ease-in-out infinite;animation-delay:var(--d,0s),calc(var(--d,0s) + .8s)}
.anim .prog i.cur{background:rgba(216,220,227,.18);position:relative;overflow:hidden}
.anim .prog i.cur:after{content:"";position:absolute;inset:0;background:${C.accent};transform-origin:left;animation:fill var(--dur,5s) linear both}
.anim .swipe{display:none}
.anim body:after,.anim:after{content:"";position:absolute;width:900px;height:900px;left:-300px;top:-200px;border-radius:50%;background:radial-gradient(circle,rgba(74,108,247,.18),transparent 65%);animation:drift var(--dur,5s) ease-in-out both;pointer-events:none}
@keyframes up{from{opacity:0;transform:translateY(46px)}to{opacity:1;transform:none}}
@keyframes sl{from{opacity:0;transform:translateX(-60px)}to{opacity:1;transform:none}}
@keyframes pop{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:none}}
@keyframes grow{from{width:0}to{width:120px}}
@keyframes fill{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes glow{0%{box-shadow:0 18px 40px rgba(0,0,0,.45),0 0 0 0 rgba(74,108,247,.0)}40%{box-shadow:0 18px 40px rgba(0,0,0,.45),0 0 36px 4px rgba(74,108,247,.55)}100%{box-shadow:0 18px 40px rgba(0,0,0,.45),0 0 0 0 rgba(74,108,247,0)}}
@keyframes drift{from{transform:translate(0,0)}to{transform:translate(520px,700px)}}
.dot{width:52px;height:52px;border-radius:50%;background:${C.accent};display:flex;align-items:center;justify-content:center;font-size:25px;font-weight:700;flex:none}
`;

function corpo(s) {
  if (s.tipo === 'capa') {
    const len = s.titulo.replace(/<[^>]+>/g, '').length;
    return `
   <div class="wrap" style="justify-content:center">
    <div class="a" style="--d:.1s"><span class="tag">BLACK NOVEMBER</span></div>
    <div class="eyebrow a" style="margin-top:48px;--d:.35s">${s.publico}</div>
    <h1 class="a" style="--d:.6s;"font-size:${len > 50 ? 84 : len > 30 ? 96 : 120}px;line-height:1.02;margin-bottom:36px">${s.titulo}</h1>
    <div class="bar grow" style="--d:1s"></div>
    <p class="a" style="--d:1.15s;font-size:36px;line-height:1.35;color:${C.prataC};margin-top:36px;max-width:900px">${s.sub}</p>
    <div class="a" style="--d:1.5s;position:absolute;bottom:0;left:0;right:0;display:flex;justify-content:space-between;align-items:flex-end;gap:30px">
     <div style="font-size:27px;color:${C.off};font-weight:600;max-width:680px;line-height:1.3">${s.curso}</div>
     <div class="swipe" style="font-size:27px;color:${C.accent};font-weight:600;white-space:nowrap">Arraste &rarr;</div>
    </div>
   </div>`;
  }
  if (s.tipo === 'fatos') return `
   <div class="wrap">
    <div class="eyebrow a" style="--d:.1s">${s.eyebrow}</div><h1 class="a" style="--d:.3s">${s.titulo}</h1>
    <div style="display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:1fr;gap:24px;flex:1">
     ${s.itens.map(([t, d], i) => `<div class="card a" style="--d:${(0.7 + i * 0.2).toFixed(2)}s;display:flex;flex-direction:column;justify-content:space-between">
       <div style="font-size:${t.length > 14 ? 42 : 52}px;font-weight:700;color:${C.accent};line-height:1.08">${t}</div>
       <div style="font-size:32px;line-height:1.33;color:${C.off}">${d}</div></div>`).join('')}
    </div>
   </div>`;
  if (s.tipo === 'recebe') return `
   <div class="wrap">
    <div class="eyebrow a" style="--d:.1s">${s.eyebrow}</div><h1 class="a" style="--d:.3s">${s.titulo}</h1>
    <div style="display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:1fr;gap:22px;flex:1">
     ${s.itens.map(([t, d], i) => `<div class="card a" style="--d:${(0.6 + i * 0.16).toFixed(2)}s;padding:28px 28px;display:flex;flex-direction:column;gap:14px">
       <div style="display:flex;gap:16px;align-items:center"><div class="dot">${i + 1}</div>
        <div style="font-size:32px;font-weight:700;line-height:1.12">${t}</div></div>
       <div style="font-size:27px;color:${C.prataC};line-height:1.3">${d}</div></div>`).join('')}
    </div>
   </div>`;
  if (s.tipo === 'antesdepois') return `
   <div class="wrap">
    <div class="eyebrow a" style="--d:.1s">${s.eyebrow}</div><h1 class="a" style="--d:.3s">${s.titulo}</h1>
    <div class="a" style="--d:.55s;display:grid;grid-template-columns:1fr 1fr;gap:0 24px;margin-bottom:16px">
     <div style="font-size:26px;letter-spacing:4px;font-weight:700;color:${C.prataE}">ANTES</div>
     <div style="font-size:26px;letter-spacing:4px;font-weight:700;color:${C.accent}">DEPOIS DO CURSO</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:22px;flex:1">
     ${s.itens.map(([a, d], i) => `<div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;flex:1">
       <div class="a" style="--d:${(0.8 + i * 0.55).toFixed(2)}s;border:1px solid rgba(216,220,227,.18);border-radius:24px;padding:28px 30px;font-size:30px;line-height:1.3;color:${C.prataC};display:flex;align-items:center;background:rgba(6,9,31,.6)">${a}</div>
       <div class="card slide" style="--d:${(1.1 + i * 0.55).toFixed(2)}s;font-size:31px;line-height:1.3;font-weight:600;display:flex;align-items:center;border-color:${C.accent}">${d}</div></div>`).join('')}
    </div>
   </div>`;
  if (s.tipo === 'cta') return `
   <div class="wrap" style="justify-content:center">
    <div class="a" style="--d:.1s"><span class="tag">BLACK NOVEMBER</span></div>
    <h1 class="a" style="--d:.3s;font-size:78px;margin-top:40px;margin-bottom:30px">${s.titulo}</h1>
    <p class="a" style="--d:.65s;font-size:32px;line-height:1.35;color:${C.prataC};margin-bottom:28px">${s.recap}</p>
    <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:40px">
     ${garantias.map((g, i) => `<div class="pop" style="--d:${(1 + i * 0.25).toFixed(2)}s;display:flex;gap:18px;align-items:center;font-size:32px;font-weight:600"><span style="width:34px;height:34px;border-radius:8px;background:${C.accent};display:inline-flex;align-items:center;justify-content:center;font-size:22px">&#10003;</span>${g}</div>`).join('')}
    </div>
    <div class="card a pulse" style="--d:1.9s;padding:34px 40px;border-color:${C.accent}">
     <div style="font-size:36px;font-weight:700">Link da oferta nos comentários</div>
     <div style="font-size:28px;color:${C.prataC};margin-top:12px">Dúvidas: WhatsApp +55 11 2574-0785 | hscglobalgroup.com</div>
    </div>
   </div>`;
  throw new Error('tipo desconhecido ' + s.tipo);
}

const html = (s, i, n, anim = false, dur = 5) => `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><style>${css}</style></head><body${anim ? ` class="anim" style="--dur:${dur}s"` : ''}>
 <div class="top"><img src="${logoBranco}" alt="HSC Global"><div class="pg">${String(i + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}</div></div>
 ${corpo(s)}
 <div class="prog">${Array.from({ length: n }, (_, k) => `<i class="${k < i ? 'on' : k === i ? 'on cur' : ''}"></i>`).join('')}</div>
 <div class="foot"><span>HSC Academy</span><span>${i === n - 1 ? 'Salve este post para consultar depois' : 'Assuntos Regulatórios para Dispositivos Médicos'}</span></div>
</body></html>`;

// Versão em vídeo (efeito motion) para LinkedIn: MP4 4:5, 30 fps, sem áudio.
// Uso: node carrosseis-black-november/gerar_carrosseis.js --video
const { execFileSync } = require('child_process');
const FPS = 30;
const DUR = { capa: 4.5, fatos: 5.5, recebe: 5.5, antesdepois: 6.5, cta: 6 };
const XF = 0.5; // transição entre slides (s)

async function video(browser) {
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  for (const curso of CURSOS.filter(c => !c.suspenso)) {
    const out = path.join(DIR, curso.pasta);
    const tmpDir = path.join(out, '.frames');
    fs.rmSync(tmpDir, { recursive: true, force: true });
    const n = curso.slides.length;
    const segs = [];
    for (let i = 0; i < n; i++) {
      const s = curso.slides[i];
      const dur = DUR[s.tipo];
      const dir = path.join(tmpDir, String(i));
      fs.mkdirSync(dir, { recursive: true });
      const tmp = path.join(dir, 'slide.html');
      fs.writeFileSync(tmp, html(s, i, n, true, dur));
      await page.goto('file://' + tmp);
      await page.evaluate(() => document.fonts.ready);
      const frames = Math.round(dur * FPS);
      for (let f = 0; f < frames; f++) {
        await page.evaluate(t => document.getAnimations().forEach(a => { a.pause(); a.currentTime = t; }), (f / FPS) * 1000);
        await page.screenshot({ path: path.join(dir, `f${String(f).padStart(4, '0')}.png`) });
      }
      const seg = path.join(dir, 'seg.mp4');
      execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', path.join(dir, 'f%04d.png'),
        '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', seg]);
      segs.push({ seg, dur });
    }
    // Transições suaves entre os slides.
    const args = ['-y', '-loglevel', 'error'];
    segs.forEach(x => args.push('-i', x.seg));
    let filtro = '', prev = '[0:v]', off = 0;
    for (let k = 1; k < segs.length; k++) {
      off += segs[k - 1].dur - XF;
      const lbl = k === segs.length - 1 ? '[v]' : `[x${k}]`;
      filtro += `${prev}[${k}:v]xfade=transition=slideleft:duration=${XF}:offset=${off.toFixed(2)}${lbl};`;
      prev = lbl;
      off = off; // offset acumulado já considera a sobreposição
    }
    args.push('-filter_complex', filtro.replace(/;$/, ''), '-map', '[v]', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-movflags', '+faststart', '-r', String(FPS),
      path.join(out, `video-${curso.pasta}.mp4`));
    execFileSync('ffmpeg', args);
    fs.rmSync(tmpDir, { recursive: true, force: true });
    console.log('video ok', curso.pasta);
  }
}

(async () => {
  const browser = await chromium.launch();
  if (process.argv.includes('--video')) { await video(browser); await browser.close(); return; }
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  let problemas = 0;
  for (const curso of CURSOS.filter(c => !c.suspenso)) {
    const out = path.join(DIR, curso.pasta);
    fs.mkdirSync(out, { recursive: true });
    const n = curso.slides.length;
    for (let i = 0; i < n; i++) {
      const doc = html(curso.slides[i], i, n);
      if (/[—–·•]/.test(doc)) { console.warn(`AVISO: caractere proibido em ${curso.pasta} slide ${i + 1}`); problemas++; }
      const tmp = path.join(out, `.slide_${i + 1}.html`);
      fs.writeFileSync(tmp, doc);
      await page.goto('file://' + tmp);
      await page.evaluate(() => document.fonts.ready);
      // Checagem de estouro: nenhum bloco pode passar da área útil.
      const over = await page.evaluate(() => {
        const w = document.querySelector('.wrap');
        if (w.scrollHeight > w.clientHeight + 2) return true;
        return [...w.querySelectorAll('*')].some(e => e.scrollHeight > e.clientHeight + 2 && getComputedStyle(e).overflow !== 'visible');
      });
      if (over) { console.warn(`AVISO: conteúdo estourando em ${curso.pasta} slide ${i + 1}`); problemas++; }
      await page.screenshot({ path: path.join(out, `slide_0${i + 1}.png`) });
      fs.unlinkSync(tmp);
    }
    // PDF com uma página por slide, gerado a partir das imagens para fidelidade total.
    const imgs = curso.slides.map((_, i) => `<img src="file://${path.join(out, `slide_0${i + 1}.png`)}" style="display:block;width:1080px;height:1350px;page-break-after:always">`).join('');
    const pdfHtml = path.join(out, '.pdf.html');
    fs.writeFileSync(pdfHtml, `<!doctype html><html><head><style>@page{size:1080px 1350px;margin:0}body{margin:0}</style></head><body>${imgs}</body></html>`);
    await page.goto('file://' + pdfHtml);
    await page.pdf({ path: path.join(out, `carrossel-${curso.pasta}.pdf`), width: '1080px', height: '1350px', printBackground: true });
    fs.unlinkSync(pdfHtml);
    console.log('ok', curso.pasta);
  }
  await browser.close();
  if (problemas) process.exitCode = 1;
})();
