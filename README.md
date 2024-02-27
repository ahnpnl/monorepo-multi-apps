# Demo TV Shows app

Check out branch `tv-show-app`

## Dependencies

### App dependencies

- NPM **10.2.4**
- NodeJS **20.11.1**
- Vue **3.4.19**
- Vue Router **4.3.0**

### Developer dependencies

- Code Linting:
  - `ESLint`
  - `Prettier`
  - `Prettier` plugins to work with ESLint + TypeScript
  - ESLint plugin for `testing-library`
  - ESLint plugin for `vue`
  - ESLint plugin for `typescript`
  - ESLint plugin for `prettier`
- TypeScript: `typescript` + `vue-tsc`
- Unit test: `vitest` + `testing-library`
- Build: `vite` + svg loader plugin


## Setting up the project

- Ensure `NodeJS` + `NPM` are installed with correct versions.
- At root of the project, run `npm ci`

### Start the app

- Open `apps/vue-app/.env` and fill in the API key from http://www.tvmaze.com/api
- At root of the project, run `npm run start-tv`

### Run tests

- At root of the project, run `npm run test`

### Run code checkers

- At root of the project, run `npm run lint && npm run type-check`


## Architecture

The project uses monorepo structure. This can help to share the codes if we have more frontend apps which share codes with each other
+ apps: all frontend applications
+ libs **(potentially)**: contains codes which can be shared between frontend projects. This includes:
  + `js-extension`: extensions of JavaScript language itself. These are codes which extend existing native JS and it shouldn't contain any framework codes.
  + `js-framework-extension`: extensions of JavaScript frameworks. If more Vue apps share the same Vue codes, those Vue codes can go here.

### Apps

There can be multiple apps inside this folder.

The only project right now is `vue-app`. This project follows some architectures:

#### Folder structure

- `vue-app/global-types`: global type definitions to use for the project.
- `vue-app/lib`: shared codes which can be moved to `<project_root>/libs` for sharing between apps
- `vue-app/src`: application source
- `vue-app/tests`: unit tests
  - `framework`:
    - `extensions`: contains extensions for test framework
    - `test-double`: contains fake, stub things for test or integration with 3rd party libs for testing framework
  - `test-case`: test files which match structure in `vue-app/src`

#### Application architecture

To allow application to scale up easily, this project follows https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/ with 3 layers:

- `core`:
  - business logic
  - domain
  - application/domain services
  - interfaces for 3rd party/platform APIs integration
- `infrastructure`:
  - 3rd party/platform APIs integration implementation reflects interfaces in `core`
  - extension of existing 3rd party usages in app, e.g. `FetchAPIAdapter`
  - **NOTES**: some 3rd party libraries which are mandatory for app like `vue-router` don't need `Port-Adapter`. This should be discussed in the team.
- `presentation`:
  - Display user interface for apps
  - `resources`: this is the glue between services and user interface. Resources take care of mapping domain data to view data.
  - contain only user interface logic
  - `shared-kernel`: contains shared codes for `presentation` layer
    - `components`: follow Atomic Design
- `routes`: contains folder structure for pages which can easily migrate to SSR structure.

#### CSS Architecture

- BEM https://getbem.com/introduction/
- ITCSS https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/
- Atomic CSS

### Libs

Locates at the root of the project, inside folder `libs`.

This folder contains codes which can be shared between frontend projects. This includes:
+ `js-extension`: extensions of JavaScript language itself. These are codes which extend existing native JS and it shouldn't contain any framework codes.
+ `js-framework-extension`: extensions of JavaScript frameworks. If more Vue apps share the same Vue codes, those Vue codes can go here.

**NOTE**: this project doesn't have `libs` folder yet

