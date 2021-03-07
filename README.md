# next-content-bug

## Start the local app

```sh
yarn
yarn dev
```

Click the one nav link

BUG: the `::before` pseudo element value incorrectly persists between `/` and `/other`

## Try SSG pages

```sh
yarn build && yarn export
serve -s out
```

BUG: the same thing as above occurs
