/* Report de Performance · Instagram (seguidores)
   Preenchido à mão a partir de capturas de tela, enquanto a exportação do Meta
   não trouxer a coluna "Seguidores no Instagram". Quando trouxer, o conversor
   passa a gravar a coluna "seg" em dados-meta.js e o report usa ela.
   diario: dados da campanha de seguidores no Gerenciador de Anúncios.
     d = dia · seg = seguidores no Instagram · vis = visitas ao perfil (resultado da campanha)
     g = valor gasto · im = impressões · eng = engajamento com a Página · parcial = dia ainda em andamento
   perfil: Insights do perfil no Instagram (o gráfico de lá tem 2 dias de atraso). */
window.RP_INSTAGRAM = {
  campanha: 'META_ADS_SEGUIDORES_PROPS_ENG_VAP_CPC_ALWAYS-ON',
  inicio: '2026-10-20',
  diario: [
    { d: '2026-10-20', seg: 23, vis: 72, g: 7.98, im: 1092, eng: 465 },
    { d: '2026-10-21', seg: 22, vis: 82, g: 14.51, im: 1789, eng: 618 },
    { d: '2026-10-22', seg: 13, vis: 42, g: 6.73, im: 857, eng: 286, parcial: true }
  ],
  perfil: {
    data: '2026-10-22',
    total: 1230,
    antes: { ini: '2026-08-01', fim: '2026-10-19', novos: 257, dias: 80 },
    dia20: 29,
    cidades: [['São Paulo, SP',19.5],['Rio de Janeiro, RJ',8.3],['Florianópolis, SC',4.8],['Curitiba, PR',2.6],['Belo Horizonte, MG',1.9],
              ['Porto Alegre, RS',1.9],['Salvador, BA',1.3],['Campinas, SP',1.2],['Balneário Camboriú, SC',1.1],['Fortaleza, CE',1.1]],
    brasil: 95.5
  },
  fontes: [
    { id: 'ig-campanha-2026-10-22', plataforma: 'meta', arquivo: 'Captura do Gerenciador de Anúncios · campanha de seguidores por dia', recebido: '2026-10-22',
      ini: '2026-10-20', fim: '2026-10-22', nivel: 'campanha × dia', linhas: 3, gastoSoma: 29.22, conferencia: '20 e 21/10 conferem',
      observacao: 'Seguidores e visitas ao perfil. O investimento de 20 e 21/10 é igual ao da exportação do Meta. 22/10 é parcial: a linha de total da captura (R$ 29,15 e 3.728 impressões) ficou um pouco atrás da soma dos dias (R$ 29,22 e 3.738), porque o dia ainda estava sendo atualizado.' },
    { id: 'ig-perfil-2026-10-22', plataforma: 'meta', arquivo: 'Captura do Instagram · Insights do perfil (público)', recebido: '2026-10-22',
      ini: '2026-08-01', fim: '2026-10-20', nivel: 'perfil', linhas: null, gastoSoma: null, conferencia: 'Captura de tela',
      observacao: 'Novos seguidores por dia (todas as origens), base total e cidades. O gráfico do Instagram vai até dois dias antes da captura.' }
  ]
};
