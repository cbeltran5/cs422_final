var audio = new Audio('sounds/doorbell.mp3');
var usersActive = false;
var current_user_name = "Gabe";
var newUserAdded = false;

function playDoorbellSound() {
  audio.currentTime=0;
  audio.play();
}

function showSettings() {
  SettingsIsActive = true;
  HideHome();

  PanelRect.visible = true;

  for (var i = 0; i < canvas.getObjects().length; ++i)
  {
    if (canvas.item(i).id == 'settings_users' || canvas.item(i).id == 'settings_language'   ||
        canvas.item(i).id == 'settings_traffic'  || canvas.item(i).id == 'settings_datetime'      ||
        canvas.item(i).id == 'settings_doorbell'     || canvas.item(i).id == 'settings_units'   ||
        canvas.item(i).id == 'settings_brightness'   || canvas.item(i).id == 'settings_volume'    ||
        canvas.item(i).id == 'settings_themes'      || canvas.item(i).id == 'settings_intercom')
    {
        canvas.item(i).visible = true;
    }

  }

  UsersText.visible = true;
  LanguageText.visible = true;
  TrafficText.visible = true;
  DatetimeText.visible = true;
  DoorbellText.visible = true;
  UnitsText.visible = true;
  BrightnessText.visible = true;
  VolumeText.visible = true;
  ThemesText.visible = true;
  IntercomText.visible = true;

}

function hideSettings()
{

  SettingsIsActive = false;

  for (var i = 0; i < canvas.getObjects().length; ++i)
  {
    if (canvas.item(i).id == 'settings_users' || canvas.item(i).id == 'settings_language'   ||
        canvas.item(i).id == 'settings_traffic'  || canvas.item(i).id == 'settings_datetime'      ||
        canvas.item(i).id == 'settings_doorbell'     || canvas.item(i).id == 'settings_units'   ||
        canvas.item(i).id == 'settings_brightness'   || canvas.item(i).id == 'settings_volume'    ||
        canvas.item(i).id == 'settings_themes'      || canvas.item(i).id == 'settings_intercom')
    {
        canvas.item(i).visible = false;
    }

  }

  UsersText.visible = false;
  LanguageText.visible = false;
  TrafficText.visible = false;
  DatetimeText.visible = false;
  DoorbellText.visible = false;
  UnitsText.visible = false;
  BrightnessText.visible = false;
  VolumeText.visible = false;
  ThemesText.visible = false;
  IntercomText.visible = false;

  hideUsers();
}

function usersSelected()
{
  if (usersActive)
    hideUsers();
  else
    showUsers();
}

function showUsers()
{

  hideSettings();
  usersActive = true;
  UserPanel.visible = true;

  PanelRect.visible = false;
}

function hideUsers()
{
  usersActive = false;
  UserPanel.visible = false;
  sendKey.visible = false;
  input_sendKey.visible = false;
  post_sendKey.visible = false;
}

function switchActiveUser()
{
  if (current_user_name == "Enrique") {
    filename = "images/Settings/users_gabe_active.gif"
    current_user_name = "Gabe";
  }
  else {
    filename = "images/Settings/users_enrique_active.gif"
    current_user_name = "Enrique";
  }

  fabric.util.loadImage(filename, function (img) {
    UserPanel.setPatternFill({
      source: img,
      repeat: 'repeat'
    });
  });
}

function showSendKey()
{
  hideUsers();
  usersActive = true;
  sendKey.visible = true
}

function showInputSendKey()
{
  sendKey.visible = false;
  input_sendKey.visible = true;
}

function showPostSendKey()
{
  addNewUser();
  input_sendKey.visible = false;
  post_sendKey.visible = true;
}

// TODO??
function addNewUser() {
  fabric.util.loadImage("images/Settings/post_send_key.gif", function (img) {
    UserPanel.setPatternFill({
      source: img,
      repeat: 'no-repeat'
    });
  });
  UserPanel.width = 255;
  UserPanel.height = 214;
}