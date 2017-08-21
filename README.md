# Gigigo Standard JavaScript coding style - ESLint Shareable Config

An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for Gigigo Standard JavaScript Coding style.


## Install

```sh
npm install eslint-config-gigigo
```


## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use the JavaScript Gigigo Standard Style shareable config, first run this:

```sh
npm install eslint-config-gigigo
```

Then, add this to your .eslintrc file:

```json

//With babel transpiling (browser or node)
{
  "extends": "gigigo"
}

//Only node (no transpiling)
{
  "extends": "gigigo/node"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## LICENSE

[MIT] Eduardo Hidalgo H