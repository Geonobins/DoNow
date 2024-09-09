import { MoreVertical } from "lucide-react";

interface UserProfileProps {
  expanded: boolean;
}

const  UserProfile = ({ expanded }: UserProfileProps) => {
    
  return (
    <div className="border-t flex p-3">
      <img
        src="https://ui-avatars.com/api/?background=fecac7&color=a33030&bold=true"
        alt="User Avatar"
        className="w-10 h-10 rounded-md "
      />
      <div
        className={`flex justify-between items-center overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        <div className="leading-4">
          <h4 className="font-semibold">John Doe</h4>
          <span className="text-xs text-red-400">johndoe@gmail.com</span>
        </div>
        <MoreVertical size={20} />
      </div>
    </div>
  );
}

export default UserProfile
