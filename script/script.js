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
   
  

