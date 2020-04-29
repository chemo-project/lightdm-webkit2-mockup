window.lightdm =
	authenticate			: authenticate
	authenticate_as_guest	: authenticate_as_guest
	authentication_user		: this._username
	
	autologin_guest		: false
	autologin_timer		: 10
	autologin_user		: users[0].username

	can_hibernate		: true
	can_restart			: true
	can_shutdown		: true
	can_suspend			: true

	hibernate			: () -> console.log 'hibernate was called!'
	restart				: () -> console.log 'restart was called!'
	shutdown			: () -> console.log 'shutdown was called!'
	suspend				: () -> console.log 'suspend was called!'

	cancel_authentication	: cancel_authentication
	cancel_autologin		: cancel_autologin

	default_session		: sessions[0].name
	get_hint			: (name) -> null
	has_guest_account	: true
	hide_users			: false
	hostname			: "test-host"

	in_authentication	: false
	is_authenticated	: false

	language			: null
	languages			: languages

	_layout				: undefined
	layout				: (value) -> if value? then this._layout = value else this._layout
	layouts				: layouts

	lock_hint			: false
	num_users			: 1
	respond				: (response) -> console.log "lightdm.respond is not implemented by Mock"

	select_guest_hint	: false
	select_user_hint	: users[0].username

	sessions			: sessions

	set_language		: (language) -> true
	
	start_session		: (session) -> false # lacking docmentation

	users				: users
