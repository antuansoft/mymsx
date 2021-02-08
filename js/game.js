    //read input parameters
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const game = urlParams.get('game') 
    if (!game){
        game = ""
    }
    //load game variable
    var games_data = eval(game)

    //load data   
    var name= games_data.name;
    var breadcrumb_name = games_data.breadcrumb_name;
    var breadcrumb_lv1 = games_data.breadcrumb_level1;
    var breadcrump_lv1_url = games_data.breadcrump_level1_url;
    var game_name = games_data.game_name;
    var game_player = games_data.game_player_url;
    var image_game_logo = images_folder+"/"+game+"_logo.JPG"
    var image_game_1 = images_folder+"/"+game+"_1.JPG"
    var image_game_2 = images_folder+"/"+game+"_2.JPG"
    var image_game_3 = images_folder+"/"+game+"_3.JPG"
    var image_pad = images_folder+"/"+games_data.mobile_pad;
    var controls = games_data.controls;
    var description = games_data.description;
    var tricks = games_data.tricks;
    var game_mobile = games_data.game_mobile;
    var video = games_data.video;

