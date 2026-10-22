/*
  Report de Performance · Aldea Barefoot · Molla
  ------------------------------------------------------------
  EDIÇÕES DO REPORT. Cada reunião ganha um bloco novo no FIM da lista.
  As edições anteriores nunca são editadas nem apagadas: elas são o histórico.

  Campos de cada edição
    id, numero, tipo ('semanal' | 'quinzenal' | 'mensal'), titulo, publicado, reuniao
    periodo    { ini, fim }                 período que a edição analisa
    padrao     { ini, fim, comp:{ini,fim} } leitura que abre por padrão (período x referência)
    referencia texto curto explicando a base de comparação
    fases      etapas do período; aparecem no filtro e como faixas nos gráficos
    fotografia números-chave no dia da publicação (o report avisa se a base mudar depois)
    exec       textos curtos dos 4 capítulos: estavamos {lead, pontos}, agora {lead}, aprendizados {lead, itens, publico}, proximos {lead}
    narrativas leitura dos gráficos: o que aconteceu, por quê, implicação (k: 'confirmado' | 'hipotese')
    pauta      perguntas da reunião (checklist interativo; nunca vem marcado)
    textos     análise por capítulo. Cada item: { k: tipo, o: origem, t: título, x: texto }
               k: bom · atencao · oportunidade · neutro      o: D dado · C calculado · A análise · R registro
  Pontos sensíveis só entram aqui depois de alinhados internamente (documento de Pontos de Alinhamento).
*/

window.RP_EDICOES = [
  {
    id: 'r01', numero: 1, tipo: 'mensal',
    titulo: 'Setembro como referência e primeira semana da nova estrutura',
    publicado: '2026-10-22', reuniao: 'A definir',
    periodo: { ini: '2026-09-01', fim: '2026-10-21' },
    padrao: { ini: '2026-10-15', fim: '2026-10-21', comp: { ini: '2026-09-01', fim: '2026-09-30' },
              rotulo: 'Nova estrutura (15/10 a 21/10) x setembro (referência)' },
    referencia: 'Setembro de 2026 é a referência: é o mês completo mais recente com a estrutura anterior, já dentro da parceria. Como os períodos têm durações, verbas e campanhas diferentes, volumes são comparados pela média diária e as taxas, diretamente.',
    fases: [
      { id: 'setembro', nome: 'Setembro (referência)', ini: '2026-09-01', fim: '2026-09-30' },
      { id: 'preparacao', nome: 'Preparação da nova estrutura', ini: '2026-10-03', fim: '2026-10-14', semDados: true },
      { id: 'nova', nome: 'Nova estrutura', ini: '2026-10-15', fim: '2026-10-21' }
    ],
    fontes: ['meta-2026-09-01-2026-10-21', 'google-campanhas-2026-09-01-2026-10-21'],
    fotografia: {
      meta: { gasto: 1465.59, cliques: 1135, impressoes: 37094, compras: 6, receita: 3140.87 },
      google: { custo: 951.15, cliques: 747, impressoes: 34907, conv: 19 },
      instagram: { seguidores: 58, ate21: 45, gasto: 29.22, visitasPerfil: 196, base: 1230, consulta: '2026-10-22' }
    },

    exec: {
      estavamos: {
        lead: 'Setembro de 2026 é a referência: o mês completo mais recente desde o início da parceria, ainda com a estrutura de campanhas anterior.',
        pontos: [
          { k: 'neutro', o: 'C', t: 'Vendas concentradas em um anúncio', x: '"MOFU Frio 01" trouxe 3 das 5 vendas de setembro, com retorno de 5,2 vezes.' },
          { k: 'neutro', o: 'A', t: 'Remarketing amplo', x: 'O público frio vendeu mais que o quente. Faltava separar quem chegou ao carrinho.' },
          { k: 'neutro', o: 'R', t: 'Mensuração do Google', x: 'Conversões registradas não equivaliam a vendas. A revisão começou em 14/10.' }
        ]
      },
      agora: { lead: 'Primeira semana da nova estrutura comparada com setembro: mais tráfego por real investido e o Instagram ganhando seguidores.' },
      aprendizados: {
        lead: 'Os sinais que orientam as próximas decisões.',
        itens: [
          { k: 'bom', o: 'C', t: 'Mais visitas por real investido', x: '51% mais visitas por dia, com investimento diário 19% menor que em setembro.' },
          { k: 'bom', o: 'C', t: 'O A2 abre portas', x: 'Melhor taxa de clique em público novo: 2,54%, a R$ 1,27 por visita.' },
          { k: 'bom', o: 'C', t: 'O A3 prende a atenção', x: 'Melhor retenção nas duas campanhas em que roda: até 13,6% das impressões chegam a 25% do vídeo.' },
          { k: 'bom', o: 'C', t: 'Seguidor a R$ 0,50', x: '58 seguidores atribuídos aos anúncios em três dias: público novo a custo baixo.' },
          { k: 'oportunidade', o: 'A', t: 'Quem já quis comprar', x: 'Carrinho e checkout ainda sem campanha própria. Os carrosséis A5 e A7 estão prontos.' },
          { k: 'oportunidade', o: 'A', t: 'Google medindo venda', x: 'Com a revisão da mensuração, o Google passa a ser lido por custo por venda real.' }
        ],
        publico: [
          { k: 'oportunidade', o: 'A', t: 'Base concentrada em três cidades', x: 'São Paulo, Rio de Janeiro e Florianópolis somam 32,6% dos seguidores. Pode orientar testes de segmentação regional.' }
        ]
      },
      proximos: { lead: 'O que a Molla executa agora e o que depende de decisão da Aldea.' }
    },

    narrativas: {
      metaDia: [
        { t: 'O que aconteceu', k: 'confirmado', x: 'Setembro na estrutura anterior. De 03 a 14/10, preparação. Em 15/10, nova estrutura no ar.' },
        { t: 'Por quê', k: 'confirmado', x: 'A pausa preparou audiências, mensuração e criativos.' },
        { t: 'Implicação', k: 'hipotese', x: 'Mais visitas por dia com menos verba. Vendas: leitura no próximo report.' }
      ],
      seguidores: [
        { t: 'O que aconteceu', k: 'confirmado', x: 'Perfil: 29 novos seguidores em 20/10, contra média de 3,2 por dia antes.' },
        { t: 'Por quê', k: 'hipotese', x: 'Coincide com o início da campanha, que teve 23 seguidores atribuídos no mesmo dia.' },
        { t: 'Implicação', k: 'hipotese', x: 'Base maior para o remarketing, a R$ 0,50 por seguidor. Ritmo a confirmar nos próximos dias.' }
      ],
      tendencia: [
        { t: 'O que aconteceu', k: 'confirmado', x: 'Investimento estável em setembro, com o pico de vendas na semana de 14 a 20/09 (Semana do Cliente). Após a preparação, a nova estrutura retoma o investimento em ritmo um pouco menor: R$ 32 por dia, contra R$ 40 em setembro.' },
        { t: 'Implicação', k: 'hipotese', x: 'Datas comerciais com oferta própria concentraram as vendas de setembro. A Black Friday é a próxima oportunidade desse tipo.' }
      ]
    },

    perguntas: [
      { p: 'O que aconteceu no período?',
        r: 'Setembro fechou o ciclo da estrutura de campanhas anterior. De 03/10 a 14/10, a operação preparou a nova estrutura: audiências, mensuração e criativos. Em 14/10, as novas campanhas entraram no ar no Meta e no Google. No Google, seguimos revisando a mensuração para que só a compra concluída conte como resultado.' },
      { p: 'Quais foram os principais resultados?',
        r: 'De 01/09 a 21/10, o Meta Ads investiu R$ 1.465,59 e gerou 6 vendas atribuídas, com R$ 3.140,87 em receita, um retorno de 2,14 vezes o investimento. No Instagram, a campanha de seguidores trouxe 58 novos seguidores em três dias (até 22/10), a R$ 0,50 cada. O Google Ads investiu R$ 951,15 e levou 747 visitas ao site. As vendas do Google passam a ser medidas com precisão ao fim da revisão da mensuração.' },
      { p: 'O que melhorou ou piorou?',
        r: 'Na primeira semana, a nova estrutura do Meta levou 40 visitas por dia ao site, contra 26 por dia em setembro, com custo médio por clique de R$ 0,80 (R$ 1,50 em setembro). No Instagram, o perfil ganhou 29 novos seguidores em 20/10 (primeiro dia já disponível), contra média de 3,2 por dia antes; à parte, os anúncios somam 58 seguidores atribuídos. Ainda não há vendas atribuídas à nova estrutura: com 7 dias e R$ 224,59 investidos, é cedo para essa leitura.' },
      { p: 'Quais fatores explicam essas variações?',
        r: 'A nova estrutura muda o papel das campanhas: uma parte atrai público novo, outra retoma quem já visitou o site, e a campanha de seguidores gera visitas ao perfil e cliques de custo mais baixo. Objetivos diferentes têm custos diferentes e não se comparam diretamente. Num produto de R$ 520, a decisão de compra tende a levar mais que uma semana.' },
      { p: 'Quais oportunidades foram identificadas?',
        r: 'Falar com quem já chegou ao carrinho ou ao checkout, usando os carrosséis A5 e A7, já produzidos. Levar o vídeo A3, o de maior retenção, também para públicos novos. Medir o custo por venda real no Google. Ativar a vitrine de produtos do Google quando o estoque permitir.' },
      { p: 'O que recomendamos fazer?',
        r: 'Concluir a revisão da mensuração no Google e no Meta, concluir a migração da Search para a nova estrutura, ativar o remarketing de carrinho e checkout e colocar em prática a rotina semanal de termos de pesquisa.' },
      { p: 'O que depende de aprovação da Aldea?',
        r: 'As negativas preventivas (8 recomendações, 44 termos) e a rotina semanal de termos de pesquisa, a Black Friday (até 30/10), as regras comerciais dos anúncios e o estoque de Preto e Cinza para ativar o Shopping.' },
      { p: 'Quais ações foram implementadas e o que produziram?',
        r: 'A nova estrutura de 14/10 é a primeira ação medida. Na primeira semana, ela ampliou o volume de visitas com custo menor por clique e acelerou o crescimento de seguidores no Instagram. A primeira leitura de vendas acontece no Report 02, com pelo menos 14 dias de dados.' }
    ],

    pauta: [
      { id: 'q1', p: 'A Aldea já tinha uma rotina de negativação de termos? Com que frequência?' },
      { id: 'q2', p: 'Quem fazia: a agência anterior, alguém da Aldea ou os dois?' },
      { id: 'q3', p: 'Quais critérios eram usados para considerar um termo irrelevante?' },
      { id: 'q4', p: 'Quem participava das decisões e aprovava? Por qual canal?' },
      { id: 'q5', p: 'Há termos que a Aldea quer manter mesmo sem venda (ex.: corrida, concorrentes)?' },
      { id: 'q6', p: 'Validação das negativas preventivas N01 a N08.' },
      { id: 'q7', p: 'Black Friday: oferta, período e verba extra (decisão até 30/10).' },
      { id: 'q8', p: 'Regras comerciais: troca grátis, cupom com Pix e PRIMEIRACOMPRA10.' },
      { id: 'q9', p: 'Estoque de Preto e Cinza para ativar o Shopping.' }
    ],

    textos: {
      resumo: [
        { k: 'bom', o: 'D', t: 'Seguidores: crescimento acelerado no Instagram', x: 'Em três dias, a campanha de seguidores trouxe 58 novos seguidores, a R$ 0,50 cada (45 até 21/10; 22/10 parcial). Pelos dados do perfil, foram 29 novos seguidores em 20/10, contra média de 3,2 por dia antes.' },
        { k: 'bom', o: 'C', t: 'Mais visitas com investimento diário menor', x: 'Na primeira semana, a nova estrutura do Meta levou 40 visitas por dia ao site (26 em setembro), investindo R$ 32 por dia (R$ 40 em setembro).' },
        { k: 'bom', o: 'C', t: 'Criativos que funcionam', x: 'Para públicos novos, o vídeo A2 levou 79 visitas a R$ 1,27 cada (2,54% de taxa de clique). O A3 tem a melhor retenção: 13,6% das impressões chegam a 25% do vídeo.' },
        { k: 'neutro', o: 'A', t: 'Vendas: leitura a partir de 14 dias', x: 'Ainda não há vendas atribuídas à nova estrutura, que soma 7 dias e R$ 224,59. Nosso critério é ler vendas a partir de 14 dias e cerca de R$ 450 por campanha.' },
        { k: 'neutro', o: 'R', t: 'Google: mensuração em revisão', x: 'Até a conclusão da revisão, as conversões do Google indicam interesse, não necessariamente venda. A leitura de custo por venda começa a partir da data de corte.' },
        { k: 'oportunidade', o: 'A', t: 'Remarketing de quem já quis comprar', x: 'Os carrosséis A5 e A7 estão prontos para falar com quem chegou ao carrinho ou ao checkout, o público mais próximo da compra.' }
      ],
      prioridades: [
        'Concluir a revisão da mensuração no Google e no Meta e registrar a data de corte.',
        'Concluir a migração da Search do Google para a nova estrutura.',
        'Ativar o remarketing de carrinho e checkout com A5 e A7.',
        'Testar o vídeo A3 também para públicos novos.',
        'Validar com a Aldea as negativas e a rotina semanal de termos.'
      ],
      meta: {
        // números grandes da leitura do período (v: valor, t: o que é, s: comparação)
        numeros: [
          { k: 'bom', o: 'C', v: '40 por dia', t: 'visitas ao site', s: 'setembro: 26 por dia' },
          { k: 'bom', o: 'C', v: 'R$ 0,80', t: 'por clique, na média', s: 'setembro: R$ 1,50 · só a campanha de tráfego: R$ 1,79' },
          { k: 'neutro', o: 'C', v: '3 de 5', t: 'vendas de setembro vieram de um anúncio', s: '"MOFU Frio 01", com retorno de 5,2 vezes' },
          { k: 'neutro', o: 'A', v: '14 dias', t: 'para a primeira leitura de vendas', s: 'hoje: 7 dias e R$ 224,59 na nova estrutura' }
        ],
        // uma linha por público e por criativo, abaixo dos cartões
        publicos: {
          'Interesses (prospecção)': 'Onde a verba de tráfego rende mais visitas hoje.',
          'Visitantes do site (remarketing)': 'Público menor e já qualificado: o papel é converter, não gerar volume.',
          'Carrinho e checkout (remarketing)': 'Quem está mais perto da compra.'
        },
        criativos: {
          A2: 'O início do vídeo funciona para gerar visita.',
          A3: 'Bom para apresentar a marca a públicos novos.',
          A4: 'No remarketing, os carrosséis A5 e A7 são a alternativa.'
        },
        proximosCriativos: [
          { id: 'A5', nome: 'Drop zero', st: 'Pronto' },
          { id: 'A7', nome: 'Não precisa amortecer', st: 'Pronto' },
          { id: 'A1', nome: 'Princípios', st: 'Com a chegada dos vídeos' },
          { id: 'A6', nome: 'Palmilhas', st: 'Com a chegada dos vídeos' }
        ],
        // q: molla (Molla executa) · aldea (depende da Aldea) · criterio (regra de leitura)
        acoes: [
          { q: 'molla', t: 'Remarketing de carrinho e checkout', x: 'Carrosséis A5 e A7 para quem chegou ao carrinho nos últimos 14 dias.' },
          { q: 'molla', t: 'Teste A2 x A3 em públicos novos', x: 'Mesma verba. Vence o menor custo por visita com carrinho.' },
          { q: 'molla', t: 'Verba segue o vencedor', x: 'Depois do teste, a prospecção concentra no melhor vídeo.' },
          { q: 'molla', t: 'Criativo antes de verba no remarketing', x: 'Trocar o A4 pelos carrosséis antes de mexer na divisão.' },
          { q: 'criterio', t: 'Vendas lidas a partir de 14 dias', x: 'Até lá: clique, custo por visita e carrinho.' }
        ]
      },
      mensuracao: {
        antes: 'O diagnóstico de setembro mostrou que a conta do Google somava compra, adicionar ao carrinho e iniciar checkout como conversão: 378 conversões registradas para 38 vendas reais, de 01/06 a 14/09. Interações intermediárias eram lidas como resultado.',
        agora: 'A compra concluída passa a ser a conversão principal, com o valor do pedido. Carrinho e checkout continuam medidos, como sinais do caminho até a compra, sem entrar na contagem de conversões nem orientar os lances.',
        efeito: 'O número de conversões registradas tende a diminuir e o custo por conversão, a aumentar. Isso reflete uma medição mais precisa, não necessariamente queda de vendas. A prioridade passa a ser a qualidade das conversões, não o volume.',
        transicao: 'Começa em 14/10, com a nova estrutura, e vai até a data de corte da nova régua. Nesse intervalo, conversões e custo por conversão do Google não são comparados com períodos anteriores. Cliques, impressões e custo por clique não dependem da régua e seguem comparáveis.',
        indicio: [
          { k: 'neutro', o: 'C', t: 'Taxa de conversão acima do padrão de compra', x: 'A Search anterior registrou 19 conversões em 397 cliques (4,79%). No Meta, em setembro, a relação foi de 0,63% de compras por clique.' },
          { k: 'neutro', o: 'A', t: 'Volume compatível com interações intermediárias', x: 'No diagnóstico, a loja vendia cerca de 18 pedidos a cada 51 dias, somando todos os canais. Se as 19 conversões fossem todas compras, só o Google teria vendido o equivalente à loja inteira.' },
          { k: 'neutro', o: 'A', t: 'O que dá para afirmar hoje', x: 'É provável que parte das conversões do período ainda inclua interações intermediárias. A confirmação vem do cruzamento com os pedidos da Nuvemshop e das conversões separadas por tipo.' }
        ],
        validar: [
          'Pedidos pagos na Nuvemshop, por dia, de 01/09 até hoje.',
          'Conversões do Google Ads separadas por tipo (compra, carrinho, checkout) e por dia.',
          'Compras no GA4 com origem Google Ads, por dia.',
          'Cliques e impressões por dia: se caírem junto com as conversões, a mudança é de volume, não de régua.'
        ]
      },
      google: {
        numeros: [
          { k: 'neutro', o: 'C', v: '80%', t: 'da verba na Search anterior', s: '6 das 7 semanas foram antes da nova estrutura' },
          { k: 'bom', o: 'C', v: '11,11%', t: 'taxa de clique da nova Search · Transição', s: 'Barefoot: 5,79% · volume ainda inicial' },
          { k: 'neutro', o: 'C', v: 'R$ 0,46', t: 'por clique na geração de demanda', s: '332 cliques com R$ 152,14' }
        ],
        acoes: [
          { q: 'molla', t: 'Verba nas buscas de maior intenção', x: 'Barefoot, transição e marca: onde a compra está mais perto.' },
          { q: 'molla', t: 'Migração gradual da Search', x: 'A verba passa para a nova estrutura conforme ela ganha volume.' },
          { q: 'aldea', t: 'Shopping com estoque', x: 'Entra quando o feed tiver a numeração de Preto e Cinza.' },
          { q: 'criterio', t: 'Lances por conversão depois', x: 'Com a régua nova e volume (referência: 15 compras em 30 dias).' }
        ],
        faltam: [
          { item: 'Evolução diária', como: 'Relatório de campanhas com a coluna Dia.' },
          { item: 'Receita atribuída e ROAS', como: 'Adicionar a coluna Valor conv. à exportação.' },
          { item: 'Conversões de compra separadas', como: 'Segmentar por Ação de conversão.' },
          { item: 'Grupos de anúncios', como: 'Exportação no nível de grupo.' },
          { item: 'Palavras-chave', como: 'Exportação de palavras-chave com parcela de impressões.' },
          { item: 'Termos de pesquisa', como: 'Relatório de termos de pesquisa dos últimos 30 dias.' }
        ]
      },
      negativacao: {
        sabemos: [
          { k: 'neutro', o: 'D', t: 'A conta já tinha negativação', x: 'O histórico lido no diagnóstico mostra 71 negativações em 106 dias e 261 palavras negativas na conta.' },
          { k: 'oportunidade', o: 'D', t: 'Espaço para ganhar eficiência', x: 'No mesmo diagnóstico, cerca de metade do gasto em Search foi para termos fora da intenção de compra. Uma rotina com critério e validação tende a direcionar melhor esse investimento.' }
        ],
        rotina: [
          { t: 'Segunda-feira', x: 'A Molla lê os termos de pesquisa dos últimos 7 dias e classifica cada um.' },
          { t: 'No report', x: 'Os termos recomendados entram nesta tabela como Pendente, com campanha, gasto, cliques e justificativa.' },
          { t: 'Validação', x: 'Marina, Flávio ou Juliano aprovam ou rejeitam na reunião ou pelo WhatsApp. Sem resposta, o termo segue Pendente.' },
          { t: 'Até 2 dias úteis', x: 'A Molla aplica os aprovados e registra a data. Status: Implementada.' },
          { t: '14 dias depois', x: 'Conferência: o termo deixou de aparecer? Quanto investimento foi preservado? O resultado vai para o histórico.' }
        ],
        criterios: [
          { c: 'Fora do produto', x: 'Busca por algo que a Aldea não vende (infantil, sandália, bota).', acao: 'Negativar em frase, na lista da conta.' },
          { c: 'Sem intenção de compra', x: 'Busca informativa ou de trabalho (como fazer, vaga).', acao: 'Negativar em frase, na lista da conta.' },
          { c: 'Saúde', x: 'Termo que leva o anúncio a sugerir tratamento.', acao: 'Negativar: evita reprovação pela política do Google.' },
          { c: 'Investimento sem retorno', x: 'Proposta: 10 cliques ou R$ 20 sem compra, em termo fora do perfil.', acao: 'Recomendar com os números do termo.' },
          { c: 'Ambíguo', x: 'Pode ou não ser comprador (ex.: "tênis confortável").', acao: 'Observar por 14 dias antes de recomendar.' },
          { c: 'Concorrente', x: 'Busca por outra marca de barefoot.', acao: 'Não negativar por padrão: é decisão de verba, tomada com a Aldea.' }
        ]
      }
    }
  }
];
