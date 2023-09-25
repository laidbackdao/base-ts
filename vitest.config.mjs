import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		minThreads: 2,
		maxThreads: 4,
	},
});
