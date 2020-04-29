window.theme_utils =
	bind_this	: () -> console.log "theme_utils.bind_this is not implemented by Mock"
	esc_html	: () -> console.log "theme_utils.esc_html is not implemented by Mock"
	get_current_localized_time : () -> "12:34:56"
	dirlist		: (path) ->
		if path is greeter_config.branding.background_images
			return [ path + "wallpaper1.jpg", path + "wallpaper2.jpg" ]
		console.log "theme_utils.dirlist is not implemented by Mock"
