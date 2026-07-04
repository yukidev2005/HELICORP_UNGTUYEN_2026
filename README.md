# 🎹 PMO Wave75 — Product Landing Page

> **[HELICORP – Round 2 Application 2026]**  
> Submitted by: **[Dang Hoang Thien An]**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-4.x-000000?logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)

---

## 📖 Project Overview

**PMO Wave75** is a product landing page for the **Wave75** premium mechanical keyboard — a 75% layout custom keyboard featuring a CNC full-aluminum chassis, hot-swappable switches, multi-mode connectivity (USB-C / 2.4G / Bluetooth), and full QMK/VIA support.

The project is built as a complete product marketing website, featuring an interactive color showcase, technical specifications, switch comparison, and a customer notification subscription system powered by the Telegram Bot API.

---

## ✨ Key Features

| Feature                           | Description                                                                                                                                                              |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 🎨 **Interactive Color Showcase** | Select product color variants with a glassmorphism UI — the page background and keyboard image update smoothly per color (Pink, Black, Blue, Silver, Red, Milky, Orange) |
| 🦸 **Hero Section**               | Product introduction with CTA buttons: Buy Now, View Specs, Get Notified                                                                                                 |
| ⚙️ **Feature Section**            | 6 highlighted technical features (Magnetic Touch Needle, Quick Release Structure, PCB Slotting Area, QMK/VIA, 75% Layout, 8000mAh Battery) with alternating layout       |
| 📋 **Specs Section**              | Full technical specifications in a card grid layout alongside a product illustration                                                                                     |
| 🔧 **Switch Comparison**          | Side-by-side comparison of 2 switch options: HMX Green Bamboo & Kailh Xueqing with full specs                                                                            |
| 📬 **Subscribe Form**             | Notification sign-up dialog with form validation (React Hook Form + Zod), delivering data via Telegram Bot                                                               |
| 🌙 **Dark / Light Mode**          | Theme toggle powered by `next-themes`, preference persisted in localStorage                                                                                              |
| 📱 **Fully Responsive**           | Full support from mobile → tablet → desktop → 2XL ultrawide                                                                                                              |

---

## 🛠️ Tech Stack

### Core

| Technology                                    | Version | Role                                       |
| --------------------------------------------- | ------- | ------------------------------------------ |
| [React](https://react.dev/)                   | 19.x    | UI Framework — with React Compiler enabled |
| [TypeScript](https://www.typescriptlang.org/) | ~6.0    | Static typing across the entire codebase   |
| [Vite](https://vite.dev/)                     | 8.x     | Build tool & dev server                    |
| [Tailwind CSS](https://tailwindcss.com/)      | 4.x     | Utility-first CSS styling                  |
| [shadcn/ui](https://ui.shadcn.com/)           | 4.x     | Component library built on Radix UI        |

### State & Data Fetching

| Technology                                          | Role                                        |
| --------------------------------------------------- | ------------------------------------------- |
| [@tanstack/react-query](https://tanstack.com/query) | Server state management & mutation handling |
| [Axios](https://axios-http.com/)                    | HTTP client for Telegram Bot API calls      |

### Forms & Validation

| Technology                                                          | Role                                       |
| ------------------------------------------------------------------- | ------------------------------------------ |
| [React Hook Form](https://react-hook-form.com/)                     | Performant, flexible form state management |
| [Zod](https://zod.dev/)                                             | Schema-based client-side validation        |
| [@hookform/resolvers](https://github.com/react-hook-form/resolvers) | Zod ↔ React Hook Form bridge               |

### UI & UX

| Technology                                                                | Role                         |
| ------------------------------------------------------------------------- | ---------------------------- |
| [Lucide React](https://lucide.dev/)                                       | Icon library                 |
| [next-themes](https://github.com/pacocoursey/next-themes)                 | Dark / Light mode management |
| [sonner](https://sonner.emilkowal.ski/)                                   | Toast notifications          |
| [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) | CSS animation utilities      |

---

## 🏗️ Architecture & Project Structure

```
HELICORP_UNGTUYEN_2026/
├── public/
│   └── images/                         # Product images (.webp, .png)
│       ├── ban-phim-co-wave75-*.webp   # 7 color variants
│       ├── hero_sub_image.webp
│       ├── specs.webp
│       └── ...                         # Feature highlight images
│
├── src/
│   ├── apis/
│   │   ├── baseUrl.ts                  # Axios instance — Telegram Bot API base URL
│   │   └── subscribeAPI.ts             # API call — send customer notification
│   │
│   ├── components/
│   │   ├── header/
│   │   │   ├── Header.tsx              # Desktop navigation bar
│   │   │   └── HeaderSheet.tsx         # Mobile drawer navigation
│   │   │
│   │   ├── HeroSection/
│   │   │   ├── HeroSection.tsx         # Wrapper + gradient background
│   │   │   ├── HeroSectionContent.tsx  # 2-column layout: text + image
│   │   │   ├── SubscribeFormDialog.tsx # Subscribe dialog with form
│   │   │   └── mutations.ts            # React Query mutation hook
│   │   │
│   │   ├── ColorSection/
│   │   │   └── ColorSection.tsx        # Interactive color variant showcase
│   │   │
│   │   ├── Feature/
│   │   │   ├── FeatureSection.tsx      # Feature grid section
│   │   │   └── FeatureItem.tsx         # Feature card with alternating layout
│   │   │
│   │   ├── Spec/
│   │   │   └── SpecSection.tsx         # Technical specifications section
│   │   │
│   │   ├── Switchs/
│   │   │   └── SwitchsSection.tsx      # Switch comparison section
│   │   │
│   │   ├── ui/                         # shadcn/ui components (Button, Card, Dialog, ...)
│   │   ├── layouts/
│   │   │   └── HomeLayout.tsx          # ReactQuery Provider layout wrapper
│   │   ├── Footer.tsx
│   │   ├── ModeToggle.tsx              # Dark/Light mode toggle button
│   │   ├── ThemeProvider.tsx           # Theme context provider
│   │   └── ReactQueryProvider.tsx
│   │
│   ├── lib/
│   │   ├── data.ts                     # All static product data
│   │   ├── types.ts                    # TypeScript interfaces & types
│   │   ├── schema.ts                   # Zod schemas (subscribe form)
│   │   └── utils.ts                    # Utility functions (cn, ...)
│   │
│   ├── App.tsx                         # Root component — layout + lazy-loaded sections
│   ├── main.tsx                        # Application entry point
│   └── index.css                       # Global styles & Tailwind directives
│
├── vite.config.ts                      # Vite config + strategic code splitting
├── components.json                     # shadcn/ui configuration
├── package.json
└── tsconfig.app.json
```

---

## 🎯 Technical Highlights

### 1. Performance — Manual Code Splitting

`vite.config.ts` configures `manualChunks` to split the bundle by vendor dependency:

- `vendor-react` → React, ReactDOM, React Router
- `vendor-query` → TanStack Query
- `vendor-ui` → Radix UI, CVA, clsx, tailwind-merge
- `vendor-form` → React Hook Form, Zod, @hookform/resolvers
- `vendor-icons` → Lucide React

Heavy sections (`Feature`, `Spec`, `Switchs`) are lazy-loaded via `React.lazy` + `Suspense`.

### 2. React Compiler

The project enables the **React Compiler** (`babel-plugin-react-compiler`) — automatically memoizing components and selectors without manually writing `useMemo` / `useCallback`.

### 3. Telegram Bot API Integration

When a user submits the subscribe form, the system:

1. Validates the data on the client using a Zod schema
2. Calls `subscribeAPI()` → `POST /bot{token}/sendMessage` to the Telegram Bot API
3. The bot forwards the customer's info (name, email, note) to the shop's chat ID
4. A `sonner` toast notifies the user of success

### 4. Interactive Color Section

- State managed with `useState`
- Page background transitions smoothly on color change (`transition-colors duration-300`)
- Glassmorphism card with `backdrop-blur`, `bg-white/10`, `border-white/20`
- Glow ring effect and animated checkmark for the active color

### 5. End-to-End Type Safety

All product data is strictly typed via `src/lib/types.ts`:

```typescript
interface SwitchSpec {
  id: string;
  brand: string;
  axis: string;
  actuationForce: string;
  travelDistance: string;
  // ...
}

interface ProductVariant {
  id: string;
  colorName: ColorName;
  colorHex: string;
  image: string;
}
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- [Bun](https://bun.sh/) (recommended) or npm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/HELICORP_UNGTUYEN_2026.git
cd HELICORP_UNGTUYEN_2026

# Install dependencies
bun install
# or: npm install
```

### Environment Variables

Create a `.env` file at the project root:

```env
VITE_TELEGRAM_BOT_TOKEN=your_telegram_bot_token
VITE_TELEGRAM_CHAT_ID=your_telegram_chat_id
```

> **Note:** All Vite environment variables must be prefixed with `VITE_` to be exposed to the client bundle.

### Run Development Server

```bash
bun run dev
# or: npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
bun run build
# or: npm run build
```

### Preview Production Build

```bash
bun run preview
```

---

## 📐 UI Design

### Design System

- **Font:** Inter Variable (`@fontsource-variable/inter`)
- **Color Palette:** Pink → Violet gradient as the primary accent, overlaid on dark/light backgrounds
- **Components:** shadcn/ui (Radix UI primitives) — Button, Card, Dialog, Separator, Input, Textarea
- **Animation:** `tailwindcss-animate` + `tw-animate-css` + CSS `transition-*` utilities

### Responsive Breakpoints

| Breakpoint | Description              |
| ---------- | ------------------------ |
| `sm`       | 640px — Mobile landscape |
| `md`       | 768px — Tablet           |
| `lg`       | 1024px — Desktop         |
| `xl`       | 1280px — Wide desktop    |
| `2xl`      | 1536px — Ultrawide       |

---

---

## 📦 Scripts

```bash
bun run dev       # Khởi động dev server (HMR)
bun run build     # Build production (TypeScript check + Vite build)
bun run preview   # Preview production build
bun run lint      # Chạy ESLint kiểm tra code
```

---

## 📝 Ghi chú bài nộp

Dự án này được xây dựng cho vòng 2 ứng tuyển tại **Helicorp 2026**, thể hiện khả năng:

- ✅ Xây dựng landing page sản phẩm hoàn chỉnh với React 19 + TypeScript
- ✅ Tổ chức codebase theo feature-based architecture
- ✅ Tối ưu hiệu năng với code splitting, lazy loading, React Compiler
- ✅ Tích hợp API bên ngoài (Telegram Bot) cho use case thực tế
- ✅ Form validation với Zod schema và React Hook Form
- ✅ UI/UX premium với glassmorphism, smooth transitions, dark mode
- ✅ Responsive design đầy đủ trên mọi kích thước màn hình

---

<div align="center">

Made with ❤️ for **Helicorp 2026**

</div>
