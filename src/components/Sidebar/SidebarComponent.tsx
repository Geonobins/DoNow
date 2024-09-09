import { useState } from "react";
import Sidebar from "./Sidebar";
import SidebarItem  from "./SidebarItem";
import { Home, Settings } from "lucide-react";

const SidebarComponent= ()  => {
    const [expanded, setExpanded] = useState(false);
  return (
    <Sidebar expanded={expanded} setExpanded={setExpanded}>
      <SidebarItem icon={<Home />} text="Home" active={true} expanded={expanded} setExpanded={setExpanded} />
      <SidebarItem icon={<Settings />} text="Settings" active={false} expanded={expanded} setExpanded={setExpanded}/>
    </Sidebar>
  );
}


export default SidebarComponent