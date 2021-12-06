export default function Header() {
    return (
        <header>
			<div class="header-background">
                <a href="#" class="logo-header">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <img src="./assets/img/logo.png" alt="logo-instagram" />
                </a>
			
                <input class="search-box" type="text" placeholder="Pesquisar" />
                
                <div class="logo-mobile"> 
                    <a href="#">
                    <img src="./assets/img/logo.png" alt="logo-instagram"/>
                    </a>
                </div>

                <div class="icons-header">
                    <a href="#">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </a>
                    <a href="#">
                        <ion-icon name="compass-outline"></ion-icon>
                    </a>
                    <a href="#">
                        <ion-icon name="heart-outline"></ion-icon>
                    </a>
                    <a href="#">
                        <ion-icon name="person-outline"></ion-icon>
                    </a>
                </div>
                    
                <div class="icon-mobile">
                    <a href="#">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </a>
                </div>
			</div>
		</header>
    );
}