# Guia de Contribuição

Obrigado pelo seu interesse em contribuir para o HoliFlow! Este documento fornece diretrizes e instruções para contribuir com o projeto.

## 📋 Índice

- [Como Contribuir](#como-contribuir)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Padrões de Código](#padrões-de-código)
- [Internacionalização](#internacionalização)
- [Pull Requests](#pull-requests)
- [Código de Conduta](#código-de-conduta)

## Como Contribuir

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Configuração do Ambiente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/holiflow-landing-page.git
cd holiflow-landing-page
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

## Padrões de Código

### TypeScript

- Use tipos explícitos para todas as funções e variáveis
- Evite o uso de `any`
- Utilize interfaces para definir estruturas de dados
- Siga as convenções de nomenclatura do TypeScript

### React

- Use componentes funcionais com hooks
- Mantenha os componentes pequenos e reutilizáveis
- Siga as melhores práticas de performance do React
- Utilize PropTypes ou TypeScript para validação de props

### Estilização

- Use TailwindCSS para estilização
- Siga o design system do projeto
- Mantenha a consistência com os componentes existentes
- Evite CSS inline quando possível

## Internacionalização

- Todas as strings visíveis devem ser traduzíveis
- Use o hook `useTranslation` para acessar traduções
- Adicione novas traduções em `src/i18n/locales/`
- Mantenha as traduções organizadas por contexto

## Pull Requests

1. Descreva claramente as alterações feitas
2. Inclua testes quando relevante
3. Atualize a documentação se necessário
4. Certifique-se de que o código segue os padrões do projeto
5. Verifique se todas as traduções foram adicionadas

## Código de Conduta

### Nossos Compromissos

- Ser amigável e paciente
- Ser respeitoso
- Ser colaborativo
- Ser construtivo
- Ser profissional

### Comportamento Inaceitável

- Linguagem ofensiva
- Comentários discriminatórios
- Comportamento intimidador
- Spam
- Outras condutas antiéticas ou não profissionais

## 📝 Notas Adicionais

- Mantenha as issues organizadas e atualizadas
- Responda a comentários e feedback de forma profissional
- Seja proativo em ajudar outros contribuidores
- Mantenha a documentação atualizada

## 🤝 Suporte

Se precisar de ajuda ou tiver dúvidas, abra uma issue ou entre em contacto através do email: support@holiflow.pt

Obrigado por contribuir para o HoliFlow! 🚀
