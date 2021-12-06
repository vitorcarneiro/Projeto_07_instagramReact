import SingleStorie from "./SingleStorie";

export default function Stories() {
    const storiesFeed = [
        {
            accountName: "cascao",
            accountPictureLink: "https://br.web.img3.acsta.net/newsv7/20/03/19/18/01/5940263.jpg"
        },
        {
            accountName: "franjinha",
            accountPictureLink: "https://i.pinimg.com/originals/79/ea/22/79ea223ab2ccf1c5a41ec4642739322f.png"
        },
        {
            accountName: "monica",
            accountPictureLink: "http://1.bp.blogspot.com/-MtdzRG4wfaw/T5sEDPoo5GI/AAAAAAAAFco/euQH23ZGGf4/s1600/Imagem2.png"
        },
        {
            accountName: "magali",
            accountPictureLink: "https://img.elo7.com.br/product/zoom/26FF3EC/painel-magali-lona-100x100-lol.jpg"
        },
        {
            accountName: "xaveco",
            accountPictureLink: "https://pbs.twimg.com/media/ECL-7-rXkAAymcb.jpg"
        },
        {
            accountName: "jotalhao",
            accountPictureLink: "https://pm1.narvii.com/6441/ee07544e60c8c67ca4afc7a4229687ac6fdbb1f1_hq.jpg"
        },
        {
            accountName: "louco",
            accountPictureLink: "https://lista10.org/wp-content/uploads/2018/01/07-7.jpg"
        },
        {
            accountName: "humberto",
            accountPictureLink: "https://i.pinimg.com/originals/e5/6b/d1/e56bd144783ae9287f5a4e0aef0f1251.jpg"
        }
    ];
        
    return (
        <div class="stories-bar">
           {storiesFeed.map((storie) => (
                <SingleStorie accountName={storie.accountName}
                accountPictureLink={storie.accountPictureLink}
                 />
            ))}

            <a href="#">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </a>
        </div>
    );
}