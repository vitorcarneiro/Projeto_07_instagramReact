export default function SuggestionsToFollow({accountName, accountPictureLink, description}) {
    return (
        <div class="suggestedFollows">
            <div class="someoneToFollow">
                <a href="#">
                    <img src={accountPictureLink} alt={accountName + " Profile Picture"} />
                </a>
                <div>    
                    <a class="toFollow" href="#">
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