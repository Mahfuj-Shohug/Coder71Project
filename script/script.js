let do_once = "true";
function openForm() {
    document.getElementById("form-popup").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("form-popup").style.display = "none";
  }
    window.addEventListener('scroll', function() {
      let scrollPix = scrollY;
      if(scrollPix >= 200 && do_once == "true" ){
        swal({
          title: "Congratulation!!!!!",
          text: "You are scrolling 200px on this site...",
          icon: "success",
          timer: 2000,
        })
        do_once = "false";
      }
    });
   
  var nav = document.querySelector('nav');
  window.addEventListener('scroll', function(){
    if(this.window.pageYOffset > 100){
      nav.classList.add('bg-dark', 'shadow');
    }else{
      nav.classList.remove('bg-dark', 'shadow');
    }
  })
  
