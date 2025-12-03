# DermaRokh E-Commerce Platform

## Overview

DermaRokh is a Persian-language (RTL) e-commerce platform for cosmetics and beauty products. The application features a vibrant, category-driven design inspired by leading Persian cosmetics retailers, with comprehensive product browsing, filtering, cart management, and wishlist functionality. The platform emphasizes mobile-first design with touch-friendly interfaces and streamlined user experiences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server with HMR support
- Wouter for lightweight client-side routing
- Component-based architecture with reusable UI elements

**UI Component System**
- Radix UI primitives for accessible, unstyled components
- shadcn/ui component library with "new-york" style variant
- Tailwind CSS for utility-first styling with custom design tokens
- RTL-first layout system with Persian font support (Vazirmatn)

**State Management**
- Zustand for lightweight global state management
- State persistence using zustand's persist middleware
- TanStack React Query for server state management and caching
- Local state managed through React hooks

**Design System**
- Category-based color psychology with distinct color identities
- Custom CSS variables for theme customization
- Mobile-first responsive design with specific breakpoints
- Persian typography hierarchy with Vazirmatn font family

### Backend Architecture

**Server Framework**
- Express.js REST API server
- TypeScript for type safety across the stack
- HTTP server created with Node's native `http` module
- Custom middleware for request logging and JSON parsing

**Data Layer**
- In-memory storage interface (MemStorage) for development
- Prepared for PostgreSQL integration via Drizzle ORM
- Schema-first database design with Drizzle Kit migrations
- Type-safe database queries using drizzle-zod integration

**API Structure**
- Route registration system in `server/routes.ts`
- Storage abstraction interface (IStorage) for CRUD operations
- Prepared for RESTful API endpoints under `/api` prefix
- Static file serving for production builds

### Data Storage

**Database Configuration**
- PostgreSQL as the target production database
- Neon Database serverless driver for database connections
- Drizzle ORM for type-safe query building and migrations
- Schema defined in `shared/schema.ts` for shared types

**Current Schema**
- Users table with UUID primary keys, username, and password fields
- Zod schemas for runtime validation of insert operations
- Type inference for Select and Insert operations

**Session Management**
- Prepared for PostgreSQL-backed sessions via connect-pg-simple
- Session configuration ready for authentication implementation

### External Dependencies

**Database & ORM**
- @neondatabase/serverless: Serverless PostgreSQL driver
- drizzle-orm: Type-safe ORM with PostgreSQL dialect
- drizzle-kit: Database migration tooling

**UI Component Libraries**
- @radix-ui/*: Comprehensive set of accessible UI primitives
- shadcn/ui: Pre-built component system built on Radix
- Tailwind CSS: Utility-first CSS framework
- class-variance-authority: Type-safe variant management

**State & Data Management**
- zustand: Lightweight state management with persistence
- @tanstack/react-query: Server state synchronization
- react-hook-form: Form state and validation
- zod: Runtime schema validation

**Development Tools**
- Vite: Fast development server and build tool
- TypeScript: Type safety across the entire stack
- ESBuild: Fast JavaScript bundler for production
- tsx: TypeScript execution for development

**Utilities**
- wouter: Lightweight routing library
- date-fns: Date manipulation utilities
- clsx & tailwind-merge: Conditional class name utilities
- lucide-react: Icon library

**Build & Deployment**
- Production build combines Vite (client) and ESBuild (server)
- Server bundling with allowlist for specific dependencies
- Static file serving from `dist/public` directory
- Environment-based configuration with NODE_ENV