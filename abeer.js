function ShowDateTime_BACKUP()
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

  checkSettings();
}

//-------------------------------------------------------------
function ShowHome()
{
  

  RegisteredUsers.hideAllUsersObjects();
  HideUsersList();
  CloseCamera();
  HideMirror();
  HideTraffic();
  // HideLights();
  HideTransport();
  HideNews();
  HideMessageBox();
  hideSettings();
  CloseThemeSettings();
  HideUserSettings();
  HideUserData();
  HomeIsActive = true;
  PanelRect.visible = true;
  icon_settings.selectable = true;

//  if(CURRENT_USER != null)
//  {
//    CURRENT_USER.hideObjects();
//  }
//
  for (var i = 0; i < canvas.getObjects().length; ++i)
  {
    if (canvas.item(i).id == 'messages' || canvas.item(i).id == 'camera'   ||
        canvas.item(i).id == 'traffic'  || canvas.item(i).id == 'cta'      ||
        canvas.item(i).id == 'news'     || canvas.item(i).id == 'mirror'   ||
        canvas.item(i).id == 'lights'   || canvas.item(i).id == 'alarm'    ||
        canvas.item(i).id == '911'      ||
        canvas.item(i).id == 'restart')
    {
        canvas.item(i).visible = true;
    }

    else if(canvas.item(i).id == 'settings')
    {
      canvas.item(i).visible = true;
      if(CURRENT_USER == null)
          canvas.item(i).selectable = false;
      else
          canvas.item(i).selectable = true;
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
  HideUserSettings();
  HideUserData();
  CloseThemeSettings();

  

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

  LoadUserData_Inside(2);
  //document.getElementsByName('UsersFromInside')[2].checked = true; 
  //document.getElementsByName('Verification')[1].disabled = false;
  //console.log(CURRENT_USER.firstname);
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

  for (var i = 0; i < canvas.getObjects().length; ++i) {
    if (canvas.item(i).id == 'user1calender' || canvas.item(i).id == 'user2todo')
        canvas.item(i).visible = true;
  }

  LoadUserData_Inside(0);
  //document.getElementsByName('UsersFromInside')[2].checked = true; 
  //document.getElementsByName('Verification')[1].disabled = false;
  //console.log(CURRENT_USER.firstname);
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
  CURRENT_USER = null;
  HideHome();
  ShowHomeButtonAndLine();
  RegisteredUsers.hideAllUsersObjects();
  HideUsersList();
  LockDoorIn();
  LockDeadbolt();
  LockDeadbolt();
  ResetCoordinates();
  HeightsRadioButtons_ENABLE();
  UncheckHeight();

  syslang = ENGLISH; // set to english by default
  System_language = SYSTEM_LANGUAGE[syslang];
  In_theme = 'default';
  In_ornament = 'default';
  Out_theme = 'default';
  Out_ornament = 'default';

  Date_format = DATE_MONTHDDYYYY;
  Time_format = TIME_12HOUR;
  TemperatureUnits = F;


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

//  HideUser1FromInside();
//  HideUser2FromInside();
  CURRENT_USER = null;
  HideHome();
  ShowHomeButtonAndLine();
  RegisteredUsers.hideAllUsersObjects();
  HideUsersList();
  LockDoorIn();
  LockDeadbolt();
  LockDeadbolt();
  ResetCoordinates();
  HeightsRadioButtons_ENABLE();
  UncheckHeight();

  syslang = ENGLISH; // set to english by default
  System_language = SYSTEM_LANGUAGE[syslang];
  In_theme = 'default';
  In_ornament = 'default';
  Out_theme = 'default';
  Out_ornament = 'default';

  Date_format = DATE_MONTHDDYYYY;
  Time_format = TIME_12HOUR;
  TemperatureUnits = F;
  SetDoorTheme();
  
}

//-------------------------------------------------------------
function NoSignalFromInside()
{
  console.log("NoSignalFromInside()");
  CURRENT_USER = null;

  HideHomeButtonAndLine();

  HideHome();

//  HideUser1FromInside();
//  HideUser2FromInside();
  RegisteredUsers.hideAllUsersObjects();
  HideUsersList();
  LockDoorIn();
  LockDeadbolt();
  LockDeadbolt();
  ResetCoordinates();
  HeightsRadioButtons_DISABLE();
  UncheckHeight();

  syslang = ENGLISH; // set to english by default
  System_language = SYSTEM_LANGUAGE[syslang];
  In_theme = 'default';
  In_ornament = 'default';
  Out_theme = 'default';
  Out_ornament = 'default';

  Date_format = DATE_MONTHDDYYYY;
  Time_format = TIME_12HOUR;
  TemperatureUnits = F;
  SetDoorTheme();
}

//-------------------------------------------------------------
function AdjustHeight(value){
  console.log("AdjustHeight()");
  if (counter < 1){
    GetOriginalCoordinate();
    counter++;
  }

  var offset;
  if(value == "Tall"){
    offset = -100;;
  }
  else if (value == "Medium"){
    offset = 0;
  }
  else if(value == "Short") {
    offset = 100;
  }

  for (var i = 0; i < ArrayOfObjects.length; ++i) {
    ArrayOfObjects[i].top = OriginalObjCoordinate[i] + offset;
    ArrayOfObjects[i].setCoords();
  }
  canvas.renderAll();
 }

//-------------------------------------------------------------
function GetOriginalCoordinate(){
  console.log("GetOriginalCoordinate");
  var temp;
  for (var i = 0; i < ArrayOfObjects.length; ++i) {
    OriginalObjCoordinate[i] = temp = ArrayOfObjects[i].top;
    //console.log(ArrayOfObjects[i]);
    //console.log("OG coordinate: " + temp );
  }
}

//-------------------------------------------------------------
function ResetCoordinates(){
  if (counter >= 1) {
    for (var i = 0; i < ArrayOfObjects.length; ++i) {
      ArrayOfObjects[i].top = OriginalObjCoordinate[i];
      ArrayOfObjects[i].setCoords();
    }
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
     if (canvas.item(i).id == 'doorbell' || canvas.item(i).id == 'writemsg'|| canvas.item(i).id == 'numberpad' ||
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
  HeightsRadioButtons_ENABLE(); // gabe

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
  CURRENT_USER = null;

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

  for (var i = 0; i < canvas.getObjects().length; ++i){
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
  for (var i = 0; i < canvas.getObjects().length; ++i){
     if (canvas.item(i).id == 'numberpad'){
        canvas.item(i).visible = true;
     }
  }
}

//------------------------------------------------------------
//Camera Functionality

function RunCamera()
{

  HideHome();
  AvatarIsActive = false;
  AvatarOnOff.visible = true;
  LiveOnOff.visible = true;
  CameraIn.visible = true;
  RunOutsideCamera();           //To show what is outside
  RunInsideCameraAvatar();     //Avatar from inside is default
}

//-------------------------------------------------------------
function RunOutsideCamera()
{
  SetDoorTheme();
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
  RunOutsideCamera();

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

  //fabric.util.loadImage('images/DoorpatternOut.gif', function (img) {
   // outsideDoor.setPatternFill({
    //    source: img,
   //     repeat: 'repeat'
   // });});

}

//-------------------------------------------------------------
function RunInsideCameraLive()
{
  console.log(" live ");
  RunOutsideCamera();
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

  SetDoorTheme();
}
//-------------------------------------------------------------
function SetDoorTheme()
{
  if( In_theme == 'default')
    fabric.util.loadImage('images/Doorpattern.gif', function (img) {
    insideDoor.setPatternFill({
    source: img,
    repeat: 'repeat'
    });});

  else if ( In_theme == 'Wood')
    fabric.util.loadImage('images/wooddoor.jpg', function (img) {
    img.id = 'Wood';
    insideDoor.setPatternFill({
    source: img,
    repeat: 'repeat'
    }); });

  else if ( In_theme == 'Metal')
    fabric.util.loadImage('images/metal.jpg', function (img) {
    img.id = 'Metal';
    insideDoor.setPatternFill({
    source: img,
    repeat: 'repeat'
    }); });

  if( Out_theme == 'default')
    fabric.util.loadImage('images/DoorpatternOut.gif', function (img) {
    outsideDoor.setPatternFill({
    source: img,
    repeat: 'repeat'
    });});

  else if ( Out_theme == 'Wood')
    fabric.util.loadImage('images/wooddoor.jpg', function (img) {
    img.id = 'Wood';
    outsideDoor.setPatternFill({
    source: img,
    repeat: 'repeat'
    }); });

  else if ( Out_theme == 'Metal')
    fabric.util.loadImage('images/metal.jpg', function (img) {
    img.id = 'Metal';
    outsideDoor.setPatternFill({
    source: img,
    repeat: 'repeat'
    }); });


 if( Out_ornament == 'Easter')
    
    {
      EasterOrn.visible = true;
      XmassOrn.visible = false;
    }

else if( Out_ornament == 'Xmass')
    {
      XmassOrn.visible = true;
      EasterOrn.visible = false;
    }
    
else if( Out_ornament == 'default')
    {
      EasterOrn.visible = false;
      XmassOrn.visible = false;
    }



}


function UncheckHeight()
{

  document.getElementsByName('Heights')[0].checked = false;
  document.getElementsByName('Heights')[1].checked = false;
  document.getElementsByName('Heights')[2].checked = false;

}
