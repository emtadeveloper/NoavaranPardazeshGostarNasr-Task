import { Product } from "./actionType";
import { get } from "../services";

export const productLoadingStarted = () => ({
    type: Product.productLoadingStarted,
});

export const productLoadedFailes = () => ({
    type: Product.productLoadedFailes,
});

export const productLoadedSuccess = (entities) => ({
    type: Product.productLoadedSuccess,
    payload: entities,
});
export const fetchproduct = (dispatch) => {
    dispatch(productLoadingStarted());
    get("employees")
        .then((res) => {
            dispatch(productLoadedSuccess(res.data.data));
        })
        .catch(() => dispatch(productLoadedFailes()));
};

export const addComparison = (item) => ({
    type: Product.addComparison,
    payload: item,
});

export const removeComparison = (id) => ({
    type: Product.removeComparison,
    payload: id,
});
