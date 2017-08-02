k=[]
firebase.initializeApp({
messagingSenderId:"709939686799",
projectId:"project-9156400537247143604",
apiKey:"AIzaSyDjmCrbhZxIvgnwqID_VJ4qH6rIYroGXrk",
storageBucket:"project-9156400537247143604.appspot.com",
authDomain:"project-9156400537247143604.firebaseapp.com",
databaseURL:"https://project-9156400537247143604.firebaseio.com"})
firebase.database().ref('/').on('value',(e)=>{out=e.val()})
onkeydown=onkeyup=(e)=>{k[e.keyCode]=e.type=="keydown"}
id=Math.floor(Math.random()*Math.pow(10,10))
document.body.style.margin="0 0 0 0"
in{x:0}
onkeydown=()=>{}
setInterval(()=>{
//c.width=innerWidth
//c.height=innerHeight
document.body.innerHTML=""
firebase.database().ref(id).set({x:in.x})
if(k[37]){in.x-=1}
if(k[39]){in.x+=1}
for(i in out){
document.write(out[i].x)
}},1)
