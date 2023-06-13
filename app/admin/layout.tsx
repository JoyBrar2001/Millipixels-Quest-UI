import Navbar from "../navbar"

export default function AdminLayout({children} : {children : React.ReactNode }){
    return(
        <>
            <Navbar />
            <main className="p-10">{children}</main>
        </>
    )
}