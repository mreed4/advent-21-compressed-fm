import episodesData from "./data.js";

const episodes = document.querySelector(".episodes");

episodesData.forEach((episode) => {
  let { id, name } = episode;
  id = id + 1;
  const episodeElement = document.createElement("li");
  episodeElement.innerHTML = `
    <label for="episode-${id}">
      <input type="checkbox" id="episode-${id}" name="episodes">
      <span>${id} || ${name}</span>
    </label>
  `;
  episodes.append(episodeElement);
});

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked = (e) => {
  // https://www.codehim.com/text-input/check-multiple-checkboxes-in-javascript/
  let inBetween = false;
  if (e.shiftKey && e.target.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === e.target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = e.target;
  console.log(lastChecked);
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", lastChecked);
});
