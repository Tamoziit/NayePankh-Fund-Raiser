const img = ["p1.png", "p2.png", "p3.png", "p4.png", "p5.png"];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * img.length);
  return img[randomIndex];
}

export default getRandomImage;