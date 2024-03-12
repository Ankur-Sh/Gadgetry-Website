import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001/gadgets" });

export const createGadget = (newGadget) => API.post("", newGadget);
export const fetchGadgets = () => API.get(``);
export const fetchGadget = (id) => API.get(`/${id}`);
export const updateGadget = (id, updatedGadget) =>
    API.patch(`/${id}`, updatedGadget);
export const deleteGadget = (id) => API.delete(`/${id}`);
