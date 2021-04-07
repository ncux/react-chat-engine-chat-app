import React, { Fragment } from "react";
import loading from '../../assets/loading.gif';
import styles from './loading.module.css';

const Loading = props => {

    return (
        <Fragment>
            <img src={ loading } alt="...loading" className={ styles.loading } />
        </Fragment>
    );

};

export default Loading;

