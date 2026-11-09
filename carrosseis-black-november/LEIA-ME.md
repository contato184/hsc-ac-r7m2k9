# Carrosséis Black November 2026: cursos EAD

Quatro carrosséis de 5 slides, formato LinkedIn 4:5 (1080 x 1350), PNG e PDF em cada pasta.
Vídeo com motion (MP4 4:5, 26 s, sem áudio) em cada pasta: `video-<curso>.mp4`. Para regenerar os vídeos: `node carrosseis-black-november/gerar_carrosseis.js --video` (cerca de 5 min por curso).

Para regenerar após ajustes de texto: `node carrosseis-black-november/gerar_carrosseis.js` (os textos ficam no início do script).

| Pasta | Curso |
|---|---|
| mdsap | Auditor Líder MDSAP |
| udi | UDI: Identificação Única de Dispositivos Médicos |
| avaliacao-clinica | Avaliação Clínica ISO 14155:2020 |
| usabilidade | Engenharia de Usabilidade IEC 62366-1:2015 |

Estrutura de cada carrossel (versão 3): 1 gancho para o público certo; 2 o que está em jogo (fatos regulatórios); 3 o que você recebe; 4 antes e depois do curso; 5 oferta Black November com garantias e chamada.

Estratégia, calendário, legendas prontas, ganchos para teste A/B, métricas e checklist de publicação: `estrategia-campanha.md`.

## Origem das informações

- Slide 2: fatos públicos das normas e regulamentos (MDSAP e uso dos relatórios por Health Canada, FDA e ANVISA, RDC 591/2021, 21 CFR Part 830, EU MDR Art. 27, ISO 14155:2020, IEC 62366-1, ISO 14971).
- Slides 3 a 5: itens das notas do projeto confirmados pelo Rafael em 09/11/2026 ("tem tudo isso"), não conferidos na Cademí:
  - MDSAP: 6 módulos, 104 videoaulas, apostila e caderno de exercícios por módulo, preparação para a prova, kit de simulação no Módulo 6.
  - UDI: laboratório prático e kit, novos módulos liberados sem custo adicional.
  - Avaliação Clínica: conteúdo atualizado em 2026, materiais de apoio.
  - Usabilidade: 32 videoaulas, materiais de apoio.
  - Todos: 1 ano de acesso ao EAD; suporte pelo WhatsApp e pela plataforma (horário 8h às 17h das notas); quiz por módulo, prova final 80%, certificado HSC Global com QR Code.
- Sem nomes de instrutores, a pedido do Rafael. Sem depoimentos.

## Antes de publicar (revisão do Rafael)

1. Revisão técnica dos fatos dos slides 2 e 3.
2. Preço fora dos slides: os valores informados aguardam confirmação do Nicolas e do Artur. O slide 5 aponta para o link nos comentários. Com o preço aprovado, é possível incluir "de / por" no slide 5.
3. Prazo de acesso: 1 ano para todos os cursos EAD (Rafael, 09/11). Substitui os 6 meses do carrossel anterior do MDSAP. A validade na Cademí precisa ser ajustada para o mesmo valor.
4. UDI: o Módulo 3 ainda não existe. O carrossel fala em "novos módulos incluídos" e não em quantidade de módulos nem em curso completo.
5. Avaliação Clínica: "atualização 2026" aparece sem detalhar o conteúdo. Os Módulos 3 a 5 precisam estar liberados antes da venda.
6. Logo: versão branca gerada a partir do SVG azul do material do instrutor (cores trocadas para branco e prata clara). Substituir pelo arquivo oficial branco quando o Higor enviar.
7. Fonte Blauer Nue: extraída dos materiais do instrutor já existentes no repositório.
8. Vermelho usado apenas na etiqueta BLACK NOVEMBER.
