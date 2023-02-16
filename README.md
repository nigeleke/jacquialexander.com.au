# jacquialexander.com.au

```
$ pnpm install --shamefully-hoist
$ pnpm generate
$ git checkout gh-pages
$ rm -rf docs/*
$ mv .output/public/* docs
$ git add .
$ git commit -m "Release"
$ git push
```
