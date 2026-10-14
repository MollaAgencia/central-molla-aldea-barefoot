/* Central do Cliente · Aldea Barefoot
   Só deixa abrir a página com sessão válida (login feito no index.html).
   Nos materiais (pasta "materiais/") também cria os botões "Central" e "Sair"
   e coloca o favicon da Central. */
(function(){
  var dentro = /\/materiais\//.test(location.pathname);
  var raiz = dentro ? '../' : '';
  // Favicon e ícone de celular também nos materiais (sem precisar editar cada HTML)
  if (dentro && !document.querySelector('link[rel="apple-touch-icon"]')) {
    [['icon', 'favicon.ico', 'any'], ['icon', 'assets/icons/favicon-32.png', '32x32'],
     ['apple-touch-icon', 'assets/icons/apple-touch-icon.png'], ['manifest', 'site.webmanifest']]
    .forEach(function(i){
      var l = document.createElement('link'); l.rel = i[0]; l.href = raiz + i[1];
      if (i[2]) l.setAttribute('sizes', i[2]); document.head.appendChild(l);
    });
  }
  if (sessionStorage.getItem('aldea_auth') !== 'ok') { location.replace(raiz + 'index.html'); return; }
  if (!dentro) return;
  function botoes(){
    var box = document.getElementById('topbtns');
    if (!box || box.querySelector('[data-central]')) return;
    var cls = (box.querySelector('.pdf-btn') || {}).className || 'pdf-btn';
    var voltar = document.createElement('button');
    voltar.className = cls; voltar.setAttribute('data-central', '');
    voltar.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 6l-6 6 6 6"/></svg>Central';
    voltar.onclick = function(){ location.href = raiz + 'central.html'; };
    var sair = document.createElement('button');
    sair.className = cls; sair.textContent = 'Sair';
    sair.onclick = function(){ sessionStorage.clear(); location.replace(raiz + 'index.html'); };
    box.insertBefore(sair, box.firstChild);
    box.insertBefore(voltar, box.firstChild);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', botoes); else botoes();
})();
