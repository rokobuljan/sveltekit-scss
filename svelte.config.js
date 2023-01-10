import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess'
import path from 'node:path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		// https://github.com/sveltejs/svelte-preprocess
		sveltePreprocess({
			scss: {
				includePaths: ['./src/scss'],
				//prependData: `@import "variables";`, // Make  _variables.scss available to components in <style lang="scss">
				//outputStyle: 'expanded', // Sass (Dart Sass) recognizes 'expanded' and 'compressed'
			}
		})
	],
	kit: {
		adapter: adapter(),
		alias: {
			// This works in <script> tags
			$scss: path.resolve('./src/scss/'),
		},
	},
};

export default config;
