# ThebellepoquE Portfolio App

This is a simple portfolio application built with React. It showcases the work and skills of Ione Rodríguez Uraga, a Full Stack Developer.

**Corregimos las versiones de Babel para que sean compatibles:**

npm install --save-dev @babel/core@7.12.3 @babel/preset-env@7.12.1 @babel/preset-react@7.12.1 @babel/plugin-proposal-class-properties@7.12.1 @babel/plugin-transform-runtime@7.12.1 babel-loader@8.2.0

**Configuramos correctamente el .babelrc:**

```json
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "browsers": ["> 1%", "last 2 versions"]
      }
    }],
    "@babel/preset-react"
  ],
  "plugins": [
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "@babel/plugin-transform-runtime"
  ]
}
```

Usar npm start para desarrollo local
Usar npm run build para crear una versión de producción
Comenzar a desarrollar tu portfolio en React