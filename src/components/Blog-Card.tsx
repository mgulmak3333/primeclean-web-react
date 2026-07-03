import '../assets/css/card.css'

function card(){
    return(
        <>
            <div className="carder container  d-flex">
                <article className="blog" id="blog-1">
                    <div className="blog-sect">
                    <h3>Why Do We Clean from Top to Bottom?</h3>
                    <p>One of the most common cleaning mistakes is trying to remove dust from every surface at the same time. We begin by cleaning the highest areas first and then work our way downward. This method prevents dust from settling back onto surfaces that have already been cleaned, leaving your home spotless, hygienic, and fresh for much longer.</p>
                </div>
                </article>

                <article className="blog" id="blog-2">
                    <div className="blog-sect">
                        <h3>Why Does Professional Cleaning Deliver Faster Results?</h3>
                        <p>A standard home cleaning session can take hours due to limited equipment and less efficient methods. With industrial-grade vacuum cleaners, advanced microfiber technology, and professional cleaning products, we clean the same space in far less time while achieving a much deeper level of cleanliness. You save valuable time, and we leave your home spotless, fresh, and revitalized.</p>
                    </div>
                </article>
            </div>
        </>
    )
}

export default card