import classes from './warning.module.scss'

export const LocalFetchWarning = ({children})=>{
    return <div className={classes.warning}>
        {children}
    </div>
}
