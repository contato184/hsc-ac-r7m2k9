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

// Itens comuns confirmados pelo Rafael em 09/11/2026: 1 ano de acesso ao EAD,
// suporte pelo WhatsApp e pela plataforma, sem nomes de instrutores.
const certificado = ['Certificado verificável', 'Certificado HSC Global com QR Code de validação, pronto para o currículo e o LinkedIn.'];
const ritmo = ['1 ano de acesso', 'Assista, pause e revise quando precisar, no seu ritmo.'];
const suporte = ['Suporte ao aluno', 'Dúvidas atendidas pelo WhatsApp e pela plataforma, das 8h às 17h.'];

const cta = recap => ({
  tipo: 'cta',
  titulo: 'Leve tudo isso com a condição Black November',
  recap,
  texto: 'Acesse o link nos comentários e confira a oferta.',
});

const CURSOS = [
  {
    pasta: 'mdsap',
    slides: [
      { tipo: 'capa', kicker: 'Curso EAD', titulo: 'Auditor Líder MDSAP', sub: 'Prepare-se para auditar no programa aceito por ANVISA, FDA, Health Canada, TGA e MHLW e PMDA.' },
      {
        tipo: 'fatos', eyebrow: 'Por que o MDSAP importa', titulo: 'Uma auditoria aceita por 5 autoridades regulatórias',
        itens: [
          ['5 países', 'Brasil, Estados Unidos, Canadá, Austrália e Japão, com base na ISO 13485:2016.'],
          ['Desde 2019', 'Health Canada exige certificado MDSAP para dispositivos das classes II a IV.'],
          ['3 anos', 'Ciclo com auditoria inicial, vigilâncias anuais e recertificação.'],
          ['7 processos', 'Da gestão às compras, cada um com requisitos próprios de cada país.'],
        ],
      },
      {
        tipo: 'recebe', eyebrow: 'O que você recebe', titulo: 'Tudo o que está incluído no curso',
        itens: [
          ['6 módulos e 104 videoaulas', 'Conteúdo completo do programa MDSAP.'],
          ['Apostila de cada módulo', 'Material de consulta para estudar e revisar.'],
          ['Caderno de exercícios', 'Exercícios em cada módulo para aplicar o conteúdo.'],
          ['Preparação para a prova', 'Material de revisão antes da avaliação final.'],
          ['Kit de simulação de auditoria', 'Prática de uma auditoria completa no Módulo 6.'],
          ['Quizzes e prova final', 'Avaliação por módulo e prova com nota mínima de 80%.'],
        ],
      },
      {
        tipo: 'grade', eyebrow: 'O que você ganha', titulo: 'Mais preparo para atuar como auditor',
        itens: [['Prática antes do campo', 'Simule uma auditoria completa antes de auditar de verdade.'], certificado, ritmo, suporte],
      },
      cta('6 módulos, 104 videoaulas, apostilas, cadernos de exercícios, kit de simulação, certificado e 1 ano de acesso.'),
    ],
  },
  {
    pasta: 'udi',
    slides: [
      { tipo: 'capa', kicker: 'Curso EAD', titulo: 'UDI: Identificação Única de Dispositivos Médicos', sub: 'Aprenda a implantar o UDI conforme a RDC 591/2021 e os padrões GS1.' },
      {
        tipo: 'fatos', eyebrow: 'Por que o tema é urgente', titulo: 'UDI é exigência regulatória em vários mercados',
        itens: [
          ['Brasil', 'A RDC 591/2021 da ANVISA institui o UDI, com implantação escalonada por classe de risco.'],
          ['Estados Unidos', 'O FDA exige UDI pelo 21 CFR Part 830.'],
          ['União Europeia', 'O EU MDR traz o UDI no Artigo 27.'],
          ['UDI-DI e UDI-PI', 'Identificação do modelo e da produção: lote, série e validade.'],
        ],
      },
      {
        tipo: 'recebe', eyebrow: 'O que você recebe', titulo: 'Tudo o que está incluído no curso',
        itens: [
          ['Videoaulas em módulos', 'RDC 591/2021 e padrões GS1 explicados passo a passo.'],
          ['Laboratório prático de UDI', 'Monte e interprete códigos UDI em exercícios guiados.'],
          ['Kit do laboratório', 'Material de apoio para repetir a prática na sua empresa.'],
          ['Novos módulos incluídos', 'Conteúdos liberados durante o acesso, sem custo adicional.'],
          ['Quizzes e prova final', 'Avaliação por módulo e prova com nota mínima de 80%.'],
          ['Certificado HSC Global', 'Com QR Code de validação.'],
        ],
      },
      {
        tipo: 'grade', eyebrow: 'O que você ganha', titulo: 'Segurança para implantar o UDI',
        itens: [['Prática aplicável', 'Treine a estrutura do código no laboratório antes de levar ao seu portfólio.'], ['Curso que cresce', 'Novos módulos liberados sem pagar de novo.'], ritmo, suporte],
      },
      cta('Videoaulas, laboratório prático, kit de apoio, novos módulos, certificado e 1 ano de acesso.'),
    ],
  },
  {
    pasta: 'avaliacao-clinica',
    slides: [
      { tipo: 'capa', kicker: 'Curso EAD', titulo: 'Avaliação Clínica <span class="nw">ISO 14155:2020</span>', sub: 'Boas práticas clínicas para investigações com dispositivos médicos, com conteúdo atualizado em 2026.' },
      {
        tipo: 'fatos', eyebrow: 'Destaques da edição 2020', titulo: 'O que a norma passou a exigir',
        itens: [
          ['Risco', 'Abordagem baseada em risco ao longo de toda a investigação, incluindo o monitoramento.'],
          ['Transparência', 'Registro da investigação em base de dados de acesso público.'],
          ['Estágios', 'Orientação para as fases piloto, pivotal e pós comercialização.'],
          ['Ética', 'Orientações específicas para comitês de ética.'],
        ],
      },
      {
        tipo: 'recebe', eyebrow: 'O que você recebe', titulo: 'Tudo o que está incluído no curso',
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
        tipo: 'grade', eyebrow: 'O que você ganha', titulo: 'Base sólida para investigações clínicas',
        itens: [['Visão completa', 'Requisitos da norma do planejamento ao relatório final.'], certificado, ritmo, suporte],
      },
      cta('Videoaulas, conteúdo atualizado em 2026, materiais de apoio, certificado e 1 ano de acesso.'),
    ],
  },
  {
    pasta: 'usabilidade',
    slides: [
      { tipo: 'capa', kicker: 'Curso EAD', titulo: 'Engenharia de Usabilidade <span class="nw">IEC 62366-1:2015</span>', sub: 'Como reduzir o risco de erro de uso desde o projeto do dispositivo.' },
      {
        tipo: 'fatos', eyebrow: 'Etapas centrais da norma', titulo: 'O que compõe o processo de usabilidade',
        itens: [
          ['Especificação de uso', 'Usuários, ambiente de uso e princípio de funcionamento.'],
          ['Cenários de uso', 'Perigos e situações perigosas relacionados ao uso.'],
          ['Formativa e somativa', 'Avaliações durante o projeto e validação final da interface.'],
          ['ISO 14971', 'Integração com o processo de gerenciamento de risco.'],
        ],
      },
      {
        tipo: 'recebe', eyebrow: 'O que você recebe', titulo: 'Tudo o que está incluído no curso',
        itens: [
          ['32 videoaulas', 'O processo de engenharia de usabilidade passo a passo.'],
          ['Materiais de apoio', 'Arquivos para download e consulta.'],
          ['Quizzes por módulo', 'Questões para fixar cada tema.'],
          ['Prova final', 'Nota mínima de 80% para aprovação.'],
          ['Certificado HSC Global', 'Com QR Code de validação.'],
          ['1 ano de acesso', 'Para estudar e revisar no seu ritmo.'],
        ],
      },
      {
        tipo: 'grade', eyebrow: 'O que você ganha', titulo: 'Projetos mais seguros e bem documentados',
        itens: [['Projeto mais seguro', 'Identifique riscos de erro de uso desde as primeiras fases.'], ['Documentação', 'Saiba o que compor no arquivo de engenharia de usabilidade.'], certificado, suporte],
      },
      cta('32 videoaulas, materiais de apoio, quizzes, prova final, certificado e 1 ano de acesso.'),
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
  if (s.tipo === 'recebe') return `
   <div class="wrap">
    <div class="eyebrow">${s.eyebrow}</div><h1>${s.titulo}</h1>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">
     ${s.itens.map(([t, d], i) => `<div class="card" style="padding:28px 28px">
       <div style="display:flex;gap:16px;align-items:center;margin-bottom:12px">
        <div style="width:48px;height:48px;border-radius:50%;background:${C.accent};display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;flex:none">${i + 1}</div>
        <div style="font-size:32px;font-weight:700;line-height:1.12">${t}</div></div>
       <div style="font-size:27px;color:${C.prataC};line-height:1.28">${d}</div></div>`).join('')}
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
    <h1 style="font-size:76px;margin-top:48px">${s.titulo}</h1>
    ${s.recap ? `<p style="font-size:34px;line-height:1.35;color:${C.off};border-left:6px solid ${C.accent};padding-left:24px;margin-bottom:28px">${s.recap}</p>` : ''}
    <p style="font-size:34px;line-height:1.35;color:${C.prataC};margin-bottom:48px">${s.texto}</p>
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
