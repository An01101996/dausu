// Lấy các phần tử
const giftBox = document.getElementById("giftBox");
const videoPlayer = document.getElementById("videoPlayer");
const backgroundAudio = document.getElementById("backgroundAudio");
const messageBox = document.getElementById("messageBox");

// Kiểm tra xem trình duyệt có cho phép phát nhạc tự động không
document.addEventListener("DOMContentLoaded", () => {
    backgroundAudio.play()
        .then(() => {
            console.log("Nhạc tự động phát thành công.");
        })
        .catch((error) => {
            console.log("Trình duyệt chặn tự động phát nhạc. Nhạc sẽ phát khi nhấn vào hộp quà.");
            backgroundAudio.pause(); // Dừng nhạc nếu không tự động phát được
        });
});

// Phát nhạc khi nhấn vào hộp quà nếu nhạc không tự động phát
giftBox.addEventListener("click", () => {
    // Phát nhạc
    backgroundAudio.play().catch((error) => {
        console.error("Lỗi khi phát nhạc:", error);
    });

    // Hiển thị video nền
    videoPlayer.classList.add("video-visible"); // Hiện video
    giftBox.style.display = "none"; // Ẩn hộp quà
    document.querySelector(".click-to-open").style.display = "none"; // Ẩn chữ "Nhấp Để Mở"
    messageBox.style.display = "none"; // Ẩn dòng chữ chúc mừng
});
