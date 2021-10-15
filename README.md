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

it seems like texture has to be square of 2
![Screenshot 2021-10-15 at 08 30 42](https://user-images.githubusercontent.com/27820237/137449581-51642e3a-bda2-488a-8bc8-f5755e5f376a.png)

![Screenshot 2021-10-15 at 08 31 11](https://user-images.githubusercontent.com/27820237/137449599-54d104b3-1904-41c0-940a-f917c97b3e3d.png)




