function finish_load(){

    let load = document.getElementById("load");
    let main = document.getElementById("main");

    load.classList.add("invisible");
    load.classList.remove("visible");

    main.classList.add("visible");
    main.classList.remove("invisible");
    
}


function createCourseList(lessons){

    let courseList = document.getElementById("CourseList");
    let courseListTab = document.getElementById("CourseList-Tab");

    var lessonsList = '';

    lessons.forEach((e, i) => {
        sublessons = '<ul class="list-group list-group-flush">';

        e['sublessons'].forEach(e => {
            sublessons += '<li class=list-group-item>' + e['name'] + '</li>';
        });

        sublessons += '</ul>';

        lessonsList += `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#lesson_${i}" aria-expanded="true" onclick="courseSelect(${i});">
                    ${e['name']}
                </button>
            </h2>
            <div id="lesson_${i}" class="accordion-collapse collapse">
                <div class="accordion-body p-0 ps-4">
                    ${sublessons}
                </div>
            </div>
        </div>
        `;
    });

    courseList.innerHTML = `
    <div class="accordion">
        ${lessonsList}
    </div>
    `;
    
    courseListTab.innerHTML = `
    <div class="accordion">
        ${lessonsList}
    </div>
    `
}

function createCourseInfo (info){
    let courseinfo = document.getElementById("CourseInfo");
    courseinfo.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h3 class="card-title p-3 fw-bold">${info['title']}</h3>
                <hr class="solid">
                <div class="card-text ps-3">${info['contents']}</div>
            </div>
        </div>
    `;
}

function createCourseAnnouncements(announcements){

    let courseAnnouncement = document.getElementById("CourseAnnouncement");

    let announcement = '<div class="container">';

    announcements.forEach((e, i) => {
        announcement += `
        <div class="row flex-column border border-lighter">
            <div class="m-2">
                <div class="col pt-2">
                    <h2 class="fw-bold">${e['title']}</h2>
                </div>
                <hr class="solid">
                <div class="col ps-3">
                    <p>${e['contents']}</p>
                </div>
            </div>
        </div>
        `;
    });

    announcement += "</div>";

    courseAnnouncement.innerHTML = announcement;

}

function createCourseQandA(){

    let courseQandA = document.getElementById("CourseQandA");

    courseQandA.innerHTML = `
    
    `;
}