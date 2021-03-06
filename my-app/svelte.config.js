import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			// Try commenting this, you'll notice that HTML files are generated for `index.html`
			base: '/api/docs'
		},
		prerender: {
			default: true
		}
	}
};

export default config;
