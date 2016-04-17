var audio = new Audio('sounds/doorbell.mp3');
var usersActive = false;
var trafficSettingsActive = false;
var doorbellSettingsActive = false;
var brightnessSettingsActive = false;
var themeSettingsActive = false;
var current_user_name = "Gabe";
var newUserAdded = false;

// traffic settings
var user_traffic_settings = {};
var stars = [];
var user_traffic_options = [];

function checkSettings() {
  if (SettingsIsActive == true)
    hideSettings();
  else if (usersActive)
    hideUsers();
  else if (trafficSettingsActive)
    hideTrafficSettings();
  else if (doorbellSettingsActive)
    hideDoorbellSettings();
  else if (brightnessSettingsActive)
    hideBrightnessSettings();
  else if (themeSettingsActive)
    hideThemeSettings();
}

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

function showTrafficInitAdd()
{
  hideSettings();
  trafficSettingsActive = true;
  traffic_add_btn.visible = true;
  for (var i = 0; i < user_traffic_settings[CURRENT_USER.first_name].length; ++i) {
    if (user_traffic_options[Current_user.first_name][i] == "primary")
      filename = "images/Settings/traffic_star_primary.gif"
    else
      filename = "images/Settings/traffic_star.gif"

    fabric.util.loadImage(filename, function (img) {
      stars[i].setPatternFill({
        source: img,
        repeat: 'no-repeat'
      });
    });

    stars[i].visible = true;
    user_traffic_options[i].visible = true;
  }
}

function showTrafficInputAdd()
{

}

function showTrafficPostAdd()
{

}

function toggleTrafficPrimary()
{

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