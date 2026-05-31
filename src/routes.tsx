import { fallback, group, registerRoutes, route } from '@askrjs/askr/router';

import App from './app';
import ClientsPage from './pages/clients';
import EmulatorPage from './pages/emulator';
import HomePage from './pages/index';
import NotFoundPage from './pages/not-found';

registerRoutes(() => {
  group({ layout: App }, () => {
    route('/', HomePage);
    route('/clients', ClientsPage);
    route('/emulator', EmulatorPage);
    fallback(NotFoundPage);
  });
});