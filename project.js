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

    projectContainer.innerHTML = firstProjectgContent()
    let i = 0
    for (i;i < lenghtData; i++){
       projectContainer.innerHTML += `
       <div class="project-list-item">
            <div class="project-image">
              <img src="${projects[i].image}" alt="" />
            </div>
            <h1>
                <a href="project-detail.html"
                >${projects[i].nameProject}</a
                >
            </h1>
            <div style="text-align: right;">
                <span style="font-size: 15px; color: grey;">Durasi : 3 bulan</span>
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
          </div>`
    }
}

function firstProjectgContent(){
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
          <div style="text-align: right;">
              <span style="font-size: 15px; color: grey;">Durasi : 3 bulan</span>
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

function durationProject(){
    const start_date = new Date(projects.startDate)
    const end_date = new Date(projects.endDate)

    const total_months = (end_date.getFullYear() - start_date.getFullYear())*12 + (end_date.getMonth() - start_date.getMonth())
}

let dateStart = new Date('2014-04-03');
let dateEnd = new Date('2014-08-03');
document.getElementById('startdate').innerHTML = dateStart.toDateString()
document.getElementById('enddate').innerHTML = dateEnd.toDateString()

const total_months = (dateEnd.getFullYear() - dateStart.getFullYear())*12 + (dateEnd.getMonth() - dateStart.getMonth())

document.getElementById('tampil').innerHTML = `Durasi : ${total_months} Bulan`;