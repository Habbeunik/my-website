import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	output: 'server', // Enable SSR
	integrations: [react(), tailwind()],
	adapter: netlify(), // For deployment to Netlify
	server: {
		port: 3000,
		host: true,
	},
});
