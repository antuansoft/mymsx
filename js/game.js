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

