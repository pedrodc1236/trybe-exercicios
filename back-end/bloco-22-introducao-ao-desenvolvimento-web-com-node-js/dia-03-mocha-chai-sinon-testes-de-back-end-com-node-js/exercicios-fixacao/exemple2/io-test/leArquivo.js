const fs = require('fs');

function leArquivo(nomeDoArquivo) {
  try {
    const conteudoDoArquivo = fs.readFileSync(nomeDoArquivo, 'uft8');

    return conteudoDoArquivo;
  } catch(err) {
    return null;
  }
}

module.exports = leArquivo;