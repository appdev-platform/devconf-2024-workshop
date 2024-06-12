# devconf-2024-workshop

The workshop contents for the DevConf.cz 2024.

## How to use

Please switch to the `start-here` branch for the starting point.

You can refer the `main` branch for the final stage.

## Getting Started

You can refer the dynamic-plugins readme for reference:\
https://github.com/janus-idp/backstage-showcase/blob/main/showcase-docs/dynamic-plugins.md

## Running on local environments

1. Install dependencies

   ```
   yarn install
   ```

2. Generate types

   ```
   yarn tsc
   ```

3. Build the plugin

   ```
   yarn workspace demo-timezone-plugin build
   ```

4. Export the plugin as a dynamic plugin

   ```
   yarn workspace demo-timezone-plugin export-dynamic
   ```

Now that the plugin has been exported, you can start the backstage instance with podman

```
podman compose up -d rhdh
```

## Contributors

- Mayur Deshmukh ([@deshmukhmayur](https://github.com/deshmukhmayur))
- Rigin Oommen ([@riginoommen](https://github.com/riginoommen))
- Yash Oswal ([@yashoswalyo](https://github.com/yashoswalyo))
