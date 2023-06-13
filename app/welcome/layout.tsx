import './welcome.css'

export default function WelcomeLayout({children} : {children : React.ReactNode }){
    return(
        <main className="p-10">{children}</main>
    )
}