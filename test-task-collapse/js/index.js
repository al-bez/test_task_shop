 const data = [
    {
      id: 1,
      title: "delectus aut autem",
      description: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      description: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      description: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
    },
    {
      id: 4,
      title: "et porro tempora",
      description: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
    },
    {
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      description: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
    }]

    
    
    const appRoot = document.getElementById('app-root');
    
    function getCollapse() {
      appRoot.innerHTML = ""
      for (let i = 0; i < data.length; i++) {
        const {id, title, description} = data[i]
		let addCollapse = document.createElement('div');
    addCollapse.classList.add('card');
		addCollapse.innerHTML = `
		<div class="card">
            <div class="card-header" id="heading-${id}">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapse-${id}" aria-expanded="true" aria-controls="collapse-${id}">
                         ${title}
                    </button>
                </h5>
            </div>
            <div id="collapse-${id}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                  ${description}
                </div>
            </div>
      </div>`;
		appRoot.appendChild(addCollapse);

    const descriptionBox = document.getElementById(`collapse-${id}`)
    const modal = document.createElement('div')
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="modal_content">
      <textarea id="textArea" rows="10" cols="45" name="text" onkeypress="onTestChange(${i})">${description}</textarea>
    </div>`
    
    descriptionBox.addEventListener("click", () =>  {
      appRoot.appendChild(modal)
      modal.style.display = "block"
    })

    

    window.addEventListener('click', (event) => {
      if (event.target == modal) {
        data[i].description = document.getElementById("textArea").value
        modal.style.display = "none";
        getCollapse()
      }
  })
 }
}

function onTestChange(index) {
  const key = window.event.keyCode;
  if (key === 13 || key === 9) {
    data[index].description = document.getElementById("textArea").value
    getCollapse()
  } if( key === 27) {
    getCollapse()
  }
 
}

getCollapse()

    