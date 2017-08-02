k=[]
firebase.initializeApp({
messagingSenderId:"709939686799",
projectId:"project-9156400537247143604",
apiKey:"AIzaSyDjmCrbhZxIvgnwqID_VJ4qH6rIYroGXrk",
storageBucket:"project-9156400537247143604.appspot.com",
authDomain:"project-9156400537247143604.firebaseapp.com",
databaseURL:"https://project-9156400537247143604.firebaseio.com"})
firebase.database().ref('/').on('value',(e)=>{
for(i in e.val()){
document.write(e.val()[i].x+"<br>")
}})
onkeydown=onkeyup=(e)=>{k[e.keyCode]=e.type=="keydown"}
id=Math.floor(Math.random()*Math.pow(10,10))
document.body.style.margin="0 0 0 0"
input={x:0}
setInterval(()=>{
//c.width=innerWidth
//c.height=innerHeight
document.body.innerHTML=""
//firebase.database().ref(id).set({x:input.x})
if(k[37]){input.x-=1;console.log("Left pressed.")}
if(k[39]){input.x+=1}
},1)
