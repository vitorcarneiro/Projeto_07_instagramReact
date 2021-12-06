import SinglePost from "./SinglePost";

export default function Posts(props) {
    const postsFeed = [
        {
            account: 
            {
                name: "cascao",
                pictureLink: "https://br.web.img3.acsta.net/newsv7/20/03/19/18/01/5940263.jpg",
            },
            
            postedPicLink: "https://rollingstone.uol.com.br/media/_versions/turma-da-monica_reproducao_youtube_widelg.jpg",

            mainLikePerson:
            {
                name: "franjinha",
                pictureLink: "https://i.pinimg.com/originals/79/ea/22/79ea223ab2ccf1c5a41ec4642739322f.png",
            },

            totalLikes: "28"
        },
        {
            account: 
            {
                name: "monica",
                pictureLink: "http://1.bp.blogspot.com/-MtdzRG4wfaw/T5sEDPoo5GI/AAAAAAAAFco/euQH23ZGGf4/s1600/Imagem2.png",
            },
            
            postedPicLink: "https://exame.com/wp-content/uploads/2020/07/Turma-da-M%C3%B4nica-HD-Wallpapers3-e1594252932145.jpg",

            mainLikePerson:
            {
                name: "magali",
                pictureLink: "https://img.elo7.com.br/product/zoom/26FF3EC/painel-magali-lona-100x100-lol.jpg",
            },

            totalLikes: "94"
        },
        {
            account: 
            {
                name: "magali",
                pictureLink: "https://img.elo7.com.br/product/zoom/26FF3EC/painel-magali-lona-100x100-lol.jpg",
            },
            
            postedPicLink: "https://i.pinimg.com/736x/3a/bc/6e/3abc6e59d3d74d30a279ec12ecddf75b.jpg",

            mainLikePerson:
            {
                name: "louco",
                pictureLink: "https://lista10.org/wp-content/uploads/2018/01/07-7.jpg",
            },

            totalLikes: "83"
        }
        // {
        //     account: 
        //     {
        //         name: "xaveco",
        //         pictureLink: "https://pbs.twimg.com/media/ECL-7-rXkAAymcb.jpg",
        //     },
            
        //     postedPicLink: "https://rollingstone.uol.com.br/media/_versions/turma-da-monica_reproducao_youtube_widelg.jpg",

        //     mainLikePerson:
        //     {
        //         name: "franjinha",
        //         pictureLink: "https://i.pinimg.com/originals/79/ea/22/79ea223ab2ccf1c5a41ec4642739322f.png",
        //     },

        //     totalLikes: "28"
        // }
    ];

    return (
        <div class="posts-feed">
			 {postsFeed.map((post) => (
                <SinglePost accountName={post.account.name}
                accountPictureLink={post.account.pictureLink}
                postedPicLink={post.postedPicLink}
                mainLikePersonName={post.mainLikePerson.name}
                mainLikePersonPictureLink={post.mainLikePerson.pictureLink}
                likes={post.totalLikes}
                 />
                ))}
		</div>
    );
}