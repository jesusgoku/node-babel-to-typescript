# Added Typescript to Node + Babel 7

Added Typescript support for project with Node + Babel 7, and migrate complete or partial project

- **Option 1**: Compile JS and TS with Typescript
- **Option 2**: Compile JS and TS with Babel and check types with Typescript

For **option 1** remove `"noEmit": true` flag in `tsconfig.json` and run `yarn run tsc`, disadvantage is Typescritpt support ES2015 features.

With **option 2** check types with `yarn run types:check`.

## References

- https://hackernoon.com/using-babel-7-with-node-7e401bc28b04
- https://medium.com/kata-engineering/migrating-to-typescript-part-1-getting-started-f81e8d8c81aa

## Notes

- [Prettier + ESLint setting](https://github.com/wesbos/eslint-config-wesbos)
