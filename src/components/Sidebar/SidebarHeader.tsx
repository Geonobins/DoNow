import { ChevronFirst, ChevronLast, ListTodoIcon } from "lucide-react";

interface SidebarHeaderProps {
    expanded: boolean;
    setExpanded: (value: boolean) => void;
}

const SidebarHeader = ({ expanded, setExpanded }: SidebarHeaderProps) => {
    return (
        <div className="p-4 pb-2 flex items-center text-red-400">
            <div
                className={`transition-all flex flex-1 items-center gap-2 font-mono font-semibold text-xl `}
            >
                <ListTodoIcon className={`bg-red-400 text-white p-1 mr-3 size-7 rounded-lg ${expanded ? "block" : "hidden md:block"}`} />
                <div className={`${expanded ? "w-32 ml-3" : "w-0 opacity-0"} transition-all`}>
                    DoNow
                </div>
            </div>
            
            <button
                onClick={() => setExpanded(!expanded)}
                className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 block md:hidden"
            >
                {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
        </div>
    );
}

export default SidebarHeader;