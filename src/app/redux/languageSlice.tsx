import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  language: string;
}

export enum LANGUAGE {
  AR = "AR",
  EN = "en",
}

const initialState: LanguageState = {
  language: LANGUAGE.EN,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

// Export the action and reducer
export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
