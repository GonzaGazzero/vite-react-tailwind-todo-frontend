import CrossIcon from "./components/icons/CrossIcon";
import Moon from "./components/icons/Moon";

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl uppercase text-white font-bold tracking-[0.3em]" >todo</h1>
          <button><Moon className="fill-black"/></button>
        </div>

        <form className="rounded-md bg-white overflow-hidden py-4 gap-4 items-center px-4 flex mt-8">
          <span className="rounded-full border-2 w-5 h-5 inline-block "></span>
          <input className="w-full text-gray-400 outline-none"
          type="text" 
          placeholder="Create a new todo..." />
        </form>

      </header>

      <main className="container mx-auto px-4 mt-4">
        <div className="bg-white rounded-md [&>article]:p-4">
          
          <article className="flex gap-4  border-b-gray-400 border-b ">
            <button className="flex-none rounded-full border-2 w-5 h-5 inline-block "></button>
            <p className="text-gray-600 grow">comprar pan</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>

          <article className="flex gap-4  border-b-gray-400 border-b ">
            <button className="flex-none rounded-full border-2 w-5 h-5 inline-block "></button>
            <p className="text-gray-600 grow">comprar pan</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>

          <article className="flex gap-4  border-b-gray-400 border-b ">
            <button className="flex-none rounded-full border-2 w-5 h-5 inline-block "></button>
            <p className="text-gray-600 grow">comprar pan</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>

          <section className="px-4 py-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400"> Clear Completed</button>
          </section>
        </div>
      </main>

      <section className="px-4 container mx-auto mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
          <button className="text-blue-600">All</button>

          <button className="hover:text-blue-600">Active</button>

          <button className="hover:text-blue-600">Completed</button>
        </div>

      </section>


      <p className="text-center mt-8">Drag and drop to reorder list</p>
    </div>
  );
};

export default App;