import Navbar from "../navbar"

export default function CandidateLayout({children} : {children : React.ReactNode }){
    return(
        <>
            <Navbar />
            <main className="pt-24 p-10">{children}</main>
        </>
    )
}