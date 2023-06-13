import '../admin.css';

export default function Card1(){
    return(
        <div className="bg-white col-span-2 h-full grid grid-cols-3 p-10 rounded-lg gap-6 shadow-xl">
            <div className="card1__card__styles hover:card1__card__styles-hover hover:blue__gradient transition-150">
                <h1 className="text-5xl font-bold">25</h1>
                <p className="text-base font-light">Candidates have finished the quiz</p>
            </div>
            <div className="card1__card__styles hover:card1__card__styles-hover hover:blue__gradient transition-150">
                <h1 className="text-6xl font-bold">13</h1>
                <p className="text-base font-light">Candidates quizzes are assigned to</p>
            </div>
            <div className="card1__card__styles hover:card1__card__styles-hover hover:blue__gradient transition-150">
                <h1 className="text-6xl font-bold">9</h1>
                <p className="text-base font-light">Candidates quizzes are yet to be assigned</p>
            </div>
        </div>
    )
}