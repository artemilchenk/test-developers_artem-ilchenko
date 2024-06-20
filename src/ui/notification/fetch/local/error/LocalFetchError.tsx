import classes from './error.module.scss'

export const LocalFetchError = ({children})=>{
    return <div className={classes.error}>
        {children}
    </div>
}
