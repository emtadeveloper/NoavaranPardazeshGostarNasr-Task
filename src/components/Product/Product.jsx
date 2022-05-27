// react

import React from "react";

// redux

import { useSelector, shallowEqual } from "react-redux";

// component

import Loader from "../Loader";
import Card from "../Card";
import Comparition from "../Comparition";

// tools

import styles from "./styles.module.scss";

const Product = () => {
    //
    const product = useSelector((state) => state.shopReducer, shallowEqual);

    return (
        <>
            {product.status === "loading" ? (
                <Loader name="Loading " />
            ) : product.status === "error" ? (
                <Loader name="Error Network " isRefresh={true} />
            ) : (
                <>
                    <div className={styles.container}>
                        {Object.keys(product.entities).map((item) => {
                            return <Card key={item} items={{ ...product.entities[item] }} />;
                        })}
                    </div>
                    <Comparition />
                </>
            )}
        </>
    );
};

export default Product;
