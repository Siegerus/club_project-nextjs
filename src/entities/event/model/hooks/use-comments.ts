"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/shared/lib";
import {
  commentsSliceActions,
  selectCommentsData,
  selectCommentsError,
  selectCommentsLoadingStatus,
} from "../comments-slice";

export const useComments = () => {
  const dispatch = useAppDispatch();

  const comments = useAppSelector(selectCommentsData);
  const status = useAppSelector(selectCommentsLoadingStatus);
  const errorText = useAppSelector(selectCommentsError);

  useEffect(() => {
    dispatch(commentsSliceActions.getCommentsData());
  }, [dispatch]);

  const reload = () => {
    dispatch(commentsSliceActions.getCommentsData());
  };

  return { comments, status, errorText, reload };
};
