import axios from "axios";

import { IUser } from "@types";
import { JSONPLACEHOLDER_BASE_URL } from "@constants/api";

export const fetchUsersAPI = async (): Promise<IUser[]> => {
  try {
    const { data } = await axios.get<IUser[]>(
      `${JSONPLACEHOLDER_BASE_URL}/users`,
    );

    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `API Server error: ${error.response?.status || "unknown status"}`,
      );
    } else {
      throw new Error("Unexpected error occurred.");
    }
  }
};
