import Sidebar from "./Sidebar"

const DashboardLayout = ({children}) => {
  return (
    <div className="app-layout">
        <Sidebar/>

        <main className="main-content">
            {children}
        </main>
    </div>
  )
}

export default DashboardLayout
