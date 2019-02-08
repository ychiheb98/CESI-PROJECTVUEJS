function toggle_visibility(editable, noneditable) {  
  var e = document.getElementById(editable);
  var e2 = document.getElementById(noneditable);
  if(e.style.display == 'none') {                
     e.style.display = 'block';            
     e2.style.display = 'none';
  }
  else {
     e.style.display = 'none';            
     e2.style.display = 'block';
  }              
}