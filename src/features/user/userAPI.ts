import axios from "axios";

import { IUser } from "@types";
import { JSONPLACEHOLDER_BASE_URL } from "@constants";

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

export const fetchUserByIdAPI = async (userId: number): Promise<IUser> => {
  try {
    const { data } = await axios.get<IUser>(
      `${JSONPLACEHOLDER_BASE_URL}/users/${userId}`,
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
