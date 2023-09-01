import { Settings } from "lucide-react";

import Heading from "@/components/Heading";

const SettingsPage = () => {

  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-sm md:text-xl font-light text-black">
          "Great customizations are on the way. You are currently on default free plan. Click your Avatar to manage your account."
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
