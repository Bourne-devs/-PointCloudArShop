# PointCloudArShop - Plant Geometry Visualizer & AR Shopping

## Project Vision
Cross-platform app (iOS first, then web/Android) that visualizes plant geometry from scanned data, provides AR visualization, and includes e-commerce functionality.

## Current Progress ✅
- [✅] Project initialized locally
- [✅] CLAUDE.md plan document created
- [✅] Git remote set to https://github.com/Bourne-devs/-PointCloudArShop
- [✅] Initial commit pushed (clean, no secrets)
- [✅] .gitignore configured to exclude sensitive files

## File Progress List
### Phase 1: Foundation
- [ ] Create project structure (iOS + Backend)
- [ ] Initialize Node.js backend with Express + GraphQL
- [ ] Set up PostgreSQL + Prisma ORM
- [ ] Create SwiftUI app shell
- [ ] Implement basic GraphQL API
- [ ] Set up GitHub Actions CI/CD

### Phase 2: Core Features
- [ ] Point cloud loading (PLY/XYZ parser)
- [ ] Point cloud visualization in SwiftUI
- [ ] AR session management with ARKit
- [ ] Measurement calculation service
- [ ] Basic UI for plant selection

### Phase 3: AR Polish
- [ ] RealityKit point cloud rendering
- [ ] AR gesture controls (pinch, rotate, pan)
- [ ] Measurement overlay in AR
- [ ] Performance optimization for large point clouds

### Phase 4: E-commerce Prep
- [ ] Cart functionality (local state)
- [ ] Payment service architecture (protocol)
- [ ] Product catalog UI
- [ ] Stripe integration (test mode)

### Phase 5: Testing & Deployment
- [ ] Xcode Preview tests
- [ ] AR testing on device
- [ ] TestFlight deployment
- [ ] Documentation

## Testing Requirements
Each feature must include:
1. Unit tests for core logic
2. Integration tests for API endpoints
3. Xcode Previews for UI components
4. AR testing checklist

## Architecture
- **iOS**: SwiftUI + RealityKit (ARKit 4.0+)
- **Backend**: Node.js + Express + GraphQL + Prisma
- **Database**: PostgreSQL + PostGIS
- **Payment**: PaymentService protocol abstraction

## Git Workflow
- Commits in English, descriptive messages
- No sensitive files committed (.env, api keys)
- Private GitHub repo: Bourne-devs/-PointCloudArShop
- Regular pushes after commits

## Tech Stack
- SwiftUI, RealityKit, ARKit (iOS)
- Node.js, Express, GraphQL, Prisma (Backend)
- PostgreSQL + PostGIS (Database)
- All free tools for development