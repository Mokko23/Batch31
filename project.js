let projects = []

function addProject(event){

    event.preventDefault()

    let nameProject = document.getElementById('projectname').value
    let startDate = document.getElementById('startdate').value
    let endDate = document.getElementById('enddate').value
    let description = document.getElementById('description').value
    let nodejs = document.getElementById('nodejs').checked
    let reactjs = document.getElementById('reactjs').checked
    let angular = document.getElementById('angular').checked
    let java = document.getElementById('java').checked
    let image = document.getElementById('uploadimg')

    image = URL.createObjectURL(image.files[0])

    if(nodejs){
        nodejs = (document.getElementById('nodejs').value)
    }else{
        nodejs = ''
    }

    if(reactjs){
        reactjs = (document.getElementById('reactjs').value)
    }else{
        reactjs = ''
    }

    if(angular){
        angular = (document.getElementById('angular').value)
    }else{
        angular = ''
    }

    if(java){
        java = (document.getElementById('java').value)
    }else{
        java = ''
    }

    let project = {
        nameProject,
        startDate,
        endDate,
        description,
        nodejs,
        reactjs,
        angular,
        java,
        image
    }

    console.table(project)

    projects.push(project)

    renderProject()
}

function renderProject(){
    let lenghtData = projects.length

    let projectContainer = document.getElementById('contents-project-data')

    projectContainer.innerHTML = firstProjectContent()
    let i = 0
    for (i;i < lenghtData; i++){
       projectContainer.innerHTML += `
       <div class="project-list-item">
            <div class="project-image">
              <img src="${projects[i].image}" alt="" />
            </div>
            <div class="project-content">
                <h1>
                    <a href="project-detail.html"
                    >${projects[i].nameProject}</a
                    >
                </h1>
                <div style="text-align: left;">
                    <span id="tampil" style="font-size: 15px; color: grey;">Durasi : ${durationMonth(projects[i].startDate, projects[i].endDate)} Bulan</span>
                </div>
                <p>
                    ${projects[i].description}
                </p>
                <div class="icon-checkbox">
                    <p>
                        <i class="${projects[i].nodejs}"></i>
                        <i class="${projects[i].reactjs}"></i>
                        <i class="${projects[i].angular}"></i>
                        <i class="${projects[i].java}"></i>
                    </p>
                </div>
                <div class="btn-group">
                    <button class="btn-edit">Edit</button>
                    <button class="btn-delete">Delete</button>
                </div>
            </div>
          </div>`
    }
}

function firstProjectContent(){
    return `
    <div class="project-list-item">
      <div class="project-image">
        <img src="Assets/blog-img.png" alt="" />
      </div>
      <div class="project-content">
          <h1>
              <a href="project-detail.html"
              >Dumbways Mobile App - 2022</a
              >
          </h1>
          <div id="tampil" style="text-align: left;">
              <span style="font-size: 15px; color: grey;">Durasi : 3 Bulan</span>
          </div>
          <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, provident!
          </p>
          <div class="icon-checkbox">
              <p>
                  <i class="fab fa-node"></i>
                  <i class="fab fa-react"></i>
                  <i class="fab fa-angular"></i>
                  <i class="fab fa-java"></i>
              </p>
          </div>
          <div class="btn-group">
              <button class="btn-edit">Edit</button>
              <button class="btn-delete">Delete</button>
          </div>
      </div>
    </div>
</div>`
}

function durationMonth(start,end){
    dateStart = new Date(start)
    dateEnd = new Date(end)
  
    const total_months = (dateEnd.getFullYear() - dateStart.getFullYear())*12 + (dateEnd.getMonth() - dateStart.getMonth())
  
    return total_months
}  
