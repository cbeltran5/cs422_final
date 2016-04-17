var audio = new Audio('sounds/doorbell.mp3');

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
}