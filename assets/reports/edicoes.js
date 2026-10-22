/*
  Report de Performance · Aldea Barefoot · Molla
  ------------------------------------------------------------
  EDIÇÕES DO REPORT. Cada reunião ganha um bloco novo no FIM da lista.
  As edições anteriores nunca são editadas nem apagadas: elas são o histórico.

  Campos de cada edição
    id, numero, tipo ('semanal' | 'quinzenal' | 'mensal'), titulo, publicado, reuniao
    periodo   { ini, fim }                 período que a edição analisa
    padrao    { ini, fim, comp:{ini,fim} } leitura que abre por padrão (período x comparação)
    fases     marcos do período, aparecem como faixas nos gráficos
    fotografia números-chave no dia da publicação (o report avisa se a base mudar depois)
    textos    análise por capítulo. Cada item: { k: tipo, o: origem, t: título, x: texto }
              k: bom · atencao · oportunidade · neutro      o: D dado · C calculado · A análise
*/

window.RP_EDICOES = [
  {
    id: 'r01', numero: 1, tipo: 'mensal',
    titulo: 'Linha de base e primeira semana da nova estrutura',
    publicado: '2026-10-22', reuniao: 'A definir',
    periodo: { ini: '2026-09-01', fim: '2026-10-21' },
    padrao: { ini: '2026-10-15', fim: '2026-10-21', comp: { ini: '2026-09-01', fim: '2026-10-02' },
              rotulo: 'Nova estrutura (15/10 a 21/10) x estrutura anterior (01/09 a 02/10)' },
    fases: [
      { id: 'anterior', nome: 'Estrutura anterior', ini: '2026-09-01', fim: '2026-10-02' },
      { id: 'pausa', nome: 'Meta sem entrega', ini: '2026-10-03', fim: '2026-10-14' },
      { id: 'nova', nome: 'Nova estrutura', ini: '2026-10-15', fim: '2026-10-21' }
    ],
    fontes: ['meta-2026-09-01-2026-10-21', 'google-campanhas-2026-09-01-2026-10-21'],
    fotografia: {
      meta: { gasto: 1465.59, cliques: 1135, impressoes: 37094, compras: 6, receita: 3140.87 },
      google: { custo: 951.15, cliques: 747, impressoes: 34907, conv: 19 }
    },

    perguntas: [
      { p: 'O que aconteceu no período?',
        r: 'De 01/09 a 02/10 rodaram as campanhas antigas do Meta e a Search antiga do Google. O Meta ficou sem entrega de 03/10 a 14/10. A nova estrutura entrou no ar em 14/10 (primeira entrega no Meta em 15/10) e a campanha de seguidores começou em 20/10. No Google, a revisão das conversões está em andamento.' },
      { p: 'Quais foram os principais resultados?',
        r: 'Meta: R$ 1.465,59 investidos, 6 compras e R$ 3.140,87 em receita atribuída (ROAS 2,14), todas na estrutura anterior. Google: R$ 951,15 investidos e 19 conversões registradas, todas na Search antiga. O Google não exportou valor de conversão, então o ROAS dele ainda não pode ser calculado.' },
      { p: 'O que melhorou ou piorou?',
        r: 'Na primeira semana da nova estrutura, o custo por clique médio do Meta caiu de R$ 1,45 para R$ 0,80, mas quem puxa essa queda é a campanha de seguidores (clique a R$ 0,14). Olhando só a campanha de tráfego, o clique saiu a R$ 1,79, mais caro que antes. Ainda não houve compra nem carrinho atribuídos à nova estrutura. No Google, as campanhas novas tiveram pouca entrega: R$ 40,87 e 18 cliques somados.' },
      { p: 'Quais fatores explicam essas variações?',
        r: 'Mudou o objetivo das campanhas (de vendas para tráfego e engajamento), o que muda o tipo de clique e o custo. Sete dias e R$ 225 são pouco para ler compra num produto de R$ 520. No Google, a Search antiga segue ativa e disputa as mesmas buscas das novas, e a campanha de Marca não teve impressões.' },
      { p: 'Quais oportunidades foram identificadas?',
        r: 'Subir o remarketing quente com os carrosséis A5 e A7, que já estão prontos. Testar o A3, o vídeo que mais segura atenção, também na prospecção. Concluir a régua do Google para enxergar o custo por compra real. Destravar Marca e Shopping.' },
      { p: 'O que recomendamos fazer?',
        r: 'Nesta ordem: concluir a régua de conversão do Google e registrar a data de corte; descobrir por que Marca não entrega e então pausar a Search antiga; testar os eventos do pixel do Meta; subir o remarketing quente com A5 e A7.' },
      { p: 'O que depende de aprovação da Aldea?',
        r: 'A lista de negativas preventivas (8 recomendações, 44 termos), a rotina semanal de negativação, a verba da campanha de seguidores, a Black Friday (até 30/10), as regras comerciais dos anúncios e o estoque de Preto e Cinza para ligar o Shopping.' },
      { p: 'Quais ações foram implementadas antes e o que produziram?',
        r: 'Esta é a primeira edição. A ação medida é a nova estrutura de 14/10: com uma semana de dados o resultado ainda é inconclusivo. O Report 02 faz a primeira leitura de compra, com pelo menos 14 dias da estrutura nova.' }
    ],

    textos: {
      resumo: [
        { k: 'bom', o: 'C', t: 'Prospecção com clique mais barato', x: 'No conjunto de interesses, o vídeo A2 levou 79 cliques a R$ 1,27 cada, com CTR de 2,54%. É o melhor custo por clique da campanha de tráfego.' },
        { k: 'bom', o: 'C', t: 'O vídeo A3 segura a atenção', x: 'Na campanha de seguidores, 13,6% das impressões do A3 chegaram a 25% do vídeo e 30% dessas pessoas foram até o fim. É o criativo com melhor retenção até aqui.' },
        { k: 'atencao', o: 'D', t: 'Nenhuma compra na nova estrutura ainda', x: 'Sete dias, R$ 224,59 investidos e nenhum carrinho ou compra atribuídos. Pouco volume para concluir, mas pede conferência do pixel, já que a régua está sendo mexida.' },
        { k: 'atencao', o: 'A', t: 'Google ainda concentrado na Search antiga', x: '80% do investimento do Google foi para a Sales-Search-. As Search novas somaram R$ 40,87 e a de Marca não teve impressões. A antiga disputa as mesmas buscas.' },
        { k: 'atencao', o: 'A', t: 'As conversões do Google ainda não são vendas', x: '19 conversões em 397 cliques (4,79%) é uma taxa muito acima da loja. É um forte indício de que carrinho e checkout ainda entram na conta, como o diagnóstico mostrou (378 conversões para 38 vendas). Só a exportação por ação de conversão confirma.' },
        { k: 'oportunidade', o: 'A', t: 'Remarketing quente pronto para subir', x: 'Os carrosséis A5 e A7 estão produzidos e ainda não rodaram. Hoje o remarketing usa o estático A4, com o clique mais caro da conta (R$ 3,05).' }
      ],
      prioridades: [
        'Concluir a régua de conversão do Google e registrar a data de corte.',
        'Destravar a campanha de Marca e então pausar a Search antiga.',
        'Testar os eventos do pixel do Meta (carrinho, checkout e compra).',
        'Subir o remarketing quente com A5 e A7.',
        'Validar com a Aldea as negativas e a rotina semanal de termos.'
      ],
      meta: {
        leitura: [
          { k: 'neutro', o: 'C', t: 'Estrutura anterior: R$ 1.241 para 6 compras', x: 'De 01/09 a 02/10 (32 dias): custo por compra de R$ 206,83 e ROAS de 2,53. A melhor semana foi de 14 a 20/09 (2 compras, ROAS 3,64), puxada pela Semana do Cliente.' },
          { k: 'bom', o: 'C', t: 'Um anúncio fez metade das vendas', x: '"MOFU Frio 01" levou 26% da verba (R$ 323,98) e trouxe 3 das 6 compras, com ROAS de 4,84. É o modelo de criativo e público a reaproveitar.' },
          { k: 'atencao', o: 'C', t: 'O remarketing antigo vendeu pouco', x: '[Vendas] Quente gastou R$ 375,64 para 1 compra (ROAS 1,43). O anúncio "MOFU Quente 03 (@andrerocha)" consumiu R$ 106,54, teve CTR de 1,56% e nenhuma compra.' },
          { k: 'neutro', o: 'C', t: 'Lista de espera tinha outro objetivo', x: 'R$ 143,32 geraram 12 conversas no WhatsApp (R$ 11,94 por conversa). Não entra na conta de custo por compra.' },
          { k: 'atencao', o: 'D', t: '12 dias sem anúncio no Meta', x: 'Entre 03/10 e 14/10 não houve entrega. Qualquer comparação que inclua esses dias fica distorcida, por isso a leitura padrão compara a estrutura nova com a anterior pela média diária.' },
          { k: 'atencao', o: 'A', t: 'O clique ficou mais barato, mas não por eficiência', x: 'O CPC médio caiu de R$ 1,45 para R$ 0,80 porque a campanha de seguidores (objetivo engajamento) compra clique a R$ 0,14. Só na campanha de tráfego o CPC foi R$ 1,79. Os objetivos são diferentes e não devem ser comparados entre si.' },
          { k: 'neutro', o: 'A', t: 'Amostra pequena', x: 'Seis compras em 51 dias. O custo por compra de cada anúncio vem de uma única venda: serve como sinal, não como prova.' }
        ],
        audiencias: [
          { k: 'bom', o: 'C', t: 'Interesses (prospecção)', x: 'CTR de 2,54% e CPC de R$ 1,27 com o A2. É onde a verba de tráfego rende mais clique hoje.' },
          { k: 'atencao', o: 'C', t: 'Visitantes do site (remarketing)', x: 'CPC de R$ 2,98 e CPM de R$ 43,13: público pequeno e caro, rodando com A3 e A4. Remarketing não se corta pelo custo do clique, porque o papel dele é fechar compra. O ajuste é de criativo e de segmentação.' },
          { k: 'neutro', o: 'C', t: 'Na estrutura anterior, frio rendeu mais que quente', x: 'Frio: R$ 423, 3 compras, ROAS 3,71. Quente: R$ 375,64, 1 compra, ROAS 1,43. O contrário do esperado, o que reforça separar o remarketing por etapa (carrinho e checkout) em vez de um público quente amplo.' }
        ],
        criativos: [
          { k: 'bom', o: 'C', t: 'A3 · O que é barefoot', x: 'Melhor retenção: 13,6% das impressões chegam a 25% do vídeo na campanha de seguidores e 9,4% na de tráfego. Na de tráfego roda dentro do conjunto de visitantes, o que pede conferência (o nome indica interesses).' },
          { k: 'bom', o: 'C', t: 'A2 · Dor no joelho', x: 'Melhor taxa de clique na campanha de tráfego (2,54%) e clique mais barato (R$ 1,27). Retenção menor (7,8% chegam a 25%): o gancho funciona para o clique, a história perde gente no meio.' },
          { k: 'atencao', o: 'C', t: 'A4 · Devolva a seu pé (estático)', x: 'CTR de 1,44% e CPC de R$ 3,05, o clique mais caro da conta, no remarketing. Candidato a dar lugar aos carrosséis A5 e A7.' },
          { k: 'neutro', o: 'D', t: 'Ainda fora do ar', x: 'A1 (Princípios), A5 (Drop zero), A6 (Palmilhas) e A7 (Não precisa amortecer) não aparecem no arquivo. A5 e A7 estão prontos; A1 e A6 dependem dos vídeos.' }
        ],
        redistribuicao: [
          { k: 'oportunidade', o: 'A', t: 'Trocar o criativo do remarketing antes de mexer na verba', x: 'O conjunto de visitantes e o de interesses receberam praticamente a mesma verba (R$ 101,40 e R$ 100,70). Antes de tirar verba do remarketing, vale trocar o A4 pelos carrosséis e separar quem chegou ao carrinho.' },
          { k: 'atencao', o: 'C', t: 'A campanha de seguidores pressiona a verba do Meta', x: 'R$ 11,25 por dia nos dois primeiros dias. Somada à de tráfego (R$ 28,87 por dia), o Meta passaria de R$ 30 por dia previstos (R$ 900 por mês). Precisa de definição: verba extra ou parte dos R$ 900.' }
        ],
        recomendacoes: [
          { k: 'oportunidade', o: 'A', t: 'Remarketing quente com A5 e A7', x: 'Carrinho e checkout dos últimos 14 dias, CTA Comprar agora.' },
          { k: 'oportunidade', o: 'A', t: 'Teste A2 x A3 em prospecção', x: 'Mesmo conjunto de interesses, verba igual, leitura em 14 dias por custo por visualização da página e carrinho.' },
          { k: 'atencao', o: 'A', t: 'Conferir pixel e Ad IDs', x: 'Testar carrinho, checkout e compra no Gerenciador de Eventos. Ajustar o A3 no conjunto certo sem mudar o Ad ID.' },
          { k: 'neutro', o: 'A', t: 'Critério de leitura', x: 'Proposta: julgar compra só com 14 dias e cerca de R$ 450 por campanha. Antes disso, ler CTR, CPC, custo por visualização da página e carrinho.' }
        ]
      },
      mensuracao: {
        antes: 'O diagnóstico de setembro mostrou que a conta do Google somava compra, adicionar ao carrinho e iniciar checkout como conversão: 378 "conversões" para 38 vendas reais de 01/06 a 14/09. Um clique para ver o produto podia virar "resultado".',
        agora: 'A compra concluída passa a ser a única conversão principal, com o valor do pedido. Carrinho e checkout continuam sendo medidos como secundários: mostram o caminho até a compra, mas não entram na coluna Conversões nem orientam o lance.',
        efeito: 'O volume de conversões registradas tende a cair e o custo por conversão tende a subir. Isso é a régua ficando honesta, não necessariamente venda caindo.',
        transicao: 'Começa em 14/10, com a nova estrutura, e vai até a data de corte da nova régua (a confirmar). Até lá, conversões e custo por conversão do Google não se comparam entre períodos. Cliques, impressões, CTR e CPC não dependem da régua e podem ser comparados normalmente.',
        indicio: [
          { k: 'atencao', o: 'C', t: 'Taxa de conversão alta demais para ser só compra', x: 'A Search antiga registrou 19 conversões em 397 cliques (4,79%). No mesmo período, o Meta teve 0,70% de compra por clique na estrutura anterior.' },
          { k: 'atencao', o: 'A', t: 'Volume acima da loja inteira', x: 'No diagnóstico, a loja vendia cerca de 18 pedidos a cada 51 dias somando todos os canais (38 vendas em 106 dias). Se as 19 conversões fossem compras, só o Google teria vendido o equivalente à loja toda.' },
          { k: 'neutro', o: 'A', t: 'Conclusão possível hoje', x: 'Forte indício de que eventos intermediários ainda entram como conversão em parte do período. Não é confirmação: a exportação por ação de conversão e os pedidos da Nuvemshop fecham essa questão.' }
        ],
        validar: [
          'Pedidos pagos na Nuvemshop, por dia, de 01/09 até hoje.',
          'Conversões do Google Ads segmentadas por ação de conversão e por dia.',
          'Compras no GA4 com origem google / cpc, por dia.',
          'Cliques e impressões por dia, que não dependem da régua: se caírem junto, é mudança real de entrega.'
        ],
        nomes: 'Os nomes das campanhas novas no ar (VENDAS_SEARCH_AON_PROPS_MARCA e similares) diferem do padrão do Gerador de UTM (GOOGLE_ADS_PRIMEIRA-COMPRA-10_…). Vale conferir se o sufixo de URL de cada grupo segue o gerador. Se não seguir, a origem do pedido na Nuvemshop e no GA4 não bate com a campanha.'
      },
      google: {
        leitura: [
          { k: 'atencao', o: 'C', t: '80% da verba na Search antiga', x: 'Sales-Search- levou R$ 758,14 de R$ 951,15. CTR de 6,85%, CPC de R$ 1,91 e 58% das impressões no topo da página.' },
          { k: 'atencao', o: 'C', t: 'Search nova com pouca entrega', x: 'Barefoot: 190 impressões e 11 cliques (R$ 24,88). Transição: 63 impressões e 7 cliques (R$ 15,99). Marca: nenhuma impressão. O plano prevê R$ 36,67 por dia no Google; as Search novas somaram R$ 40,87 desde 14/10.' },
          { k: 'neutro', o: 'C', t: 'Demand Gen sem conversão', x: 'R$ 152,14, 332 cliques a cerca de R$ 0,46 e nenhuma conversão registrada, somando as duas campanhas (a #2 está pausada). Clique barato, de público ainda frio.' },
          { k: 'neutro', o: 'D', t: 'Shopping e Performance Max parados', x: 'Sales-Shopping- e a Performance Max de Dia dos Pais estão pausadas e sem investimento no período.' }
        ],
        oportunidades: [
          { k: 'oportunidade', o: 'A', t: 'Marca primeiro', x: 'É a busca mais barata e com mais intenção. Destravar a campanha de Marca e negativar "aldea" nas demais (N08) deixa a leitura limpa.' },
          { k: 'oportunidade', o: 'A', t: 'Migrar a verba da Search antiga', x: 'Com Marca entregando, pausar a Sales-Search- e deixar a verba seguir para Barefoot e Transição, como previsto no plano.' },
          { k: 'oportunidade', o: 'A', t: 'Shopping quando houver estoque', x: 'O tênis tem foto e preço fortes para a vitrine do Google. Depende do feed com numeração disponível.' },
          { k: 'neutro', o: 'A', t: 'Lance automático só com compra limpa', x: 'Mudar para lance por conversão só depois da régua corrigida e com volume (referência do plano: 15 compras em 30 dias na campanha).' }
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
          { k: 'neutro', o: 'D', t: 'Havia negativação na gestão anterior', x: 'O histórico de alterações lido no diagnóstico mostrou 71 negativações em 106 dias, a maior parte do trabalho feito na conta. A conta tem 261 palavras negativas.' },
          { k: 'atencao', o: 'D', t: 'Mesmo assim, metade do gasto em Search foi para termos fora da intenção', x: 'Também do diagnóstico. A negativação existia, mas sem critério registrado nem validação com a Aldea.' }
        ],
        perguntas: [
          'A Aldea já tinha uma rotina de negativação? Com que frequência?',
          'Quem fazia: a agência anterior, alguém da Aldea, os dois?',
          'Quais critérios eram usados para considerar um termo irrelevante?',
          'Quem participava das decisões e aprovava? Por qual canal?',
          'Há termos que a Aldea quer manter mesmo sem venda (ex.: corrida, concorrentes)?'
        ],
        rotina: [
          { t: 'Segunda-feira', x: 'Molla lê os termos de pesquisa dos últimos 7 dias e classifica cada um.' },
          { t: 'No report', x: 'Os termos recomendados entram nesta tabela como Pendente, com campanha, gasto, cliques e justificativa.' },
          { t: 'Validação', x: 'Marina, Flávio ou Juliano aprovam ou rejeitam na reunião ou pelo WhatsApp. Sem resposta, o termo segue Pendente.' },
          { t: 'Até 2 dias úteis', x: 'Molla aplica os aprovados e registra a data. Status: Implementada.' },
          { t: '14 dias depois', x: 'Conferência: o termo parou de aparecer? Quanto gasto foi evitado? O resultado vai para o histórico.' }
        ],
        criterios: [
          { c: 'Fora do produto', x: 'Busca por algo que a Aldea não vende (infantil, sandália, bota).', acao: 'Negativar em frase, na lista da conta.' },
          { c: 'Sem intenção de compra', x: 'Busca informativa ou de trabalho (como fazer, vaga).', acao: 'Negativar em frase, na lista da conta.' },
          { c: 'Saúde', x: 'Termo que leva o anúncio a sugerir tratamento.', acao: 'Negativar: risco de reprovação pela política do Google.' },
          { c: 'Gasto sem retorno', x: 'Proposta: 10 cliques ou R$ 20 sem compra, em termo fora do perfil.', acao: 'Recomendar com os números do termo.' },
          { c: 'Ambíguo', x: 'Pode ou não ser comprador (ex.: "tênis confortável").', acao: 'Observar por 14 dias antes de recomendar.' },
          { c: 'Concorrente', x: 'Busca por outra marca de barefoot.', acao: 'Não negativar por padrão: é decisão de verba, tomada com a Aldea.' }
        ]
      }
    }
  }
];
