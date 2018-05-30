var heading=document.querySelector("h1");
heading.innerHTML="hello world"
// alert(heading.innerHTML)
var myPic=document.querySelector("img")
var btn=document.querySelector("button");
if (!localStorage.getItem("name")) {
		setUserName()
	}
	else{
		var storedName=localStorage.getItem("name")
		heading.innerHTML="hello world,"+storedName
	}
myPic.onclick=function(){
	var mySrc=myPic.getAttribute("src")
	if (mySrc=="images/first-pic.png") {

		myPic.setAttribute("src","images/second-pic.png")
	}
	else{
		myPic.setAttribute("src","images/first-pic.png")
		
	}
}

function setUserName(){
	var myName=prompt("请输入你的名字");
	localStorage.setItem("name",myName);
	heading.innerHTML="hello world"+","+myName;
}
btn.onclick=setUserName

	
