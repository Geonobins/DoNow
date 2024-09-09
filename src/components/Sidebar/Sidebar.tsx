import { useEffect, useRef } from "react";
import SidebarHeader from "./SidebarHeader";
import UserProfile from "./UserProfile";

interface SidebarProps {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
  children: React.ReactNode;
}

export default function Sidebar({ expanded, setExpanded, children }: SidebarProps) {
    const sidebarRef = useRef<HTMLDivElement>(null);

    console.log("side",expanded)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setExpanded(false); // Collapse sidebar if clicked outside
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [setExpanded]);

      
  return (
    <aside ref={sidebarRef} className={`h-screen transition-all duration-300 ${expanded ? "max-w-[250px]" : "max-w-[70px]"}`} onMouseEnter={()=>setExpanded(true)} onMouseLeave={()=>setExpanded(false)}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        {/* Pass the expanded state and setter to SidebarHeader */}
        <SidebarHeader expanded={expanded} setExpanded={setExpanded} />
        <ul className="flex-1 px-3">{children}</ul>
        {/* Pass only expanded to UserProfile */}
        <UserProfile expanded={expanded} />
      </nav>
    </aside>
  );
}
