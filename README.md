# Aldea Barefoot · Central do Cliente (Molla)

Portal estático com tela de acesso e a Central do Cliente, onde ficam todos os materiais em HTML do atendimento, organizados em quatro categorias: **Planejamento**, **Conteúdos**, **Reports** e **Análises e estudos**.

## Estrutura
- `index.html` — tela de login (nome livre + senha). Depois do login, abre a Central.
- `central.html` — página inicial da Central, com as categorias e os materiais.
- `materiais/` — um arquivo HTML por material. Só abrem após o login.
  - `diagnostico-plano-midia-paga.html` — Diagnóstico e plano de mídia paga (Planejamento)
  - `curadoria-conteudos.html` — Curadoria de conteúdos para mídia paga (Conteúdos)
  - `report-performance.html` — Report de Performance de mídia paga (Reports). Uma página só para todas as edições; os dados ficam em `assets/reports/`.
- `assets/materiais.js` — **lista de materiais exibidos na Central** (é o único arquivo a editar para publicar um material novo).
- `assets/guarda.js` — proteção de acesso e botões "Central" e "Sair" dentro dos materiais.
- `assets/` — logos Molla e Aldea.
- `favicon.ico`, `site.webmanifest` e `assets/icons/` — favicon da Central e ícone para salvar na tela de início do celular. Os materiais recebem o favicon automaticamente pelo `guarda.js`.
- `assets/reports/` — dados e histórico do Report de Performance:
  - `dados-meta.js` e `dados-google.js` — números das plataformas, gerados pelo conversor da Molla (não editar à mão).
  - `registro.js` — acontecimentos, recomendações de negativação e plano de ação, com histórico de decisões. Só cresce.
  - `edicoes.js` — uma entrada por report (semanal, quinzenal ou mensal), com período, comparação e análises. Edições antigas nunca são alteradas.
- `vercel.json` — URLs limpas, noindex, redirecionamento do link antigo `/apresentacao` e o passo de publicação (`buildCommand`).
- `scripts/gerar-versao.js` — roda na Vercel a cada publicação: copia o site para a pasta `public/` (a pasta que a Vercel publica, `outputDirectory`) e grava `assets/versao.json` com a data e a hora. A Central mostra essa data como "Última atualização do sistema", em horário de Brasília. O `versao.json` e a pasta `public/` não ficam no repositório (`.gitignore`): ele só existe no que está publicado.

## Publicar
Fluxo padrão (com o app do Claude instalado no GitHub):
1. As mudanças são feitas num branch (ex.: `melhoria/report-executivo`) e abertas como pull request.
2. A Vercel publica o branch numa URL de **preview**, separada da produção. É ali que a mudança é conferida.
3. Aprovada a mudança, o pull request é mesclado na `main`. A Vercel publica em produção sozinha, e a data de "Última atualização do sistema" muda.
4. Se uma publicação falhar, a versão anterior continua no ar. Para voltar atrás, use "Instant Rollback" na Vercel ou reverta o commit.

Envio manual (alternativa): no GitHub, envie todo o conteúdo desta pasta para a raiz do repositório, mantendo as pastas. A Vercel publica sozinha, direto em produção.

## Publicar um material novo
1. Salve o HTML dentro de `materiais/` (ex.: `materiais/report-outubro-2026.html`).
2. No HTML, logo depois de `<meta charset="UTF-8">`, cole:
   `<script src="../assets/guarda.js"></script>`
3. Em `assets/materiais.js`, acrescente um bloco em `MATERIAIS` com título, resumo, categoria (`planejamento`, `conteudos`, `reports` ou `analises`), arquivo e data.
4. Envie os dois arquivos ao GitHub.

## Publicar uma nova edição do Report de Performance
1. Rodar o conversor da Molla com as novas exportações (atualiza `dados-meta.js` e `dados-google.js`).
2. Acrescentar a nova edição no fim de `assets/reports/edicoes.js` e os novos acontecimentos e decisões em `assets/reports/registro.js`.
3. Em `assets/materiais.js`, atualizar o card do report (data e detalhes). Não é preciso criar outro card: o report abre na edição mais recente e as anteriores ficam no seletor de edições.
4. Enviar a pasta inteira ao GitHub, como sempre.

## Acesso
Qualquer nome é aceito no campo "Seu nome"; só a senha é verificada.
Pessoas previstas: Rafael Moraes (Molla), Flávio Petri, Juliano Pereira e Marina Barboza (Aldea).

## Trocar a senha
Gere o SHA-256 da nova senha e substitua o valor de `HASH` no `index.html`.
Ex.: `echo -n "NOVASENHA" | shasum -a 256`

Observação: a proteção é feita no navegador (sessionStorage). Serve para restringir o acesso casual ao link, não substitui autenticação de servidor.
