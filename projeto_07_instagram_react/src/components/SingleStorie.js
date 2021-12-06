export default function SingleStorie({accountName, accountPictureLink}) {
    return (
        <div class="userStorie">
            <a href="#">
                <div class="userStoriePhoto">
                    <img src={accountPictureLink} alt="storieUserProfilePhoto"/>
                </div>
                <div class="userStorieName">
                    {accountName}      
                </div>
            </a>
        </div>
    );
}