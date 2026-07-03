import '../assets/css/card.css'

function card(){
    return(
        <>
            <div className="carder container  d-flex">
                <article className="blog" id="blog-1">
                    <div className="blog-sect">
                        <h3>Why Do We Clean From Top to Bottom?</h3>
                        <p>The most common mistake in cleaning is trying to clean dust along with the floor. We first remove the dust from the top, then work our way down to the lower areas. This technique prevents the area you've cleaned from getting dusty again and provides you with a much longer-lasting, sparkling clean hygiene zone.</p>
                    </div>
                </article>

                <article className="blog" id="blog-2">
                    <div className="blog-sect">
                        <h3>Why Does Professional Cleaning Deliver Faster Results?</h3>
                        <p>A standard home cleaning can take hours due to lack of equipment. However, with the right industrial vacuums, microfiber technology and professional chemicals, we clean the same area in a much shorter time and much more thoroughly. Without you spending hours, we bring a flawless freshness to your home.</p>
                    </div>
                </article>
            </div>
        </>
    )
}

export default card