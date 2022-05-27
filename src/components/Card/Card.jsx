// React

import React from "react";

// Redux

import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { addComparison, removeComparison } from "../../Redux/action";

// tools

import { localization } from "../../localization";
import styles from "./styles.module.scss";

const Card = ({ items }) => {
    //
    const product = useSelector((state) => state.shopReducer, shallowEqual);
    const dispatch = useDispatch();
    const isCompraistion = !!product.Comparison[items.id];
    const CheckEvent = (item) => (isCompraistion ? dispatch(removeComparison(item.id)) : dispatch(addComparison(item)));
    const name = items.employee_name.split(" ");

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <figure className={styles.card__image}>
                    <img src={require("../../images/empty.png")} alt={items.employee_name} loading="lazy" />
                    <div className={styles.card__btn}>
                        <button className={isCompraistion ? styles.card__Remove : styles.card__btnAdd} onClick={() => CheckEvent(items)}>
                            {localization.COMPRASE}
                        </button>
                    </div>
                </figure>
                <div className={styles.card__content}>
                    <strong className={styles.card__title}>{name[1].toString()}</strong>
                    <p className={styles.card__price}>${items.employee_salary}</p>
                    <p className={styles.card__employeeName}>{items.employee_name}</p>
                </div>
            </div>
        </div>
    );
};
export default Card;
