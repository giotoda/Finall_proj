var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 3000);

const filterContainer = document.querySelector(".gallery-filter"),
    galleryItems = document.querySelectorAll(".gallery-item");
   
    filterContainer.addEventListener("click", (event) =>{
      if(event.target.classList.contains("filter-item")){
         filterContainer.querySelector(".active").classList.remove("active");
         event.target.classList.add("active");
         const filterValue = event.target.getAttribute("data-filter");
         galleryItems.forEach((item) =>{
          if(item.classList.contains(filterValue) || filterValue === 'all'){
            item.classList.remove("hide");
             item.classList.add("show");
          }
          else{
            item.classList.remove("show");
            item.classList.add("hide");
          }
         });
      }
    });

    const skillsSection = document.getElementById('skills-section');

    const progressBars = document.querySelectorAll('.progress-bar');
    
    function showProgress(){
      progressBars.forEach(progressBars=> {
        const value = progressBars.dataset.progress;
    
        progressBars.style.opacity = 1;
        progressBars.style.width = `${value}%`;
      });
    }
    
    function hideProgress(){
      progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
      });
    }
    
    window.addEventListener('scroll',() => {
      const sectionPos = skillsSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight;
    
      if(sectionPos < screenPos){
        showProgress();
    
      }else{
        hideProgress();
      }
    });