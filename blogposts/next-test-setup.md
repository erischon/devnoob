---
title: "Comment Setup un environnement de test avec Next.js 13, Typescript et Vitest"
date: "2023-08-02"
---

### Pourquoi ce doc ?

Après avoir passé presque 2 jours à installer un environnement de test pour mon application sous Next.js 13 je me suis dit que partager mon résultat pourrait peut-être éviter à certains et à certaines de galérer comme je l’ai fait.

### Pourquoi Vitest et pas Jest ?

Pour 2 raisons principales :

- j’ai commencé par un setup avec Jest, et pour tout dire ça a été une purge car trop de spécificités avec Next.js et Typescript. Cela fini par l’installation de trop de librairie et surtout trop de configuration à faire pour faire tourner le tout.
- Vitest est basé sur Jest et sur Vite, ce qui lui permet d’être plus simple, plus rapide et plus facile à configurer avec Typescript que ne l’est Jest.

### Installer les librairies

On installe les diverses librairies dont nous allons avoir besoin :

```powershell
yarn add -D vitest @testing-library/react jsdom @testing-library/jest-dom @vitejs/plugin-react vite-tsconfig-paths
```

[**Vitest**](https://vitest.dev/) : basé sur Jest, mais en plus léger et rapide.

[**@vitejs/plugin-react**](https://www.npmjs.com/package/@vitejs/plugin-react) : pour dire à Vitest que l’on travaille sur React.

[**React Testing Library**](https://testing-library.com/docs/react-testing-library/intro/) : qui permet d’écrire des tests pour les composants React.  

[**jest-dom**](https://www.npmjs.com/package/@testing-library/jest-dom) : pour écrire des tests unitaires pour le DOM.

[**jsdom**](https://www.npmjs.com/package/jsdom) : pour simuler un navigateur Web dans Node.js.

[**vite-tsconfig-paths**](https://www.npmjs.com/package/vite-tsconfig-paths) : c’est un plugin qui permet d’utiliser les imports avec le mapping de Typescript. En gros sans ça vous les imports qui sont dans vos différents modules ne seront pas reconnus par vitest.

[**vite-tsconfig-paths**](https://www.npmjs.com/package/vite-tsconfig-paths) : c’est un plugin qui permet d’utiliser les imports avec le mapping de Typescript. En gros sans ça vous les imports qui sont dans vos différents modules ne seront pas reconnus par vitest.

### Setup

On ajoute un script dans package.json :

```json
"test": "vitest --watch"
```

On crée un fichier vitest.setup.ts à la racine de l’application :

```tsx
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
```

On crée pour finir un fichier vitest.config.ts lui aussi à la racime de l’application :

```tsx
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
```

Il ne reste plus qu’à créer un dossier __tests__ dans src pour y mettre vos tests.

**Attention** : comme je l’ai dit en intro Vitest est basé sur Vite, donc dans un environnement React tous vos fichiers doivent avoir l’extension .tsx, même ceux de test. 

Pour lancer vos tests vous n’aurez qu’à faire :

```powershell
yarn test
```

### Ajouter le Coverage

Je mets cette partie en plus car certains utilsient le Coverage, d’autres pas, c’est comme on veut.

Il n’y a qu’une librairie à installer :

```powershell
yarn add -D @vitest/coverage-v8
```

Et on ajoute On ajoute un script dans package.json :

```json
"coverage": "vitest --coverage"
```

On ajoute des spécificités pour le Coverage dans vitest.config.ts :

```tsx

export default defineConfig({

test: {
  coverage: {
    all: true,
    exclude: [
      "**/node_modules/**",
      "**/vitest.config.ts",
      "**/vitest.setup.ts",
      ".next/**",
      "coverage/**",
      "**/*.d.ts",
      "**/next-env.d.ts",
      "**/next.config.js",
      "**/postcss.config.js",
      "**/tailwind.config.js",
      "**/tsconfig.json",
      "**/__tests__/**",
    ],
  },
},

```

Pour lancer vous n’aurez donc qu’à faire :

```powershell
yarn coverage
```

Voilà, bon tests à vous,