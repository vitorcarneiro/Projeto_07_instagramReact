export default function SinglePost({accountName, accountPictureLink, postedPicLink, mainLikePersonName, mainLikePersonPictureLink, likes}) {
    return (
        <div class="post">
            <div class="postTop">
                <div class="followingUser">  
                    <a href="#">
                        <img src={accountPictureLink} alt={accountName + " Profile Picture"} />
                    </a>                    
                    <a class="toFollow" href="#">
                        {accountName}
                    </a>
                </div>
                <a href="#">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </a>
            </div>   
                    
            <img src={postedPicLink} alt={accountName + " Posted Picture"}/>
                <div class="postLower">
                    <div class="likeComment">
                        <a href="#">
                            <ion-icon name="heart-outline"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </a>
                    </div>
                    <a href="#">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </a>
                </div>
    
            <div class="likedBar">
                <a href="#">
                    <img src={mainLikePersonPictureLink} alt={mainLikePersonName + " Profile Pic"}/>
                </a>
                <p>
                    Curtido por 
                    <a class="toFollow" href="#">
                        <strong> {mainLikePersonName} </strong>
                    </a>
                        e 
                    <a href="#">
                        <strong> outras {likes - 1} pessoas</strong>
                    </a>
                </p>
            </div>
		</div>

    );
}