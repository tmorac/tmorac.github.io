# Portafolio Tomás Mora

Sitio estático sin dependencias: una landing y 3 perfiles independientes (`/growth`, `/analytics`, `/product`). Los perfiles no se enlazan entre sí: cada CV lleva el link a su perfil.

## Archivos
- `content.mjs`: **todo el texto del sitio**. Es el único archivo que necesitas editar para cambiar contenido.
- `styles.css`: diseño (colores en `:root`, al inicio).
- `cv/`: los PDF descargables. Nombres esperados:
  - `Tomas_Mora_CV_Growth.pdf`
  - `Tomas_Mora_CV_Analytics.pdf`
  - `Tomas_Mora_CV_Product.pdf`
- `build.mjs`: genera el sitio en `dist/` (no hace falta tocarlo).
- `dist/`: el sitio final. Esta carpeta es la que se publica.

## Uso
Requiere Node.js. Desde esta carpeta:

```bash
npm run dev
```

Genera el sitio y lo abre en http://localhost:4321. Solo para regenerar: `npm run build`.

## Publicación
El sitio vive en https://tmorac.github.io. Cada `git push` a `main` lo regenera y publica solo (GitHub Actions, `.github/workflows/deploy.yml`). Para ver localmente exactamente lo que se publica: `npm run preview:public`.

## Datos pendientes
Lo que falta se escribe en `content.mjs` como `[[TODO: ...]]` y se ve en el sitio como una etiqueta amarilla. El build indica cuántas quedan. En el sitio publicado se ocultan automáticamente: lo que tenga un TODO simplemente no aparece hasta que lo completes.

## Reglas de contenido
- No inventar métricas ni herramientas.
- Sin guiones largos (el build falla si encuentra uno).
