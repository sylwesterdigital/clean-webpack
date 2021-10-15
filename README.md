# webpack 5.58.2 + PixiJS 
- Basis texture format loader demo

```
git clone git@github.com:sylwesterdigital/clean-webpack.git

cd clean-webpack
npm i

npm run start
```

local demo:
https://0.0.0.0:3030/
```

npm run build
```

# preview demo:
https://xr.workwork.fun/samsung/basis/

![Screenshot 2021-10-15 at 07 48 24](https://user-images.githubusercontent.com/27820237/137444688-8232fe83-6102-4ccf-8398-468b33842dff.png)

- Errors (browser console)
```
BaseTexture added to the cache with an id [assets/textures/basis/02.basis-1] that already had an entry
BaseTexture.addToCache @ core.js:980

BaseTexture added to the cache with an id [assets/textures/basis/02.basis] that already had an entry
BaseTexture.addToCache @ core.js:980

[.WebGL-0x7f81ea0a7000]GL ERROR :GL_INVALID_OPERATION : glCompressedTexImage2D: width or height invalid for level

```