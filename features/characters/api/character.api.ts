import axios from "axios";
import { APIResponse, Character } from "../types/character.types";

export const getCharacters = async (page = 1, name = "", status = ""): Promise<APIResponse> => {
  const res = await axios.get<APIResponse>("/api/characters", {
    params: { page, name, status },
  });
  return res.data;
};
