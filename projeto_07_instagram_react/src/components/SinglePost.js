export default function SinglePost(props) {
    return (
        <div class="post">
            <div class="postTop">
                <div class="followingUser">  
                    <a href="#">
                        <img src={props.accountPictureLink} alt={props.accountName + "Profile Picture"} />
                    </a>                    
                    <a class="toFollow" href="#">
                        {props.accountName}
                    </a>
                </div>
                <a href="#">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </a>
            </div>   
                    
            <img src={props.postedPicLink} alt={props.accountName + "Posted Picture"}/>
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
                    <img src={props.mainLikePersonPictureLink} alt={props.mainLikePersonName + "Profile Pic"}/>
                </a>
                <p>
                    Curtido por 
                    <a class="toFollow" href="#">
                        <strong> {props.mainLikePersonName} </strong>
                    </a>
                        e 
                    <a href="#">
                        <strong> outras {props.likes - 1} pessoas</strong>
                    </a>
                </p>
            </div>
		</div>

    );
}