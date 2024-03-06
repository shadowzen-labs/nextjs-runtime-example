# nextjs-runtime-example

An example on how to pass and use runtime config variable in frontend.

A runtime config is dynamicly used in a runtime environment and not used during a build.

For frontend apps, this means that when the next start command or equivalent is run on the server that
delivers the frontend code, that is when these variables are evaluated.

To build:

```shell
npx next build
```

To run:

```shell
# The easiest way is to pass the runtime config vars inline like so:
GREETING_NAME='Bob' LIKE_INTEREST='video games' npx next start

# You can also export the env vars in runtime environment using other methods such as in a .env file if your
# app supports it.
```
