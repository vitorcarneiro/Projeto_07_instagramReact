export default function SuggestionsToFollow({accountName, accountPictureLink, description}) {
    return (
        <div class="suggested-follows">
            <div class="someone-to-follow">
                <a href="#">
                    <img src={accountPictureLink} alt={accountName + " Profile Picture"} />
                </a>
                <div>    
                    <a class="to-follow" href="#">
                        {accountName}
                    </a>
                    <p>{description}</p>
                </div>
            </div>
            <a href="#">
                Seguir
            </a>
        </div>
    );
}