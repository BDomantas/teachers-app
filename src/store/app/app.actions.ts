import typescriptFsa from 'typescript-fsa';

import { InitAppConfigPayload } from '@Store/app/app.types';

const actionCreator = typescriptFsa('@APP');

export const initializeApplication = actionCreator<{}>('INITIALIZE_APPLICATION');
export const initializeAppConfig = actionCreator<InitAppConfigPayload>('INITIALIZE_APP_CONFIG');
