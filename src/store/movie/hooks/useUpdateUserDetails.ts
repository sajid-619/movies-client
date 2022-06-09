import { useCallback } from "react";
import { Operation } from "../movie";
import { UserDetailsToUpdate } from "../../../types";
import { useStoreDispatch } from "../../reducer";

export const useUpdateUserDetails = (): ((
  movieId: number,
  userDetails: UserDetailsToUpdate,
) => void) => {
  const dispatch = useStoreDispatch();

  return useCallback(
    (movieId, userDetails) => {
      dispatch(Operation.updateUserDetails(movieId, userDetails));
    },
    [dispatch],
  );
};
