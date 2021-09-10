
export const Row = ({children}) => {
    return (
        <div className="row">
            {children}
        </div>
    )
}
export const Col = ({sm,md,lg,children})=>{
    const classes = `col` + (sm || sm === 0 ?` c-${sm}`:'') + (md || md===0 ?` m-${md}`:'') + (lg || lg===0?` l-${lg}`:'' )
    return (
        <div className={classes}>
            {children}
        </div>
    )
}