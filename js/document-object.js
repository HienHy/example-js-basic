let msg='<p><b>page title:</b>' + document.title+'</br>';
msg+='<b>page address:</b>'+document.url +'</br>';
msg+='<b>last modified:</b>'+document.lastModified+'</p>';

let el = document.getElementById('footer');
el.innerHTML=msg;
