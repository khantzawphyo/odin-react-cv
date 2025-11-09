// Updated Tabs component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="mb-6 border-b border-neutral-200">
      <nav className="-mb-px flex flex-wrap">
        {tabs.map((tab) => {
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex min-w-0 flex-1 cursor-pointer items-center justify-center rounded-t-md px-2 py-3 font-medium whitespace-nowrap transition-colors sm:px-3 ${
                activeTab === tab.id
                  ? `${tab.bgColor} ${tab.textColor} border ${tab.borderColor}`
                  : `${tab.textColor} border-b-[3px] ${tab.borderColor} ${tab.hoverBgColor}`
              }`}
            >
              <FontAwesomeIcon icon={tab.icon} size="sm" className="mr-2" />
              <span className="truncate tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Tabs;
