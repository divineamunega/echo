# Echo - Project Specification & Architecture

**Version:** 1.0  
**Last Updated:** 2025-11-24

## Executive Summary

Echo is a content publishing platform that enables developers to write once and publish everywhere. Users authenticate with Google via WorkOS, write content in a Notion-like editor, and publish to multiple platforms (Hashnode, Dev.to, Medium) simultaneously with platform-specific optimizations.

## Table of Contents

1. [Product Overview](#product-overview)
2. [User Flows](#user-flows)
3. [System Architecture](#system-architecture)
4. [Database Schema](#database-schema)
5. [Authentication & Authorization](#authentication--authorization)
6. [Editor Integration](#editor-integration)
7. [Publishing System](#publishing-system)
8. [API Design](#api-design)
9. [Technology Stack](#technology-stack)
10. [Security Considerations](#security-considerations)
11. [Deployment Strategy](#deployment-strategy)

---

## Product Overview

### Core Features

1. **Authentication**
   - Google OAuth sign-in
   - Session management
   - Account linking for publishing platforms

2. **Content Creation**
   - Notion-like block-based editor
   - Auto-save functionality
   - Draft management
   - Rich media support (images, code blocks, embeds)

3. **Platform Integration**
   - Connect Hashnode, Dev.to, Medium accounts
   - OAuth flow for each platform
   - Token management and refresh

4. **Publishing Workflow**
   - One-click publish to multiple platforms
   - Platform-specific SEO optimization
   - Custom metadata per platform
   - RSS feed generation
   - Scheduled publishing

5. **Content Management**
   - Draft/Published status tracking
   - Edit history
   - Analytics integration
   - Cross-platform sync status

---

## User Flows

### 1. First-Time User Flow

```
Landing Page → Sign Up (Google OAuth) → Onboarding → Connect Platforms → Editor
```

**Steps:**
1. User lands on homepage
2. Clicks "Sign up with Google"
3. Google OAuth consent screen
4. Redirect to onboarding:
   - Welcome message
   - Quick tutorial (optional)
   - Prompt to connect first platform
5. Platform connection modal:
   - Choose platform (Hashnode/Dev.to/Medium)
   - OAuth authorization
   - Success confirmation
6. Redirect to editor with "Start writing" prompt

### 2. Returning User Flow

```
Login → Dashboard → [New Post | Edit Draft | View Published]
```

**Steps:**
1. User signs in with Google
2. Lands on dashboard showing:
   - Recent drafts
   - Published posts
   - Quick stats (views, platforms connected)
   - "New Post" CTA
3. Click "New Post" → Editor

### 3. Publishing Flow

```
Write Content → Preview → Configure SEO → Select Platforms → Publish
```

**Steps:**
1. User writes in editor
2. Clicks "Publish"
3. Publishing modal opens:
   - **Platform Selection**: Choose which platforms to publish to
   - **SEO Configuration**:
     - Title (auto-filled from content)
     - Meta description
     - Tags/Categories
     - Canonical URL
     - Cover image
   - **Platform-Specific Settings**:
     - Hashnode: Series, publication
     - Dev.to: Organization, canonical URL
     - Medium: Publication, license
   - **RSS Configuration**: Include in feed (yes/no)
4. Preview for each platform
5. Click "Publish Now" or "Schedule"
6. Success screen with links to published posts

### 4. Platform Connection Flow

```
Settings → Integrations → Add Platform → OAuth → Connected
```

**Steps:**
1. Navigate to Settings → Integrations
2. See list of available platforms
3. Click "Connect" on desired platform
4. OAuth authorization flow
5. Store access token securely
6. Display connection status

---

## System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  Next.js 15 App (React 19, TypeScript, Tailwind CSS)       │
│  - Landing Page                                              │
│  - Dashboard                                                 │
│  - Editor (BlockNote/Novel)                                  │
│  - Settings                                                  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      API Layer (Next.js)                     │
│  - /api/auth/*        - WorkOS endpoints                    │
│  - /api/posts/*       - CRUD operations                     │
│  - /api/publish/*     - Publishing logic                    │
│  - /api/platforms/*   - Platform OAuth & management         │
│  - /api/rss           - RSS feed generation                 │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Service Layer                           │
│  - AuthService        - User authentication                 │
│  - PostService        - Content management                  │
│  - PublishService     - Multi-platform publishing           │
│  - PlatformService    - Platform API integrations           │
│  - StorageService     - Image/media uploads                 │
│  - RSSService         - Feed generation                     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Data Layer                              │
│  - PostgreSQL (Supabase/Neon)                               │
│  - Redis (Upstash) - Caching & sessions                     │
│  - S3/R2 (Cloudflare) - Media storage                       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   External Services                          │
│  - Google OAuth                                              │
│  - Hashnode API                                              │
│  - Dev.to API                                                │
│  - Medium API                                                │
└─────────────────────────────────────────────────────────────┘
```

### Component Architecture

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── signup/
│   │   └── callback/
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   ├── editor/
│   │   │   └── [postId]/
│   │   ├── posts/
│   │   └── settings/
│   │       └── integrations/
│   ├── api/
│   │   ├── auth/[...nextauth]/
│   │   ├── posts/
│   │   ├── publish/
│   │   ├── platforms/
│   │   └── rss/
│   └── (marketing)/
│       ├── page.tsx
│       ├── pricing/
│       └── about/
├── components/
│   ├── editor/
│   │   ├── block-editor.tsx
│   │   ├── toolbar.tsx
│   │   └── extensions/
│   ├── dashboard/
│   │   ├── post-list.tsx
│   │   ├── stats-card.tsx
│   │   └── quick-actions.tsx
│   ├── publishing/
│   │   ├── publish-modal.tsx
│   │   ├── platform-selector.tsx
│   │   ├── seo-form.tsx
│   │   └── preview.tsx
│   └── integrations/
│       ├── platform-card.tsx
│       └── oauth-button.tsx
├── lib/
│   ├── auth/
│   │   ├── workos.ts
│   │   └── session.ts
│   ├── db/
│   │   ├── drizzle.ts
│   │   ├── schema.ts
│   │   └── queries/
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── post.service.ts
│   │   ├── publish.service.ts
│   │   ├── platform.service.ts
│   │   └── rss.service.ts
│   └── platforms/
│       ├── hashnode.ts
│       ├── devto.ts
│       └── medium.ts
└── types/
    ├── post.ts
    ├── platform.ts
    └── user.ts
```

---

## Database Schema

### Users Table

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  avatar_url TEXT,
  google_id VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP,
  subscription_tier VARCHAR(50) DEFAULT 'free',
  subscription_status VARCHAR(50) DEFAULT 'active'
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_google_id ON users(google_id);
```

### Platform Connections Table

```sql
CREATE TABLE platform_connections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  platform VARCHAR(50) NOT NULL, -- 'hashnode', 'devto', 'medium'
  platform_user_id VARCHAR(255),
  platform_username VARCHAR(255),
  access_token TEXT NOT NULL, -- Encrypted
  refresh_token TEXT, -- Encrypted
  token_expires_at TIMESTAMP,
  scopes TEXT[], -- Array of granted scopes
  metadata JSONB, -- Platform-specific data (publication IDs, etc.)
  is_active BOOLEAN DEFAULT true,
  connected_at TIMESTAMP DEFAULT NOW(),
  last_used_at TIMESTAMP,
  UNIQUE(user_id, platform)
);

CREATE INDEX idx_platform_connections_user_id ON platform_connections(user_id);
CREATE INDEX idx_platform_connections_platform ON platform_connections(platform);
```

### Posts Table

```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(500) NOT NULL,
  content JSONB NOT NULL, -- Block-based editor content
  content_html TEXT, -- Rendered HTML
  content_markdown TEXT, -- Rendered Markdown
  excerpt TEXT,
  cover_image_url TEXT,
  status VARCHAR(50) DEFAULT 'draft', -- 'draft', 'published', 'scheduled'
  scheduled_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  published_at TIMESTAMP,
  
  -- SEO Fields
  meta_title VARCHAR(500),
  meta_description TEXT,
  canonical_url TEXT,
  tags TEXT[],
  
  -- Settings
  include_in_rss BOOLEAN DEFAULT true,
  allow_comments BOOLEAN DEFAULT true
);

CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_posts_status ON posts(status);
CREATE INDEX idx_posts_created_at ON posts(created_at DESC);
```

### Published Posts Table

```sql
CREATE TABLE published_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  platform VARCHAR(50) NOT NULL,
  platform_post_id VARCHAR(255), -- ID on the external platform
  platform_url TEXT, -- URL of published post
  published_at TIMESTAMP DEFAULT NOW(),
  last_synced_at TIMESTAMP,
  status VARCHAR(50) DEFAULT 'published', -- 'published', 'failed', 'deleted'
  error_message TEXT,
  
  -- Platform-specific metadata
  metadata JSONB,
  
  UNIQUE(post_id, platform)
);

CREATE INDEX idx_published_posts_post_id ON published_posts(post_id);
CREATE INDEX idx_published_posts_platform ON published_posts(platform);
```

### Post Versions Table (Edit History)

```sql
CREATE TABLE post_versions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  content JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  created_by UUID REFERENCES users(id)
);

CREATE INDEX idx_post_versions_post_id ON post_versions(post_id);
CREATE INDEX idx_post_versions_created_at ON post_versions(created_at DESC);
```

### Analytics Table (Optional - Future)

```sql
CREATE TABLE post_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  published_post_id UUID REFERENCES published_posts(id) ON DELETE CASCADE,
  views INTEGER DEFAULT 0,
  reads INTEGER DEFAULT 0,
  reactions INTEGER DEFAULT 0,
  comments INTEGER DEFAULT 0,
  synced_at TIMESTAMP DEFAULT NOW(),
  
  UNIQUE(published_post_id)
);
```

### Drizzle ORM Schema

**Database Schema Definition:**

```typescript
// lib/db/schema.ts
import { pgTable, uuid, varchar, text, timestamp, boolean, jsonb, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
  avatarUrl: text('avatar_url'),
  googleId: varchar('google_id', { length: 255 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  lastLogin: timestamp('last_login'),
  subscriptionTier: varchar('subscription_tier', { length: 50 }).default('free'),
  subscriptionStatus: varchar('subscription_status', { length: 50 }).default('active'),
});

export const platformConnections = pgTable('platform_connections', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }),
  platform: varchar('platform', { length: 50 }).notNull(),
  platformUserId: varchar('platform_user_id', { length: 255 }),
  platformUsername: varchar('platform_username', { length: 255 }),
  accessToken: text('access_token').notNull(), // Encrypted
  refreshToken: text('refresh_token'), // Encrypted
  tokenExpiresAt: timestamp('token_expires_at'),
  scopes: text('scopes').array(),
  metadata: jsonb('metadata'),
  isActive: boolean('is_active').default(true),
  connectedAt: timestamp('connected_at').defaultNow(),
  lastUsedAt: timestamp('last_used_at'),
});

export const posts = pgTable('posts', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }),
  title: varchar('title', { length: 500 }).notNull(),
  content: jsonb('content').notNull(),
  contentHtml: text('content_html'),
  contentMarkdown: text('content_markdown'),
  excerpt: text('excerpt'),
  coverImageUrl: text('cover_image_url'),
  status: varchar('status', { length: 50 }).default('draft'),
  scheduledAt: timestamp('scheduled_at'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  publishedAt: timestamp('published_at'),
  metaTitle: varchar('meta_title', { length: 500 }),
  metaDescription: text('meta_description'),
  canonicalUrl: text('canonical_url'),
  tags: text('tags').array(),
  includeInRss: boolean('include_in_rss').default(true),
  allowComments: boolean('allow_comments').default(true),
});

export const publishedPosts = pgTable('published_posts', {
  id: uuid('id').primaryKey().defaultRandom(),
  postId: uuid('post_id').references(() => posts.id, { onDelete: 'cascade' }),
  platform: varchar('platform', { length: 50 }).notNull(),
  platformPostId: varchar('platform_post_id', { length: 255 }),
  platformUrl: text('platform_url'),
  publishedAt: timestamp('published_at').defaultNow(),
  lastSyncedAt: timestamp('last_synced_at'),
  status: varchar('status', { length: 50 }).default('published'),
  errorMessage: text('error_message'),
  metadata: jsonb('metadata'),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
  platformConnections: many(platformConnections),
}));

export const postsRelations = relations(posts, ({ one, many }) => ({
  user: one(users, {
    fields: [posts.userId],
    references: [users.id],
  }),
  publishedPosts: many(publishedPosts),
}));
```

**Drizzle Client Setup:**

```typescript
// lib/db/drizzle.ts
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL!;

const client = postgres(connectionString);
export const db = drizzle(client, { schema });
```

**Example Query:**

```typescript
import { db } from '@/lib/db/drizzle';
import { posts, users } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

// Get user's posts
const userPosts = await db.query.posts.findMany({
  where: eq(posts.userId, userId),
  with: {
    publishedPosts: true,
  },
  orderBy: (posts, { desc }) => [desc(posts.createdAt)],
});
```

---

## Authentication & Authorization

---

## Authentication & Authorization

### WorkOS Configuration

**Provider:** WorkOS AuthKit with Google OAuth

**Session Strategy:** Cookie-based sessions

**Why WorkOS:**
- Enterprise-grade authentication
- Built-in user management
- Magic links, SSO, MFA support
- Excellent developer experience
- Free tier for small projects

**Configuration:**

```typescript
// lib/auth/workos.ts
import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY!);
const clientId = process.env.WORKOS_CLIENT_ID!;

export async function getAuthorizationUrl(state: string) {
  return workos.userManagement.getAuthorizationUrl({
    provider: 'GoogleOAuth',
    clientId,
    redirectUri: `${process.env.NEXT_PUBLIC_URL}/api/auth/callback`,
    state,
  });
}

export async function authenticateWithCode(code: string) {
  const { user } = await workos.userManagement.authenticateWithCode({
    clientId,
    code,
  });
  
  return user;
}

export async function getUser(userId: string) {
  return await workos.userManagement.getUser(userId);
}

export async function createSession(userId: string) {
  // Create encrypted session cookie
  const session = await workos.userManagement.createSession({
    userId,
  });
  
  return session;
}
```

**Middleware for Protected Routes:**

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifySession } from '@/lib/auth/session';

export async function middleware(request: NextRequest) {
  const session = await verifySession(request);
  
  if (!session && !request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/editor/:path*', '/settings/:path*'],
};
```

### Platform OAuth Flows

Each platform requires separate OAuth:

**Hashnode:**
- OAuth 2.0 with Personal Access Token
- Scopes: `read:user`, `write:publication`

**Dev.to:**
- API Key authentication
- User generates API key from settings

**Medium:**
- OAuth 2.0
- Scopes: `basicProfile`, `publishPost`

**Token Storage:**
- Encrypt tokens using AES-256
- Store in `platform_connections` table
- Implement token refresh logic

---

## Editor Integration

### Recommended Editor: BlockNote

**Why BlockNote:**
- Open-source Notion-like editor
- Block-based architecture
- Built on ProseMirror/TipTap
- TypeScript support
- Extensible
- Good documentation

**Alternative:** Novel (by Vercel)

### Editor Features

1. **Block Types:**
   - Paragraph
   - Headings (H1-H6)
   - Lists (ordered, unordered, tasks)
   - Code blocks with syntax highlighting
   - Quotes
   - Callouts/Alerts
   - Images
   - Embeds (YouTube, Twitter, CodePen)
   - Tables
   - Dividers

2. **Formatting:**
   - Bold, italic, underline, strikethrough
   - Inline code
   - Links
   - Text color/highlight

3. **Features:**
   - Slash commands (`/` to insert blocks)
   - Drag and drop blocks
   - Auto-save (every 2 seconds)
   - Keyboard shortcuts
   - Markdown shortcuts
   - Image upload via drag-drop or paste

### Content Storage Format

**Database:** Store as JSON (BlockNote format)

**Export Formats:**
- HTML (for preview)
- Markdown (for publishing)
- Plain text (for SEO)

```typescript
// Example BlockNote content structure
{
  "type": "doc",
  "content": [
    {
      "type": "heading",
      "attrs": { "level": 1 },
      "content": [{ "type": "text", "text": "My Post Title" }]
    },
    {
      "type": "paragraph",
      "content": [
        { "type": "text", "text": "This is " },
        { "type": "text", "marks": [{ "type": "bold" }], "text": "bold" },
        { "type": "text", "text": " text." }
      ]
    }
  ]
}
```

### Auto-Save Implementation

```typescript
// components/editor/auto-save.tsx
useEffect(() => {
  const timer = setTimeout(() => {
    if (hasChanges) {
      savePost(content);
    }
  }, 2000);
  
  return () => clearTimeout(timer);
}, [content]);
```

---

## Publishing System

### Publishing Service Architecture

```typescript
// lib/services/publish.service.ts
class PublishService {
  async publishToMultiplePlatforms(
    postId: string,
    platforms: string[],
    config: PublishConfig
  ): Promise<PublishResult[]> {
    const results = await Promise.allSettled(
      platforms.map(platform => this.publishToPlatform(postId, platform, config))
    );
    
    return results.map((result, index) => ({
      platform: platforms[index],
      status: result.status,
      data: result.status === 'fulfilled' ? result.value : null,
      error: result.status === 'rejected' ? result.reason : null
    }));
  }
  
  private async publishToPlatform(
    postId: string,
    platform: string,
    config: PublishConfig
  ) {
    switch (platform) {
      case 'hashnode':
        return await HashnodeService.publish(postId, config);
      case 'devto':
        return await DevToService.publish(postId, config);
      case 'medium':
        return await MediumService.publish(postId, config);
      default:
        throw new Error(`Unknown platform: ${platform}`);
    }
  }
}
```

### Platform-Specific Publishing

**Hashnode GraphQL API:**

```graphql
mutation PublishPost($input: PublishPostInput!) {
  publishPost(input: $input) {
    post {
      id
      slug
      url
    }
  }
}
```

**Dev.to REST API:**

```typescript
POST /api/articles
{
  "article": {
    "title": "...",
    "body_markdown": "...",
    "published": true,
    "tags": ["javascript", "webdev"],
    "canonical_url": "..."
  }
}
```

**Medium REST API:**

```typescript
POST /v1/users/{userId}/posts
{
  "title": "...",
  "contentFormat": "markdown",
  "content": "...",
  "tags": ["javascript", "programming"],
  "publishStatus": "public",
  "canonicalUrl": "..."
}
```

### SEO Configuration Per Platform

```typescript
interface PlatformSEOConfig {
  hashnode: {
    title: string;
    subtitle?: string;
    tags: string[];
    coverImage?: string;
    publicationId?: string;
    seriesId?: string;
    disableComments?: boolean;
  };
  devto: {
    title: string;
    tags: string[]; // Max 4
    series?: string;
    canonical_url?: string;
    organization_id?: number;
  };
  medium: {
    title: string;
    tags: string[]; // Max 5
    canonicalUrl?: string;
    publishStatus: 'public' | 'draft' | 'unlisted';
    license: 'all-rights-reserved' | 'cc-40-by' | 'cc-40-by-sa' | 'cc-40-by-nd' | 'cc-40-by-nc' | 'cc-40-by-nc-nd' | 'cc-40-by-nc-sa' | 'cc-40-zero' | 'public-domain';
  };
}
```

### RSS Feed Generation

```typescript
// lib/services/rss.service.ts
import RSS from 'rss';

class RSSService {
  async generateFeed(userId: string): Promise<string> {
    const user = await getUserById(userId);
    const posts = await getPublishedPosts(userId, { includeInRSS: true });
    
    const feed = new RSS({
      title: `${user.name}'s Blog`,
      description: 'Latest posts from Echo',
      feed_url: `${process.env.NEXT_PUBLIC_URL}/api/rss/${userId}`,
      site_url: process.env.NEXT_PUBLIC_URL,
      language: 'en',
      pubDate: new Date(),
    });
    
    posts.forEach(post => {
      feed.item({
        title: post.title,
        description: post.excerpt,
        url: post.canonical_url,
        date: post.published_at,
        categories: post.tags,
      });
    });
    
    return feed.xml();
  }
}
```

**RSS Endpoint:**

```typescript
// app/api/rss/[userId]/route.ts
export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const xml = await RSSService.generateFeed(params.userId);
  
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
```

---

## API Design

### REST API Endpoints

**Authentication:**
- `POST /api/auth/signin` - Sign in with Google
- `POST /api/auth/signout` - Sign out
- `GET /api/auth/session` - Get current session

**Posts:**
- `GET /api/posts` - List user's posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post
- `POST /api/posts/:id/publish` - Publish post

**Platforms:**
- `GET /api/platforms` - List connected platforms
- `POST /api/platforms/:platform/connect` - Initiate OAuth
- `GET /api/platforms/:platform/callback` - OAuth callback
- `DELETE /api/platforms/:platform` - Disconnect platform
- `POST /api/platforms/:platform/refresh` - Refresh token

**Publishing:**
- `POST /api/publish` - Publish to multiple platforms
- `GET /api/publish/:postId/status` - Get publish status
- `POST /api/publish/:postId/sync` - Sync analytics

**RSS:**
- `GET /api/rss/:userId` - Get user's RSS feed

**Media:**
- `POST /api/upload` - Upload image/media
- `DELETE /api/upload/:id` - Delete media

### API Response Format

```typescript
// Success response
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}

// Error response
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": { ... }
  }
}
```

---

## Technology Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Components:** Radix UI + shadcn/ui
- **Editor:** BlockNote or Novel
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **State:** Zustand (for global state)
- **HTTP Client:** Native fetch with SWR for caching

### Backend
- **Runtime:** Node.js (Next.js API Routes)
- **Authentication:** WorkOS AuthKit
- **Database:** PostgreSQL (Neon or Supabase)
- **ORM:** Drizzle ORM
- **Cache:** Redis (Upstash)
- **Storage:** Cloudflare R2 or AWS S3
- **Email:** Resend
- **Cron Jobs:** Vercel Cron or Inngest

### DevOps
- **Hosting:** Vercel
- **Database:** Supabase (PostgreSQL + Auth + Storage)
- **Monitoring:** Sentry
- **Analytics:** Vercel Analytics + Plausible
- **CI/CD:** GitHub Actions

### External APIs
- **WorkOS:** Authentication
- **Hashnode API:** GraphQL
- **Dev.to API:** REST
- **Medium API:** REST
- **Cloudflare R2:** Image storage

---

## Security Considerations

### Authentication Security
1. **OAuth Best Practices:**
   - Use PKCE for OAuth flows
   - Validate state parameter
   - Short-lived access tokens
   - Secure token storage (encrypted)

2. **Session Management:**
   - HTTP-only cookies
   - Secure flag in production
   - SameSite=Lax
   - CSRF protection

### Data Security
1. **Encryption:**
   - Encrypt platform tokens at rest (AES-256)
   - Use environment variables for secrets
   - Never log sensitive data

2. **API Security:**
   - Rate limiting (100 req/min per user)
   - Input validation with Zod
   - SQL injection prevention (Drizzle ORM with parameterized queries)
   - XSS protection (sanitize HTML output)

3. **Authorization:**
   - Row-level security (RLS) in Supabase
   - Verify user owns resource before operations
   - Implement proper RBAC

### Content Security
1. **Image Uploads:**
   - Validate file types (MIME)
   - Limit file size (5MB max)
   - Scan for malware
   - Generate unique filenames

2. **User Content:**
   - Sanitize HTML before rendering
   - Escape user input
   - Implement content moderation (future)

---

## Deployment Strategy

### Environment Setup

**Development:**
```env
NEXT_PUBLIC_URL=http://localhost:3000
DATABASE_URL=postgresql://...
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000
```

**Production:**
```env
NEXT_PUBLIC_URL=https://echo.app
DATABASE_URL=postgresql://...
REDIS_URL=...
R2_BUCKET_URL=...
# ... other secrets
```

### Deployment Pipeline

```
GitHub Push → GitHub Actions → Build → Test → Deploy to Vercel
```

**Steps:**
1. Push to `main` branch
2. Run tests and linting
3. Build Next.js app
4. Run database migrations
5. Deploy to Vercel
6. Run smoke tests
7. Notify team

### Database Migrations

```bash
# Create migration
pnpm prisma migrate dev --name add_analytics_table

# Apply to production
pnpm prisma migrate deploy
```

### Monitoring & Alerts

1. **Error Tracking:** Sentry
2. **Performance:** Vercel Analytics
3. **Uptime:** Better Uptime
4. **Logs:** Vercel Logs + Axiom

---

## Implementation Phases

### Phase 1: MVP (4-6 weeks)
- [ ] Authentication (Google OAuth)
- [ ] Basic editor integration (BlockNote)
- [ ] Single platform publishing (Dev.to)
- [ ] Post management (CRUD)
- [ ] Basic dashboard

### Phase 2: Multi-Platform (2-3 weeks)
- [ ] Hashnode integration
- [ ] Medium integration
- [ ] Platform connection management
- [ ] Publish to multiple platforms
- [ ] SEO configuration per platform

### Phase 3: Polish & Features (2-3 weeks)
- [ ] RSS feed generation
- [ ] Scheduled publishing
- [ ] Edit history
- [ ] Image uploads
- [ ] Analytics dashboard

### Phase 4: Growth (Ongoing)
- [ ] Team collaboration
- [ ] Content templates
- [ ] AI writing assistance
- [ ] Advanced analytics
- [ ] Mobile app

---

## Success Metrics

### Key Performance Indicators (KPIs)

1. **User Acquisition:**
   - Sign-ups per week
   - Conversion rate (landing → sign-up)
   - Platform connections per user

2. **Engagement:**
   - Posts created per user
   - Publish rate (drafts → published)
   - Active users (weekly/monthly)
   - Session duration

3. **Technical:**
   - API response time (<200ms p95)
   - Uptime (99.9%)
   - Error rate (<0.1%)
   - Publishing success rate (>99%)

4. **Business:**
   - MRR (Monthly Recurring Revenue)
   - Churn rate
   - Customer acquisition cost (CAC)
   - Lifetime value (LTV)

---

## Appendix

### Glossary

- **Block Editor:** Content editor using block-based architecture (like Notion)
- **OAuth:** Open Authorization protocol for secure API access
- **RSS:** Really Simple Syndication - web feed format
- **SEO:** Search Engine Optimization
- **CRUD:** Create, Read, Update, Delete operations
- **JWT:** JSON Web Token for authentication
- **RLS:** Row-Level Security in database

### References

- [BlockNote Documentation](https://www.blocknotejs.org/)
- [NextAuth.js Docs](https://next-auth.js.org/)
- [Hashnode API](https://api.hashnode.com/)
- [Dev.to API](https://developers.forem.com/api/)
- [Medium API](https://github.com/Medium/medium-api-docs)

---

**Document Status:** Draft v1.0  
**Next Review:** After Phase 1 completion
