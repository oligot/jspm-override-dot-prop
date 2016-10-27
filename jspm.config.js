SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "core-js": "npm:core-js@1.2.7",
      "path": "github:jspm/nodelibs-path@0.2.0-alpha",
      "process": "github:jspm/nodelibs-process@0.2.0-alpha",
      "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.16"
    },
    "packages": {
      "npm:core-js@1.2.7": {
        "map": {
          "systemjs-json": "github:systemjs/plugin-json@0.1.2"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "modularRuntime": false
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "dot-prop": "npm:dot-prop@4.0.0"
  },
  packages: {
    "npm:dot-prop@4.0.0": {
      "map": {
        "is-obj": "npm:is-obj@1.0.1"
      }
    }
  }
});
