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
    var game_name = games_data.game_name;
    var game_player = games_data.game_player;
    var image_game_logo = images_folder+"/"+game+"_logo.JPG"
    var image_game_1 = images_folder+"/"+game+"_1.JPG"
    var image_game_2 = images_folder+"/"+game+"_2.JPG"
    var image_game_3 = images_folder+"/"+game+"_3.JPG"
    var controls = games_data.controls;
    var description = games_data.description;

