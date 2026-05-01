# Cartinha de Amor 💌

Uma aplicação web moderna para criar e compartilhar cartinhas de amor. Perfeita para expressar seus sentimentos de forma criativa e especial.

## 🎯 Sobre

**Cartinha de Amor** é uma aplicação React Router v7 que permite criar cartas digitais personalizadas e visualizar quantas cartas já foram escritas pela comunidade. A aplicação utiliza as tecnologias mais modernas do ecossistema React para oferecer uma experiência rápida e responsiva.

## ✨ Funcionalidades

- ✍️ **Editor de Cartinhas** - Crie e customize suas cartinhas de amor
- 📊 **Contador Comunitário** - Veja quantas cartas já foram compartilhadas
- 🎨 **Interface Moderna** - Design clean e responsivo com Tailwind CSS v4
- ⚡ **SSR (Server-Side Rendering)** - Melhor performance e SEO
- 🌙 **Variáveis de Tema** - Design system com tokens CSS centralizados

## 🛠️ Tech Stack

- **Framework**: [React Router v7](https://remix.run/docs/en/main/guides/framework) (framework mode)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/docs) + [shadcn](https://shadcn-svelte.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Linting**: [Biome](https://biomejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn

## 🚀 Começando

### 1. Instalação

```bash
npm install
```

### 2. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_API_BASE_URL=http://localhost:3000
```

### 3. Desenvolvimento

Inicie o servidor de desenvolvimento com hot reload:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` por padrão.

### 4. Build para Produção

Compile para produção:

```bash
npm run build
```

### 5. Servir Build Localmente

Teste o build de produção localmente:

```bash
npm start
```

## 🧹 Qualidade de Código

### Linting

Verifica o código com Biome:

```bash
npm run lint
```

### Correção Automática

Aplica correções automáticas com Biome:

```bash
npm run lint:fix
```

### Formatação

Formata o código com Biome:

```bash
npm run format
```

### Type Checking

Gera tipos das rotas React Router e verifica com TypeScript:

```bash
npm run typecheck
```

## 🎨 Convenções de Desenvolvimento

### Imports

Use o alias `~/*` para imports da aplicação (mapeia para `./app/*`):

```typescript
import { Button } from '~/components/ui/button'
import { LetterCardEditor } from '~/routes/home/components/letter-card-editor'
```

### Componentes de Rota

Padrão React Router:
- Export padrão: componente da rota
- Export `meta`: descritores de meta tags
- Export `loader`: carregamento de dados no servidor

```typescript
export function meta(): Route.MetaDescriptors {
  return [{ title: 'Cartinha de amor' }]
}

export async function loader() {
  // Carregamento de dados
}

export default function Home() {
  // Componente
}
```

### Estilos

- Prefira usar classes Tailwind
- Estenda componentes shadcn existentes com `cva` variants
- Tokens de design globais em `app/app.css` (variáveis CSS OKLCH)
- Use a função `cn()` para mesclar classes:

```typescript
import { cn } from '~/lib/utils'

export function Button({ className, ...props }) {
  return <button className={cn('px-4 py-2', className)} {...props} />
}
```

### Pre-commit

Husky executa Biome automaticamente em arquivos staged antes de commits.

## 📡 API

A aplicação se conecta a um backend para:

- **GET `/letters/count`** - Retorna o número total de cartinhas

Certifique-se de que `VITE_API_BASE_URL` aponta para o servidor correto.

## 📝 Rotas

- **`/`** - Home page com editor de cartinhas
- **`/letter/:id`** - Detalhes de uma cartinha específica

## 🤝 Contribuindo

1. Create uma branch para sua feature: `git checkout -b feature/minha-feature`
2. Commit com mensagens descritivas: `git commit -m 'feat: adiciona nova feature'`
3. Push para a branch: `git push origin feature/minha-feature`
4. Abra um Pull Request

O projeto usa **commits convencionais**. Siga o padrão:
- `feat:` - Nova feature
- `fix:` - Bug fix
- `docs:` - Documentação
- `style:` - Formatting
- `refactor:` - Refatoração
- `test:` - Testes
- `chore:` - Tarefas administrativas

## 💬 Suporte

Para dúvidas, abra uma issue no repositório.

---

Feito com ❤️ por Clodoaldo Dantas.
