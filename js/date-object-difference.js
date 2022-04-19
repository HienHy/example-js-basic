let today=new Date();
let year = today.getFullYear();
let est=new Date('Apr 16,1996 15:45:55');
let difference=today.getTime()-est.getTime();
difference=(difference/31556900000);

let elMsg=document.getElementById('message');
elMsg.textContent=Math.floor(difference)+'year of online travel advice'+ year ;
