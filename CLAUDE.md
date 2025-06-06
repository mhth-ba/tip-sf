This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Environment Setup
```bash
# Backend dependencies
composer install

# Frontend dependencies
npm install  # or yarn install

# Configure database
cp app/config/parameters.yml.dist app/config/parameters.yml
# Edit parameters.yml with database credentials

# Build DLL for faster development builds
npm run lib

# Clear Symfony cache
php bin/console cache:clear
```

### Development
```bash
# Start webpack dev server with hot reloading (port 9000)
npm start

# Watch and rebuild assets on changes
npm run watch

# Symfony development server
php bin/console server:run
```

### Production Build
```bash
# Build optimized frontend assets
npm run prod

# Clear and warm production cache
php bin/console cache:clear --env=prod
php bin/console cache:warmup --env=prod
```

### Testing
```bash
# Run JavaScript tests
npm test

# Run PHP tests
./vendor/bin/phpunit

# Run specific test file
./vendor/bin/phpunit tests/AppBundle/Controller/DefaultControllerTest.php
```

## High-Level Architecture

### Application Overview
TIP-SF is a multi-module enterprise application for district heating management built with:
- **Backend**: Symfony 3.4 with Doctrine ORM
- **Frontend**: React/Redux SPAs with module-based architecture
- **Database**: SQL Server (via Doctrine)

### Frontend Architecture
The frontend is organized into independent React/Redux modules, each with its own:
- Entry point in webpack configuration
- Redux store, actions, reducers, and sagas
- Component hierarchy
- SCSS styling

Key modules:
- **dispecing/** - Dispatching operations (DDH-HV, DDH-OST, SCZT monitoring)
- **kontroling/** - Financial control (SCT, VCT)
- **efektivnost/** - Energy efficiency (DPP)
- **meranie-a-odpocty/** - Measurement systems (ANM, RM)
- **prevadzka/** - Operations (MPP for different plants)
- **projekty/** - Project management
- **uctovnictvo/** - Accounting (DP)

Each module follows this pattern:
```
assets/js/[module]/
├── index.js          # Entry point
├── store.js          # Redux store configuration
├── actions.js        # Action creators
├── sagas.js          # Redux-Saga side effects
├── reducers/         # Redux reducers
└── components/       # React components
```

### Backend Architecture
API-driven architecture with:
- **Controllers** in `src/AppBundle/Controller/` extending BaseController
- **API Models** in `src/AppBundle/Api/` handling business logic
- **Entities** in `src/AppBundle/Entity/` mapping database tables
- **Repositories** in `src/AppBundle/Repository/` for data access

Key patterns:
- Native SQL queries via stored procedures for complex operations
- Role-based access control with granular permissions
- Activity logging for audit trails
- File upload handling via OneupUploaderBundle

### Bundle Structure
- **AppBundle** - Main application bundle
- **AktionBundle** - Additional functionality (limited use)

### Asset Management
- Webpack with DllPlugin for vendor bundle optimization
- Manifest-based asset versioning for cache busting
- SCSS compilation with module-specific stylesheets
- Static assets served from `/web/build/`

### Database Considerations
- Uses Doctrine ORM with SQL Server
- Complex entity relationships modeling heating infrastructure
- Stored procedures for performance-critical operations
- Activity and request logging for audit compliance