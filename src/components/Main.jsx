import Left from "./Left";
import Right from "./Right";

const Main = () => {
    return (
        <>
            <div className="relative pt-20 bottom-0 left-0">
                <div className="w-full py-10 flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-10 gap-8">
                    <div className="w-full lg:w-[50%] flex justify-center items-center">
                        <Left />
                    </div>
                    <div className="w-full lg:w-[40%] flex justify-center items-center">
                        <Right />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;