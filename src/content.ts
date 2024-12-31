let contentInfoWrapper: Element | null = null;

const contentInfoWrapperAppearingObserver = new MutationObserver(() => {
    const element = document.querySelector(".content-info-wrapper");
    if (element) {
        contentInfoWrapper = element;
        contentInfoWrapperChangeObserver.observe(contentInfoWrapper, { 
            childList: true,
            subtree: true,
            characterData: true
        });
        contentInfoWrapperAppearingObserver.disconnect();
    }
});

contentInfoWrapperAppearingObserver.observe(document.body, { 
    childList: true,
    subtree: true
});

const contentInfoWrapperChangeObserver = new MutationObserver(() => {
    if (contentInfoWrapper) {
        getSongInformation(contentInfoWrapper);
    }
});

function getSongInformation(contentInfoWrapper: Element) {
    const songDOM = contentInfoWrapper.querySelectorAll("yt-formatted-string");
    if (songDOM) {
        const songTitle = songDOM[0].firstChild?.nodeValue;
        const songArtists = songDOM[1].firstChild?.firstChild?.nodeValue;
        return `${songArtists} - ${songTitle}`;
    }

    return "";
}