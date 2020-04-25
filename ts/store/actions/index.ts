import { ActionType, createAction } from "typesafe-actions";

export const storeCertification = createAction('STORE_CERTIFICATION')<{id: string, data: any}>();
export const storeSearchedCertification = createAction('STORE_CEARCED_CERTIFICATION')<{id: string, data: any}>();


export type GlobalActions = ActionType<typeof storeCertification> | ActionType<typeof storeSearchedCertification>;