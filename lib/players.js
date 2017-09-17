import { Mongo } from 'meteor/mongo';

export const Players = new Mongo.Collection('players');

const PlayerSchema=new SimpleSchema({
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
  createdAt:{type: Date, defaultValue: new Date()}
});

Players.attachSchema(PlayerSchema);
