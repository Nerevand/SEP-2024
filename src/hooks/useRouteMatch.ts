import { useMatch } from "react-router-dom";

import { ROUTES } from "@constants";

export const useRouteMatch = () => {
  const matchHome = useMatch(ROUTES.HOME);
  const matchDetails = useMatch(ROUTES.DETAILS);

  const isExcludedRoute = !matchHome && !matchDetails;

  return { matchHome, matchDetails, isExcludedRoute };
};
