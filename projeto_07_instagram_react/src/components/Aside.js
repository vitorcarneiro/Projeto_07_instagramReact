import SuggestionsToFollow from "./SuggestionToFollow";

export default function Aside({userData}) {
    const suggestedFollows = [
        {
            accountName: "mauricioaraujosousa",
            accountPictureLink: "https://zh.rbsdirect.com.br/imagesrc/23368877.jpg?w=700",
            description: "Sugestões para você"
        },
        {
            accountName: "jeremias10",
            accountPictureLink: "https://upload.wikimedia.org/wikipedia/pt/8/8a/Jeremias_san.jpg",
            description: "Seguido(a) por cascao e mais 4..."
        },
        {
            accountName: "anjinho",
            accountPictureLink: "https://upload.wikimedia.org/wikipedia/pt/4/4d/Anjinho_personagem.jpg",
            description: "Segue você"
        }, 
        {
            accountName: "chiquinho-bento",
            accountPictureLink: "https://d2bsjm9patfdz0.cloudfront.net/images/0000181_chico-bento-turma-da-monica.png",
            description: "Novo no Instagram"
        },
        {
            accountName: "bidu",
            accountPictureLink: "https://www.altoastral.com.br/media/uploads/legacy/2016/06/bidu-na-vida-real.jpg",
            description: "Seguido(a) por monica e mais 2..."
        }   
    ];

    return (
        <aside>
			<div class="user-profile">
                <a href="#">
                    <img src="https://img.elo7.com.br/product/main/3644560/painel-redondo-cebolinha-temas.jpg" alt="userProfilePhoto" />
                </a>
                <div>    
                    <a href="#">
                        {userData.name}
                    </a>
                    <p>{userData.description}</p>
                </div>
            </div>
		
            <div class="suggestions">
                <p>Sugestões para você</p>
                <a href="#">
                    Ver tudo
                </a>
            </div>
		
            {suggestedFollows.map((suggestionToFollow) => (
                <SuggestionsToFollow accountName={suggestionToFollow.accountName}
                accountPictureLink={suggestionToFollow.accountPictureLink}
                description={suggestionToFollow.description}
                 />
            ))}
    
            <div class="about-instagram">
                <a href="#">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </a> 
            </div>
    
            <div class="instagram-rights">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
		</aside>

    );
}