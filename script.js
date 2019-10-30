var database=[{username:"dinesh",password:"123456"},{username:"dk",password:"pass"}];
var info=[{username:"dinesh",status:"javascript is Cool"},{username:"dk",status:"i want to master it"}];
var promptuser=prompt("enter username");
var promptpass=prompt("enter password");


function isuservalid(puser,ppass){
for(i=0;i<database.length;i++){

		if(database[i].username===puser && database[i].password===ppass){

			return true;
		}

}
}

function login(user,pass){

if(isuservalid(user,pass)){

console.log(info);
	}else{

		alert("invalid password");
	}
}

/*	
if(user===database[0].username&&pass===database[0].password){
console.log(info);
}else{
alert("wrong password");
}
*/
 


login(promptuser,promptpass);