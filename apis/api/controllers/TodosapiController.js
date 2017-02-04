/**
 * TodosapiController
 *
 * @description :: Server-side logic for managing todosapis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    upadteTodo : function(req,res){
        Todoapis.update(req.body.id,{name : req.body.name}).exec(function(err, update){
            res.json(update);
        });
    }
};

