export default function SinglePost(props) {
    return (
        <div class="post">
            <div class="postTop">
                <div class="followingUser">  
                    <a href="#">
                        <img src={props.profilePic} alt={props.person + "Profile Picture"} />
                    </a>                    
                    <a class="toFollow" href="#">
                        {props.person}
                    </a>
                </div>
                <a href="#">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </a>
            </div>   
                    
            <img src={props.postedPic} alt={props.person + "Posted Picture"}/>
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
                    <img src={props.mainLikePersonProfilePic} alt={props.mainLikePerson + "Profile Pic"}/>
                </a>
                <p>
                    Curtido por 
                    <a class="toFollow" href="#">
                        <strong> {props.mainLikePerson} </strong>
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