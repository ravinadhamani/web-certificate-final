
        showData();
function saveData()
{
let name,email,psw,bowler,matchesWon;
name=document.getElementById("name").value;
email=document.getElementById("email").value;
psw=document.getElementById("psw").value;
bowler=document.getElementById("bowler").value;
matches=document.getElementById("matches").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records)
{
  user_records.push({
  "name":name,
  "email":email,
  "psw":psw,    
  "bowler":bowler,
  "matches":matches,
})
localStorage.setItem("users",JSON.stringify(user_records));
}
showData();
}

function showData()
{
  document.getElementById("showUsers").innerHTML="";
  let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_records)
  {
    for(let i=0;i<user_records.length;i++)
    {
      let addDiv=document.createElement('div');
  addDiv.className="row";
  addDiv.innerHTML='  <div class="col-sm-2" style="padding: 10px;">'+user_records[i].name+'</div><div class="col-sm-2" style="padding: 10px;">'+user_records[i].email+'</div><div class="col-sm-2" style="padding: 10px;">'+user_records[i].psw+'</div>'+'  <div class="col-sm-2" style="padding: 10px;">'+user_records[i].bowler+'</div>'+'</div><div class="col-sm-2" style="padding: 10px;">'+user_records[i].matches+'</div>';
  
    document.getElementById("showUsers").appendChild(addDiv);

    }
  }
  }
 
