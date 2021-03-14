export interface overlayTypes {
    hidden: boolean;
}

export const TOGGLE_HIDDEN = 'TOGGLE_HIDDEN';

interface ToggleHiddenAction {
    type: typeof TOGGLE_HIDDEN;
    payload: boolean;
}

export type OverlayActionTypes = ToggleHiddenAction;
