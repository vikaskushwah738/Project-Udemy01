const TabButton = ({children, onSelect,  isSelected}) => {
 
  return (
    <li className="p-2 mt-4 mb-4 rounded-md hover:bg-slate-500 "> 
        {/* <button className={isSelected ? "active" : undefined} onClick={onSelect} >{children}</button> */}
        <button className={`px-2 py-1 rounded-md ${isSelected ? "bg-slate-500 text-white" : ""}`} 
        onClick={onSelect}>{children}</button>
    </li>
  )
}

export default TabButton