export default function Header() {
    return (
        <header>
			<div class="headerBackground">
                <a href="#" class="logoHeader">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <img src="./assets/img/logo.png" alt="logo-instagram" />
                </a>
			
                <div class="searchBox">
                    <input type="text" placeholder="Pesquisar" />
                </div>
			
                <div class="logoMobile"> 
                    <a href="#">
                    <img src="./assets/img/logo.png" alt="logo-instagram"/>
                    </a>
                </div>

                <div class="iconsHeader">
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
                    
                <div class="iconMobile">
                    <a href="#">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </a>
                </div>
			</div>
		</header>
    );
}