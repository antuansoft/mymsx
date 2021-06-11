  function breadcrumbByReferer(referer){
    var indexFav = referer.indexOf("favorites")   
    var indexMot = referer.indexOf("motor")   
    var indexSpo = referer.indexOf("sport")   
    var indexStr = referer.indexOf("strategy")   
    var indexArc = referer.indexOf("arcade")   
    var indexWar = referer.indexOf("guerra")   
    
    if (indexFav>=0)
      return "<a href='favorites.html'>/favoritos</a>";
    else if (indexMot>=0)
      return "<a href='motor.html'>/motor</a>"
    else if (indexSpo>=0)
      return "<a href='sports.html'>/deportes</a>";
    else if (indexStr>=0)
      return "<a href='strategy.html'>/estrategia</a>";
    else if (indexArc>=0)
      return "<a href='arcade.html'>/arcade</a>"
    else if (indexWar>=0)
      return "<a href='war.html'>/guerra</a>";
    else 
      return null;
  }