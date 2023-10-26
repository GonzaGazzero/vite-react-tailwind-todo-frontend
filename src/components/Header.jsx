import IconMoon from "./icons/IconMoon";

const Header = () => {
    return(
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
            <h1 className="text-3xl uppercase text-white font-bold tracking-[0.3em]" >Todo</h1>
            <button><IconMoon className="fill-white" /></button>
            </div>
        </header>
    );
};

export default Header