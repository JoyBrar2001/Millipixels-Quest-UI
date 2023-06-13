import Navbar from "../navbar";
import Sidebar from "./sidebar";

export default function QuestionLayout({ children, } : { children: React.ReactNode }){
    return(
        <>
            <Navbar />
            <Sidebar />
            <main className="lg:pl-48">{children}</main>
        </>
    )
}