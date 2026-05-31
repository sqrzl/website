import type { RouteConfig } from '@askrjs/askr/ssg';

import ClientsPage from './src/pages/clients';
import EmulatorPage from './src/pages/emulator';
import HomePage from './src/pages/index';

export const routes: RouteConfig[] = [
	{ path: '/', component: HomePage },
	{ path: '/clients', component: ClientsPage },
	{ path: '/emulator', component: EmulatorPage },
];

export const outputDir = './dist/static';