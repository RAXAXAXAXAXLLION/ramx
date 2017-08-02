id=Math.floor(Math.random()*Math.pow(10,10))
firebase.initializeApp({
apiKey:"AIzaSyDjmCrbhZxIvgnwqID_VJ4qH6rIYroGXrk",
authDomain:"project-9156400537247143604.firebaseapp.com",
databaseURL:"https://project-9156400537247143604.firebaseio.com",
projectId:"project-9156400537247143604",
storageBucket:"project-9156400537247143604.appspot.com",
messagingSenderId:"709939686799"})
onkeydown=onkeyup=(e)=>{k[e.keyCode]=e.type=="keydown"}
document.body.style.margin="0 0 0 0"
firebase.database().ref(id).set({x:0})
firebase.database().ref('/').on('value',(e)=>{output=e.val()})
onkeydown=()=>{}
setInterval(()=>{
//c.width=innerWidth
//c.height=innerHeight
document.body.innerHTML=""
for(i in output){
document.write(output[i].x)
}},1)
