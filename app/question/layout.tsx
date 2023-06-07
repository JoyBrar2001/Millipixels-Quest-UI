import Sidebar from "./sidebar";

export default function QuestionLayout({ children, } : { children: React.ReactNode }){
    return(
        <>
            <Sidebar />
            <main className="lg:pl-48">{children}</main>
        </>
    )
}