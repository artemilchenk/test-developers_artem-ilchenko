import classes from './warning.module.scss'

export const LocalFetchWarning = ({children})=>{
    console.log('test')
    return <div className={classes.warning}>
        {children}
    </div>
}
