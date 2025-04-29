import { useState } from "react";
import ViewGroup from "../components/community/ViewGroup";
import CreateGroup from "../components/community/CreateGroup";
import JoinGroup from "../components/community/JoinGroup";
import LeaveGroup from "../components/community/LeaveGroup";
import FacebookGroup from "../components/community/FacebookGroup";
import WhatsappGroup from "../components/community/WhatsappGroup";
import CommunityWelcome from "../components/community/CommunityWelcome";
import UpdateDeleteGroup from "../components/community/UpdateDeleteGroup";
import MyGroups from "../components/community/MyGroups";
import BackButton from "../components/BackButton";
import Navbar from "../components/Navbar";


export default function CommunityForum() {
  const [activeTab, setActiveTab] = useState("welcome");

  const renderContent = () => {
    switch (activeTab) {
      case "welcome":
        return <CommunityWelcome/>
      case "view":
        return <ViewGroup />;
      case "create":
        return <CreateGroup />;
      case "join":
        return <JoinGroup />;
      case "leave":
        return <LeaveGroup />;
      case "facebook":
        return <FacebookGroup />;
      case "whatsapp":
        return <WhatsappGroup />;
      case "mygroups":
        return <MyGroups/>;
      case "updateDelete":
        return <UpdateDeleteGroup/>
      default:
        return <CommunityWelcome />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
        <Navbar/> 
    
        <div className="flex h-screen">
        
            {/* Sidebar */}
            <div className="w-64 bg-gradient-to-t from-green-700 to-green-400 text-white flex flex-col p-4 space-y-4">
                <h2 className="text-2xl font-semibold mb-4">Community Forum</h2>
                <BackButton/>
                <button onClick={() => setActiveTab("welcome")} className="text-left hover:bg-green-700 rounded px-3 py-2">Welcome!</button>
                <button onClick={() => setActiveTab("mygroups")} className="text-left hover:bg-green-700 rounded px-3 py-2">My Groups</button>
                <button onClick={() => setActiveTab("view")} className="text-left hover:bg-green-700 rounded px-3 py-2">View All Groups</button>
                <button onClick={() => setActiveTab("create")} className="text-left hover:bg-green-700 rounded px-3 py-2">Create A Group</button>
                <button onClick={() => setActiveTab("join")} className="text-left hover:bg-green-700 rounded px-3 py-2">Join A Group</button>
                <button onClick={() => setActiveTab("leave")} className="text-left hover:bg-green-700 rounded px-3 py-2">Leave A Group</button>
                <button onClick={() => setActiveTab("facebook")} className="text-left hover:bg-green-700 rounded px-3 py-2">Facebook Group</button>
                <button onClick={() => setActiveTab("whatsapp")} className="text-left hover:bg-green-700 rounded px-3 py-2">WhatsApp Group</button>
                <button onClick={() => setActiveTab("updateDelete")} className="text-left hover:bg-green-700 rounded px-3 py-2">Update/Delete A Group</button>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
                {renderContent()}
            </div>
        </div>
        
       
    </div>
  );
}
