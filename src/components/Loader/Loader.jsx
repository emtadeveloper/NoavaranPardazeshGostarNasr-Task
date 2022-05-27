// react

import React from "react";

// tools

import styles from "./styles.module.scss";
import { localization } from "../../localization";

// redux

import { useDispatch } from "react-redux";
import { fetchproduct } from "../../Redux/action";

const Loader = ({ name, isRefresh }) => {
    //
    const dispatch = useDispatch();
    return (
        <div className={styles.wrapper}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.shadow}></div>
            <div className={styles.shadow}></div>
            <div className={styles.shadow}></div>
            <span>{name}</span>
            {isRefresh && (
                <button onClick={() => dispatch(fetchproduct)} className={styles.refresh}>
                    {localization.REFRESH}
                </button>
            )}
        </div>
    );
};

export default Loader;
