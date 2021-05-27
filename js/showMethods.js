function showCourseList(courseList) {
    let target = document.getElementById("course-list-div");

    // Create Popular List
    let popularCourses = '';
    for (const[_, course] of Object.entries(courseList['course'])){

        // Create payments
        let payments = '';
        for (const[i, type] of Object.entries(course["price"]["type"])){

            // check cost
            let cost = 'NT$' + course["price"]["cost"][i];
            if (course["price"]["cost"][i] == 0) cost = "免費";

            // check payment types
            if (type == "default"){
                payments = `<span class="badge bg-primary rounded-pill">${cost}</span>`;
            }else{
                payments += `<span class="badge bg-primary rounded-pill">${type} ${cost}</span>`;
            }
        }

        // Check course status
        let courseStatus = '';
        switch (course["status"]) {
            
            // course is open
            case "OPEN":
                courseStatus = `<span class="badge bg-success rounded-pill">已開課</span>`;
                break;
        
            // course is not open
            case "NOT OPEN":
                courseStatus = `<span class="badge bg-danger rounded-pill">尚未開課</span>`;
                break;

            // something is wrong
            default:
                courseStatus = 'Unable to get course status';
                break;
        }

        // Create course info
        let courseInfo = `
        <div class="card h-100">
            <div class="ratio ratio-4x3">
                <img src="${course["img-url"]}" class="card-img-top" alt="${course["name"]}" height="250px">
            </div>
            <div class="card-body d-inline-flex flex-column">
                <h5 class="card-title">${course["name"]}</h5>
                <div class='innertext'>
                    <h4>
                        ${courseStatus}
                        ${payments}
                    </h4>
                </div>
                <div class="mt-auto">
                    <span><i class="fa fa-map-marker"></i> 線上課程</span><br>
                    <span><i class="fa fa-clock-o"></i> Sep 01, 2020 06:30PM</span>
                </div>
            </div>
        </div>
        `

        // if course is open, add a course url to it
        if (course["status"] == "OPEN"){

            popularCourses += `
            <div class="col">
                <a href="/course.html?course=${course["course-url"]}">
                    ${courseInfo}
                </a>
            </div>
            `;

        }else{

            popularCourses += `
            <div class="col">
                ${courseInfo}
            </div>
            `;

        }
    }

    // Write course list to web
    target.innerHTML = `
    <div class="row row-cols-1 row-cols-md-3 g-4 d-flex">
        ${popularCourses}
    </div>
    `;
}

function popMsg(msg){

    const toastContainer = document.getElementById('toast');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.setAttribute('data-bs-autohide', 'false');

    toast.innerHTML = `
    <div class="toast-header">
        <img src="/src/img/icon.svg" class="rounded me-2" width="25px" height="25px" alt="logo">
        <strong class="me-auto">提示</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">
        ${msg}
    </div>
    `;

    toastContainer.appendChild(toast);
    
    new bootstrap.Toast(toast).show()
}