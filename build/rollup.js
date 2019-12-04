/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-26 12:22:37
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-04 09:33:56
 */
import typescript from "rollup-plugin-typescript2";
import babel from "rollup-plugin-babel";
import resolveNode from "rollup-plugin-node-resolve";
import { resolve } from "path";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import output from "./conf/rollup.output";
const extensions = [".ts", ".js", ".tsx"];
export default {
  input: resolve("./") + "/src/index.ts",
  output,
  plugins: [
    resolveNode(),
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
