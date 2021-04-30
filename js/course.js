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
        sublessons = '<ul>';

        e['sublessons'].forEach(e => {
            sublessons += '<li>' + e['name'] + '</li>';
        });

        sublessons += '</ul>';

        lessonsList += `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#lesson_${i}" aria-expanded="true">
                    ${e['name']}
                </button>
            </h2>
            <div id="lesson_${i}" class="accordion-collapse collapse">
                <div class="accordion-body">
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
                <p class="card-text p-2">${info['contents']}</p>
            </div>
        </div>
    `;
}

function createCourseAnnouncements(announcements){

    let courseAnnouncement = document.getElementById("CourseAnnouncement");

    let announcement = '<ol class="list-group">';

    announcements.forEach((e, i) => {
        announcement += `
        <li class="list-group-item" id="announce${i}">
            <div class="nav-item">
                <div class="card m-3">
                    <div class="card-body">
                        <h4 class="card-title p-3 fw-bold">${e['title']}</h4>
                        <hr class="solid">
                        <p class="card-text p-1">${e['contents']}</p>
                    </div>
                </div>
            </div>                                     
        </li>
        `;
    });

    announcement += "</ol>";

    courseAnnouncement.innerHTML = announcement;

}