// Generated by CoffeeScript 2.5.1
(function() {
  var authenticate, authenticate_as_guest, cancel_authentication, cancel_autologin, languages, layouts, sessions, users;

  users = [
    {
      display_name: "Eagle Mcfly",
      home_directory: "/home/mcfly",
      image: "mock/res/profile1.jpg",
      language: "en_US",
      layout: null,
      logged_in: false,
      session: "kde",
      username: "mcfly"
    },
    {
      display_name: "Sparky Dogson",
      home_directory: "/home/sparky",
      image: "mock/res/profile2.jpg",
      language: "en_UK",
      layout: null,
      logged_in: false,
      session: "gnome",
      username: "sparky"
    },
    {
      display_name: "Elicha Deering",
      home_directory: "/home/deering",
      image: "mock/res/profile3.jpg",
      language: "en_US",
      layout: null,
      logged_in: false,
      session: "deepin",
      username: "deering"
    }
  ];

  sessions = [
    {
      key: "key1",
      name: "gnome",
      comment: "no comment"
    },
    {
      key: "key2",
      name: "xfce",
      comment: "no comment"
    },
    {
      key: "key3",
      name: "kde",
      comment: "no comment"
    },
    {
      key: "key4",
      name: "deepin",
      comment: "no comment"
    }
  ];

  languages = [
    {
      code: "en_US",
      name: "English(US)",
      territory: "USA"
    },
    {
      code: "en_UK",
      name: "English(UK)",
      territory: "UK"
    }
  ];

  layouts = [
    {
      name: "test-layout",
      description: "test-layout for testing.",
      short_description: "test-layout-terretory"
    }
  ];

  authenticate = function(username) {
    console.log(`lightdm.authenticate("${username}") started`);
    if (this._username != null) {
      throw "already authenticating!";
    }
    if (!users.some(function(x) {
      return x.username === username;
    })) {
      show_error(`lightdm.authenticate("${username}") error : invalid username`);
    }
    this._username = username;
    this.in_authentication = true;
    show_prompt("Password: ");
    return this.in_authentication = false;
  };

  authenticate_as_guest = function() {
    this.in_authentication = true;
    show_prompt("Password: ");
    return this.in_authentication = false;
  };

  cancel_authentication = function(username) {
    console.log(`lightdm.cancel_authentication("${username}") started `);
    if (this._username == null) {
      throw "not currently authenticating!";
    }
    this._username = null;
    return this.in_authentication = false;
  };

  // TODO call setTimeout
  cancel_autologin = function() {
    return clearTimeout(_autologin_timeout);
  };

  window.lightdm = {
    authenticate: authenticate,
    authenticate_as_guest: authenticate_as_guest,
    authentication_user: this._username,
    autologin_guest: false,
    autologin_timer: 10,
    autologin_user: users[0].username,
    can_hibernate: true,
    can_restart: true,
    can_shutdown: true,
    can_suspend: true,
    hibernate: function() {
      return console.log('hibernate was called!');
    },
    restart: function() {
      return console.log('restart was called!');
    },
    shutdown: function() {
      return console.log('shutdown was called!');
    },
    suspend: function() {
      return console.log('suspend was called!');
    },
    cancel_authentication: cancel_authentication,
    cancel_autologin: cancel_autologin,
    default_session: sessions[0].name,
    get_hint: function(name) {
      return null;
    },
    has_guest_account: true,
    hide_users: false,
    hostname: "test-host",
    in_authentication: false,
    is_authenticated: false,
    language: null,
    languages: languages,
    _layout: void 0,
    layout: function(value) {
      if (value != null) {
        return this._layout = value;
      } else {
        return this._layout;
      }
    },
    layouts: layouts,
    lock_hint: false,
    num_users: 1,
    respond: function(response) {
      return console.log("lightdm.respond is not implemented by Mock");
    },
    select_guest_hint: false,
    select_user_hint: users[0].username,
    sessions: sessions,
    set_language: function(language) {
      return true;
    },
    start_session: function(session) {
      return false; // lacking docmentation
    },
    users: users
  };

  window.theme_utils = {
    bind_this: function() {
      return console.log("theme_utils.bind_this is not implemented by Mock");
    },
    esc_html: function() {
      return console.log("theme_utils.esc_html is not implemented by Mock");
    },
    get_current_localized_time: function() {
      return "12:34:56";
    },
    dirlist: function(path) {
      if (path === greeter_config.branding.background_images) {
        return [path + "wallpaper1.jpg", path + "wallpaper2.jpg"];
      }
      return console.log("theme_utils.dirlist is not implemented by Mock");
    }
  };

  window.greeter_config = {
    branding: {
      background_images: "mock/res/wallpapers/",
      logo: "mock/res/logo.svg",
      user_image: "mock/res/profile.svg"
    },
    greeter: {
      debug_mode: true,
      detect_theme_errors: null,
      screensaver_timeout: 1000,
      secure_mode: true,
      time_format: "dddd, MMMM Do YYYY, h:mm:ss a",
      time_language: "auto",
      webkit_theme: "Theme Name"
    }
  };

  if (lightdm.autologin_timeout > 0) {
    setTimeout(function() {
      if (lightdm.autologin_guest) {
        return lightdm.authenticate(lightdm.autologin_user);
      } else {
        return lightdm.authenticate_as_guest();
      }
    }, lightdm.autologin_timeout * 1000);
  }

}).call(this);
