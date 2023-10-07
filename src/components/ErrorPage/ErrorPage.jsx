import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <section className="">
                <div className="container mx-auto px-5 h-[80vh] flex justify-center items-center">
                    <div>
                        <h1 className="text-6xl font-bold text-center mb-4">Oops!</h1>
                        <p className="text-2xl font-bold text-center mb-5">Sorry, an unexpected error has occurred.</p>

                        <Link to='/' className="flex justify-center">
                            <button
                                className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                data-ripple-light="true"
                            >
                                Button
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorPage;