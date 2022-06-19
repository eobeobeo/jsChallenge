const background = document.getElementById("background");

const images = ["0.jpg", "1.jpg", "2.jpg"];

const photoBy = [
    '<div class="photo-by">Photo by <a href="https://unsplash.com/@vay2250?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Varun Yadav</a> on <a href="https://unsplash.com/s/photos/valley?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>',

    '<div class="photo-by">Photo by <a href="https://unsplash.com/@atlasior?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Krystian Tambur</a> on <a href="https://unsplash.com/s/photos/sea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>',

    '<div class="photo-by">Photo by <a href="https://unsplash.com/@samferrara?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Samuel Ferrara</a> on <a href="https://unsplash.com/s/photos/mountains?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>',
];

const randomNum = Math.floor(Math.random() * images.length);

const chosenImage = images[randomNum];
const chosenPhotoBy = photoBy[randomNum];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

background.innerHTML = photoBy[randomNum];
background.appendChild(bgImage);
