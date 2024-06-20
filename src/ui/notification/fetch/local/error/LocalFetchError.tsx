import classes from './error.module.scss'
import {FC, ReactNode} from "react";

interface ILocalFetchError {
    children?: ReactNode;
}


export const LocalFetchError: FC<ILocalFetchError> = ({children, ...restProps})=>{
    return <div {...restProps} className={classes.error}>
        {children}
    </div>
}
