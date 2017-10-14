import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import {Players} from '../imports/api/players'

// Deny all client-side updates on the Lists collection
Players.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; },
});
Players.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
const PlayerSchema=new SimpleSchema({
  _id:{type:String, optional:true},
  name:{type: String},
  team:{type: String}, //players's team
  ballManipulation:{type: Number, defaultValue:0},
  KickingAbilities:{type: Number, defaultValue:0},
  passingAbilities:{type: Number, defaultValue:0},
  duelTackling:{type: Number, defaultValue:0},
  fieldCoverage:{type: Number, defaultValue:0},
  blockingAbilities:{type: Number, defaultValue:0},
  gameStrategy:{type: Number, defaultValue:0},
  playmakingRisks:{type: Number, defaultValue:0},
  notes:{type: String, optional:true}, //notes for the player for coach
  createdAt:{type: Date, defaultValue: new Date()},
  updateAt:{type: Date, defaultValue: new Date()},
  owner:{type: String},
});
const updatePlayerSchema = new SimpleSchema([PlayerSchema, {_id: {type: String} }]);

Players.attachSchema(PlayerSchema);
Meteor.publish('players',function(){
  return Players.find({owner: this.userId});
});

Meteor.methods({
  'insert.player'(player){
    if(!this.userId){
      throw new Meteor.Error(400, "you must be logged in to perform this action.");
    }else{
      player.owner= this.userId;
      player.createdAt=new Date();
      PlayerSchema.validate(player);
      return Players.insert(player);
    }
  },
  'update.player'(player){
    if(!this.userId){
      throw new Meteor.Error(400, "you must be logged in to perform this action.");
    }else{
      const rightPlayer=Players.findOne({_id:player._id,owner:this.userId});
      if(!rightPlayer){
        throw new Meteor.Error(401, "You can not perform this action: The data are corrupted");
      }
      check(player, {
        _id:String,
        name: String,
        team: String, //players's team
        ballManipulation: Number,
        KickingAbilities: Number,
        passingAbilities: Number,
        duelTackling: Number,
        fieldCoverage: Number,
        blockingAbilities: Number,
        gameStrategy: Number,
        playmakingRisks: Number,
        notes:String, //notes for the player for coach
        owner: String,
      });
      rightPlayer.owner= this.userId;
      rightPlayer.name=player.name;
      rightPlayer.team=player.team; //players's team
      rightPlayer.ballManipulation=parseInt(player.ballManipulation);
      rightPlayer.KickingAbilities=parseInt(player.KickingAbilities);
      rightPlayer.passingAbilities=parseInt(player.passingAbilities);
      rightPlayer.duelTackling=parseInt(player.duelTackling);
      rightPlayer.fieldCoverage=parseInt(player.fieldCoverage);
      rightPlayer.blockingAbilities=parseInt(player.blockingAbilities);
      rightPlayer.gameStrategy=parseInt(player.gameStrategy);
      rightPlayer.playmakingRisks=parseInt(player.playmakingRisks);
      rightPlayer.notes=player.notes; //notes for the player for coach
      rightPlayer.updateAt=new Date();
      PlayerSchema.validate(rightPlayer);
      return Players.update(rightPlayer._id,{$set:rightPlayer});
    }

  },
  'delete.player'(playerId){
    if(!this.userId){
      throw new Meteor.Error(400, "you must be logged in to perform this action.");
    }else{
      check(playerId,String);
      const rightPlayer=Players.findOne({_id:playerId,owner:this.userId});
      if(!rightPlayer){
        throw new Meteor.Error(401, "You can not perform this action: The data  are corrupted");
       }
    Players.remove(playerId);//no secure
    }
}

});
