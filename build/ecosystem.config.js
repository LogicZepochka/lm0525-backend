module.exports = {
  apps : [{
    name   : "app1",
    script : "./index.js",
    env: {
      "PORT": 3001,
      "DATABASE_URL":"postgresql://postgres:@127.127.126.41:5432/lm0525?schema=public",
      "CRYPTO_KEY" : "NJ3vXbz2p3jNEAAAYST2XwrFgsCG2aUU",
      "CRYPTO_SALT" : "pxwk24LdlT5zLOf2cNlAYNzEUqx3y8Gn",
      "JWT_SECRET": "ptLe9RVdPK",
      "DEFAULT_API_BASE" : "/api/v2"
    }
  },
  {
    name   : "app2",
    script : "./index.js",
    env: {
      "PORT": 3002,
      "DATABASE_URL":"postgresql://postgres:@127.127.126.41:5432/lm0525?schema=public",
      "CRYPTO_KEY" : "NJ3vXbz2p3jNEAAAYST2XwrFgsCG2aUU",
      "CRYPTO_SALT" : "pxwk24LdlT5zLOf2cNlAYNzEUqx3y8Gn",
      "JWT_SECRET": "ptLe9RVdPK",
      "DEFAULT_API_BASE" : "/api/v2"
    }
  },
  {
    name   : "app3",
    script : "./index.js",
    env: {
      "PORT": 3003,
      "DATABASE_URL":"postgresql://postgres:@127.127.126.41:5432/lm0525?schema=public",
      "CRYPTO_KEY" : "NJ3vXbz2p3jNEAAAYST2XwrFgsCG2aUU",
      "CRYPTO_SALT" : "pxwk24LdlT5zLOf2cNlAYNzEUqx3y8Gn",
      "JWT_SECRET": "ptLe9RVdPK",
      "DEFAULT_API_BASE" : "/api/v2"
    }
  },
  {
    name   : "app4",
    script : "./index.js",
    env: {
      "PORT": 3004,
      "DATABASE_URL":"postgresql://postgres:@127.127.126.41:5432/lm0525?schema=public",
      "CRYPTO_KEY" : "NJ3vXbz2p3jNEAAAYST2XwrFgsCG2aUU",
      "CRYPTO_SALT" : "pxwk24LdlT5zLOf2cNlAYNzEUqx3y8Gn",
      "JWT_SECRET": "ptLe9RVdPK",
      "DEFAULT_API_BASE" : "/api/v2"
    }
  },
  {
    name   : "app4",
    script : "./index.js",
    env: {
      "PORT": 3005,
      "DATABASE_URL":"postgresql://postgres:@127.127.126.41:5432/lm0525?schema=public",
      "CRYPTO_KEY" : "NJ3vXbz2p3jNEAAAYST2XwrFgsCG2aUU",
      "CRYPTO_SALT" : "pxwk24LdlT5zLOf2cNlAYNzEUqx3y8Gn",
      "JWT_SECRET": "ptLe9RVdPK",
      "DEFAULT_API_BASE" : "/api/v2"
    }
  }]
}
