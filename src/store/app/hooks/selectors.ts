import { useSelector } from "react-redux";
import { getFilterType, getSortType, getStatisticStatus } from "../selectors";
import {
  getMostCommentedMovies,
  getTopRatedMovies,
} from "../../movie/selectors";
import { Movie } from "../../../types";

export const useCurrentFilterType = (): string => {
  return useSelector(getFilterType);
};

export const useCurrentSortType = (): string => {
  return useSelector(getSortType);
};

export const useStatisticStatus = (): boolean => {
  return useSelector(getStatisticStatus);
};

export const useTopRatedMovies = (): Movie[] => {
  return useSelector(getTopRatedMovies);
};

export const useMostCommentedMovies = (): Movie[] => {
  return useSelector(getMostCommentedMovies);
};
