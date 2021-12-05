export default function Aside() {
    const suggestedFollows = ["mauricioaraujosousa", "jeremias10", "anjinho", "chiquinho-bento", "bidu"];

    return (
        <aside>
			<div class="userPerfil">
                <a href="#">
                    <img src="data:image/png;base64,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" alt="userProfilePhoto"/>
                </a>
                <div>    
                    <a href="#">
                        cebolinha
                    </a>
                    <p>O único que usa sapato</p>
                </div>
            </div>
		
            <div class="suggestions">
                <p>Sugestões para você</p>
                <a href="#">
                    Ver tudo
                </a>
            </div>
		
            <div class="suggestedFollows">
                <div class="someoneToFollow">
                    <a href="#">
                        <img src="https://zh.rbsdirect.com.br/imagesrc/23368877.jpg?w=700" alt="suggestedProfilePhoto"/>
                    </a>
                    <div>    
                        <a class="toFollow" href="#">
                            mauricioaraujosousa
                        </a>
                        <p>Sugestões para você</p>
                    </div>
                </div>
                <a href="#">
                    Seguir
                </a>
            </div>
    
            <div class="suggestedFollows">
                <div class="someoneToFollow">
                    <a href="#">
                        <img src="https://upload.wikimedia.org/wikipedia/pt/8/8a/Jeremias_san.jpg" alt="suggestedProfilePhoto"/>
                    </a>
                    <div>    
                        <a class="toFollow" href="#">
                            jeremias10
                        </a>
                        <p>Seguido(a) por cascao e mais 4...</p>
                    </div>
                </div>
                <a href="#">
                    Seguir
                </a>
            </div>
    
            <div class="suggestedFollows">
                <div class="someoneToFollow">
                    <a href="#">
                        <img src="https://upload.wikimedia.org/wikipedia/pt/4/4d/Anjinho_personagem.jpg" alt="suggestedProfilePhoto"/>
                    </a>
                    <div>    
                        <a class="toFollow" href="#">
                            anjinho
                        </a>
                        <p>Segue você</p>
                    </div>
                </div>
                <a href="#">
                    Seguir
                </a>
            </div>
    
            <div class="suggestedFollows">
                <div class="someoneToFollow">
                    <a href="#">
                        <img src="https://d2bsjm9patfdz0.cloudfront.net/images/0000181_chico-bento-turma-da-monica.png" alt="suggestedProfilePhoto"/>
                    </a>
                    <div>    
                        <a class="toFollow" href="#">
                            chiquinho-bento
                        </a>
                        <p>Novo no Instagram</p>
                    </div>
                </div>
                <a href="#">
                    Seguir
                </a>
            </div>
    
            <div class="suggestedFollows">
                <div class="someoneToFollow">
                    <a class="toFollow" href="#">
                        <img src="https://www.altoastral.com.br/media/uploads/legacy/2016/06/bidu-na-vida-real.jpg" alt="suggestedProfilePhoto"/>
                    </a>
                    <div>    
                        <a class="toFollow" href="#">
                            bidu
                        </a>
                        <p>Seguido(a) por monica e mais 2...</p>
                    </div>
                </div>
                <a href="#">
                    Seguir
                </a>
            </div>
    
            <div class="aboutInstagram">
                <a href="#">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </a> 
            </div>
    
            <div class="instagramRights">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
		</aside>

    );
}