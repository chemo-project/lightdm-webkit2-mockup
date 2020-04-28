authenticate = (username) ->
	
	console.log """lightdm.authenticate("#{username}") started"""
	
	if this._username? then throw "already authenticating!"
	
	unless users.some (x) -> x.username is username
		show_error """lightdm.authenticate("#{username}") error : invalid username"""
	
	this._username = username
	this.in_authentication = true
	show_prompt "Password: "
	this.in_authentication = false

authenticate_as_guest = () ->
	this.in_authentication = true
	show_prompt "Password: "
	this.in_authentication = false


cancel_authentication = (username) ->

	console.log """lightdm.cancel_authentication("#{username}") started """
	
	unless this._username? then throw "not currently authenticating!"
	
	this._username = null
	this.in_authentication = false

# TODO call setTimeout
cancel_autologin = () ->
	clearTimeout _autologin_timeout

