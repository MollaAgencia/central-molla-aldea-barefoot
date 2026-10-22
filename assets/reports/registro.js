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
     tipo: campanha · mensuracao · metodologia · marco */
  eventos: [
    { data: '2026-09-15', tipo: 'marco', plataforma: 'ambas', titulo: 'Diagnóstico e plano de mídia paga apresentados',
      texto: 'Base de comparação histórica (01/06 a 14/09/2026). Período em parte sobreposto ao deste report: os números do diagnóstico ficam como referência e não são somados aqui.', origem: 'R' },
    { data: '2026-10-02', tipo: 'campanha', plataforma: 'meta', titulo: 'Última entrega das campanhas antigas do Meta',
      texto: '[Vendas] Frio, [Vendas] Quente e [Leads] Lista de espera têm a última linha com investimento em 02/10.', origem: 'D' },
    { data: '2026-10-03', fim: '2026-10-14', tipo: 'campanha', plataforma: 'meta', titulo: 'Meta sem entrega por 12 dias',
      texto: 'Nenhuma linha com investimento entre 03/10 e 14/10 no arquivo exportado. Comparações que incluam esses dias ficam distorcidas.', origem: 'D' },
    { data: '2026-10-14', tipo: 'campanha', plataforma: 'ambas', titulo: 'Nova estrutura de campanhas no ar',
      texto: 'Meta: campanha META_ADS_PRIMEIRA-COMPRA-10 (tráfego) com conjuntos de interesses e visitantes do site. Google: campanhas VENDAS_SEARCH (Marca, Barefoot, Transição) e Demand Gen.', origem: 'R' },
    { data: '2026-10-15', tipo: 'campanha', plataforma: 'meta', titulo: 'Primeira entrega da nova estrutura no Meta',
      texto: 'Primeiro dia com investimento da campanha PRIMEIRA-COMPRA-10 no arquivo.', origem: 'D' },
    { data: '2026-10-14', tipo: 'mensuracao', plataforma: 'google', titulo: 'Revisão das conversões do Google Ads iniciada',
      texto: 'Compra concluída passa a ser a conversão principal; carrinho e checkout viram secundárias. Status: em andamento. Data de corte da nova régua: a confirmar e registrar aqui quando concluída.', origem: 'R', pendente: true },
    { data: '2026-10-20', tipo: 'campanha', plataforma: 'meta', titulo: 'Campanha de seguidores começa a rodar',
      texto: 'META_ADS_SEGUIDORES (objetivo engajamento) com os vídeos A2 e A3. Os cliques dessa campanha são baratos por natureza e não se comparam aos da campanha de tráfego.', origem: 'D' },
    { data: '2026-10-22', tipo: 'metodologia', plataforma: 'meta', titulo: 'Janelas de atribuição diferentes no mesmo arquivo',
      texto: 'Vendas e tráfego: 7 dias clique + 1 dia visualização + 1 dia visualização engajada. Lista de espera: 7 dias clique + 1 dia visualização. Seguidores: 1 dia clique. Compras de campanhas com janelas diferentes são somadas com essa ressalva.', origem: 'R' },
    { data: '2026-10-22', tipo: 'metodologia', plataforma: 'google', titulo: 'Google recebido só consolidado por campanha',
      texto: 'O arquivo do Google não traz o dia, o valor de conversão nem a ação de conversão. Por isso não há evolução diária, ROAS nem separação antes e depois da nova régua neste report.', origem: 'R' },
    { data: '2026-10-22', tipo: 'marco', plataforma: 'ambas', titulo: 'Report 01 publicado',
      texto: 'Primeira edição: linha de base e primeira semana da nova estrutura.', origem: 'R' }
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
      justificativa: 'Faz a busca pela marca cair só na campanha de Marca, onde o custo é menor e a leitura fica limpa. Também ajuda a destravar a campanha de Marca, que não teve impressões até 21/10.',
      status: 'Pendente', historico: [
        { data: '2026-10-15', status: 'Proposta', por: 'Molla', nota: 'Ação A17 do plano de ativação.' },
        { data: '2026-10-22', status: 'Pendente', por: 'Molla', nota: 'Levada para validação de Marina, Flávio e Juliano.' } ] }
  ],

  /* ---------------------------------------------------------------- Plano de ação
     grupo: feita (já realizada) · recomendada (Molla executa) · aprovacao (depende da Aldea) */
  plano: [
    { id: 'P01', edicao: 'r01', grupo: 'feita', plataforma: 'Meta e Google', acao: 'Colocar a nova estrutura de campanhas no ar',
      objetivo: 'Separar prospecção e remarketing no Meta e reorganizar a Search do Google por intenção (marca, barefoot, transição).',
      prioridade: 'Alta', responsavel: 'Molla', prazo: '14/10', status: 'Realizada',
      resultado: 'Primeira semana no Meta: R$ 224,59, 279 cliques, nenhuma compra ainda. No Google, as Search novas somaram 18 cliques e a de Marca não teve impressões. Leitura de compra no Report 02.',
      historico: [ { data: '2026-10-14', status: 'Realizada', nota: 'Campanhas no ar.' } ] },
    { id: 'P02', edicao: 'r01', grupo: 'recomendada', plataforma: 'Google e GA4', acao: 'Concluir a régua de conversão: só compra como principal, com valor do pedido',
      objetivo: 'Fazer a coluna Conversões mostrar venda real, para que o CPA e o ROAS do Google sejam confiáveis e o lance automático aprenda com compra.',
      prioridade: 'Alta', responsavel: 'Molla', prazo: 'Plano: 15 a 20/10', status: 'Em andamento',
      resultado: null, historico: [ { data: '2026-10-14', status: 'Em andamento', nota: 'Revisão de tags, eventos e disparos iniciada.' } ] },
    { id: 'P03', edicao: 'r01', grupo: 'recomendada', plataforma: 'Google', acao: 'Registrar a data de corte da nova régua e exportar o Google por dia',
      objetivo: 'Separar dado antigo de dado novo. Exportar: campanha × dia (com valor de conversão), conversões por ação de conversão, grupos, palavras-chave e termos de pesquisa.',
      prioridade: 'Alta', responsavel: 'Molla', prazo: 'Próximo report', status: 'Recomendada', resultado: null,
      historico: [ { data: '2026-10-22', status: 'Recomendada', nota: 'Report 01.' } ] },
    { id: 'P04', edicao: 'r01', grupo: 'recomendada', plataforma: 'Google', acao: 'Descobrir por que a campanha de Marca não teve impressões',
      objetivo: 'Conferir status das palavras, lance e parcela de impressões. Hipótese: a Search antiga ainda ativa responde pelas mesmas buscas de marca.',
      prioridade: 'Alta', responsavel: 'Molla', prazo: 'Esta semana', status: 'Recomendada', resultado: null,
      historico: [ { data: '2026-10-22', status: 'Recomendada', nota: 'Report 01.' } ] },
    { id: 'P05', edicao: 'r01', grupo: 'recomendada', plataforma: 'Google', acao: 'Pausar a Search antiga (Sales-Search-) quando as novas tiverem entrega',
      objetivo: 'As duas disputam as mesmas buscas. A antiga levou 80% do investimento do Google no período e todas as conversões registradas. Pausar, nunca excluir.',
      prioridade: 'Alta', responsavel: 'Molla', prazo: 'Depois da P04', status: 'Recomendada', resultado: null,
      historico: [ { data: '2026-10-15', status: 'Recomendada', nota: 'Ação A21 do plano de ativação.' }, { data: '2026-10-22', status: 'Recomendada', nota: 'Reforçada no Report 01.' } ] },
    { id: 'P06', edicao: 'r01', grupo: 'recomendada', plataforma: 'Meta', acao: 'Testar os eventos do pixel (carrinho, checkout e compra)',
      objetivo: 'Nenhum carrinho foi registrado na primeira semana da nova estrutura. Com 113 cliques de tráfego, ainda pode ser volume, mas a régua está sendo mexida e precisa de conferência.',
      prioridade: 'Alta', responsavel: 'Molla', prazo: 'Esta semana', status: 'Recomendada', resultado: null,
      historico: [ { data: '2026-10-22', status: 'Recomendada', nota: 'Report 01.' } ] },
    { id: 'P07', edicao: 'r01', grupo: 'recomendada', plataforma: 'Meta', acao: 'Subir o remarketing quente com os carrosséis A5 e A7',
      objetivo: 'Quem colocou no carrinho ou iniciou o checkout nos últimos 14 dias, com CTA Comprar agora. Os carrosséis já estão produzidos e ainda não rodaram.',
      prioridade: 'Alta', responsavel: 'Molla', prazo: 'Até 31/10', status: 'Recomendada', resultado: null,
      historico: [ { data: '2026-10-22', status: 'Recomendada', nota: 'Report 01.' } ] },
    { id: 'P08', edicao: 'r01', grupo: 'recomendada', plataforma: 'Meta', acao: 'Conferir o A3 dentro do conjunto de visitantes do site',
      objetivo: 'O anúncio A3 tem no nome o conjunto de interesses (PROPS_INTER), mas roda no conjunto de remarketing (RMKT_CONT-SITE). Ajustar a posição ou o nome, mantendo o Ad ID.',
      prioridade: 'Média', responsavel: 'Molla', prazo: 'Esta semana', status: 'Recomendada', resultado: null,
      historico: [ { data: '2026-10-22', status: 'Recomendada', nota: 'Report 01.' } ] },
    { id: 'P09', edicao: 'r01', grupo: 'recomendada', plataforma: 'Meta', acao: 'Testar o A3 também na prospecção (A2 x A3 no conjunto de interesses)',
      objetivo: 'O A3 retém mais (13,6% das impressões chegam a 25% do vídeo na campanha de seguidores, contra 7,8% do A2 na de tráfego). Vale medir o clique dele para quem ainda não conhece a marca.',
      prioridade: 'Média', responsavel: 'Molla', prazo: 'Até 31/10', status: 'Recomendada', resultado: null,
      historico: [ { data: '2026-10-22', status: 'Recomendada', nota: 'Report 01.' } ] },
    { id: 'P10', edicao: 'r01', grupo: 'recomendada', plataforma: 'Google', acao: 'Definir o critério da Demand Gen',
      objetivo: 'R$ 152,14 e 332 cliques no período, nenhuma conversão registrada. Não estava no plano de 15/10: definir o papel (alcance com vídeo e imagem) e um limite para manter ou pausar.',
      prioridade: 'Média', responsavel: 'Molla', prazo: 'Próximo report', status: 'Recomendada', resultado: null,
      historico: [ { data: '2026-10-22', status: 'Recomendada', nota: 'Report 01.' } ] },
    { id: 'P11', edicao: 'r01', grupo: 'aprovacao', plataforma: 'Meta', acao: 'Definir a verba da campanha de seguidores',
      objetivo: 'Média de R$ 11,25 por dia nos dois primeiros dias. Somada à de tráfego (R$ 28,87 por dia), passa dos R$ 30 por dia previstos para o Meta. Confirmar se é verba extra ou se sai dos R$ 900 do Meta.',
      prioridade: 'Média', responsavel: 'Aldea com a Molla', prazo: 'Próxima reunião', status: 'Aguardando aprovação', resultado: null,
      historico: [ { data: '2026-10-22', status: 'Aguardando aprovação', nota: 'Report 01.' } ] },
    { id: 'P12', edicao: 'r01', grupo: 'aprovacao', plataforma: 'Google', acao: 'Validar a lista de negativas preventivas (N01 a N08)',
      objetivo: 'Oito recomendações, 44 termos. Nenhuma entra na conta antes da validação.',
      prioridade: 'Alta', responsavel: 'Marina, Flávio e Juliano', prazo: 'Próxima reunião', status: 'Aguardando aprovação', resultado: null,
      historico: [ { data: '2026-10-22', status: 'Aguardando aprovação', nota: 'Report 01.' } ] },
    { id: 'P13', edicao: 'r01', grupo: 'aprovacao', plataforma: 'Google', acao: 'Aprovar a rotina semanal de termos de pesquisa e negativação',
      objetivo: 'Combinar quem valida, por qual canal e em quanto tempo (proposta no capítulo 5).',
      prioridade: 'Alta', responsavel: 'Marina, Flávio e Juliano', prazo: 'Próxima reunião', status: 'Aguardando aprovação', resultado: null,
      historico: [ { data: '2026-10-22', status: 'Aguardando aprovação', nota: 'Report 01.' } ] },
    { id: 'P14', edicao: 'r01', grupo: 'aprovacao', plataforma: 'Meta e Google', acao: 'Decidir a Black Friday: oferta, período e verba extra',
      objetivo: 'Período sugerido de 13/11 a 30/11. Com a decisão até 30/10, os anúncios sobem com aprovação a tempo.',
      prioridade: 'Alta', responsavel: 'Aldea', prazo: 'Até 30/10', status: 'Aguardando aprovação', resultado: null,
      historico: [ { data: '2026-10-15', status: 'Aguardando aprovação', nota: 'Ação A25 do plano de ativação.' } ] },
    { id: 'P15', edicao: 'r01', grupo: 'aprovacao', plataforma: 'Meta e Google', acao: 'Confirmar as regras comerciais dos anúncios',
      objetivo: 'Troca grátis pode ser anunciada? O cupom acumula com o desconto no Pix? O PRIMEIRACOMPRA10 segue ativo? Os textos de promoção dependem disso.',
      prioridade: 'Média', responsavel: 'Aldea', prazo: 'Próxima reunião', status: 'Aguardando aprovação', resultado: null,
      historico: [ { data: '2026-10-15', status: 'Aguardando aprovação', nota: 'Ação A01 do plano de ativação.' } ] },
    { id: 'P16', edicao: 'r01', grupo: 'aprovacao', plataforma: 'Google', acao: 'Confirmar estoque de Preto e Cinza para ligar o Shopping',
      objetivo: 'Nenhuma campanha de Shopping rodou no período. O Shopping padrão depende do feed com numeração disponível.',
      prioridade: 'Média', responsavel: 'Aldea', prazo: 'Próxima reunião', status: 'Aguardando aprovação', resultado: null,
      historico: [ { data: '2026-10-15', status: 'Aguardando aprovação', nota: 'Ação A03 do plano de ativação.' } ] }
  ]
};
