// react

import React from "react";

//redux

import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { removeComparison } from "../../Redux/action";

// tools

import styles from "./styles.module.scss";
import { localization } from "../../localization";
const Comparition = () => {
    //
    const comparison = useSelector((state) => state.shopReducer.Comparison, shallowEqual);
    const dispatch = useDispatch();
    const removeComp = (id) => {
        dispatch(removeComparison(id));
    };
    return (
        <>
            {Object.keys(comparison).length > 0 && (
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <p className={`${styles.box} ${styles.bgWhite}`}></p>
                        <p className={`${styles.box} ${styles.salary}`}>{localization.SALARY}</p>
                        <p className={styles.box}>{localization.AGE}</p>
                        <p className={styles.box}>{localization.CPNDITION}</p>
                    </div>
                    {Object.keys(comparison).map((item) => {
                        const Item = comparison[item];
                        return (
                            <div key={Item.id} className={styles.wrapper}>
                                <p className={`${styles.box} ${styles.bgWhite}`}>{Item.employee_name}</p>
                                <p className={`${styles.box} ${styles.salary} ${styles.bgWhite}`}>{Item.employee_salary}</p>
                                <p className={`${styles.box} ${styles.bgWhite}`}>{Item.employee_age}</p>
                                <button onClick={() => removeComp(Item.id)} className={`${styles.btn} ${styles.bgWhite}`}>
                                    {localization.FROZEN}
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};
export default Comparition;
