var config = {
    apiKey: "AIzaSyCo4T2kz4gNK9_yvP0YqgRfcEQDkfl57ZA",
    authDomain: "civic-wharf-180001.firebaseapp.com",
    databaseURL: "https://civic-wharf-180001.firebaseio.com",
    projectId: "civic-wharf-180001",
    storageBucket: "civic-wharf-180001.appspot.com",
    messagingSenderId: "852586187641"
  };
  firebase.initializeApp(config);
var firestore = firebase.firestore();
const docRef = firestore.doc("Meetings/Meeting2");
const docRef2 = firestore.doc("Meetings/Meeting2");

//const docRef2 = firestore.doc("Meetings");
const outputHeader = document.querySelector("#Meeting");
const outputHeader2 = document.querySelector("#MeetingTime");
const inputTextField= document.querySelector("#meetingName");
const inputTextField2= document.querySelector("#meetingTime");
const saveButton= document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");
if(saveButton){
saveButton.addEventListener("click",function(){
    const textToSave = inputTextField.value;
    console.log("Saving meeting name"+ textToSave +"to firestore");
    docRef.set({
        MeetingName: textToSave
        
    }).then(function(){
        console.log("status saved!");
    }).catch(function(error){
        console.log("There was an error:",error);
    });
        
}); }
if(loadButton){
loadButton.addEventListener("click",function(){
    docRef.get().then(function(doc){
        if(doc&&doc.exists){
            const myData=doc.data();
            outputHeader.innerText = "Meeting Name is : "+myData.MeetingName+"";
            
        }
    }).catch(function(error){
        console.log("Error: ",error);
    });
    
});
    if(loadButton){
loadButton.addEventListener("click",function(){
    docRef2.get().then(function(doc){
        if(doc&&doc.exists){
            const myData=doc.data();
            outputHeader.innerText = "Meeting Name is : "+myData.MeetingName+"";
            
        }
    }).catch(function(error){
        console.log("Error: ",error);
    });
    
});
}
}


