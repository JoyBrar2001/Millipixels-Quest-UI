import { QuizSidebarData } from "@/constants/data";
import Sidebar from "./sidebar";

export default function QuestionLayout({ children, } : { children: React.ReactNode }){
    return(
        <>
            <Sidebar data={ QuizSidebarData } />
            <main className="lg:pl-48">{children}</main>
        </>
    )
}