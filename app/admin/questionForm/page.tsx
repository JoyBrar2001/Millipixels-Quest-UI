import { AdminSidebar } from "@/app/components/admin-components";

export default function Page() {
  return (
    <>
      <AdminSidebar />
      <div className="md:ml-48 py-12 text-center flex-center flex-col text-[#1f1f1f] bg-gray-200 h-full flex-center rounded-3xl shadow-lg">

      <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>Add Question</h1>

        <div className="w-full flex-center px-20">

          <form className="flex-center w-full items-start flex-col gap-2 my-12">
            <input className="block px-4 py-2 outline-none bg-transparent border-b-[1px] border-b-[#1f1f1f] focus:bg-white focus:border-b-cyan-500 focus:border-b-2 focus:rounded-xl focus:placeholder-cyan-500" type="text" placeholder="Question" />

            <select defaultValue="Question Type" className="block text-[#a5abb6] px-4 py-2 outline-none bg-transparent border-b-[1px] border-b-[#1f1f1f] focus:bg-white focus:border-b-cyan-500 focus:border-b-2 focus:rounded-xl focus:placeholder-cyan-500" name="" id="">
              <option selected>Question Type</option>
              <option value="MCQ">MCQ</option>
              <option value="Textarea">Textarea</option>
              <option value="Draggable">Draggable</option>
            </select>

            <select className="block text-[#a5abb6] px-4 py-2 outline-none bg-transparent border-b-[1px] border-b-[#1f1f1f] focus:bg-white focus:border-b-cyan-500 focus:border-b-2 focus:rounded-xl focus:placeholder-cyan-500" name="" id="">
              <option selected>Question Domain</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Textarea">Textarea</option>
              <option value="Draggable">Draggable</option>
            </select>

            <select className="block text-[#a5abb6] px-4 py-2 outline-none bg-transparent border-b-[1px] border-b-[#1f1f1f] focus:bg-white focus:border-b-cyan-500 focus:border-b-2 focus:rounded-xl focus:placeholder-cyan-500" name="" id="">
              <option selected>Difficulty</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <input className="block px-4 py-2 outline-none bg-transparent border-b-[1px] border-b-[#1f1f1f] focus:bg-white focus:border-b-cyan-500 focus:border-b-2 focus:rounded-xl focus:placeholder-cyan-500" type="text" placeholder="Added By" />
          </form>

          <form className="flex-center w-full items-start flex-col gap-2 my-12">
            <input className="block px-4 py-2 outline-none bg-transparent border-b-[1px] border-b-[#1f1f1f] focus:bg-white focus:border-b-cyan-500 focus:border-b-2 focus:rounded-xl focus:placeholder-cyan-500" type="text" placeholder="Add Option 1" />
            <input className="block px-4 py-2 outline-none bg-transparent border-b-[1px] border-b-[#1f1f1f] focus:bg-white focus:border-b-cyan-500 focus:border-b-2 focus:rounded-xl focus:placeholder-cyan-500" type="text" placeholder="Add Option 2" />
            <input className="block px-4 py-2 outline-none bg-transparent border-b-[1px] border-b-[#1f1f1f] focus:bg-white focus:border-b-cyan-500 focus:border-b-2 focus:rounded-xl focus:placeholder-cyan-500" type="text" placeholder="Add Option 3" />
            <input className="block px-4 py-2 outline-none bg-transparent border-b-[1px] border-b-[#1f1f1f] focus:bg-white focus:border-b-cyan-500 focus:border-b-2 focus:rounded-xl focus:placeholder-cyan-500" type="text" placeholder="Add Option 4" />

          </form>
        </div>

        <button type="submit" className="bg-white rounded-full text-cyan-500 text-lg px-8 py-2 shadow-lg shadow-cyan-500/30">
          Add Question
        </button>
      </div>
    </>
  )
}