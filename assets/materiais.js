/*
  Central do Cliente · Aldea Barefoot · Molla
  ------------------------------------------------------------
  Lista de categorias e materiais exibidos na Central.

  Para publicar um material novo:
  1. Salve o HTML dentro da pasta "materiais/" (ex.: materiais/report-outubro-2026.html).
  2. Cole no topo do <head> do arquivo, logo após <meta charset="UTF-8">, a linha:
     <script src="../assets/guarda.js"></script>
  3. Acrescente um bloco abaixo, em MATERIAIS, com os dados do material.
     O mais recente aparece primeiro dentro de cada categoria (ordenado por "data").
*/

window.CATEGORIAS = [
  {
    id: 'planejamento',
    nome: 'Planejamento',
    descricao: 'Diagnóstico, plano de mídia, estrutura de campanhas e próximos passos.',
    icone: 'M4 19h16M4 15l4-4 4 3 7-8M15 6h4v4'
  },
  {
    id: 'conteudos',
    nome: 'Conteúdos',
    descricao: 'Curadoria de peças, briefings de criativo e conteúdos para os anúncios.',
    icone: 'M4 5h16v14H4zM4 15l5-5 4 4 3-3 4 4M15 9h.01'
  },
  {
    id: 'reports',
    nome: 'Reports',
    descricao: 'Reports semanais, quinzenais e mensais de Meta Ads e Google Ads, com histórico.',
    icone: 'M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6'
  },
  {
    id: 'analises',
    nome: 'Análises e estudos',
    descricao: 'Estudos de mercado, concorrência, consumidor e análises pontuais.',
    icone: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-5-5'
  }
];

window.MATERIAIS = [
  {
    titulo: 'Report de Performance · Mídia paga',
    resumo: 'Resultados de Meta Ads e Google Ads, mudanças na mensuração, termos de pesquisa, recomendações e decisões. Cada edição fica guardada no histórico.',
    categoria: 'reports',
    arquivo: 'materiais/report-performance.html',
    data: '2026-10-22',
    dataTexto: 'Report 01 · Outubro de 2026',
    detalhes: ['Período 01/09 a 21/10/2026', 'Linha de base e 1ª semana da nova estrutura']
  },
  {
    titulo: 'Curadoria de conteúdos para mídia paga',
    resumo: 'Quais conteúdos já publicados no Instagram da Aldea podem entrar nas campanhas agora, quais precisam de ajuste e quais seguem no orgânico.',
    categoria: 'conteudos',
    arquivo: 'materiais/curadoria-conteudos.html',
    data: '2026-10-01',
    dataTexto: 'Outubro de 2026',
    detalhes: ['Posts de 29/04 a 27/09/2026', '15 peças avaliadas']
  },
  {
    titulo: 'Diagnóstico e plano de mídia paga',
    resumo: 'O que os dados mostram hoje, onde o funil perde vendas e o que a Molla propõe para os próximos 90 dias.',
    categoria: 'planejamento',
    arquivo: 'materiais/diagnostico-plano-midia-paga.html',
    data: '2026-09-15',
    dataTexto: 'Setembro de 2026',
    detalhes: ['Período analisado 01/06 a 14/09/2026', '51 slides']
  }
];
