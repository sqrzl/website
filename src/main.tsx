import { createSPA } from '@askrjs/askr/boot';
import { getManifest } from '@askrjs/askr/router';

import './styles.css';
import './routes';

await createSPA({
  root: document.getElementById('app')!,
  manifest: getManifest(),
});