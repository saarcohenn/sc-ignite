export const smallImage = (imagePath, size) => {
  let image = null;
  if (imagePath && imagePath.match(/media\/screenshots/)) {
    image = imagePath.replace(
      "media/screenshots",
      `media/resize/${size}/-/screenshots`
    );
  } else if (imagePath) {
    image = imagePath.replace("/media/games", `/media/resize/${size}/-/games`);
  }
  return image;
};
