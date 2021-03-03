export type EffectPayload<PAYLOAD, RESPONSE> = {
  payload: PAYLOAD;
  successCb?: (data?: RESPONSE) => void;
  errorCb?: () => void;
};
