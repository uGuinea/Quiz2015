var path= require("path");

var Sequelize = require('sequelize');

var sequelize = new Sequelize(null,null,null,
  {dialect:"sqlite",storage:"quiz.sqlite"});

  var Quiz = sequelize["import"](path.join(__dirname,'quiz'));

  exports.Quiz = Quiz;

  sequelize.sync().then(function(){
    Quiz.count().then(function(count){
      //if(count===0){
        Quiz.create({pregunta:'aaaaS Capital de Italiaw',
        respuesta:"Roma"}
      ).then(function(){console.log("Base de datos started")});
      //}
    });
  });
