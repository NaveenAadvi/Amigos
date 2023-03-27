import React from "react";
import "tabulator-tables/dist/css/tabulator_bootstrap3.min.css";
import { ReactTabulator } from 'react-tabulator';


const tabulator = (props) => {
    return (
        <div>
            <ReactTabulator
                data={props.data}
                columns={props.columns}
                layout={props.layout}
                options={props.options}
            />
            {props.children}
        </div>
    )
};

export default tabulator;