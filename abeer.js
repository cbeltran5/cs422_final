function ShowDateTime()
{
  var currentdate = new Date();
  var year = currentdate.getFullYear();
  var month = currentdate.getMonth()+1;
  var day = currentdate.getDate();
  var hours = currentdate.getHours();
  var minutes = currentdate.getMinutes();
  var timetype;


  if( hours >= 12)
    timetype = "PM";
  else
    timetype = "AM";

  if (Time_format == 1) // 12-hours format
  {
    hours = hours % 12;
    if (hours == 0)
      hours = 12;

    if (minutes < 10)
      minutes = "0" + minutes;

    var time =  hours + ":" + minutes + " "+ timetype;
  }

  else if(Time_format == 2) // 24-hours format
  {

    if (hours < 10)
      hours = "0" + hours;
    if (minutes < 10)
      minutes = "0" + minutes;

    var time =  '    ' + hours + ":" + minutes;
  }

  if (Date_format == 1)
  {
    if      (month == 1) month = JANUARY[syslang];
    else if (month == 2) month = FEBRUARY[syslang];
    else if (month == 3) month = MARCH[syslang];
    else if (month == 4) month = APRIL[syslang];
    else if (month == 5) month = MAY[syslang];
    else if (month == 6) month = JUNE[syslang];
    else if (month == 7) month = JULY[syslang];
    else if (month == 8) month = AUGUST[syslang];
    else if (month == 9) month = SEPTEMBER[syslang];
    else if (month == 10) month = OCTOBER[syslang];
    else if (month == 11) month = NOVEMBER[syslang];
    else if (month == 12) month = DECEMBER[syslang];
    var date = day + " " + month + "-" + year;
  }

  else if (Date_format == 2)
  var date = ' ' + day + " - " + month + " - " + year;

  Datetext.initialize(date);
  canvas.remove(Datetext);
  canvas.add(Datetext);

  Timetext.initialize(time);
  canvas.remove(Timetext);
  canvas.add(Timetext);
  timeout = setTimeout(ShowDateTime,1000);
}  
    
//-------------------------------------------------------------
function HomeSelected()
{
  
  if (HomeIsActive == true)
    HideHome();
  else if(HomeIsActive == false)
    ShowHome();
}

//-------------------------------------------------------------
function ShowHome()
{
  HideUser1FromInside();
  HideUser2FromInside();
  HideUsersList();
  CloseCamera();
  HomeIsActive = true; 
  PanelRect.visible = true;

  for (var i = 0; i < canvas.getObjects().length; ++i) 
  { 
    if (canvas.item(i).id == 'messages' || canvas.item(i).id == 'camera'   ||
        canvas.item(i).id == 'traffic'  || canvas.item(i).id == 'cta'      ||
        canvas.item(i).id == 'news'     || canvas.item(i).id == 'mirror'   ||
        canvas.item(i).id == 'lights'   || canvas.item(i).id == 'alarm'    ||
        canvas.item(i).id == '911'      || canvas.item(i).id == 'settings' ||
        canvas.item(i).id == 'restart') 
    {
        canvas.item(i).visible = true;
    }
    
  }

  Messagestext.visible = true;
  Cameratext.visible = true;
  Traffictext.visible = true;
  Transporttext.visible = true;
  Newstext.visible = true;
  Mirrortext.visible = true;
  Lightstext.visible = true;
  Alarmtext.visible = true;
  Emergtext.visible = true;
  Settingstext.visible = true;
}
    
    
//-------------------------------------------------------------
function HideHome()
{
  //console.log(HomeIsActive);
  HomeIsActive = false; 
  //Here close all apps
  CloseCamera();
  
  PanelRect.visible = false;

  for (var i = 0; i < canvas.getObjects().length; ++i) 
  { 
    if (canvas.item(i).id == 'messages' || canvas.item(i).id == 'camera'   ||
        canvas.item(i).id == 'traffic'  || canvas.item(i).id == 'cta'      ||
        canvas.item(i).id == 'news'     || canvas.item(i).id == 'mirror'   ||
        canvas.item(i).id == 'lights'   || canvas.item(i).id == 'alarm'    ||
        canvas.item(i).id == '911'      || canvas.item(i).id == 'settings' ||
        canvas.item(i).id == 'restart' || canvas.item(i).id == 'alarmOn') 
    {
      canvas.item(i).visible = false;
    }
    
  }

  Messagestext.visible = false;
  Cameratext.visible = false;
  Traffictext.visible = false;
  Transporttext.visible = false;
  Newstext.visible = false;
  Mirrortext.visible = false;
  Lightstext.visible = false;
  Alarmtext.visible = false;
  Emergtext.visible = false;
  Settingstext.visible = false;
}
  
//-------------------------------------------------------------
 function UnlockDoorIn(){
   for (var i = 0; i < canvas.getObjects().length; ++i) 
   { 
    if (canvas.item(i).id == 'LockKnobIn')
        canvas.item(i).visible = false;
    
    else if (canvas.item(i).id == 'UnlockKnobIn')
      canvas.item(i).visible = true;
    }
}

//-------------------------------------------------------------
function UnlockDoorOut()
 {

    for (var i = 0; i < canvas.getObjects().length; ++i) 
    { 
      if (canvas.item(i).id == 'LockKnobOut')
    
        canvas.item(i).visible = false;
    
      else if (canvas.item(i).id == 'UnlockKnobOut')
      
        canvas.item(i).visible = true;
    }

 }

//-------------------------------------------------------------
function LockDoorIn()
 {

  for (var i = 0; i < canvas.getObjects().length; ++i) 
  { 
    if (canvas.item(i).id == 'UnlockKnobIn')
    
      canvas.item(i).visible = false;
    
    else if (canvas.item(i).id == 'LockKnobIn')
      
      canvas.item(i).visible = true;
  }

 }

//-------------------------------------------------------------
function LockDoorOut()
 {

  for (var i = 0; i < canvas.getObjects().length; ++i) 
  { 
    if (canvas.item(i).id == 'UnlockKnobOut')
    
      canvas.item(i).visible = false;
    
    else if (canvas.item(i).id == 'LockKnobOut')
      
      canvas.item(i).visible = true;
  }

 }

//-------------------------------------------------------------
function UnlockDeadbolt()
 {

  for (var i = 0; i < canvas.getObjects().length; ++i) 
  { 
    if (canvas.item(i).id == 'LockDeadbolt')
    
      canvas.item(i).visible = false;
    
    else if (canvas.item(i).id == 'UnlockDeadbolt')
      
      canvas.item(i).visible = true;
  }

 }

//-------------------------------------------------------------
function LockDeadbolt()
 {

  for (var i = 0; i < canvas.getObjects().length; ++i) 
  { 
    if (canvas.item(i).id == 'UnlockDeadbolt')
    
      canvas.item(i).visible = false;
    
    else if (canvas.item(i).id == 'LockDeadbolt')
      
      canvas.item(i).visible = true;
  }

 }
      
//------------------ Radio buttons Events Functions -------------------------
function User1FromInside()
{
  HideHome();
  HideUsersList();
  HideUser2FromInside();
  
  for (var i = 0; i < canvas.getObjects().length; ++i) { 
    if (canvas.item(i).id == 'user1calender' || canvas.item(i).id == 'user1todo')
        canvas.item(i).visible = true;
  }

  syslang = User1.language;  

  In_theme = User1.in_theme;
  In_ornament = User1.in_ornament;
  Out_theme = User1.out_theme;
  Out_ornament = User1.out_ornament;

  Date_format = User1.date_format;
  Time_format = User1.time_format;
  Units_format = User1.units_format;
  
  UpdateText();
}

//-------------------------------------------------------------
function HideUser1FromInside()
{
  for (var i = 0; i < canvas.getObjects().length; ++i) 
  { 
    if (canvas.item(i).id == 'user1calender' || canvas.item(i).id == 'user1todo')
      canvas.item(i).visible = false;
  }
}

//-------------------------------------------------------------
function User2FromInside()
{
  HideHome();
  HideUsersList();
  HideUser1FromInside();
  
  for (var i = 0; i < canvas.getObjects().length; ++i) 
  { 
    if (canvas.item(i).id == 'user2calender' || canvas.item(i).id == 'user2todo')
      canvas.item(i).visible = true;
  }
  syslang = User2.language;

  In_theme = User2.in_theme;
  In_ornament = User2.in_ornament;
  Out_theme = User2.out_theme;
  Out_ornament = User2.out_ornament;

  Date_format = User2.date_format;
  Time_format = User2.time_format;
  Units_format = User2.units_format;
  
  UpdateText();
}
 
//------------------------------------------------------------- 
function HideUser2FromInside()
{

for (var i = 0; i < canvas.getObjects().length; ++i) 
    { 
      if (canvas.item(i).id == 'user2calender' || canvas.item(i).id == 'user2todo')
    
        canvas.item(i).visible = false;
    }
}
  
//-------------------------------------------------------------
function MultiUsersFromInside()
{
  HideHome();
  HideUser1FromInside();
  HideUser2FromInside();

  for (var i = 0; i < canvas.getObjects().length; ++i) 
    { 
      if (canvas.item(i).id == 'userslist' ||
          canvas.item(i).id == 'user1name' || 
          canvas.item(i).id == 'user2name')
    
        canvas.item(i).visible = true;
    }
}

//-------------------------------------------------------------  
function HideUsersList()
{
  for (var i = 0; i < canvas.getObjects().length; ++i) 
    { 
      if (canvas.item(i).id == 'userslist' ||
          canvas.item(i).id == 'user1name' || 
          canvas.item(i).id == 'user2name')
    
        canvas.item(i).visible = false;
    }
}

//----------------------------------------------------------
function NewUserFromInside()
{
  HideHome();
  HideUser1FromInside();
  HideUser2FromInside();
  HideUsersList();
  LockDoorIn();
  LockDeadbolt();
}

//-------------------------------------------------------------
function NoUserFromInside()
{
  HideHome();
  HideUser1FromInside();
  HideUser2FromInside();
  HideUsersList();
  LockDoorIn();
  LockDeadbolt();
  ResetCoordinates();
  document.getElementsByName('Heights')[1].disabled = true; 
  document.getElementsByName('Heights')[2].disabled = true; 
  document.getElementsByName('Heights')[3].disabled = true; 
}

//-------------------------------------------------------------
function AdjustHeight()
{
  if (counter < 1)
  {
    GetOriginalCoordinate();
    counter++;
  }

   var Heights = document.getElementsByName('Heights');
  
  if(Heights[1].checked)
        Height = -100;  
  
  else if(Heights[2].checked)
        Height = 0;   
  
  else if(Heights[3].checked)
        Height = 100;  
  
  for (var i = 0; i < ArrayOfObjects.length; ++i) 
        {
        ArrayOfObjects[i].top = OriginalObjCoordinate[i] + Height;
        ArrayOfObjects[i].setCoords();
        }

  canvas.renderAll();
 }
//-------------------------------------------------------------
function GetOriginalCoordinate()
{

  for (var i = 0; i < ArrayOfObjects.length; ++i) 
        OriginalObjCoordinate[i] = ArrayOfObjects[i].top;
}

//-------------------------------------------------------------
function ResetCoordinates()
{
  for (var i = 0; i < ArrayOfObjects.length; ++i) 
        {
        ArrayOfObjects[i].top = OriginalObjCoordinate[i];
        ArrayOfObjects[i].setCoords();
        }

  canvas.renderAll();
}

//-------------------------------------------------------------
 function TriggerDoorFromOutside()  //A user approached the door from outside
 {

  for (var i = 0; i < canvas.getObjects().length; ++i) 
  { 
     if (canvas.item(i).id == 'doorbell' || canvas.item(i).id == 'writemsg' || 
        canvas.item(i).id == 'LockKnobOut')
      
      canvas.item(i).visible = true;

  }
 }

//-------------------------------------------------------------
 function ResetDoorFromOutside()  //Reset the door to non signal status
 {
  UserFingerIsRecognizable = false; 
  document.getElementsByName('Verification')[1].disabled = false; 
  document.getElementsByName('Verification')[2].disabled = false; 
  document.getElementsByName('Verification')[3].disabled = false; 
  for (var i = 0; i < canvas.getObjects().length; ++i) 
  { 
     if (canvas.item(i).id == 'doorbell' || canvas.item(i).id == 'writemsg'|| canvas.item(i).id == 'np' ||
         canvas.item(i).id == 'UnlockKnobOut' || canvas.item(i).id == 'LockKnobOut')
     {
        canvas.item(i).visible = false;
     }
   }

   for (var i = 0; i < canvas.getObjects().length; ++i) 
    { 
      if (canvas.item(i).id == 'UnlockKnobOut')
    
        canvas.item(i).selectable = true;
    }
 }
 
//-------------------------------------------------------------
function User1FromOutside()
{
  ResetDoorFromOutside();
  TriggerDoorFromOutside();
  var Verification = document.getElementsByName('Verification');
  
  if(Verification[1].checked) 
  {
    FaceRecognized();
  }
  else if(Verification[2].checked) {
    FingerRecognized();
  }
  else if(Verification[3].checked) {
    FailedVerification();
  }
}

//-------------------------------------------------------------
function NewUserFromOutside()
{
  ResetDoorFromOutside();
  TriggerDoorFromOutside();
  FailedVerification();
  document.getElementsByName('Verification')[1].disabled = true; 
  document.getElementsByName('Verification')[2].disabled = true; 
  document.getElementsByName('Verification')[3].checked = true; 
}

//-------------------------------------------------------------
function NoUserFromOutside()
{
  ResetDoorFromOutside();
  document.getElementsByName('Verification')[1].disabled = true; 
  document.getElementsByName('Verification')[2].disabled = true; 
  document.getElementsByName('Verification')[3].checked = true; 
}

//-------------------------------------------------------------
function FaceRecognized()
{
  ResetDoorFromOutside();
  TriggerDoorFromOutside();

  for (var i = 0; i < canvas.getObjects().length; ++i) 
    { 
      if (canvas.item(i).id == 'UnlockKnobOut')
    
        canvas.item(i).selectable = false;
    }

  UnlockDoorOut();
}

//-------------------------------------------------------------
function FingerRecognized()
{
  ResetDoorFromOutside();
  TriggerDoorFromOutside();
  UserFingerIsRecognizable = true; 
}

//-------------------------------------------------------------
function FailedVerification()
{
  ResetDoorFromOutside();
  TriggerDoorFromOutside();
  for (var i = 0; i < canvas.getObjects().length; ++i) 
  { 
     if (canvas.item(i).id == 'np')
     {
        canvas.item(i).visible = true;
     }
   }
}

//------------------------------------------------------------
//Camera Functionality

function RunCamera()
{

  HideHome();

  AvatarOnOff.visible = true;
  LiveOnOff.visible = true;
  CameraIn.visible = true;
  RunOutsideCamera();           //To show what is outside
  RunInsideCameraAvatar();     //Avatar from inside is default
}

//-------------------------------------------------------------
function RunOutsideCamera()
{
  fabric.util.loadImage('images/FromOutCamera.gif', function (img) {
    insideDoor.setPatternFill({
        source: img,
        repeat: 'repeat'
    });});
}

//-------------------------------------------------------------
function RunInsideCameraAvatar()
{
  AvatarIsActive = true;
  AvatarOut.visible = true;
  
  fabric.util.loadImage('images/AvatarIn.gif', function (img) {
    CameraIn.setPatternFill({
        source: img,
        repeat: 'repeat'
    });});

  fabric.util.loadImage('images/AvatarOn.gif', function (img) {
    AvatarOnOff.setPatternFill({
        source: img,
        repeat: 'repeat'
    });});

  fabric.util.loadImage('images/LiveOff.gif', function (img) {
    LiveOnOff.setPatternFill({
        source: img,
        repeat: 'repeat'
    });});

  fabric.util.loadImage('images/DoorpatternOut.gif', function (img) {
    outsideDoor.setPatternFill({
        source: img,
        repeat: 'repeat'
    });});

}

//-------------------------------------------------------------
function RunInsideCameraLive()
{
  console.log(" live ");
  
  AvatarIsActive = false;
  AvatarOut.visible = false;
  
  fabric.util.loadImage('images/LiveIn.gif', function (img) {
    CameraIn.setPatternFill({
        source: img,
        repeat: 'repeat'
    });});

  fabric.util.loadImage('images/AvatarOff.gif', function (img) {
    AvatarOnOff.setPatternFill({
        source: img,
        repeat: 'repeat'
    });});

  fabric.util.loadImage('images/LiveOn.gif', function (img) {
    LiveOnOff.setPatternFill({
        source: img,
        repeat: 'repeat'
    });});

  fabric.util.loadImage('images/FromInCamera.gif', function (img) {
    outsideDoor.setPatternFill({
        source: img,
        repeat: 'repeat'
    });});

}

//-------------------------------------------------------------
function CloseCamera()
{
  AvatarIsActive = false;
  CameraIn.visible = false;
  AvatarOut.visible = false;
  AvatarOnOff.visible = false;
  LiveOnOff.visible = false;

  fabric.util.loadImage('images/Doorpattern.gif', function (img) {
    insideDoor.setPatternFill({
        source: img,
        repeat: 'repeat'
    });});

  fabric.util.loadImage('images/DoorpatternOut.gif', function (img) {
    outsideDoor.setPatternFill({
        source: img,
        repeat: 'repeat'
    });
  });
}
//-------------------------------------------------------------