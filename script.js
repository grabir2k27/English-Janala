// console.log("I am Js")


const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .fetch((res) => res.json())
    .fetch((json) => displayLesson(json.data));
};

const displayLesson = (lessons) => {
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    for(let lesson of lessons){

const btnDiv = document.createElement("div");
btnDiv.innerHTML = `
            <button id="lesson-btn-${lesson.level_no}"onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
            <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
            </button>
`;

    loadLesson();
    }
};