export {}

// Định nghĩa kiểu dữ liệu cho Object
interface Project {
    id: number;
    name: string;
    image: string;
    link: string;
    member: number;
  }
  
  // Khởi tạo mảng chứa các Object Project
  const projectList: Project[] = [
    {
      id: 1,
      name: "Project 1",
      image: "https://th.bing.com/th/id/OIP.jFHmlsWJWq9BCKSPSgEd7wHaMB?w=178&h=289&c=7&r=0&o=5&pid=1.7",
      link: "link1.html",
      member: 5,
    },
    {
      id: 2,
      name: "Project 2",
      image: "https://th.bing.com/th/id/OIP.jFHmlsWJWq9BCKSPSgEd7wHaMB?w=178&h=289&c=7&r=0&o=5&pid=1.7",
      link: "link2.html",
      member: 10,
    },
    {
      id: 3,
      name: "Project 3",
      image: "https://th.bing.com/th/id/OIP.jFHmlsWJWq9BCKSPSgEd7wHaMB?w=178&h=289&c=7&r=0&o=5&pid=1.7",
      link: "link3.html",
      member: 3,
    },
  ];
  
  // Khởi tạo hàm listProject
  function listProject(projectArray: Project[]): void {
    const projectUL = document.createElement("ul");
  
    projectArray.forEach((project) => {
      const projectLI = document.createElement("li");
      projectLI.innerHTML = `
        <h2>${project.name}</h2>
        <img src="${project.image}" alt="${project.name}" />
        <a href="${project.link}" target="_blank">Detail</a>
        <p>${project.member} Members</p>
      `;
      projectUL.appendChild(projectLI);
    });
  
    document.body.appendChild(projectUL);
  }
  
  // Khởi tạo hàm addProject
  function addProject(newProject: Project): Project[] {
    projectList.push(newProject);
    return projectList;
  }
  
  // Thêm 1 project mới và gọi hàm listProject để hiển thị tất cả các project trong mảng
  const newProject: Project = {
    id: 4,
    name: "Project 4",
    image: "https://th.bing.com/th/id/OIP.jFHmlsWJWq9BCKSPSgEd7wHaMB?w=178&h=289&c=7&r=0&o=5&pid=1.7",
    link: "link4.html",
    member: 2,
  };
  
  addProject(newProject);
  listProject(projectList);