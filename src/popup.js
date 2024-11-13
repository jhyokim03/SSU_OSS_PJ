// popup.js -- popup.html js/ background.js에서 받은 데이터를 UI에 표시하는 작업을 담당

document.addEventListener('DOMContentLoaded', () => {
    // background.js에 저장된 뉴스 데이터를 요청(메시징 시스템)
    chrome.runtime.sendMessage({ type: "GET_NEWS_DATA" }, (response) => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = ''; // 이전 결과 초기화

        if (response.result && response.result.articles) {
            response.result.articles.forEach(article => {
                // 기사 정보를 HTML 요소로 생성
                const articleDiv = document.createElement('div');
                articleDiv.className = 'article';

                const title = document.createElement('h3');
                title.textContent = article.title;

                const summary = document.createElement('p');
                summary.textContent = article.summary;

                const img = document.createElement('img');
                img.src = article.image;

                articleDiv.appendChild(title);
                articleDiv.appendChild(summary);
                articleDiv.appendChild(img);
                resultDiv.appendChild(articleDiv);
            });
        } else {
            resultDiv.textContent = '뉴스를 찾을 수 없습니다.';
        }
    });
});

