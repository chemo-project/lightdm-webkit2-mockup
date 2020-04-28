

bin/lighdm-mock.js : src/*.coffee
	cat src/lightdm_data.coffee src/lightdm_functions.coffee src/lightdm.coffee src/theme_utils.coffee src/greeter_config.coffee src/init.coffee | coffee --compile --stdio > lightdm-mock.js
