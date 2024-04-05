import Link from "next/link";

const NotFoundPage = () => {
    return (
        <section className="not_found">
            <div className="not_found_wrapper">
                <h3>
                    404
                </h3>
                <h2>
                    Ooops, página não encontrada.
                </h2>
                <button>
                    <Link href="/">
                        Home
                    </Link>
                </button>
            </div>
        </section>
    )
}

export default NotFoundPage