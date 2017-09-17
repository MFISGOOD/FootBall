import React  ,{Component} from  'react';
import { Players } from '../../lib/players';

export default class New extends Component{
  constructor(props){
    super(props);
  }
   submitPlayer(event){
     event.preventDefault();
     let newplayer={
       name:this.refs.name.value,
       team:this.refs.team.value, //players's team
       ballManipulation:parseInt(this.refs.ballManipulation.value),
       KickingAbilities:parseInt(this.refs.KickingAbilities.value),
       passingAbilities:parseInt(this.refs.passingAbilities.value),
       duelTackling:parseInt(this.refs.duelTackling.value),
       fieldCoverage:parseInt(this.refs.fieldCoverage.value),
       blockingAbilities:parseInt(this.refs.blockingAbilities.value),
       gameStrategy:parseInt(this.refs.gameStrategy.value),
       playmakingRisks:parseInt(this.refs.playmakingRisks.value),
       notes:this.refs.notes.value, //notes for the player for coach
       createdAt:new Date(),
     }
     Players.insert(newplayer);

     this.props.history.push('/');

    //players.insert
   }//submitPlayer

   render(){
     return(
        <div className="row">
          <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
            <h3>Add a new player</h3>
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Name" ref="name" type="text" className="validate"/>
              </div>
              <div className="input-field col s6">
                <input placeholder="Team" ref="team" type="text" className="validate"/>
              </div>
            </div> {/* 1 row */}

            <div className="row">
              <div className=" col s6">
                <h5>Ball manipulation</h5>
                <select  className="browser-default" ref="ballManipulation" >
                  <option value="0">O - Hasn't demonstrated skills</option>
                  <option value="1">1 - Needs improvement</option>
                  <option value="2">2 - Skill acquired</option>
                  <option value="3">3 - Great skills/could teach </option>
                </select>
              </div>
              <div className="col s6">
                <h5>Kicking abilities</h5>
                <select className="browser-default" ref="KickingAbilities">
                  <option value="0">O - Hasn't demonstrated skills</option>
                  <option value="1">1 - Needs improvement</option>
                  <option value="2">2 - Skill acquired</option>
                  <option value="3">3 - Great skills/could teach </option>
                </select>
              </div>
            </div> {/* 2 row */}

            <div className="row">
              <div className=" col s6">
                <h5>Passing abilities</h5>
                <select  className="browser-default" ref="passingAbilities" >
                  <option value="0">O - Hasn't demonstrated skills</option>
                  <option value="1">1 - Needs improvement</option>
                  <option value="2">2 - Skill acquired</option>
                  <option value="3">3 - Great skills/could teach </option>
                </select>
              </div>
              <div className="col s6">
                <h5>Duel tackling</h5>
                <select className="browser-default" ref="duelTackling">
                  <option value="0">O - Hasn't demonstrated skills</option>
                  <option value="1">1 - Needs improvement</option>
                  <option value="2">2 - Skill acquired</option>
                  <option value="3">3 - Great skills/could teach </option>
                </select>
              </div>
            </div> {/* 3 row */}

            <div className="row">
              <div className=" col s6">
                <h5>Field coverage - speed</h5>
                <select  className="browser-default" ref="fieldCoverage" >
                  <option value="0">O - Hasn't demonstrated skills</option>
                  <option value="1">1 - Needs improvement</option>
                  <option value="2">2 - Skill acquired</option>
                  <option value="3">3 - Great skills/could teach </option>
                </select>
              </div>
              <div className=" col s6">
                <h5>Blocking abilities</h5>
                <select  className="browser-default" ref="blockingAbilities" >
                  <option value="0">O - Hasn't demonstrated skills</option>
                  <option value="1">1 - Needs improvement</option>
                  <option value="2">2 - Skill acquired</option>
                  <option value="3">3 - Great skills/could teach </option>
                </select>
              </div>
            </div> {/* 4 row */}

            <div className="row">
              <div className="col s6">
                <h5>Game strategy</h5>
                <select className="browser-default" ref="gameStrategy">
                  <option value="0">O - Hasn't demonstrated skills</option>
                  <option value="1">1 - Needs improvement</option>
                  <option value="2">2 - Skill acquired</option>
                  <option value="3">3 - Great skills/could teach </option>
                </select>
              </div>
              <div className=" col s6">
                <h5>Playmaking risks</h5>
                <select  className="browser-default" ref="playmakingRisks" >
                  <option value="0">O - Hasn't demonstrated skills</option>
                  <option value="1">1 - Needs improvement</option>
                  <option value="2">2 - Skill acquired</option>
                  <option value="3">3 - Great skills/could teach </option>
                </select>
              </div>
            </div> {/* 5 row */}
            <div className="row">
              <div className="input-field col s6">
                <textarea placeholder="Notes" ref="notes" className="materialize-textarea"/>
              </div>
              <div className="input-field col s6">
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>{/* 6 row */}
          </form> {/*form */}
        </div>
     );
   }
 }
