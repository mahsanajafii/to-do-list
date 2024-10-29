

export default function Header({filter,style}) {
  return(
    
    <h1 className={style}>{filter?filter:"All"} Tasks</h1>
    
    
  )
}
