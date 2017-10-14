import React  ,{Component} from  'react';
import {Radar} from 'react-chartjs-2';
import Divider from 'material-ui/Divider';


 export default class TeamStats extends Component{

   render(){
     const max=3;
     const numPlayers=this.props.players.length;

     //const team = get a total for ballManipulation
     //const possible = 3*numPlayers
     //team/possible
     const ballManipulation=Math.round((this.props.players.reduce((ballManipulation,player)=>{
       return ballManipulation + player.ballManipulation;
     },0)/(max*this.props.players.length))*100);
     const KickingAbilities=Math.round((this.props.players.reduce((KickingAbilities,player)=>{
       return KickingAbilities + player.KickingAbilities;
     },0)/(max*this.props.players.length))*100);
     const passingAbilities=Math.round((this.props.players.reduce((passingAbilities,player)=>{
       return passingAbilities + player.passingAbilities;
     },0)/(max*this.props.players.length))*100);
     const duelTackling=Math.round((this.props.players.reduce((duelTackling,player)=>{
       return duelTackling + player.duelTackling;
     },0)/(max*this.props.players.length))*100);
     const fieldCoverage=Math.round((this.props.players.reduce((fieldCoverage,player)=>{
       return fieldCoverage + player.fieldCoverage;
     },0)/(max*this.props.players.length))*100);
     const blockingAbilities=Math.round((this.props.players.reduce((blockingAbilities,player)=>{
       return blockingAbilities + player.blockingAbilities;
     },0)/(max*this.props.players.length))*100);
     const gameStrategy=Math.round((this.props.players.reduce((gameStrategy,player)=>{
       return gameStrategy + player.gameStrategy;
     },0)/(max*this.props.players.length))*100);
     const playmakingRisks=Math.round((this.props.players.reduce((playmakingRisks,player)=>{
       return playmakingRisks + player.playmakingRisks;
     },0)/(max*this.props.players.length))*100);

     const defense=Math.round((duelTackling+fieldCoverage+blockingAbilities+gameStrategy+playmakingRisks)/5);
     const offense=Math.round((KickingAbilities+ballManipulation+passingAbilities+fieldCoverage+gameStrategy+playmakingRisks)/6);

     const total= Math.round((KickingAbilities+ballManipulation+passingAbilities+fieldCoverage+gameStrategy+playmakingRisks+duelTackling+blockingAbilities)/8);

     const data = {
       labels: ['Ball manipulation', 'Kicking', 'Passing', 'Duel/Tackling', 'Field coverage', 'Blocking', 'Strategy','Risks'],
       datasets: [
         {
           label: 'In % of max possible',
           backgroundColor: 'rgba(143,202,249,0.2)',
           borderColor: 'rgba(12,71,161,1)',
           pointBackgroundColor: 'rgba(12,71,161,1)',
           pointBorderColor: '#fff',
           pointHoverBackgroundColor: '#fff',
           pointHoverBorderColor: 'rgba(12,71,161,1)',
           data: [ballManipulation,KickingAbilities,passingAbilities,
                  duelTackling, fieldCoverage,blockingAbilities,
                  gameStrategy,playmakingRisks
                 ]
         },

       ]
     };
     return(
       <div>
           <h3>Team stats </h3>
           <div className="row">
             <div className="col s12 m7">
               <Radar data={data}
                 width={500}
                 height={500}
                 option={{maintainAspectRatio:false}}
               />
             </div>
             <div className="col s12 m5">
               <h4>Scores in % of max possible</h4>
               <Divider/>
               <h4>Team's offense: {offense}%</h4>
               <h4>Team's defense: {defense}%</h4>
               <h4>Team's total: {total}%</h4>
               <Divider/>
               <h4>Number of players: {this.props.players.length}</h4>
             </div>
           </div>
       </div>

     );
   }
 }
