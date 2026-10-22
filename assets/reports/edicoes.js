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
          { k: 'bom', o: 'C', t: 'O A3 prende a atenção', x: '13,6% das impressões chegam a 25% do vídeo: a melhor retenção da conta.' },
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
        { t: 'O que aconteceu', k: 'confirmado', x: 'Setembro rodou com a estrutura anterior. De 03/10 a 14/10, preparação sem anúncios. Em 15/10, a nova estrutura começou a veicular.' },
        { t: 'Por quê', k: 'confirmado', x: 'A pausa foi usada para revisar audiências, mensuração e criativos antes da nova fase.' },
        { t: 'Implicação', k: 'hipotese', x: 'Mais visitas por dia com investimento menor. Se elas viram vendas é a pergunta do próximo report.' }
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
        leitura: [
          { k: 'neutro', o: 'C', t: 'Setembro, a referência', x: 'R$ 1.188,03 em 30 dias, 5 vendas e R$ 2.603,57 em receita: custo por venda de R$ 237,61 e retorno de 2,19 vezes. A melhor semana foi a de 14 a 20/09, com a Semana do Cliente.' },
          { k: 'bom', o: 'C', t: 'Um anúncio concentrou o resultado', x: '"MOFU Frio 01" recebeu 26% da verba de setembro e trouxe 3 das 5 vendas, com retorno de 5,2 vezes. É o modelo de mensagem e público a levar adiante.' },
          { k: 'neutro', o: 'A', t: 'Aprendizado da estrutura anterior', x: 'O público frio vendeu mais que o quente: o remarketing amplo não converteu como esperado. Por isso a nova estrutura separa quem visitou o site de quem chegou ao carrinho.' },
          { k: 'neutro', o: 'R', t: 'Preparação da nova estrutura', x: 'De 03/10 a 14/10, sem anúncios no ar: o período foi dedicado a audiências, mensuração e adequação dos criativos.' },
          { k: 'bom', o: 'C', t: 'Primeira semana: mais tráfego por real investido', x: 'Custo médio por clique de R$ 0,80, contra R$ 1,50 em setembro. Parte do ganho vem da campanha de seguidores; na campanha de tráfego, o clique custou R$ 1,79, com objetivo diferente das campanhas de vendas de setembro.' },
          { k: 'neutro', o: 'A', t: 'Leitura com amostra curta', x: 'Foram 6 vendas em todo o período. O custo por venda de cada anúncio vem de uma ou duas vendas: serve como sinal, não como conclusão.' }
        ],
        audiencias: [
          { k: 'bom', o: 'C', t: 'Interesses (público novo)', x: 'Taxa de clique de 2,54% e custo de R$ 1,27 por visita com o A2. É onde a verba de tráfego rende mais visitas hoje.' },
          { k: 'neutro', o: 'C', t: 'Visitantes do site (remarketing)', x: 'Custo de R$ 2,98 por clique, esperado para um público menor e já qualificado. O papel desse público é converter, não gerar volume; o ajuste é de criativo e de segmentação.' },
          { k: 'oportunidade', o: 'A', t: 'Próximo passo: separar por intenção', x: 'Em setembro, o público frio rendeu mais que o quente. Separar quem chegou ao carrinho ou ao checkout tende a concentrar a verba de remarketing em quem está mais perto da compra.' }
        ],
        criativos: [
          { k: 'bom', o: 'C', t: 'A3 · O que é barefoot', x: 'Melhor retenção: 13,6% das impressões chegam a 25% do vídeo. Bom candidato para apresentar a marca a públicos novos.' },
          { k: 'bom', o: 'C', t: 'A2 · Dor no joelho', x: 'Melhor taxa de clique na campanha de tráfego (2,54%) e clique mais barato (R$ 1,27). O início do vídeo funciona bem para gerar visita.' },
          { k: 'oportunidade', o: 'C', t: 'A4 · Devolva a seu pé', x: 'O estático tem taxa de clique de 1,44% no remarketing. Os carrosséis A5 e A7 são a alternativa natural para esse público.' },
          { k: 'neutro', o: 'D', t: 'Próximos criativos', x: 'A5 (Drop zero) e A7 (Não precisa amortecer) estão prontos. A1 (Princípios) e A6 (Palmilhas) entram com a chegada dos vídeos.' }
        ],
        redistribuicao: [
          { k: 'oportunidade', o: 'A', t: 'Criativo antes de verba no remarketing', x: 'Os conjuntos de público novo e de visitantes receberam verbas parecidas (R$ 100,70 e R$ 101,40). Antes de mexer na divisão, vale trocar o A4 pelos carrosséis e separar quem chegou ao carrinho.' },
          { k: 'oportunidade', o: 'A', t: 'Verba acompanha o criativo vencedor', x: 'Após o teste A2 x A3 em públicos novos, a verba da prospecção segue o vídeo com melhor custo por visita qualificada.' }
        ],
        recomendacoes: [
          { k: 'oportunidade', o: 'A', t: 'Remarketing de carrinho e checkout', x: 'Últimos 14 dias, carrosséis A5 e A7, chamada para compra.' },
          { k: 'oportunidade', o: 'A', t: 'Teste A2 x A3 em públicos novos', x: 'Mesma verba, leitura em 14 dias por custo por visita e adições ao carrinho.' },
          { k: 'neutro', o: 'A', t: 'Eventos de compra validados', x: 'Parte da revisão de mensuração: conferir carrinho, checkout e compra antes da primeira leitura de vendas.' },
          { k: 'neutro', o: 'A', t: 'Critério de leitura', x: 'Vendas lidas a partir de 14 dias e cerca de R$ 450 por campanha. Antes disso, acompanhamos clique, custo por visita e carrinho.' }
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
        leitura: [
          { k: 'neutro', o: 'C', t: 'Período concentrado na estrutura anterior', x: 'A Search anterior respondeu por 80% do investimento, natural num período em que seis das sete semanas foram antes da nova estrutura. Taxa de clique de 6,85% e custo por clique de R$ 1,91.' },
          { k: 'bom', o: 'C', t: 'Nova Search com anúncios relevantes', x: 'Nos primeiros dias, Barefoot teve 5,79% de taxa de clique e Transição, 11,11%. São sinais de que os anúncios conversam com o que a pessoa buscou. O volume ainda é inicial.' },
          { k: 'neutro', o: 'C', t: 'Geração de demanda', x: 'R$ 152,14 e 332 cliques a cerca de R$ 0,46: tráfego de custo baixo, de público que ainda não conhece a marca.' },
          { k: 'neutro', o: 'D', t: 'Shopping', x: 'A vitrine de produtos do Google fica para quando o estoque de Preto e Cinza permitir.' }
        ],
        oportunidades: [
          { k: 'oportunidade', o: 'A', t: 'Verba nas buscas de maior intenção', x: 'Concentrar o investimento em quem procura barefoot, transição e a própria marca, onde a chance de compra é maior.' },
          { k: 'oportunidade', o: 'A', t: 'Migração gradual da Search', x: 'Transferir a verba da Search anterior para a nova estrutura à medida que as novas campanhas ganham volume.' },
          { k: 'oportunidade', o: 'A', t: 'Shopping com estoque', x: 'O tênis tem foto e preço fortes para a vitrine do Google. Depende do feed com numeração disponível.' },
          { k: 'neutro', o: 'A', t: 'Lances automáticos com vendas reais', x: 'Passar para lances por conversão depois da régua nova e com volume (referência: 15 compras em 30 dias numa campanha).' }
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
