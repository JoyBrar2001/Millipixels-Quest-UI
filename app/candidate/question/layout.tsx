import { QuizSidebarData } from "@/constants/data";
import Sidebar from "./sidebar";

export default function QuestionLayout({ children, } : { children: React.ReactNode }){
    return(
        <>
            <main>{children}</main>
        </>
    )
}