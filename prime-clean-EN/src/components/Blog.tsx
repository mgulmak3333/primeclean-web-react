import BlogCard from './Blog-Card';
import '../assets/css/blog.css'

function blog(){
    return(
        <>

            <section className="section-blog" id="blog-p">
                <div className="banner-1 justify-content-center d-flex">
                    <h2>Blog</h2>
                </div>

                <BlogCard />
            </section>


        
        </>
    )
}

export default blog