import Link from "next/link"

export default function Page() {
  return (
    <div className="text-center">
      <h1 className='text-5xl font-bold my-6'>Welcome to Quest Standup</h1>
        
      <p className="text-lg">
        <Link href="/welcome">Welcome Page</Link><br />
        <Link href="/welcome/signup">Sign Up Page</Link><br />
        <Link href="/welcome/login">Login Page</Link><br />
        <Link href="/admin">Admin Dashboard</Link><br />
        <Link href="/candidate">Candidate Dashboard</Link><br />
        <Link href="/question">Quesetion UI</Link><br />
        <Link href="/dashboard">Dashboard</Link>
      </p>
    </div>
  )
}