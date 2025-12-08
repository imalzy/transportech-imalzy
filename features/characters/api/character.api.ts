import axios from "axios";
import { APIResponse, Character } from "../types/character.types";

export const getCharacters = async (): Promise<APIResponse> => {
  const res = await axios.get<APIResponse>("/api/characters");
  return res.data;
};
