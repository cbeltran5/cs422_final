var audio = new Audio('sounds/doorbell.mp3');
var usersActive = false;
var trafficSettingsActive = false;
var doorbellSettingsActive = false;
var brightnessSettingsActive = false;
var themeSettingsActive = false;
var newUserAdded = false;

// traffic settings
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
    if (canvas.item(i).id == 'settings_users' || canvas.item(i).id ==       'settings_language'   ||
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
  PanelRect.visible = true;


}

function hideSettings()
{

  SettingsIsActive = false;
  //UserSettingMsg.bringForward();
  //UserSettingMsg.visible = false;

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
  PanelRect.visible = false;


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
  if (CURRE == "Enrique") {
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

function showTrafficSettings()
{
  trafficSettingsActive = true;
  hideSettings();
  PanelRect.visible = false;

  trafficSettingsActive = true;
  traffic_add_btn.visible = true;
  traffic_add_btn_text.visible = true;

  for (var i = 0; i < CURRENT_USER.traffic_options.length; i++) {

    object_index = CURRENT_USER.traffic_options[i];

    if (stars[i].id == CURRENT_USER.traffic_primary) {
      filename = "images/Settings/traffic_star_primary.gif"
    }
    else
      filename = "images/Settings/traffic_star.gif"

    fabric.util.loadImage(filename, function (img) {
      stars[i-1].setPatternFill({
        source: img,
        repeat: 'no-repeat'
      });
    });

    stars[i].visible = true;
    user_traffic_options[object_index].top = stars[i].top;
    user_traffic_options[object_index].visible = true;
  }
}

function hideTrafficSettings()
{
  traffic_add_btn.visible = false;
  traffic_add_btn_text.visible = false;

  for (var i = 0; i < CURRENT_USER.traffic_options.length; ++i) {
    stars[i].visible = false;
    user_traffic_options[i].visible = false;
  }

  trafficSettingsActive = false;
  hideTrafficInputAdd();
}

function showTrafficInputAdd()
{

  hideTrafficSettings();

  traffic_input_name.visible = true;
  traffic_input_name_text.visible = true;
  traffic_input_address.visible = true;
  traffic_input_address_text.visible = true;
  traffic_save_btn.visible = true;
  traffic_save_btn_text.visible = true;
}

function hideTrafficInputAdd()
{
  traffic_input_name.visible = false;
  traffic_input_name_text.visible = false;
  traffic_input_address.visible = false;
  traffic_input_address_text.visible = false;
  traffic_save_btn.visible = false;
  traffic_save_btn_text.visible = false;
}

function saveTrafficOption()
{
  hideTrafficInputAdd();

  var rand = Math.random() * 2 | 0;
  options_count = CURRENT_USER.traffic_options.length;
    if (options_count < 2){
    CURRENT_USER.traffic_options.push([rand]);
    if (CURRENT_USER.traffic_options.length == 1)
      CURRENT_USER.traffic_primary = "traffic_star1"
  }
  else {
    CURRENT_USER.traffic_options.pop();
  }
  showTrafficSettings();
}

function toggleTrafficPrimary(name)
{

  if (CURRENT_USER.traffic_options.length != 2)
    return;

  if (CURRENT_USER.traffic_primary == "traffic_star1") {
    CURRENT_USER.traffic_primary = "traffic_star2";
    fabric.util.loadImage("images/Settings/traffic_star.gif", function (img) {
      stars[0].setPatternFill({
        source: img,
        repeat: 'no-repeat'
      });
    });
    fabric.util.loadImage("images/Settings/traffic_star_primary.gif", function (img) {
      stars[1].setPatternFill({
        source: img,
        repeat: 'no-repeat'
      });
    });
  }
  else {
    CURRENT_USER.traffic_primary = "traffic_star1";
    fabric.util.loadImage("images/Settings/traffic_star_primary.gif", function (img) {
      stars[0].setPatternFill({
        source: img,
        repeat: 'no-repeat'
      });
    });
    fabric.util.loadImage("images/Settings/traffic_star.gif", function (img) {
      stars[1].setPatternFill({
        source: img,
        repeat: 'no-repeat'
      });
    });
  }
}

function showBrightnessSettings()
{

  brightnessSettingsActive = true;
  hideSettings();
  PanelRect.visible = false;

  brightness_text.visible = true;
  slider_back.visible = true;
  slider.visible = true;
  display_text.visible = true;
  one_min_btn.visible = true;
  one_min_btn_text.visible = true;
  three_min_btn.visible = true;
  three_min_btn_text.visible = true;
  five_min_btn.visible = true;
  five_min_btn_text.visible = true;
  brightness_save_btn.visible = true;
  brightness_save_btn_text.visible = true;

  toggle_display_buttons(CURRENT_USER.display_timer_pref);
  update_brightness(-500);
}

function toggle_display_buttons(pref)
{
  switch (pref) {
    case "one":
      one_min_btn.stroke = "blue";
      three_min_btn.stroke = "black";
      five_min_btn.stroke = "black";
      break
    case "three":
      one_min_btn.stroke = "black";
      three_min_btn.stroke = "blue";
      five_min_btn.stroke = "black";
      break;
    case "five":
      one_min_btn.stroke = "black";
      three_min_btn.stroke = "black";
      five_min_btn.stroke = "blue";
      break;
    default:
      break;
  }
}

function hideBrightnessSettings()
{
  brightness_text.visible = false;
  slider_back.visible = false;
  slider.visible = false;
  display_text.visible = false;
  one_min_btn.visible = false;
  one_min_btn_text.visible = false;
  three_min_btn.visible = false;
  three_min_btn_text.visible = false;
  five_min_btn.visible = false;
  five_min_btn_text.visible = false;
  brightness_save_btn.visible = false;
  brightness_save_btn_text.visible = false;

  brightnessSettingsActive = false;
}

function update_brightness(percentage)
{
  if (percentage != -500)
    CURRENT_USER.brightness_pref = percentage;

  if (CURRENT_USER.brightness_pref < 1) {
    Lights.visible = true;
    Lights.opacity = 1 - CURRENT_USER.brightness_pref;
  }
  else {
    Lights.visible = false;
    Lights.opacity = 1;
  }
}

function updateDisplayTimer(newSetting)
{
  CURRENT_USER.display_timer_pref = newSetting;
  toggle_display_buttons(newSetting);
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