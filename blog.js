let blogs = []

function addBlog(event){

    event.preventDefault()

    // alert("Hai Brother")

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image')

    image = URL.createObjectURL(image.files[0])

    let blog = {
        author : 'Anfi Hermanto',
        title : title,
        content,
        image,
        postedAt: new Date()
    }

    blogs.push(blog)

    renderBlog()
}

function renderBlog(){
    let lenghtData = blogs.length

    let blogContainer = document.getElementById('contents')

    blogContainer.innerHTML = firstBlogContent()
    let i = 0
    for (i;i < lenghtData; i++){
       blogContainer.innerHTML += `
       <div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].image}" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
              >
            </h1>
            <div class="detail-blog-content">
            ${getFullTime(blogs[i].postedAt)} | ${blogs[i].author}
            </div>
            <p>
            ${blogs[i].content}
            </p>
            <div style="text-align: right;">
              <span style="font-size: 15px; color: grey;">${(getDistanceTime(blogs[i].postedAt))}</span>
            </div>
          </div>
        </div>`
    }
}

function getFullTime(time){

  let months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  let myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu'];

  let date = time.getDate()
  let month = time.getMonth()
  let year = time.getFullYear()

  let hours = time.getHours()
  let minutes = time.getMinutes()

  if(minutes < 10){
    minutes = '0' + minutes
  }
  
  return `${date} ${months[month]} ${year} ${hours}:${minutes} WIB`
}

function getDistanceTime(time){
  // waktu saat ini dikurang waktu postingan
  const distance = new Date() - new Date(time)

  // Convert to day
  const milisecond = 1000
  const secondInMinutes = 60
  const minutesInHour = 60
  const secondInHour = secondInMinutes * minutesInHour
  const hoursInDay = 23

  let dayDistance = distance / (milisecond * secondInHour * hoursInDay)
  dayDistance = 0.1
  // console.log(Math.floor(4.3)) pembulatan kebawah
  // console.log(Math.ceil(8.1)) pembulatan keatas
  
  if(dayDistance >= 1){
    return Math.floor(dayDistance) + ' day ago'
  } else {
    // Convert to hour
    let hourDistance = Math.floor(distance / (milisecond * secondInHour ))

    if(hourDistance > 0){
      return hourDistance + ' hour ago'
    } else {
      // Convert to minute
      const minuteDistance = Math.floor(distance / (milisecond * secondInMinutes ))
      return minuteDistance + ' minute ago'
    }
  }


  console.log(dayDistance)
}

function firstBlogContent(){
    return `
    <div class="blog-list-item">
          <div class="blog-image">
            <img src="assets/blog-img.png" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
              >
            </h1>
            <div class="detail-blog-content">
              12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
            </div>
            <p>
              Ketimpangan sumber daya manusia (SDM) di sektor digital masih
              menjadi isu yang belum terpecahkan. Berdasarkan penelitian
              ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
              meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Quam, molestiae
              numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
              eligendi debitis?
            </p>
            <div style="text-align: right;">
              <span style="font-size: 15px; color: grey;">1 hour ago</span>
            </div>
          </div>
        </div>`
}

setInterval(function(){
  renderBlog()
}, 2000)