# jacquialexander.com.au

## Develop

```
$ export NIXPKGS_ALLOW_UNFREE=1
$ nix develop --impure
$ pnpm install --shamefully-hoist
$ pnpm generate
$ pnpm run dev
```

## Publish

GitHub workflow `deploy.yml`

