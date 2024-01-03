let course = {
    name: "App services with CI/CD",
    category: "Azure",
    links: ["https://www.youtube.com/embed/orIUgBG6ocw?si=UYakDV5yb7YC4oEj", "https://www.youtube.com/embed/orIUgBG6ocw?si=UYakDV5yb7YC4oEj"]
};

let currentVideo = 1;

function updateVideoSource() {
    let videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = course.links[currentVideo];
    document.getElementById("videoName").textContent = course.name;
}



updateVideoSource();
