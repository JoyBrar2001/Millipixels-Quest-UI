import { QuizSidebarData } from "@/constants/data";

export default function QuestionLayout({ children, } : { children: React.ReactNode }){
    return(
        <>
            <main>{children}</main>
        </>
    )
}