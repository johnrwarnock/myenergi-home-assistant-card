import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/myenergi-flow-card.ts",
  output: {
    file: "dist/myenergi-flow-card.js",
    format: "es",
    sourcemap: true,
  },
  plugins: [
    resolve(),
    typescript({ tsconfig: "./tsconfig.json" }),
  ],
};
