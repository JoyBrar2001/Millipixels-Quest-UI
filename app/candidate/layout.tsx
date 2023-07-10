import Navbar from "@/app/components/Navbar"

export default function CandidateLayout({children} : {children : React.ReactNode }){
    return(
        <>
            <Navbar />
            <main className="p-4 sm:p-6 md:p-10 pt-14">{children}</main>
        </>
    )
}