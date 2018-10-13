var myImage=document.querySelector('img');
myImage.onclick=function(){
	var mySrc=myImage.getAttribute('src');
	if(mySrc==="images/bear.jpg"){
		myImage.setAttribute('src','images/bear2.jpg');
	}else{
		myImage.setAttribute('src','images/bear.jpg');
	}
};//图片点击切换
var myButton=document.querySelector('button'),
myHeading=document.querySelector('h1');
function setUserName(){
	var myName=prompt('请输入你的名字');
	localStorage.setItem('name',myName);
	myHeading.textContent('Bear is cool,'+myName);
}//设置函数修改信息函数
if(!localStorage.getItem("name")){
	setUserName();
}else{
	var storedName=localStorage.getItem('name');
	myHeading.textContent='Bear is cool,'+storedName;
}//初始化代码用户信息
myButton.onclick=function(){
	setUserName();
};//提供用户修改信息地方