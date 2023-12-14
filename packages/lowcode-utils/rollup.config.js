import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";

export default [
  {
    input: "./utils/index.ts",
    output: [
      {
        dir: "dist",
        format: "cjs",
        entryFileNames: "[name].cjs.js",
      },
      {
        dir: "dist",
        format: "esm",
        entryFileNames: "[name].esm.js",
      }
    ],
    plugins: [resolve(), commonjs(), typescript(), terser(), cleanup()],
  },
];
