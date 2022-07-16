#   Gift Expert App
< https://katchvidal.github.io/gitftApp-vite-2022/ >

Aplicacion conocida en este repositorio mudandola al cofigurador de vite probando sus nuevas caracteristicas


##  Archivos de Barril 
<hr>
crear un archivo index.js ( archivo de barril ) para poder enroutar todas las exportaciones
export * from './'


##  Despliegue en Github Pages
<hr>
1.  Realizar backup del proyecto en repositorio git
2.  Tener repositorio en remoto github
3.  Uso de github pages
4.  Desplegar aplicacion en React
5.  Generar Build de la 

1.1 Settings -> Seleccionar Pages -> Rama a desplegar ( siempre y cuando subamos la carpeta docs )

##  Desplegar en Netlify
<hr>
Desplegar usando bucket de github para despliegues automaticas

# Instalación y configuracion de Jest + React Testing Library
## En proyectos de React + Vite

1. Instalaciones:
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:
```
yarn add --dev whatwg-fetch
```

3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel __babel.config.cjs__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.cjs__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch


##  Trazado de Ruta Critica
se necesita un trazado de ruta critica para las funcionalidades a probar