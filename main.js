document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.navbar__toggleBtn');
    const menu = document.querySelector('.navbar__menu');
    const icons = document.querySelector('.navbar__icons');
    const instagramIcon = document.querySelector('.fa-instagram');
    const closeIcon = document.querySelector('.fa-square-x-twitter');
    const searchInput = document.querySelector('.search-form input[type="text"]');
    const trendingKeywordsList = document.querySelector('.keywords-list');

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        icons.classList.toggle('active');
    });

    instagramIcon.addEventListener('click', () => {
        window.location.href = 'https://www.instagram.com/';
    });

    closeIcon.addEventListener('click', () => {
        menu.classList.remove('active');
        icons.classList.remove('active');
    });

    const categoryItems = document.querySelectorAll('.category-item');

    categoryItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const subcategories = item.querySelector('.subcategories');
            subcategories.classList.toggle('active');
        });
    });

    // 새로운 강좌 정보
    const newVideos = [
        {
            title: "자바 스크립트 기초 강좌",
            description: "이 강좌는 자바스크립트의 기초를 다룹니다.",
            id: "KF6t61yuPCY"
        },
        {
            title: "HTML/CSS 기초 강좌",
            description: "이 강좌는 HTML과 CSS의 기초를 다룹니다.",
            id: "FV32OM3B49c"
        },
        {
            title: "React 강좌",
            description: "이 강좌는 React 프레임워크를 다룹니다.",
            id: "Tt_tKhhhJqY"
        },
        {
            title: "Node.js 강좌",
            description: "이 강좌는 Node.js의 기초를 다룹니다.",
            id: "NQq0dOoEPUM"
        }
    ];

    // 강좌 영상 목록에 추가
    const videoList = document.querySelector('.video-list');

    newVideos.forEach(video => {
        // 강좌 영상 썸네일 이미지 URL
        const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/0.jpg`;

        // 강좌 영상 요소 생성
        const videoElement = document.createElement("div");
        videoElement.classList.add("video-item");
        videoElement.innerHTML = `
            <img src="${thumbnailUrl}" alt="${video.title}">
            <h3>${video.title}</h3>
            <p>${video.description}</p>
        `;

        // 클릭 시 해당 비디오로 이동
        videoElement.addEventListener("click", () => {
            window.location.href = `https://youtu.be/${video.id}`;
        });

        // 영상 목록에 추가
        videoList.appendChild(videoElement);
    });

    // 화살표를 이용하여 영상 목록 좌우로 슬라이드
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentPosition = 0;
    const videoItems = document.querySelectorAll('.video-item');
    const numVisibleVideos = 3;
    const totalVideos = newVideos.length;

    // 영상 목록 초기화
    function initVideos() {
        videoItems.forEach((item, index) => {
            if (index < numVisibleVideos) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    initVideos();

    // 다음 영상 보기
    function showNextVideos() {
        const nextPosition = currentPosition + numVisibleVideos;
        if (nextPosition < totalVideos) {
            videoItems[currentPosition].style.display = 'none';
            videoItems[nextPosition].style.display = 'block';
            currentPosition = nextPosition;
        }
    }

    // 이전 영상 보기
    function showPrevVideos() {
        const prevPosition = currentPosition - numVisibleVideos;
        if (prevPosition >= 0) {
            videoItems[currentPosition].style.display = 'none';
            videoItems[prevPosition].style.display = 'block';
            currentPosition = prevPosition;
        }
    }

    // 다음 버튼 클릭 시 다음 영상 보여주기
    nextBtn.addEventListener('click', showNextVideos);

    // 이전 버튼 클릭 시 이전 영상 보여주기
    prevBtn.addEventListener('click', showPrevVideos);
});
