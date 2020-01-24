
import typescriptFsa from 'typescript-fsa';

import {
    PopScreenProps,
    PopToScreenProps,
    PushScreenProps,
    RequiredAddScreenProps,
    RootScreenProps,
    SuccessModalScreenProps,
} from './navigation.types';

const actionCreator = typescriptFsa('@NAV');

export const pushScreen = actionCreator<PushScreenProps<{}>>('PUSH_SCREEN');
export const popScreen = actionCreator<PopScreenProps>('POP_SCREEN');
export const popToScreen = actionCreator<PopToScreenProps>('POP_TO_SCREEN');
export const popToRoot = actionCreator<{}>('POP_TO_ROOT');
export const replaceScreen = actionCreator<PushScreenProps<{}>>('REPLACE_SCREEN');

export const showSuccessModal = actionCreator<RequiredAddScreenProps<SuccessModalScreenProps>>('SHOW_SUCCESS_MODAL');
export const hideModal = actionCreator<PopScreenProps>('HIDE_MODAL');

export const openHomeScreen = actionCreator<RootScreenProps<{}>>('OPEN_HOME_SCREEN');
