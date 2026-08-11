import {
    LayoutDashboard,
    BarChart3,
    Database,
    Brain,
    FileText,
} from "lucide-react"


function Sidebar(){
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <Brain size={24}/>
                <span>AI Analyst</span>
            </div>

            <nav>
                <a href="#">
                    <LayoutDashboard size={18}/>
                    Dashboard
                </a>
                <a href="#">
                    <Database size={18}/>
                    Dataset
                </a>
                <a href="#">
                    <BarChart3 size={18}/>
                    EDA
                </a>
                <a href="#">
                    <Brain size={18}/>
                    AI Analyst
                </a>
                <a href="#">
                    <FileText size={18}/>
                    Reports
                </a>
            </nav>

        </aside>
    )
}

export default Sidebar;