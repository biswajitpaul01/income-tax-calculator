export const Tab = ({ tab, activeTab, setActiveTab }) => {
    return (
        <li className="mr-2">
            <button className={`tab ${activeTab === tab.key ? 'active' : ''}`} onClick={() => setActiveTab(tab.key)}>{tab.label}</button>
        </li>
    );
};