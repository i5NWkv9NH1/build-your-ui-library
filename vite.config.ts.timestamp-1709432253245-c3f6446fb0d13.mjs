// vite.config.ts
import { URL, fileURLToPath } from "node:url";
import { extname, relative, resolve } from "node:path";
import { defineConfig } from "file:///home/sora/sources/vue-ui/node_modules/vite/dist/node/index.js";
import vue from "file:///home/sora/sources/vue-ui/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///home/sora/sources/vue-ui/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import dts from "file:///home/sora/sources/vue-ui/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///home/sora/sources/vue-ui/node_modules/vite-plugin-lib-inject-css/dist/index.js";
import { glob } from "file:///home/sora/sources/vue-ui/node_modules/glob/dist/esm/index.js";
var __vite_injected_original_dirname = "/home/sora/sources/vue-ui";
var __vite_injected_original_import_meta_url = "file:///home/sora/sources/vue-ui/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    libInjectCss(),
    dts({
      include: ["lib"],
      exclude: ["src"]
    })
  ],
  build: {
    copyPublicDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__vite_injected_original_dirname, "lib/main.ts"),
      formats: ["es"]
      // the proper extensions will be added
    },
    rollupOptions: {
      external: ["vue"],
      input: Object.fromEntries(
        glob.sync("lib/**/*.{ts,tsx}").map((file) => [
          relative(
            "lib",
            file.slice(0, file.length - extname(file).length)
          ),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "dist": fileURLToPath(new URL("./dist", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zb3JhL3NvdXJjZXMvdnVlLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9zb3JhL3NvdXJjZXMvdnVlLXVpL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3NvcmEvc291cmNlcy92dWUtdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBVUkwsIGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCdcbmltcG9ydCB7IGV4dG5hbWUsIHJlbGF0aXZlLCByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQgeyBsaWJJbmplY3RDc3MgfSBmcm9tICd2aXRlLXBsdWdpbi1saWItaW5qZWN0LWNzcydcbmltcG9ydCB7IGdsb2IgfSBmcm9tICdnbG9iJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHZ1ZUpzeCgpLFxuICAgIGxpYkluamVjdENzcygpLFxuICAgIGR0cyh7XG4gICAgICBpbmNsdWRlOiBbJ2xpYiddLFxuICAgICAgZXhjbHVkZTogWydzcmMnXSxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBjb3B5UHVibGljRGlyOiBmYWxzZSxcbiAgICBsaWI6IHtcbiAgICAgIC8vIENvdWxkIGFsc28gYmUgYSBkaWN0aW9uYXJ5IG9yIGFycmF5IG9mIG11bHRpcGxlIGVudHJ5IHBvaW50c1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnbGliL21haW4udHMnKSxcbiAgICAgIGZvcm1hdHM6IFsnZXMnXSxcbiAgICAgIC8vIHRoZSBwcm9wZXIgZXh0ZW5zaW9ucyB3aWxsIGJlIGFkZGVkXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWyd2dWUnXSxcbiAgICAgIGlucHV0OiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgIGdsb2Iuc3luYygnbGliLyoqLyoue3RzLHRzeH0nKS5tYXAoZmlsZSA9PiBbXG4gICAgICAgICAgcmVsYXRpdmUoXG4gICAgICAgICAgICAnbGliJyxcbiAgICAgICAgICAgIGZpbGUuc2xpY2UoMCwgZmlsZS5sZW5ndGggLSBleHRuYW1lKGZpbGUpLmxlbmd0aCksXG4gICAgICAgICAgKSxcbiAgICAgICAgICBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoZmlsZSwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgIF0pLFxuICAgICAgKSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBhc3NldEZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV1bZXh0bmFtZV0nLFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5qcycsXG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICB2dWU6ICdWdWUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgJ2Rpc3QnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vZGlzdCcsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2UCxTQUFTLEtBQUsscUJBQXFCO0FBQ2hTLFNBQVMsU0FBUyxVQUFVLGVBQWU7QUFDM0MsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFNBQVM7QUFDaEIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxZQUFZO0FBUHJCLElBQU0sbUNBQW1DO0FBQWlILElBQU0sMkNBQTJDO0FBVTNNLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxLQUFLO0FBQUEsTUFDZixTQUFTLENBQUMsS0FBSztBQUFBLElBQ2pCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsSUFDZixLQUFLO0FBQUE7QUFBQSxNQUVILE9BQU8sUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDdkMsU0FBUyxDQUFDLElBQUk7QUFBQTtBQUFBLElBRWhCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLE9BQU8sT0FBTztBQUFBLFFBQ1osS0FBSyxLQUFLLG1CQUFtQixFQUFFLElBQUksVUFBUTtBQUFBLFVBQ3pDO0FBQUEsWUFDRTtBQUFBLFlBQ0EsS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLFFBQVEsSUFBSSxFQUFFLE1BQU07QUFBQSxVQUNsRDtBQUFBLFVBQ0EsY0FBYyxJQUFJLElBQUksTUFBTSx3Q0FBZSxDQUFDO0FBQUEsUUFDOUMsQ0FBQztBQUFBLE1BQ0g7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLE1BQ3BELFFBQVEsY0FBYyxJQUFJLElBQUksVUFBVSx3Q0FBZSxDQUFDO0FBQUEsSUFDMUQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
