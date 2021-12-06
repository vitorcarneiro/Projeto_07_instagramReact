export default function SinglePost({accountName, accountPictureLink, postedLink, mainLikePersonName, mainLikePersonPictureLink, likes}) {
    let ToPost;

    if (typeof(postedLink) === "string") {
        ToPost = <img src={postedLink} alt={accountName + " Posted Picture"}/>;

    } else {
        ToPost = 
            <video autoplay="autoplay" loop="true">
                <source src={postedLink[0]} type="video/mp4" />
                <source src={postedLink[1]} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
    };
    
    return (
        <div class="post">
            <div class="post-top">
                <div class="following-user">  
                    <a href="#">
                        <img src={accountPictureLink} alt={accountName + " Profile Picture"} />
                    </a>                    
                    <a class="to-follow" href="#">
                        {accountName}
                    </a>
                </div>
                <a href="#">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </a>
            </div>   
            
            {ToPost}
            
            <div class="post-lower">
                <div class="like-comment">
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
    
            <div class="liked-bar">
                <a href="#">
                    <img src={mainLikePersonPictureLink} alt={mainLikePersonName + " Profile Pic"}/>
                </a>
                <p>
                    Curtido por 
                    <a class="to-follow" href="#">
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