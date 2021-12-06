export default function SingleStorie({accountName, accountPictureLink}) {
    return (
        <div class="user-storie">
            <a href="#">
                <div class="user-storie-photo">
                    <img src={accountPictureLink} alt="storieUserProfilePhoto"/>
                </div>
                <div class="user-storie-name">
                    {accountName}      
                </div>
            </a>
        </div>
    );
}