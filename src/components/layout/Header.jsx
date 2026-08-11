import { Upload } from "lucide-react";

function Header({filename}){
    return (
        <header className="header">
            <div>
                <h1>Business Intelligence</h1>

                {
                    filename && (
                        <p>
                            Analyzing: {filename}
                        </p>
                    )
                }
            </div>

            <button>
                <Upload size={18}/>
                Upload Dataset
            </button>
        </header>
    )
}

export default Header;