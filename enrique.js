 function RestartSystem()
  {
    for (var i = 0; i < canvas.getObjects().length; ++i) 
    { 
      if (canvas.item(i).id == 'restart'){
        if (canvas.item(i).visible = true)
          location.reload();
      }
  
    }

  }
