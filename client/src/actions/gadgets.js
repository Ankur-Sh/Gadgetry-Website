import * as api from "../api/index.js";

export const getGadget = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchGadget(id);

        dispatch({ type: "FETCH_GADGET", payload: { gadget: data } });
    } catch (error) {
        console.log(error);
    }
};

export const getGadgets = () => async (dispatch) => {
    try {
        const response = await api.fetchGadgets();

        dispatch({
            type: "FETCH_ALL",
            payload: response.data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const createGadget = (gadget) => async (dispatch) => {
    try {
        const { data } = await api.createGadget(gadget);
        console.log(data);
        dispatch({ type: "CREATE", payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const updateGagdet = (id, gadget) => async (dispatch) => {
    try {
        const { data } = await api.updateGadget(id, gadget);

        dispatch({ type: "UPDATE", payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deleteGadget = (id) => async (dispatch) => {
    try {
        await api.deleteGadget(id);

        dispatch({ type: "DELETE", payload: id });
    } catch (error) {
        console.log(error);
    }
};
