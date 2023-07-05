import Navbar from "@/app/components/Navbar"

export default function CandidateLayout({children} : {children : React.ReactNode }){
    return(
        <>
            <Navbar />
            <main className="pt-14 p-4 sm:p-6 md:p-10">{children}</main>
        </>
    )
}