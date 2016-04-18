var F = 'Fahrenheit';
var C = 'Celsius';
var MainUnit = F;
var TemperatureF = 49;

function C2F(C) {
  return C * 9 / 5 + 32;
}

function F2C(F) {
  return (F - 32) * 5 / 9;
}

function TodoList() {

}

/***********************************************************************
                           DATE AND TIME
************************************************************************/
var TIME_12HOUR = "12 Hour Format";
var TIME_24HOUR = "24 Hour Format";
var DATE_MONTHDDYYYY = "Month DD, YYYY";
var DATE_MMDDYYYY = "MM/DD/YYYY";
var DATE_DDMONTHYYYY = "DD Month YYYY";
var DATE_DDMMYYYY = "DD/MM/YYYY";

function getFormattedMonth(month) {
  month = month + 1;
  if(Date_format == DATE_MONTHDDYYYY || Date_format == DATE_DDMONTHYYYY) {
    if (month == 1)
      return JANUARY[syslang];
    else if (month == 2)
      return FEBRUARY[syslang];
    else if (month == 3)
      return MARCH[syslang];
    else if (month == 4)
      return APRIL[syslang];
    else if (month == 5)
      return MAY[syslang];
    else if (month == 6)
      return JUNE[syslang];
    else if (month == 7)
      return JULY[syslang];
    else if (month == 8)
      return AUGUST[syslang];
    else if (month == 9)
      return SEPTEMBER[syslang];
    else if (month == 10)
      return OCTOBER[syslang];
    else if (month == 11)
      return NOVEMBER[syslang];
    else if (month == 12)
      return DECEMBER[syslang];
  }

  if( month < 10) {
    month = "0" + month;
  }
  else {
    month = "" + month;
  }
  return month;
}
function getFormattedTimeString(hours, minutes){
  var AmPmDesignator = "";
  var spacing = "";
  // fix minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // adjust if set to 12 hour format
  if(Time_format == TIME_12HOUR)  {
    if( hours >= 12) {
      AmPmDesignator = "PM";
    }
    else {
      AmPmDesignator = "AM";
    }
    hours = hours % 12;
    if (hours == 0) {
      hours = 12;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
  }
  // if in 24 hour format. add spaces to center text
  else {
    spacing = "    ";
  }
  return spacing + hours + ":" + minutes + " " + AmPmDesignator;
}
function getFormattedDateString(day, month, year) {
  if(Date_format == DATE_MONTHDDYYYY ) {
    return month + " " + day + ", " + year;
  }
  else if (Date_format == DATE_MMDDYYYY ) {
    return "  " + month + "/" + day + "/" + year;
  }
  else if (Date_format == DATE_DDMONTHYYYY) {
    return day + " " + month + " " + year;
  }
  else if (Date_format == DATE_DDMMYYYY) {
    return "  " + day + "/" + month + "/" + year;
  }
}
function ShowDateTime() {
  Time_format = TIME_12HOUR;
  var date = new Date();
  var month = getFormattedMonth(date.getMonth());
  var timestr = getFormattedTimeString(date.getHours(), date.getMinutes());
  var datestr = getFormattedDateString(date.getDate(),month, date.getFullYear());

  Datetext.initialize(datestr);
  canvas.remove(Datetext);
  canvas.add(Datetext);

  Timetext.initialize(timestr);
  canvas.remove(Timetext);
  canvas.add(Timetext);

  timeout = setTimeout(ShowDateTime,1000);
}

// variables for text
// English = 1 , Spanish = 2, etc...
var ENGLISH = 0;
var SPANISH = 1;
var SYSTEM_LANGUAGE = ["English", "Spanish"];

var MESSAGES = ["Messages", "Mensajes"];
var CAMERA = ["Camera", "Cámara"];
var TRAFFIC = ["Traffic", "Tráfico"];
var TRANSPORT = ["Transport", "Transporte"];
var NEWS = ["News", "Noticias"];
var MIRROR = ["Mirror", "Espejo"];
var LIGHTS = ["Lights", "Luces"];
var ALARM = ["Alarm", "Alarma"];
var EMERGENCY = ["Emergency", "Emergencia"];
var SETTINGS = ["Settings", "Ajustes"];
var DEADBOLT = ["Dead Bolt", "Cerrojo"];

// months of the year
var JANUARY = ["January", "Enero"];
var FEBRUARY = ["February", "Febrero"];
var MARCH = ["March", "Marzo"];
var APRIL = ["April", "Abril"];
var MAY = ["May", "Mayo"];
var JUNE = ["June", "Junio"];
var JULY = ["July", "Julio"];
var AUGUST = ["August", "Agosto"];
var SEPTEMBER = ["September", "Septiembre"];
var OCTOBER = ["October", "Octubre"];
var NOVEMBER = ["November", "Noviembre"];
var DECEMBER = ["December", "Diciembre"];

// stuff for settings
var USERS = ["Users", "Usuarios"];
var LANGUAGE = ["Language", "Lenguaje"];
var DOORBELL = ["Doorbell", "Timbre"];
var BRIGHTNESS = ["Brightness", "Brillo"];
var THEME = ["Theme", "Tema"];
var DATE_TIME = ["Date/Time", "Fecha/Tiempo"];
var UNITS = ["Units", "Unidades"];
var VOLUME = ["Volume", "Volumen"];
var INTERCOM = ["Intercom", "Intercomunicador"];
var ADD = ["Add", "Anadir"];
var SAVE = ["Save", "Guardar"];
var INPUT_NAME = ["Type your name...", "Escriba su nombre"];
var INPUT_ADDRESS = ["The address...", "La direccion"];
var BRIGHTNESS = ["Brightness", "Brillo"];
var DISPLAY = ["Display Timer", "Minutero de Pantalla "];
var CANCEL = ["Cancel", "Cancelar"];
var MUTE = ["Mute", "Mudo"];

var GREAT = ["Great!", "Estupendo!"];
var SORRY = ["Sorry!", "Lo Siento!"];
var NOWSET =["Your language is now set to ", "Su idioma fue configurado para "];
var NOTSET =["Your language was not set to ", "Su idioma no fue configurado para "]
var RETURNMSG=["Please press the back arrow to return to language settings.",
               "Presione la flecha para volver a la configuración de idioma."];
// when called, this function will update the text of the respective
// faric text object with a string that matches that object and the currently
// set language

function UpdateText() {
  Messagestext.text = MESSAGES[syslang];
  Cameratext.text = CAMERA[syslang];
  Traffictext.text = TRAFFIC[syslang];
  Transporttext.text = TRANSPORT[syslang];
  Newstext.text = NEWS[syslang];
  Mirrortext.text = MIRROR[syslang];
  Lightstext.text = LIGHTS[syslang];
  Alarmtext.text = ALARM[syslang];
  Emergtext.text = EMERGENCY[syslang];
  Settingstext.text = SETTINGS[syslang];
  Deadbolttext.text = DEADBOLT[syslang];

  UsersText.text = USERS[syslang];
  LanguageText.text = LANGUAGE[syslang];
  TrafficText.text = TRAFFIC[syslang];
  DatetimeText.text = DATE_TIME[syslang];
  DoorbellText.text = DOORBELL[syslang];
  UnitsText.text = UNITS[syslang];
  BrightnessText.text = BRIGHTNESS[syslang];
  VolumeText.text = VOLUME[syslang];
  ThemesText.text = THEME[syslang];
  IntercomText.text = INTERCOM[syslang];
  traffic_save_btn_text.text = SAVE[syslang];
  traffic_add_btn_text.text = ADD[syslang];
  traffic_input_address_text.text = INPUT_ADDRESS[syslang];
  traffic_input_name_text.text = INPUT_NAME[syslang];
  brightness_text.text = BRIGHTNESS[syslang];
  display_text.text = DISPLAY[syslang];
  brightness_save_btn_text.text = SAVE[syslang];
  doorbell_cancel_btn_text.text = CANCEL[syslang];
  doorbell_save_btn_text.text = SAVE[syslang];
  doorbell_mute_option_text.text = MUTE[syslang];
  VolumeSettingsText.text = VOLUME[syslang];
}
/***********************************************************************
                           END OF DATE AND TIME
************************************************************************/

function Registered_Users() {
  this.users = [];
  this.length = 0;

  this.at = function(index) {
    return this.users[index];
  }

  this.removeUserByID = function (id) {
    this.users.splice(id,1);
    this.length--;
  }

  this.removeUserByName = function( firstname, lastname) {
    var l = RegisteredUsers.length;
    for(var i=0; i < l; i++) {
      if(this.users[i].lastname == lastname && this.users[i].firstname == firstname){
        this.users[i].splice(i,1);
        this.length--;
        break;
      }
    }
  }

  this.hideAllUsersObjects = function() {
    for(var i=0; i < this.users.length; i++){
      this.users[i].hideObjects();
    }
  }

  this.addUser = function(user) {
    this.users.push(user);
    this.length++;
  }
  
  this.verifyPin = function(pin) {
    for(var i=0; i< this.users.length; i++){
      if(this.users[i].pin == pin) {
        return this.users[i].id; // return id of user if found.
      }
    }
    return -1; // pin is not registered to a known user
  }
}

var RegisteredUsers = new Registered_Users();

var userscounter = 0;
// Created a User class to hold the personal information common to all users

function User(firstname, lastname, language, pin) {
  this.id = userscounter++; // id is position in Registered Users array
  this.firstname = firstname;
  this.lastname = lastname;
  this.pin = pin;
  this.language = language; // an int
  
  this.date_format = DATE_MONTHDDYYYY;
  this.time_format = TIME_12HOUR;

  // fahrenheit or celsius
  // Fahrenheit by default
  this.temerature_units = F;

  this.in_theme = 'default';
  this.out_theme = 'default';

  this.in_ornament = 'default';
  this.out_ornament = 'default';

  this.traffic_options = [];
  this.traffic_primary = "";

  this.brightness_pref = 1;
  this.display_timer_pref = "three";
  
  this.vpercent = "50";
  this.sliderleft = 591;
  
  this.doorbell_pref = "Ding";

  this.getFullName = function () {
    return this.firstname + " " + this.lastname;
  }
  
  this.myObjects = [];
  this.addObject = function(object) {
    object.id = this.id;
    this.myObjects.push(object);
  }
  this.hideObjects = function() {
    for( var i=0; i < this.myObjects.length; i++) {
      this.myObjects[i].visible = false;
    }
  }
  this.showObjects = function() {
    for( var i=0; i < this.myObjects.length; i++) {
      this.myObjects[i].visible = true;
    }
  }
  
  this.myMessages = [];
  this.showMessages = function () {
    console.log("showMessages is not yet implemented. see gabe.js");
  }
  
  this.hideMessages = function() {
    console.log("hideMessages is not yet implemented. see gabe.js");
  }
  
  this.addMessage = function (msg) {
    this.myMessages.push(msg);
  }
  

  RegisteredUsers.addUser(this);

  this.RemoveFromRegisteredUsers = function() {
    console.log("Removing user with id " + this.id);
    RemoveFromRadioChoices(this.id);
    RegisteredUsers.removeUserByID(this.id);
    for(var i =0; i < RegisteredUsers.length; i++){
      console.log(RegisteredUsers.at(i));
      RegisteredUsers.at(i).id = i;
    }
  }
  AddUserToRadioChoices(this.firstname + " " + this.lastname, this.id);
}

var RADIO_ID_UFI = "UsersFromInside";
var RADIO_ID_UFO = "UsersFromOutside";
function RemoveFromRadioChoices(id) {
  //console.log("removing " + id);
  var remove = 3 + id;
  var inside = document.getElementById(RADIO_ID_UFI);
  var outside = document.getElementById(RADIO_ID_UFO);
  inside.removeChild(inside.children[remove]);
  outside.removeChild(outside.children[remove]);
}


function AddUserToRadioChoices( name , value) {
  var UsersFromInside = document.getElementById(RADIO_ID_UFI);
  var label = document.createElement("label");
  var element = document.createElement("input");
  element.setAttribute("type", "radio");
  element.setAttribute("value", value);
  element.setAttribute("name", "UsersIn");
  element.setAttribute("class", "radio1");
  element.setAttribute("onchange", "LoadUserData_Inside(this.value)");
  label.appendChild(element);
  label.innerHTML += " " + name + '<br/>';
  UsersFromInside.appendChild(label);
  
  var UsersFromOutside= document.getElementById(RADIO_ID_UFO);
  var label2 = document.createElement("label");
  var element2 = document.createElement("input");
  element2.setAttribute("type", "radio");
  element2.setAttribute("value", value);
  element2.setAttribute("name", "UsersOut");
  element2.setAttribute("class", "radio1");
  element2.setAttribute("onchange", "LoadUserData_Outside(this.value)");
  label2.appendChild(element2);
  label2.innerHTML += " " + name + '<br/>';
  UsersFromOutside.appendChild(label2);
}

var heightsenabled = false;
function HeightsRadioButtons_DISABLE() {
  heightsenabled = false;
  document.getElementsByName('Heights')[0].disabled = true; //
  document.getElementsByName('Heights')[1].disabled = true; // all by abeer
  document.getElementsByName('Heights')[2].disabled = true; //

}

function HeightsRadioButtons_ENABLE() {
  heightsenabled = true;
  document.getElementsByName('Heights')[0].disabled = false;  //
  document.getElementsByName('Heights')[1].disabled = false;  // interpreted from abeers code
  document.getElementsByName('Heights')[2].disabled = false;  //

}

var CURRENT_USER = null;

var homebutton = null;


function ShowHomeButtonAndLine() {
  // show home button
  if(homebutton == null){
    homebutton = getObjectWithId('home');
  }
  homebutton.visible = 'true';
  Line.visible = true;
}

function HideHomeButtonAndLine() {
  // show home button
  if(homebutton == null){
    homebutton = getObjectWithId('home');
  }
  homebutton.visible = false;
  Line.visible = false;
  
}

function ResetHeightRadioToDefault() {
  document.getElementById('Tall').checked = false;
  document.getElementById('Medium').checked = true;
  document.getElementById('Short').checked = false;
  //AdjustHeight('Medium');
}

function LoadUserData_Inside(index) {
  if(!heightsenabled)
    HeightsRadioButtons_ENABLE();   // enable radio buttons

  HideHome();
  ShowHomeButtonAndLine();

  console.log("LoadUserData_Inside(" + index + ")");
  CURRENT_USER = RegisteredUsers.at(index);
  console.log("Now Loading data for " + CURRENT_USER.getFullName() );

  var i;
  HideHome();
  HideUsersList();
  RegisteredUsers.hideAllUsersObjects();
  HideUsersList();
  CloseCamera();
  HideMirror();
  HideTraffic();
  HideLights();
  HideTransport();
  HideNews();
  hideSettings();
  Hide911();
  HideVolumeSettings();
  HideLangaugeSetting();
  backbutton.visible = false;
  
  LanguageSettingIsActive = false;
  
  volumeslider.left = CURRENT_USER.sliderleft;
  volumeslider.setLeft(CURRENT_USER.sliderleft);
  volumePercentage.text = "" + CURRENT_USER.vpercent + "%";
  volumeslider.setCoords();
  ResetHeightRadioToDefault();

  RegisteredUsers.at(index).showObjects();

  syslang = RegisteredUsers.at(index).language;
  In_theme = RegisteredUsers.at(index).in_theme;
  In_ornament = RegisteredUsers.at(index).in_ornament;
  Out_theme = RegisteredUsers.at(index).out_theme;
  Out_ornament = RegisteredUsers.at(index).out_ornament;

  Date_format = RegisteredUsers.at(index).date_format;
  Time_format = RegisteredUsers.at(index).time_format;
  TemperatureUnits = RegisteredUsers.at(index).temerature_units;
  
  UpdateText();
  UncheckHeight();
  SetDoorTheme();
  canvas.renderAll();
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

//-------------------------------------------------------------
function TriggerDoorFromOutside(){  //A user approached the door from outside
  for (var i = 0; i < canvas.getObjects().length; ++i){
    if (canvas.item(i).id == 'doorbell' || canvas.item(i).id == 'writemsg' ||
      canvas.item(i).id == 'LockKnobOut' || canvas.item(i).id == 'numberpad') 
    {
      canvas.item(i).visible = true;
    }
  }
}

var stepone = document.getElementsByName("verifyfirst");
var steptwo = document.getElementsByName("verifysecond");
var verify = document.getElementsByName("verify");

function LoadUserData_Outside(index ) {
  console.log("LoadUserData_Outside() is not yet implemented. On Todo List in gabe.js");
  for(var i=0; i <stepone.length; i++ ){
    stepone[i].disabled = false;
    stepone[i].checked = false;
  }
  TriggerDoorFromOutside();
}

function NoOneOutside() {
  for(var i=0; i <stepone.length; i++ ){
    stepone[i].disabled = true;
    stepone[i].checked = false;
    steptwo[i].disabled = true;
    steptwo[i].checked = false;
  }
  verify[0].checked = false;
  verify[0].disabled = true;
  verify[1].checked = false;
  verify[1].disabled = true;
  
  for (var i = 0; i < canvas.getObjects().length; ++i){
    if (canvas.item(i).id == 'doorbell' || canvas.item(i).id == 'writemsg'|| canvas.item(i).id == 'numberpad' || canvas.item(i).id == 'UnlockKnobOut' || canvas.item(i).id == 'LockKnobOut')
    {
      canvas.item(i).visible = false;
    }
  }
  steponeselected = false;
  steptwoselected = false;
}

function UnKnownPersonFromOutside() {
  TriggerDoorFromOutside();
  console.log("UnknownPersonFromOutside not yet implemented. On Todo List in gabe.js");
  for(var i=0; i<stepone.length; i++) {
      stepone[i].disabled = false;
      stepone[i].checked = false;
      steptwo[i].disabled = true;
      steptwo[i].checked = false;
  }
  verify[0].checked = false;
  verify[0].disabled = true; 
  verify[1].checked = false;
  verify[1].disabled = true;
}

function MultiUsersOutside() {
  console.log("MultiUsersFromOutside not yet implemented. On Todo List in gabe.js");
  
}


function DateTime_Settings() {

}

function HideVolumeSettings() {
  volumebar.visible = false;
  volumepanel.visible = false;
  volumeslider.visible = false;
  VolumeSettingsText.visible = false;
  volumePercentage.visible = false;
}

function ShowVolumeSettings() {
  hideSettings();
  volumebar.visible = true;
  volumepanel.visible = true;
  volumeslider.visible = true;
  VolumeSettingsText.visible = true;
  volumePercentage.visible = true;
}

var steponeselected = false;
var steptwoselected = false;
var pin = null;

function VerifyFirst(value) {
  console.log("first " + value);
  if(value == "None") {
    for(var i=0; i< steptwo.length; i++){
      steptwo[i].disabled = true;
    }
    steponeselected = false;
    VerifySecond(value);
  }
  else {
    if(value == "NumberPad" ) {
      var ret; 
      if( pin == null ) {
        ret = NumberPadEvent();
        if(ret != -1) {    // correct pin
          stepone[4].checked = true;
        }
        else {
          stepone[4].checked = false;
          return;
        }
      }
      pin = null;
    }
    
    for(var i=0; i< steptwo.length; i++){
      if(steptwo[i].value == value || stepone[i].disabled == true){
        steptwo[i].disabled = true;
        steptwo[i].checked = false;
      }
      else {
        steptwo[i].disabled = false;
      }
    }
    steponeselected = true;
  }
}

function VerifySecond(value) {
  steptwoselected = true;
  console.log("second " + value);
  if(value == "None") {
    verify[0].disabled = true;
    verify[0].checked = false;
    verify[1].checked = false;
    verify[1].disabled = true;
    steptwoselected = false;
  }
  else {
    if(value == "NumberPad" ) {
      var ret; 
      if( pin == null ) {
        console.log("Pin is null");
        ret = NumberPadEvent();
        console.log(ret);
        if(ret != -1) {    // correct pin
          verify[0].checked = true;
          Verify("sucess");
          UnlockDeadbolt();
          UnlockDoorOut();
          UnlockDoorIn();
        }
        else {
          verify[1].checked = true;
          Verify("fail");
        }
        verify[0].disabled = false;
        verify[1].disabled = false;
      }
      else{
        console.log("Pin is not null");
        verify[1].checked = true;
        Verify("fail");
      }
    }
    // not number pad
    else {
      verify[0].disabled = false;
      verify[1].disabled = false;
    }
  }
  pin = null;
}

function Verify(value) {
  console.log("Verify: " + value);
  if(value == "success") {
    
  }
}

function NumberPadEvent() {
  console.log("NUMBERPAD");
  pin = prompt("Please Enter your 4 digit pin", "0123");
  
  if(pin == null ) {
    return -1;
  }
  else if(pin.length != 4){
    NumberPadEvent();
  }
  
  var id;
  if((id = RegisteredUsers.verifyPin(pin)) != -1) {
    console.log("VERIFIED. userID: " + id);
    document.getElementsByName("UsersOut")[id + 3].checked = true;
    LoadUserData_Outside(id);
    if(steponeselected == false){
      VerifyFirst("NumberPad");
    }
    else if(steptwoselected == false) {
      VerifySecond("NumberPad");
    }
  }
  return id;
}

var langselected = null;
function isLangSelected( obj) {
  for(var i=0; i< LanguageArr.length; i++){
    if(obj == LanguageArr[i]){
      return i;
    }
  }
  return null;
}

function HighlightLang() {
  console.log("Highlight Lang");
}

var tempsyslang;
function SaveLanguageSettings(lang) {
  console.log("SAVE LANG");
  if(lang == null) {
    console.log("lang is null");
    return;
  }
  if(CURRENT_USER != null ) {
    var changed;
    if(lang > 1){
      console.log(LanguageArr[lang].text + " is not supported at this time."); 
      changed = false;
    }
    else { // 0 or 1 
      CURRENT_USER.language = lang;
      syslang = lang;
      UpdateText();
      changed = true;
      console.log("Changed language to " + LanguageArr[lang].text + "!");
    }
    HideLangaugeSetting();
    
    ShowLangFeedBack(LanguageArr[lang].text,changed);
    mBackButton.addToBackStack(ShowLanguageSetting, HideLangFeedBack);
  }
  else {
    Console.log("Current user is null");
  }
}
//textDecoration: 'underline'





function ChangeUnits() {
  
}










