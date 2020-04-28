
if lightdm.autologin_timeout > 0 then setTimeout( () ->
	if lightdm.autologin_guest
		lightdm.authenticate lightdm.autologin_user
	else
		lightdm.authenticate_as_guest()
, lightdm.autologin_timeout * 1000 )

