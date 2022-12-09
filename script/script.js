function openForm() {
    document.getElementById("form-popup").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("form-popup").style.display = "none";
  }
  // function closeForm() {
  //    document.getElementById("popup").style.display = "none";
  // }
  // document.getElementById(
  //   'popup').addEventListener('click', (e) => {
  //               document.getElementById(
  //   'popup').style.visibility = "hidden";
  //           });
  // document.getElementById("popup").addEventListener("click", function(){
  //   document.getElementsByClassName("popup")[0].classList.remove("active");
  // }
  // )
  // window.onclick = function (event) {
  //   let modal = document.getElementById('popup');
  //   if (event.target == modal) {
  //     closeForm();
  //   }
  // }
    window.addEventListener('scroll', function() {
      let scrollPix = scrollY;
      if(scrollPix >= 200){
        document.getElementById("popup").style.display = "block";
      }else{
        document.getElementById("popup").style.display = "none";
      }
    });
   
  

