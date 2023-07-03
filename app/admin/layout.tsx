import Navbar from "@/app/components/Navbar"

export default function AdminLayout({children} : {children : React.ReactNode }){
    return(
        <>
            <Navbar />
            <main className="pt-24 p-10">{children}</main>
        </>
    )
}