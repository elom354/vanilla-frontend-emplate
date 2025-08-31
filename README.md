# vanilla – Boilerplate

Un boilerplate prêt à l’emploi pour démarrer rapidement une app front moderne.

## Stack

- Vite + TypeScript (template vanilla)
- Tailwind CSS
- ESLint 9 (Flat Config) + @typescript-eslint + eslint-config-prettier
- Prettier
- Husky + lint-staged
- Commitlint (conventional commits)

## Prérequis

- Node.js >= 18 (un fichier `.nvmrc` est fourni)

## Démarrage rapide

```bash
npm install
npm run dev
```

## Scripts utiles

- `npm run dev` : lance le serveur de dev Vite
- `npm run build` : build de production
- `npm run preview` : prévisualisation du build
- `npm run format` : formatage avec Prettier
- `npm run lint` : lint avec ESLint

## Hooks de commit

- Pré-commit : format + lint via lint-staged
- Message de commit : validation via Commitlint (conventional commits)

## Notes

Ce dépôt sert de base (boilerplate). Adaptez les règles ESLint/Prettier/Tailwind selon vos besoins.
