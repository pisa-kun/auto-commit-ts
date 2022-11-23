### everyday commit

- typescriptでgit commitする
https://neos21.net/blog/2020/07/24-01.html

#### install procedure

> npm init --yes  
> npm install --save/dev typescript @types/node  
> npx tsc --init

> npm install ts-node --save-dev  

> npm i --save-dev jest @types/jest ts-jest

> npm install --save-dev simple-git
---

npx jest --init で初期設定

https://zenn.dev/zaki_yama/scraps/ab67ac109f2286

#### jest.config.js
```json
export default {
  preset: "ts-jest/presets/default-esm",
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};
```


#### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "esnext",
    "sourceMap": true,
    "moduleResolution": "node",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "./src/**/*.ts"
  ],
}

```
#### package.json
**"type":"module"** が必要
```json
{
  "name": "chap7",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "type":"module",
  "scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec \"ts-node\" src/index.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/node": "^17.0.31",
    "typescript": "^4.6.4"
 }
}
```
**"type": "module",** が必要

> npm run start

[参考](https://typescript-jp.gitbook.io/deep-dive/nodejs)

#### JSDocコメントの書き方

[先頭のアスタリスクを2つ記載し/** ◯◯ */とし、型情報等を@typeや@paramというキーワードとともに記述します。](https://ics.media/entry/6789/)



#### omake memo
