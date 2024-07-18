#!/bin/bash

# Verifica se o arquivo package.json existe
if [ ! -f "package.json" ]; then
    echo "Arquivo package.json não encontrado. Certifique-se de estar no diretório do projeto."
    exit 1
fi

if [ ! -d "node_modules" ]; then
    echo "Diretório node_modules não encontrado. Instalando as dependências..."
    npm install
fi

echo "Verificando dependências desatualizadas"
npm outdated