

interface ButtonProps{
    variant: "primary" | "secondary",
    text:string,
    
    onClick?:()=> void
}

const variantClasses = {
    "primary" : "",
    "secondary":""
}

const defaultStyles = ""
export const Button = ({variant, text , onClick}:ButtonProps)=>{
    return <>
    <button onClick={onClick} className={variantClasses[variant] + " " + defaultStyles}>{text}</button>
    </> 
}