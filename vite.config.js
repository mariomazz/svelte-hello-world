import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rollupOptions: {
			/* input: {
				main: resolve(__dirname, "src/app.html"),
				nested: resolve(__dirname, "src/app.html"),
			}, */
		},
	},
	plugins: [sveltekit()],
});
