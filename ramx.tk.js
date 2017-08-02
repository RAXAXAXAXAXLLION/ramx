k=[]
firebase.initializeApp({
messagingSenderId:"709939686799",
projectId:"project-9156400537247143604",
apiKey:"AIzaSyDjmCrbhZxIvgnwqID_VJ4qH6rIYroGXrk",
storageBucket:"project-9156400537247143604.appspot.com",
authDomain:"project-9156400537247143604.firebaseapp.com",
databaseURL:"https://project-9156400537247143604.firebaseio.com"})
onkeydown=onkeyup=(e)=>{k[e.keyCode]=e.type=="keydown"}
id=Math.floor(Math.random()*Math.pow(10,10))
document.body.style.margin="0 0 0 0"
firebase.database().ref(id).set({x:0})
firebase.database().ref('/').on('value',(e)=>{out=e.val()})
onkeydown=()=>{}
setInterval(()=>{
//c.width=innerWidth
//c.height=innerHeight
document.body.innerHTML=""
if(k[37]){firebase.database().ref(id).set({x:out[id].x-1})}
if(k[39]){firebase.database().ref(id).set({x:out[id].x+1})}
for(i in out){
document.write(out[i].x)
}},1)
