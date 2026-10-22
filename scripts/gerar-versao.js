/* Central do Cliente · gera assets/versao.json a cada publicação na Vercel.
   Roda como "buildCommand" (vercel.json). Grava o momento da publicação em UTC;
   a página converte para o horário de Brasília. Se falhar, a publicação falha
   e a versão anterior continua no ar. */
var fs = require('fs'), path = require('path');
var info = {
  publicadoEm: new Date().toISOString(),
  ambiente: process.env.VERCEL_ENV || 'local',
  commit: (process.env.VERCEL_GIT_COMMIT_SHA || '').slice(0, 7),
  branch: process.env.VERCEL_GIT_COMMIT_REF || ''
};
fs.writeFileSync(path.join(__dirname, '..', 'assets', 'versao.json'), JSON.stringify(info) + '\n');
console.log('versao.json:', JSON.stringify(info));
