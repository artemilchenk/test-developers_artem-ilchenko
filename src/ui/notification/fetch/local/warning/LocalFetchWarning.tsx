import classes from './warning.module.scss'
import {FC, ReactNode} from "react";

interface ILocalFetchWarning {
    children?: ReactNode;
}


export const LocalFetchWarning: FC<ILocalFetchWarning> = ({children, ...restProps})=>{
    console.log('test')
    return <div {...restProps} className={classes.warning}>
        {children}
    </div>
}
