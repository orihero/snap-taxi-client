type AppState = {
  handbooks: boolean;
  handbooksError: boolean;
  initApp: boolean;
  initAppError: boolean;
  changeAppLanguage: boolean;
  changeAppLanguageError: boolean;
};

export type InitialState = {
  app: AppState;
};
