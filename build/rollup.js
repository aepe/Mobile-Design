/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-26 12:22:37
 * @LastEditors  : bhabgs
 * @LastEditTime : 2019-12-31 14:33:50
 */
import typescript from "rollup-plugin-typescript2";
import babel from "rollup-plugin-babel";
import resolveNode from "rollup-plugin-node-resolve";
import { resolve } from "path";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import commonjs from "rollup-plugin-commonjs";
import json from "@rollup/plugin-json";
import output from "./conf/rollup.output";
const extensions = [".ts", ".js", ".tsx"];
export default {
  input: resolve("./") + "/src/index.ts",
  output,
  plugins: [
    json(),
    resolveNode({ mainFields: ["module", "main", "browser"] }),
    commonjs(),
    babel({
      extensions,
      exclude: "node_modules/**", // 防止打包node_modules下的文件
      externalHelpers: true
      //   plugins: ["transform-vue-jsx"]
    }),
    postcss({
      plugins: [autoprefixer, cssnano],
      extract: "dist/css/mobile.design.css" // 输出路径
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      typescript: require("typescript"),
      clean: true,
      check: false, // 是否检查代码
      verbosity: 0
    })
  ],
  external: ["vue"]
};
