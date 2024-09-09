interface SidebarItemProps {
    icon: JSX.Element;
    text: string;
    active: boolean;
    expanded: boolean;
    setExpanded: (value: boolean) => void;
  }
  
  const  SidebarItem = ({ icon, text, active, expanded, setExpanded }: SidebarItemProps)  =>{

    return (
      <li
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          active ? "bg-gradient-to-tr from-red-100 to-red-50 text-red-400" : "hover:bg-red-50 text-red-600"
        }`}
      onClick={()=>setExpanded(false)}>
        {icon}
        <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
        
      </li>
    );
  }

  export default SidebarItem
  