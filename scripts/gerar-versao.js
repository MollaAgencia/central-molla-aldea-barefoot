/* Central do Cliente · build da Vercel ("buildCommand" no vercel.json).
   1. Copia o site para a pasta public/ (a Vercel publica essa pasta: "outputDirectory").
   2. Grava public/assets/versao.json com o momento da publicação em UTC;
      a página converte para o horário de Brasília.
   Se falhar, a publicação falha e a versão anterior continua no ar. */
var fs = require('fs'), path = require('path');
var raiz = path.join(__dirname, '..'), saida = path.join(raiz, 'public');
// fica de fora do site publicado
var FORA = ['.git', '.vercel', 'node_modules', 'public', 'scripts', '.gitignore', 'README.md', 'vercel.json', 'package.json', 'package-lock.json'];

fs.rmSync(saida, { recursive: true, force: true });
fs.mkdirSync(saida);
fs.readdirSync(raiz).forEach(function (nome) {
  if (FORA.indexOf(nome) >= 0) return;
  fs.cpSync(path.join(raiz, nome), path.join(saida, nome), { recursive: true });
});

var info = {
  publicadoEm: new Date().toISOString(),
  ambiente: process.env.VERCEL_ENV || 'local',
  commit: (process.env.VERCEL_GIT_COMMIT_SHA || '').slice(0, 7),
  branch: process.env.VERCEL_GIT_COMMIT_REF || ''
};
fs.mkdirSync(path.join(saida, 'assets'), { recursive: true });
fs.writeFileSync(path.join(saida, 'assets', 'versao.json'), JSON.stringify(info) + '\n');
console.log('public/ pronto:', fs.readdirSync(saida).join(', '));
console.log('versao.json:', JSON.stringify(info));
