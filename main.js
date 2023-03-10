"use strict";
// exports.__esModule = true;
// Khởi tạo mảng chứa các Object Project
var projectList = [
    {
        id: 1,
        name: "Project 1",
        image: "https://th.bing.com/th/id/OIP.jFHmlsWJWq9BCKSPSgEd7wHaMB?w=178&h=289&c=7&r=0&o=5&pid=1.7",
        link: "link1.html",
        member: 5
    },
    {
        id: 2,
        name: "Project 2",
        image: "https://th.bing.com/th/id/OIP.jFHmlsWJWq9BCKSPSgEd7wHaMB?w=178&h=289&c=7&r=0&o=5&pid=1.7",
        link: "link2.html",
        member: 10
    },
    {
        id: 3,
        name: "Project 3",
        image: "https://th.bing.com/th/id/OIP.jFHmlsWJWq9BCKSPSgEd7wHaMB?w=178&h=289&c=7&r=0&o=5&pid=1.7",
        link: "link3.html",
        member: 3
    },
];
// Khởi tạo hàm listProject
function listProject(projectArray) {
    var projectUL = document.createElement("ul");
    projectArray.forEach(function (project) {
        var projectLI = document.createElement("li");
        projectLI.innerHTML = "\n        <h2>".concat(project.name, "</h2>\n        <img src=\"").concat(project.image, "\" alt=\"").concat(project.name, "\" />\n        <a href=\"").concat(project.link, "\" target=\"_blank\">Detail</a>\n        <p>").concat(project.member, " Members</p>\n      ");
        projectUL.appendChild(projectLI);
    });
    document.body.appendChild(projectUL);
}
// Khởi tạo hàm addProject
function addProject(newProject) {
    projectList.push(newProject);
    return projectList;
}
// Thêm 1 project mới và gọi hàm listProject để hiển thị tất cả các project trong mảng
var newProject = {
    id: 4,
    name: "Project 4",
    image: "https://th.bing.com/th/id/OIP.jFHmlsWJWq9BCKSPSgEd7wHaMB?w=178&h=289&c=7&r=0&o=5&pid=1.7",
    link: "link4.html",
    member: 2
};
addProject(newProject);
listProject(projectList);
