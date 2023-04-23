export const Tab = ({ tab, activeTab, setActiveTab }) => {
    return (
        <li className="nav-item">
        <button
            className={`nav-link ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
        >
            {tab.label}
        </button>
        </li>
    );
};