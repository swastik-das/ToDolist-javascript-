
   const input= document.querySelector('input');
   const btn = document.querySelector(".input_box > button");
   btn.addEventListener('click',additem);
  const  hide = document.getElementById("show_gif");
          // add item 
      function additem(){
      // hide.style.display="none"; 
       const addlist = document.querySelector('.list_of_input');
       const newli= document.createElement('li');
       const  delbtn = document.createElement("button");
       const  donebtn = document.createElement("button");
       donebtn.style.color="green";
       delbtn.innerHTML='<i class="fas fa-trash "></i> ';
       donebtn.innerHTML ='<i class="fas fa-check-circle"></i>';
             if( input.value !==""){
             newli.innerHTML = input.value;
             input.value="";
             addlist.appendChild(newli);
             newli.appendChild(delbtn);
             newli.appendChild(donebtn);
            };
            //delete item 
      delbtn.addEventListener('click',function(){
      alert("Do you want to delete field")
      const parent =this.parentNode;
      parent.remove();
 });
donebtn.addEventListener('click',function(){
 newli.style.textDecoration = "line-through";
 newli.style.color= "red";
});
 $(document).ready(function(){
$(delbtn).css({"position":"relative","float":"right","border":"none","color":"red"})
$(  donebtn).css({"position":"relative","float":"right","border":"none"})
 });

    };
