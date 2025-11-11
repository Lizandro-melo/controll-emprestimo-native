# 💸 Sistema de Controle de Empréstimos - lado do usuario

Um sistema web simples e eficiente desenvolvido com **Next.js**, **TypeScript** e **Prisma ORM** para **gerenciar empréstimos, clientes e pagamentos**.  
O foco é **controle financeiro pessoal ou de pequenos negócios**, com interface intuitiva e alertas automáticos de vencimento.

---

## 🧩 Funcionalidades Principais

### 💰 Gestão de Empréstimos
- Cadastro manual de empréstimos com:
  - Nome do cliente
  - Valor emprestado
  - Data do empréstimo e data de vencimento
  - Status de pagamento (em aberto, pago, vencido)
- Atualização rápida do status de pagamento.
- Histórico completo de empréstimos com filtros por cliente e data.

### 📅 Alertas e Controle
- **Avisos automáticos na interface** sobre:
  - Empréstimos vencidos.
  - Pagamentos próximos do vencimento.
- Destaque visual para itens críticos (cores e ícones).
- Estatísticas resumidas: total emprestado, recebido e pendente.

### 👥 Clientes
- Cadastro e visualização de clientes.
- Histórico de empréstimos vinculados a cada cliente.
- Busca inteligente e ordenação alfabética.

### 🧭 Estrutura de Navegação
- Layout moderno e responsivo com barra lateral.
- Páginas principais:
  - `/auth` – Login do sistema.
  - `/` – Dashboard principal.
  - `/emprestimos` – Lista e cadastro de empréstimos.
  - `/clientes` – Gestão de clientes.

---

## ⚙️ Tecnologias Utilizadas

| Categoria | Tecnologias |
|------------|--------------|
| Framework | **Next.js 14**, **React 18** |
| Linguagem | **TypeScript** |
| Banco de Dados | **Prisma ORM** |
| Estilização | **TailwindCSS**, **Shadcn UI** |
| Autenticação | **Cookies (nookies)** |
| Formulários | **React Hook Form** |
| Ícones | **React Icons** |
| Tipografia | **Google Fonts (Montserrat)** |

---

## 🏗️ Estrutura do Projeto

```
📁 src
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── label-input.tsx
│   │   ├── dialog.tsx
│   │   ├── nav.tsx
│   │   ├── card.tsx
│   │   └── response-alert.tsx
│
├── pages/
│   ├── index.tsx                 # Dashboard principal
│   ├── emprestimos/index.tsx     # Lista e cadastro de empréstimos
│   ├── clientes/index.tsx        # Gestão de clientes
│   └── auth/
│       └── index.tsx             # Tela de login
│
├── prisma/
│   └── schema.prisma             # Modelos e schema do banco
│
├── provider/
│   └── provider_auth.tsx         # Contexto de autenticação
```

---

## 🚀 Como Executar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/Lizandro-melo/controll-emprestimo.git
```

### 2️⃣ Instalar dependências
```bash
pnpm i
```

### 3️⃣ Configurar o banco de dados
Edite o arquivo `.env` com sua URL do banco de dados e execute:
```bash
pnpx prisma migrate dev
```

### 4️⃣ Rodar o projeto
```bash
pnpm run dev
```

Acesse em: [http://localhost:3000](http://localhost:3000)

---
