//contents.js -- 유튜브 링크 가져오는 기능(DOM 기능)
// 현재 페이지가 유튜브 페이지인지 확인
if (window.location.host.includes("youtube.com")) {
    const videoUrl = window.location.href;

    // background.js에 메시지로 URL 송신
    chrome.runtime.sendMessage({ type: "FETCH_NEWS", videoUrl: videoUrl }, (response) => {
        console.log("관련 뉴스:", response.news);
    });
}


