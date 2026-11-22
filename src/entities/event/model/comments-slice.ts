import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SliceNameSpace, LoadingStatus } from "@/shared/lib";
import { getCommentsData } from "./get-comments-data";
import { CommentItem } from "./types";

type CommentsSlice = {
  commentsData: CommentItem[];
  commentsLoadingStatus: (typeof LoadingStatus)[keyof typeof LoadingStatus];
  commentsError: string | null;
};

const commentsSliceInitial: CommentsSlice = {
  commentsData: [],
  commentsLoadingStatus: LoadingStatus.Idle,
  commentsError: null,
};

const commentsSlice = createSlice({
  name: SliceNameSpace.Comments,
  initialState: commentsSliceInitial,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCommentsData.pending, (state) => {
      state.commentsLoadingStatus = LoadingStatus.Loading;
      state.commentsError = null;
    });
    builder.addCase(
      getCommentsData.fulfilled,
      (state, action: PayloadAction<CommentItem[]>) => {
        state.commentsLoadingStatus = LoadingStatus.Success;
        state.commentsData = action.payload;
        state.commentsError = null;
      },
    );
    builder.addCase(getCommentsData.rejected, (state, action) => {
      state.commentsLoadingStatus = LoadingStatus.Failed;
      state.commentsError = action.error.message ?? "Ошибка загрузки данных";
    });
  },
  selectors: {
    selectCommentsData: (state) => state.commentsData,
    selectCommentsLoadingStatus: (state) => state.commentsLoadingStatus,
    selectCommentsError: (state) => state.commentsError,
  },
});

export const commentsSliceActions = {
  ...commentsSlice.actions,
  getCommentsData,
};

export const {
  selectCommentsData,
  selectCommentsLoadingStatus,
  selectCommentsError,
} = commentsSlice.selectors;

export default commentsSlice;
