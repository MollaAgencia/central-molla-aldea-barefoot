/*
  Report de Performance · Aldea Barefoot · Molla
  ------------------------------------------------------------
  REGISTRO PERMANENTE: acontecimentos, recomendações de negativação e plano de ação.
  Este arquivo só cresce. Nada é apagado: quando algo muda, acrescente uma linha
  no "historico" do item (data, status, quem, nota) e atualize o "status".

  Status de negativação: Pendente · Aprovada · Rejeitada · Implementada
  (só passa de Pendente depois da validação de Marina, Flávio ou Juliano).
  Status do plano: Realizada · Em andamento · Recomendada · Aguardando aprovação · Rejeitada
  Origem de cada informação: D = dado fornecido · C = métrica calculada · A = interpretação/análise · R = registro da Molla
*/

window.RP_REGISTRO = {

  /* ---------------------------------------------------------------- Acontecimentos
     tipo: campanha · mensuracao · metodologia · marco · preparacao
     fim: último dia (para períodos) · marco: rótulo curto que aparece no gráfico · corte: data de corte da régua (mensuração)
     etapa: rótulo curto para a linha do tempo do capítulo 1 (Onde estávamos) */
  eventos: [
    { data: '2026-09-15', tipo: 'marco', plataforma: 'ambas', titulo: 'Diagnóstico e plano de mídia paga apresentados', etapa: 'Diagnóstico apresentado',
      texto: 'Ponto de partida do trabalho. O diagnóstico cobre 01/06 a 14/09/2026 e fica como referência histórica; seus números não são somados aos deste report.', origem: 'R' },
    { data: '2026-09-01', fim: '2026-09-30', tipo: 'marco', plataforma: 'ambas', titulo: 'Setembro: mês de referência', etapa: 'Setembro, a referência',
      texto: 'Mês completo mais recente com a estrutura de campanhas anterior, já dentro da parceria. É a base de comparação das próximas edições.', origem: 'R' },
    { data: '2026-10-03', fim: '2026-10-14', tipo: 'preparacao', plataforma: 'meta', titulo: 'Preparação da nova estrutura de campanhas', etapa: 'Preparação, sem anúncios',
      texto: 'Período dedicado à preparação da nova estrutura: revisão das audiências, ajustes de tags e mensuração, curadoria e adequação dos criativos e planejamento das campanhas. O período incluiu o feriado de 12/10. Sem anúncios no ar no Meta nesses dias.', origem: 'R' },
    { data: '2026-10-14', tipo: 'campanha', plataforma: 'ambas', titulo: 'Nova estrutura de campanhas no ar', etapa: 'Nova estrutura no ar',
      texto: 'Meta: campanha de tráfego com públicos de interesse (prospecção) e de visitantes do site (remarketing). Google: nova Search por intenção de busca (marca, barefoot e transição). Primeira entrega no Meta em 15/10.', origem: 'R', marco: 'Nova estrutura' },
    { data: '2026-10-14', tipo: 'mensuracao', plataforma: 'google', titulo: 'Revisão da mensuração de conversões',
      texto: 'A compra concluída passa a ser a conversão principal; carrinho e checkout seguem medidos como sinais secundários. Em andamento. A data de corte da nova régua será registrada aqui ao final.', origem: 'R', pendente: true },
    { data: '2026-10-20', tipo: 'campanha', plataforma: 'meta', titulo: 'Campanha de seguidores no ar', etapa: 'Campanha de seguidores',
      texto: 'Campanha para levar pessoas ao perfil do Instagram e ganhar seguidores, com os vídeos A2 e A3. Gera visitas e cliques de custo mais baixo e não é comparada às campanhas de tráfego e vendas.', origem: 'R', marco: 'Seguidores' },
    { data: '2026-10-22', tipo: 'metodologia', plataforma: 'meta', titulo: 'Critérios de atribuição de vendas',
      texto: 'As campanhas do Meta usam critérios diferentes para atribuir uma venda a um anúncio (prazo e tipo de interação). Comparações de vendas entre campanhas pedem cautela.', origem: 'R' },
    { data: '2026-10-22', tipo: 'metodologia', plataforma: 'google', titulo: 'Google consolidado por campanha nesta edição',
      texto: 'A exportação desta edição traz o período inteiro por campanha. A partir da próxima, com dados diários e valor de venda, o report passa a mostrar evolução diária e retorno sobre investimento do Google.', origem: 'R' },
    { data: '2026-10-22', tipo: 'marco', plataforma: 'ambas', titulo: 'Report 01 publicado', etapa: 'Report 01',
      texto: 'Primeira edição: setembro como referência e primeira semana da nova estrutura.', origem: 'R' }
  ],

  /* ---------------------------------------------------------------- Negativação
     Uma recomendação por linha. "termos" pode ter um ou vários.
     investimento/cliques/conv: só quando vierem do relatório de termos de pesquisa. */
  negativacao: [
    { id: 'N01', termos: ['infantil', 'criança', 'kids', 'bebê', 'menino', 'menina'], familia: 'Infantil',
      origem: 'Plano de ativação Google Ads (15/10) · lista preventiva', campanha: 'Todas (lista compartilhada ALDEA_NEGATIVAS_CONTA)',
      tipo: 'Frase', nivel: 'Conta (lista compartilhada)', investimento: null, cliques: null, conv: null,
      justificativa: 'Público fora do produto: a Aldea não vende calçado infantil.',
      status: 'Pendente', historico: [
        { data: '2026-10-15', status: 'Proposta', por: 'Molla', nota: 'Incluída no plano de ativação do Google Ads.' },
        { data: '2026-10-22', status: 'Pendente', por: 'Molla', nota: 'Levada para validação de Marina, Flávio e Juliano.' } ] },
    { id: 'N02', termos: ['sandália', 'chinelo', 'bota', 'mocassim', 'sapatilha feminina', 'papete', 'sapato social', 'salto', 'couro'], familia: 'Outros calçados',
      origem: 'Plano de ativação Google Ads (15/10) · lista preventiva', campanha: 'Todas (lista compartilhada ALDEA_NEGATIVAS_CONTA)',
      tipo: 'Frase', nivel: 'Conta (lista compartilhada)', investimento: null, cliques: null, conv: null,
      justificativa: 'A Aldea vende um tênis. Buscas por outros tipos de calçado não viram compra.',
      status: 'Pendente', historico: [
        { data: '2026-10-15', status: 'Proposta', por: 'Molla', nota: 'Incluída no plano de ativação do Google Ads.' },
        { data: '2026-10-22', status: 'Pendente', por: 'Molla', nota: 'Levada para validação de Marina, Flávio e Juliano.' } ] },
    { id: 'N03', termos: ['corrida', 'academia', 'musculação', 'crossfit', 'treino', 'futebol', 'chuteira'], familia: 'Esporte e academia',
      origem: 'Plano de ativação Google Ads (15/10) · lista preventiva', campanha: 'Todas (lista compartilhada ALDEA_NEGATIVAS_CONTA)',
      tipo: 'Frase', nivel: 'Conta (lista compartilhada)', investimento: null, cliques: null, conv: null,
      justificativa: 'Território de marcas esportivas, fora do posicionamento atual. Ponto para a Aldea decidir: "corrida" sai da lista se houver interesse em anunciar uma página de corrida.',
      status: 'Pendente', historico: [
        { data: '2026-10-15', status: 'Proposta', por: 'Molla', nota: 'Incluída no plano de ativação do Google Ads.' },
        { data: '2026-10-22', status: 'Pendente', por: 'Molla', nota: 'Levada para validação de Marina, Flávio e Juliano.' } ] },
    { id: 'N04', termos: ['ortopédico', 'ortopédica', 'fascite', 'joanete', 'esporão', 'hálux', 'diabético'], familia: 'Saúde',
      origem: 'Plano de ativação Google Ads (15/10) · lista preventiva', campanha: 'Todas (lista compartilhada ALDEA_NEGATIVAS_CONTA)',
      tipo: 'Frase', nivel: 'Conta (lista compartilhada)', investimento: null, cliques: null, conv: null,
      justificativa: 'O anúncio não pode atribuir condição de saúde (política do Google). Parte desses termos pode já estar entre as 261 negativas atuais; repetidas são ignoradas.',
      status: 'Pendente', historico: [
        { data: '2026-10-15', status: 'Proposta', por: 'Molla', nota: 'Incluída no plano de ativação do Google Ads.' },
        { data: '2026-10-22', status: 'Pendente', por: 'Molla', nota: 'Levada para validação de Marina, Flávio e Juliano.' } ] },
    { id: 'N05', termos: ['mercado livre', 'shopee', 'aliexpress', 'shein', 'barato', 'usado', 'réplica'], familia: 'Preço e marketplaces',
      origem: 'Plano de ativação Google Ads (15/10) · lista preventiva', campanha: 'Todas (lista compartilhada ALDEA_NEGATIVAS_CONTA)',
      tipo: 'Frase', nivel: 'Conta (lista compartilhada)', investimento: null, cliques: null, conv: null,
      justificativa: 'Quem procura o mais barato ou outra loja dificilmente compra um tênis de R$ 520 no site.',
      status: 'Pendente', historico: [
        { data: '2026-10-15', status: 'Proposta', por: 'Molla', nota: 'Incluída no plano de ativação do Google Ads.' },
        { data: '2026-10-22', status: 'Pendente', por: 'Molla', nota: 'Levada para validação de Marina, Flávio e Juliano.' } ] },
    { id: 'N06', termos: ['como fazer', 'vaga', 'emprego'], familia: 'Pesquisa sem compra',
      origem: 'Plano de ativação Google Ads (15/10) · lista preventiva', campanha: 'Todas (lista compartilhada ALDEA_NEGATIVAS_CONTA)',
      tipo: 'Frase', nivel: 'Conta (lista compartilhada)', investimento: null, cliques: null, conv: null,
      justificativa: 'Intenção informativa ou de trabalho, não de compra.',
      status: 'Pendente', historico: [
        { data: '2026-10-15', status: 'Proposta', por: 'Molla', nota: 'Incluída no plano de ativação do Google Ads.' },
        { data: '2026-10-22', status: 'Pendente', por: 'Molla', nota: 'Levada para validação de Marina, Flávio e Juliano.' } ] },
    { id: 'N07', termos: ['feminino', 'masculino', 'zero drop', 'drop zero'], familia: 'Estrutural · entre grupos do G2',
      origem: 'Plano de ativação Google Ads (15/10) · ação A17', campanha: 'VENDAS_SEARCH_AON_PROPS_BAREFOOT · grupo genérico (barefoot)',
      tipo: 'Frase', nivel: 'Grupo de anúncios', investimento: null, cliques: null, conv: null,
      justificativa: 'Não bloqueia buscas da conta: só direciona cada busca para o grupo com o anúncio mais específico (feminino, masculino, zero drop).',
      status: 'Pendente', historico: [
        { data: '2026-10-15', status: 'Proposta', por: 'Molla', nota: 'Ação A17 do plano de ativação.' },
        { data: '2026-10-22', status: 'Pendente', por: 'Molla', nota: 'Levada para validação de Marina, Flávio e Juliano.' } ] },
    { id: 'N08', termos: ['aldea'], familia: 'Estrutural · marca fora do G1',
      origem: 'Plano de ativação Google Ads (15/10) · ação A17', campanha: 'Campanhas Barefoot, Transição e Black Friday',
      tipo: 'Frase', nivel: 'Campanha', investimento: null, cliques: null, conv: null,
      justificativa: 'Direciona a busca pela marca para a campanha de Marca, onde o custo tende a ser menor e a leitura de resultado fica mais limpa.',
      status: 'Pendente', historico: [
        { data: '2026-10-15', status: 'Proposta', por: 'Molla', nota: 'Ação A17 do plano de ativação.' },
        { data: '2026-10-22', status: 'Pendente', por: 'Molla', nota: 'Levada para validação de Marina, Flávio e Juliano.' } ] }
  ],

  /* ---------------------------------------------------------------- Plano de ação
     grupo: feita (já realizada) · recomendada (Molla executa) · aprovacao (depende da Aldea) */
  plano: [
    { id: 'P01', edicao: 'r01', grupo: 'feita', plataforma: 'Meta e Google', acao: 'Colocar a nova estrutura de campanhas no ar',
      objetivo: 'Separar a atração de público novo da retomada de quem já visitou o site, no Meta, e organizar a Search do Google por intenção de busca.',
      prioridade: 'Alta', responsavel: 'Molla', prazo: '14/10', status: 'Realizada',
      resultado: 'Primeira semana no Meta: 279 cliques e custo por clique de R$ 0,80. Leitura de vendas a partir do Report 02, com pelo menos 14 dias de dados.',
      historico: [ { data: '2026-10-14', status: 'Realizada', nota: 'Campanhas no ar.' } ] },
    { id: 'P02', edicao: 'r01', grupo: 'recomendada', plataforma: 'Google e GA4', acao: 'Concluir a revisão da mensuração de conversões',
      objetivo: 'Fazer a coluna de conversões do Google refletir vendas concluídas, com o valor do pedido, para medir custo por venda e retorno com segurança.',
      prioridade: 'Alta', responsavel: 'Molla', prazo: 'Em andamento', status: 'Em andamento',
      resultado: null,
      historico: [ { data: '2026-10-14', status: 'Em andamento', nota: 'Revisão de tags, eventos e disparos iniciada.' } ] },
    { id: 'P03', edicao: 'r01', grupo: 'recomendada', plataforma: 'Google', acao: 'Registrar a data de corte da nova régua e ampliar a exportação de dados',
      objetivo: 'Separar com clareza dados antigos e novos e incluir no report a evolução diária, o valor das vendas, as conversões por tipo e os termos de pesquisa.',
      prioridade: 'Alta', responsavel: 'Molla', prazo: 'Report 02', status: 'Recomendada',
      resultado: null,
      historico: [ { data: '2026-10-22', status: 'Recomendada', nota: 'Report 01.' } ] },
    { id: 'P04', edicao: 'r01', grupo: 'recomendada', plataforma: 'Google', acao: 'Concluir a migração da Search para a nova estrutura',
      objetivo: 'Concentrar o investimento nas campanhas organizadas por intenção de busca, de forma gradual e sem perder o histórico da conta.',
      prioridade: 'Alta', responsavel: 'Molla', prazo: 'Próximas semanas', status: 'Recomendada',
      resultado: null,
      historico: [ { data: '2026-10-15', status: 'Recomendada', nota: 'Previsto no plano de ativação.' }, { data: '2026-10-22', status: 'Recomendada', nota: 'Report 01.' } ] },
    { id: 'P05', edicao: 'r01', grupo: 'recomendada', plataforma: 'Meta', acao: 'Validar os eventos de compra no Meta',
      objetivo: 'Parte da revisão de mensuração: garantir que carrinho, checkout e compra sejam registrados corretamente antes da primeira leitura de vendas.',
      prioridade: 'Alta', responsavel: 'Molla', prazo: 'Esta semana', status: 'Recomendada',
      resultado: null,
      historico: [ { data: '2026-10-22', status: 'Recomendada', nota: 'Report 01.' } ] },
    { id: 'P06', edicao: 'r01', grupo: 'recomendada', plataforma: 'Meta', acao: 'Ativar o remarketing de quem chegou ao carrinho ou ao checkout',
      objetivo: 'Falar com quem já demonstrou intenção de compra nos últimos 14 dias, com os carrosséis A5 e A7, já produzidos, e chamada para compra.',
      prioridade: 'Alta', responsavel: 'Molla', prazo: 'Até 31/10', status: 'Recomendada',
      resultado: null,
      historico: [ { data: '2026-10-22', status: 'Recomendada', nota: 'Report 01.' } ] },
    { id: 'P07', edicao: 'r01', grupo: 'recomendada', plataforma: 'Meta', acao: 'Testar o vídeo A3 também para públicos novos',
      objetivo: 'O A3 tem a melhor retenção entre os vídeos. Teste lado a lado com o A2, com a mesma verba, e leitura em 14 dias.',
      prioridade: 'Média', responsavel: 'Molla', prazo: 'Até 31/10', status: 'Recomendada',
      resultado: null,
      historico: [ { data: '2026-10-22', status: 'Recomendada', nota: 'Report 01.' } ] },
    { id: 'P08', edicao: 'r01', grupo: 'aprovacao', plataforma: 'Google', acao: 'Validar a lista de negativas preventivas (N01 a N08)',
      objetivo: 'Oito recomendações, 44 termos. Nenhuma entra na conta antes da validação.',
      prioridade: 'Alta', responsavel: 'Marina, Flávio e Juliano', prazo: 'Próxima reunião', status: 'Aguardando aprovação',
      resultado: null,
      historico: [ { data: '2026-10-22', status: 'Aguardando aprovação', nota: 'Report 01.' } ] },
    { id: 'P09', edicao: 'r01', grupo: 'aprovacao', plataforma: 'Google', acao: 'Aprovar a rotina semanal de termos de pesquisa e negativação',
      objetivo: 'Combinar quem valida, por qual canal e em quanto tempo (proposta no capítulo 5).',
      prioridade: 'Alta', responsavel: 'Marina, Flávio e Juliano', prazo: 'Próxima reunião', status: 'Aguardando aprovação',
      resultado: null,
      historico: [ { data: '2026-10-22', status: 'Aguardando aprovação', nota: 'Report 01.' } ] },
    { id: 'P10', edicao: 'r01', grupo: 'aprovacao', plataforma: 'Meta e Google', acao: 'Decidir a Black Friday: oferta, período e verba extra',
      objetivo: 'Período sugerido de 13/11 a 30/11. Com a decisão até 30/10, os anúncios sobem aprovados a tempo.',
      prioridade: 'Alta', responsavel: 'Aldea', prazo: 'Até 30/10', status: 'Aguardando aprovação',
      resultado: null,
      historico: [ { data: '2026-10-15', status: 'Aguardando aprovação', nota: 'Previsto no plano de ativação.' } ] },
    { id: 'P11', edicao: 'r01', grupo: 'aprovacao', plataforma: 'Meta e Google', acao: 'Confirmar as regras comerciais dos anúncios',
      objetivo: 'Troca grátis pode ser anunciada? O cupom acumula com o desconto no Pix? O PRIMEIRACOMPRA10 segue ativo? Os textos de promoção dependem disso.',
      prioridade: 'Média', responsavel: 'Aldea', prazo: 'Próxima reunião', status: 'Aguardando aprovação',
      resultado: null,
      historico: [ { data: '2026-10-15', status: 'Aguardando aprovação', nota: 'Previsto no plano de ativação.' } ] },
    { id: 'P12', edicao: 'r01', grupo: 'aprovacao', plataforma: 'Google', acao: 'Confirmar estoque de Preto e Cinza para ativar o Shopping',
      objetivo: 'A vitrine de produtos do Google depende do feed com numeração disponível.',
      prioridade: 'Média', responsavel: 'Aldea', prazo: 'Próxima reunião', status: 'Aguardando aprovação',
      resultado: null,
      historico: [ { data: '2026-10-15', status: 'Aguardando aprovação', nota: 'Previsto no plano de ativação.' } ] }
  ]
};
