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
outdated=$(npm outdated --json)

echo "Atualizando as dependências"
npm update

echo "Verificando se houve atualizações"
updated=$(npm outdated --json)

# Se houver atualizações, realiza o commit
if [ "$outdated" != "$updated" ]; then
    echo "Realizando commit das atualizações"
    git add package.json package-lock.json
    git commit -m "update: Atualização de dependências [Updating dependencies]"
fi

# Gera um log informando as atualizações
echo "Dependências atualizadas:"
echo "$updated"