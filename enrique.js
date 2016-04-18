 var MirrorIsActive = false;
 var MessagesIsActive = false;
 var AcceptIsActive = false;
 var TrafficIsActive = false;
 var LightsIsActive = false;
 var TransportIsActive = false;
 var NewsIsActive = false;

function BringUpPrompt() {
 var text = prompt("Please enter your name", "hello!");
 console.log(text);
}

function AcceptSelected(){
 AcceptIsActive = true; 
 MessageHelloOutside.visible = true;
 accept_button.visible = false;
 MessageBox.visible = false;
 //CloseMessageSettings();
 //HomeSelected();
   BringUpPrompt();
}
//------------------------------------------------------------- 
function MessageBoxSelected(){
  if (MessagesIsActive == true)
    HideMessageBox();
  else if(MessagesIsActive == false)
    ShowMessageBox();
}

function ShowMessageBox(){
  MessagesIsActive = true; 
  MessageBox.visible = true;
  accept_button.visible = true;
  MessageHelloOutside.visible = false;
  //HomeSelected();
}

function HideMessageBox(){
  MessagesIsActive = false; 
  MessageBox.visible = false;
  accept_button.visible = false;
}
// Line 2377

//------------------------------------------------------------- 
/*
function AcceptSelected(){
  AcceptIsActive = true; 
  MessageHelloOutside.visible = true;
  accept_button.visible = false;
  MessageBox.visible = false;
  //HomeSelected();
}

function ShowMessageHelloOutside(){
  AcceptIsActive = true; 
  MessageHelloOutside.visible = true;
  //accept_button.visible = true;
  HomeSelected();
}

function HideMessageHelloOutside(){
  AcceptIsActive = false; 
  MessageHelloOutside.visible = false;
  //accept_button.visible = false;
}

*/

//-------------------------------------------------------------
function MirrorSelected(){
  if (MirrorIsActive == true)
    HideMirror();
  else if(MirrorIsActive == false)
    ShowMirror();
}

function ShowMirror(){
  MirrorIsActive = true;
  Mirror.visible = true;
  HomeSelected();
}

function HideMirror(){
  MirrorIsActive = false;
  Mirror.visible = false;
}

//-------------------------------------------------------------
function TrafficSelected(){
  if (TrafficIsActive == true)
    HideTraffic();
  else if(TrafficIsActive == false)
    ShowTraffic();
}

function ShowTraffic(){
  TrafficIsActive = true;
  Traffic.visible = true;
  HomeSelected();
}

function HideTraffic(){
  TrafficIsActive = false;
  Traffic.visible = false;
}
//-------------------------------------------------------------
function LightsSelected(){
  if (LightsIsActive == true)
    HideLights();
  else if(MirrorIsActive == false)
    ShowLights();
}

function ShowLights(){
  LightsIsActive = true;
  Lights.visible = true;
  Lights.opacity = 1.0;
  HomeSelected();
}

function HideLights(){
  LightsIsActive = false;
  Lights.visible = false;
}

//-------------------------------------------------------------
function TransportSelected(){
  if (TransportIsActive == true)
    HideTransport();
  else if(TransportIsActive == false)
    ShowTransport();
}

function ShowTransport(){
  TransportIsActive = true;
  Transport.visible = true;
  HomeSelected();
}

function HideTransport(){
  TransportIsActive = false;
  Transport.visible = false;
}

//-------------------------------------------------------------
function NewsSelected(){
  if (NewsIsActive == true)
    HideNews();
  else if(NewsIsActive == false)
    ShowNews();
}

function ShowNews(){
  NewsIsActive = true;
  News.visible = true;
  HomeSelected();
}

function HideNews(){
  NewsIsActive = false;
  News.visible = false;
}


//-------------------------------------------------------------
function RestartSystem(){
  for (var i = 0; i < canvas.getObjects().length; ++i) {
    if (canvas.item(i).id == 'restart')
      location.reload();
    }
}
 //-------------------------------------------------------------
function AlarmOn(){
  for (var i = 0; i < canvas.getObjects().length; ++i) {
    if (canvas.item(i).id == 'alarm'){
      canvas.item(i).visible = false;
    }
    else if (canvas.item(i).id == 'alarmOn')
      canvas.item(i).visible = true;
  }
}
 //-------------------------------------------------------------
function AlarmOff(){
  for (var i = 0; i < canvas.getObjects().length; ++i) {
    if (canvas.item(i).id == 'alarmOn'){
      canvas.item(i).visible = false;
    }
    else if (canvas.item(i).id == 'alarm')
      canvas.item(i).visible = true;
  }
}
