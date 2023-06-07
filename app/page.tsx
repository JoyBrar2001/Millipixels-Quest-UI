import Link from "next/link"

export default function Page() {
  return (
    <div className="text-center">
      <h1 className='text-5xl font-bold my-6'>Welcome to Quest Standup</h1>
        
      <p className="text-lg">
        <Link href="/question">Go to Quesetion UI</Link><br />
      <Link href="/dashboard">Go to Dashboard</Link>
      </p>
    </div>
  )
}