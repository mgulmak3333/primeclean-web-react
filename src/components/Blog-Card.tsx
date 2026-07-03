import '../assets/css/card.css'

function card(){
    return(
        <>
            <div className="carder container  d-flex">
                <article className="blog" id="blog-1">
                    <div className="blog-sect">
                        <h3>Neden Yukarıdan Aşağıya Temizlik Yapıyoruz?</h3>
                        <p>Temizlikte en sık yapılan hata, tozu zeminle beraber temizlemeye çalışmaktır. Biz önce en üstteki tozları alıyor, ardından alt kısımlara iniyoruz. Bu teknik, temizlediğiniz alanın tekrar tozlanmasını engeller ve size çok daha uzun süreli, pırıl pırıl bir hijyen alanı sağlar.</p>
                    </div>
                </article>

                <article className="blog" id="blog-2">
                    <div className="blog-sect">
                        <h3>Profesyonel Temizlik Neden Daha Hızlı Sonuç Verir?</h3>
                        <p>Standart bir ev temizliği ekipman eksikliği nedeniyle saatler sürebilir. Oysa doğru endüstriyel vakumlar, mikrofiber teknolojisi ve profesyonel kimyasallar sayesinde, biz aynı alanı çok daha kısa sürede ve çok daha derinlemesine temizliyoruz. Siz saatlerinizi harcamadan, biz kusursuz bir ferahlığı evinize getiriyoruz.</p>
                    </div>
                </article>
            </div>
        </>
    )
}

export default card