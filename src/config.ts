import { createEnv } from '@t3-oss/env-core';

import { z } from 'zod';

const config = {
	env: createEnv({
		clientPrefix: 'PUBLIC_',
		server: {
			SERVER_SECRET: z.string().min(32).max(128),
		},
		client: {
			PUBLIC_APP_NAME: z.string().min(16).max(64),
		},
		runtimeEnv: process.env,
	}),
};

export default config;
