// Gera os carrosséis Black November 2026 (LinkedIn, 4:5, 1080 x 1350).
// Uso: node carrosseis-black-november/gerar_carrosseis.js
// Saída: carrosseis-black-november/<curso>/slide_0N.png e <curso>.pdf
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const A = path.join(DIR, 'assets');
const logoBranco = 'data:image/svg+xml;base64,' + fs.readFileSync(path.join(A, 'logo-hsc-global-branco.svg')).toString('base64');
const font = w => `@font-face{font-family:"Blauer Nue";font-weight:${w};src:url(file://${path.join(A, `BlauerNue-${w}.ttf`)})}`;

// Paleta oficial (DESIGN.md) e vermelho apenas como cor de campanha.
const C = { navy: '#011072', accent: '#4A6CF7', deep: '#06091F', off: '#F0F2FF', prataE: '#6E7480', prataC: '#D8DCE3', red: '#E5233B' };

const comoFunciona = extra => ({
  tipo: 'grade',
  eyebrow: 'Como funciona o curso',
  titulo: 'Estudo no seu ritmo, com avaliação de verdade',
  itens: [
    ['100% EAD', 'Videoaulas organizadas em módulos, para assistir quando e onde quiser.'],
    ['Quiz por módulo', 'Questões ao final de cada módulo para fixar o conteúdo.'],
    ['Prova final', 'Nota mínima de 80% para aprovação.'],
    ['Certificado HSC Global', 'Emitido após a aprovação, com QR Code de validação.'],
    ...extra,
  ],
});

const cta = {
  tipo: 'cta',
  titulo: 'Garanta sua vaga com a condição Black November',
  texto: 'Acesse o link nos comentários e confira a oferta.',
};

const CURSOS = [
  {
    pasta: 'mdsap',
    slides: [
      { tipo: 'capa', kicker: 'Curso EAD', titulo: 'Auditor Líder MDSAP', sub: 'Uma auditoria. Cinco autoridades regulatórias. Aprenda a conduzir auditorias no padrão do programa.' },
      {
        tipo: 'lista', eyebrow: 'O que é o MDSAP', titulo: 'Uma única auditoria do sistema da qualidade aceita por 5 autoridades',
        itens: [['ANVISA', 'Brasil'], ['FDA', 'Estados Unidos'], ['Health Canada', 'Canadá'], ['TGA', 'Austrália'], ['MHLW e PMDA', 'Japão']],
        nota: 'Base da auditoria: ISO 13485:2016 somada aos requisitos regulatórios de cada país.',
      },
      {
        tipo: 'fatos', eyebrow: 'Por que dominar o MDSAP', titulo: 'O que o auditor precisa saber',
        itens: [
          ['Desde 2019', 'Health Canada exige certificado MDSAP para dispositivos das classes II a IV.'],
          ['3 anos', 'Ciclo de certificação: auditoria inicial, auditorias anuais de vigilância e recertificação.'],
          ['7 processos', 'Gestão; Medição, análise e melhoria; Autorização de comercialização; Eventos adversos; Projeto; Produção; Compras.'],
          ['Escala 1 a 5', 'Não conformidades classificadas por grau, com prazos de resposta definidos.'],
        ],
      },
      comoFunciona([['Acesso por 6 meses', 'Tempo para estudar e revisar o conteúdo.']]),
      cta,
    ],
  },
  {
    pasta: 'udi',
    slides: [
      { tipo: 'capa', kicker: 'Curso EAD', titulo: 'UDI: Identificação Única de Dispositivos Médicos', sub: 'RDC 591/2021 e padrões GS1 aplicados à rotulagem e à rastreabilidade.' },
      {
        tipo: 'lista', eyebrow: 'O que é o UDI', titulo: 'Um código que acompanha o dispositivo por toda a cadeia',
        itens: [['UDI-DI', 'Identifica o fabricante e o modelo ou versão do dispositivo.'], ['UDI-PI', 'Identifica a produção: lote, número de série, validade e data de fabricação.'], ['AIDC', 'Forma legível por máquina, como código de barras ou Data Matrix.'], ['HRI', 'Forma legível por pessoas, impressa junto ao código.']],
      },
      {
        tipo: 'fatos', eyebrow: 'Por que o tema é urgente', titulo: 'UDI é exigência regulatória em vários mercados',
        itens: [
          ['Brasil', 'A RDC 591/2021 da ANVISA institui o sistema UDI, com implantação escalonada por classe de risco.'],
          ['Estados Unidos', 'O FDA exige UDI pelo 21 CFR Part 830.'],
          ['União Europeia', 'O EU MDR traz o UDI no Artigo 27.'],
          ['GS1', 'Uma das entidades emissoras usadas para gerar os códigos UDI.'],
        ],
      },
      comoFunciona([['Instrutora', 'Priscila Marques.']]),
      cta,
    ],
  },
  {
    pasta: 'avaliacao-clinica',
    slides: [
      { tipo: 'capa', kicker: 'Curso EAD', titulo: 'Avaliação Clínica <span class="nw">ISO 14155:2020</span>', sub: 'Boas práticas clínicas para investigações com dispositivos médicos, com atualização 2026.' },
      {
        tipo: 'lista', eyebrow: 'O que a ISO 14155 define', titulo: 'Boas práticas clínicas para investigações com dispositivos médicos em seres humanos',
        itens: [['Participantes', 'Proteção dos direitos, da segurança e do bem estar.'], ['Dados', 'Condução científica que garante a credibilidade dos resultados.'], ['Responsabilidades', 'Papéis do patrocinador e do investigador principal.']],
      },
      {
        tipo: 'fatos', eyebrow: 'Destaques da edição 2020', titulo: 'O que mudou na norma',
        itens: [
          ['Risco', 'Abordagem baseada em risco ao longo de toda a investigação, incluindo o monitoramento.'],
          ['Transparência', 'Registro da investigação em base de dados de acesso público.'],
          ['Estágios', 'Orientação para as fases de desenvolvimento clínico: piloto, pivotal e pós comercialização.'],
          ['Ética', 'Orientações específicas para comitês de ética.'],
        ],
      },
      comoFunciona([]),
      cta,
    ],
  },
  {
    pasta: 'usabilidade',
    slides: [
      { tipo: 'capa', kicker: 'Curso EAD', titulo: 'Engenharia de Usabilidade <span class="nw">IEC 62366-1:2015</span>', sub: 'Como reduzir o risco de erro de uso desde o projeto do dispositivo.' },
      {
        tipo: 'lista', eyebrow: 'O que a IEC 62366-1 define', titulo: 'O processo para projetar uma interface segura de usar',
        itens: [['Analisar', 'Quem usa, onde usa e para que usa o dispositivo.'], ['Especificar', 'Características da interface relacionadas à segurança.'], ['Projetar', 'Interface que reduz o risco de erro de uso.'], ['Avaliar', 'Evidência de que a interface é segura para o usuário.']],
      },
      {
        tipo: 'fatos', eyebrow: 'Etapas centrais', titulo: 'O que compõe o processo de usabilidade',
        itens: [
          ['Especificação de uso', 'Usuários, ambiente de uso e princípio de funcionamento.'],
          ['Cenários de uso', 'Perigos e situações perigosas relacionados ao uso.'],
          ['Formativa e somativa', 'Avaliações durante o projeto e validação final da interface.'],
          ['ISO 14971', 'Integração com o processo de gerenciamento de risco.'],
        ],
      },
      comoFunciona([]),
      cta,
    ],
  },
];

const css = `
${[400, 500, 600, 700].map(font).join('')}
*{box-sizing:border-box;margin:0;padding:0}
body{width:1080px;height:1350px;font-family:"Blauer Nue",sans-serif;color:${C.off};
 background:radial-gradient(900px 700px at 85% 0%,rgba(74,108,247,.35),transparent 60%),radial-gradient(800px 600px at 0% 100%,rgba(1,16,114,.9),transparent 70%),${C.deep};
 position:relative;overflow:hidden}
.top{position:absolute;top:64px;left:80px;right:80px;display:flex;justify-content:space-between;align-items:center}
.top img{height:52px}
.pg{font-size:24px;color:${C.prataC};font-weight:500;letter-spacing:2px}
.foot{position:absolute;bottom:56px;left:80px;right:80px;display:flex;justify-content:space-between;font-size:24px;color:${C.prataE};font-weight:500}
.wrap{position:absolute;top:190px;left:80px;right:80px;bottom:140px;display:flex;flex-direction:column}
.eyebrow{font-size:26px;letter-spacing:4px;text-transform:uppercase;color:${C.accent};font-weight:600;margin-bottom:22px}
h1{font-size:60px;line-height:1.08;font-weight:700;margin-bottom:44px}
.card{background:linear-gradient(160deg,rgba(1,16,114,.85),rgba(6,9,31,.9));border:1px solid rgba(74,108,247,.35);border-radius:24px;
 box-shadow:0 18px 40px rgba(0,0,0,.45);padding:30px 36px}
.tag{display:inline-block;background:${C.red};color:#fff;font-weight:700;font-size:26px;letter-spacing:4px;padding:12px 24px;border-radius:10px}
.nw{white-space:nowrap}
.bar{width:120px;height:8px;background:${C.accent};border-radius:4px}
`;

function corpo(s) {
  if (s.tipo === 'capa') return `
   <div class="wrap" style="justify-content:center">
    <div><span class="tag">BLACK NOVEMBER</span></div>
    <div class="eyebrow" style="margin-top:56px">${s.kicker} | HSC Academy</div>
    <h1 style="font-size:${s.titulo.replace(/<[^>]+>/g, '').length > 34 ? 80 : 96}px;margin-bottom:36px">${s.titulo}</h1>
    <div class="bar"></div>
    <p style="font-size:38px;line-height:1.35;color:${C.prataC};margin-top:40px;max-width:880px">${s.sub}</p>
    <p style="position:absolute;bottom:0;font-size:28px;color:${C.accent};font-weight:600">Arraste para o lado &rarr;</p>
   </div>`;
  if (s.tipo === 'lista') return `
   <div class="wrap">
    <div class="eyebrow">${s.eyebrow}</div><h1>${s.titulo}</h1>
    <div style="display:flex;flex-direction:column;gap:${s.itens.length > 4 ? 16 : 22}px">
     ${s.itens.map(([t, d]) => `<div class="card" style="display:flex;align-items:center;gap:32px;padding:${s.itens.length > 4 ? 26 : 36}px 36px">
       <div style="font-size:38px;font-weight:700;color:#fff;min-width:${Math.max(...s.itens.map(x => x[0].length)) * 23 + 20}px;flex:none">${t}</div>
       <div style="font-size:31px;line-height:1.3;color:${C.prataC}">${d}</div></div>`).join('')}
    </div>
    ${s.nota ? `<p style="margin-top:30px;font-size:28px;line-height:1.35;color:${C.off};border-left:6px solid ${C.accent};padding-left:24px">${s.nota}</p>` : ''}
   </div>`;
  if (s.tipo === 'fatos') return `
   <div class="wrap">
    <div class="eyebrow">${s.eyebrow}</div><h1>${s.titulo}</h1>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;flex:1">
     ${s.itens.map(([t, d]) => `<div class="card" style="display:flex;flex-direction:column;justify-content:flex-start">
       <div style="font-size:${t.length > 14 ? 42 : 54}px;font-weight:700;color:${C.accent};line-height:1.1;margin-bottom:18px">${t}</div>
       <div style="font-size:33px;line-height:1.35;color:${C.off}">${d}</div></div>`).join('')}
    </div>
   </div>`;
  if (s.tipo === 'grade') return `
   <div class="wrap">
    <div class="eyebrow">${s.eyebrow}</div><h1>${s.titulo}</h1>
    <div style="display:flex;flex-direction:column;gap:20px">
     ${s.itens.map(([t, d], i) => `<div class="card" style="display:flex;gap:30px;align-items:center;padding:26px 36px">
       <div style="width:64px;height:64px;border-radius:50%;background:${C.accent};display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:700;flex:none">${i + 1}</div>
       <div><div style="font-size:34px;font-weight:700">${t}</div><div style="font-size:27px;color:${C.prataC};margin-top:6px;line-height:1.3">${d}</div></div></div>`).join('')}
    </div>
   </div>`;
  if (s.tipo === 'cta') return `
   <div class="wrap" style="justify-content:center">
    <div><span class="tag">BLACK NOVEMBER</span></div>
    <h1 style="font-size:84px;margin-top:56px">${s.titulo}</h1>
    <p style="font-size:38px;line-height:1.35;color:${C.prataC};margin-bottom:56px">${s.texto}</p>
    <div class="card" style="padding:40px 44px">
     <div style="font-size:26px;letter-spacing:3px;color:${C.accent};font-weight:600;text-transform:uppercase">Fale com a equipe</div>
     <div style="font-size:44px;font-weight:700;margin-top:14px">WhatsApp +55 11 2574-0785</div>
     <div style="font-size:34px;color:${C.prataC};margin-top:10px">hscglobalgroup.com</div>
    </div>
   </div>`;
  throw new Error('tipo desconhecido ' + s.tipo);
}

const html = (s, i, n) => `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><style>${css}</style></head><body>
 <div class="top"><img src="${logoBranco}" alt="HSC Global"><div class="pg">${String(i + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}</div></div>
 ${corpo(s)}
 <div class="foot"><span>HSC Academy</span><span>Assuntos Regulatórios para Dispositivos Médicos</span></div>
</body></html>`;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  for (const curso of CURSOS) {
    const out = path.join(DIR, curso.pasta);
    fs.mkdirSync(out, { recursive: true });
    const n = curso.slides.length;
    for (let i = 0; i < n; i++) {
      const doc = html(curso.slides[i], i, n);
      const tmp = path.join(out, `.slide_${i + 1}.html`);
      fs.writeFileSync(tmp, doc);
      await page.goto('file://' + tmp);
      await page.evaluate(() => document.fonts.ready);
      // Checagem de estouro: nenhum bloco pode passar da área útil.
      const over = await page.evaluate(() => { const w = document.querySelector('.wrap'); return w.scrollHeight > w.clientHeight + 2; });
      if (over) console.warn(`AVISO: conteúdo estourando em ${curso.pasta} slide ${i + 1}`);
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
})();
