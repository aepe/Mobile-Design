/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-11-26 12:22:37
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-11-26 16:33:41
 */
import typescript from "rollup-plugin-typescript2";
import babel from "rollup-plugin-babel";
import resolveNode from "rollup-plugin-node-resolve";
import { resolve } from "path";
const extensions = [".ts", ".js", ".tsx"];
export default {
  input: resolve("./") + "/src/index.ts",
  output: {
    file: resolve("./") + "/dist/js/zx-mobile-ui.js",
    format: "es"
  },
  plugins: [
    resolveNode(),
    babel({
      extensions,
      exclude: "node_modules/**", // 防止打包node_modules下的文件
      externalHelpers: true
      //   plugins: ["transform-vue-jsx"]
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
