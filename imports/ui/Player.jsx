import React  ,{Component} from  'react';
import {PropTypes} from 'prop-types';
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200,lightBlue800,lightBlue50} from 'material-ui/styles/colors';

const styles={
  chip:{
    margin:4,
  },
  wrapper:{
    display:'flex',
    flexWrap: 'wrap',
  },
  button:{
    margin: 12,
  },
};

 export default class Player extends Component{
  showEditForm(){
    this.props.showEditForm();
  }

   render(){
      const  defense=this.props.player.duelTackling
                      + this.props.player.fieldCoverage
                      + this.props.player.blockingAbilities
                      + this.props.player.gameStrategy
                      + this.props.player.playmakingRisks;
      const  offense=this.props.player.KickingAbilities
                     + this.props.player.gameStrategy
                     + this.props.player.ballManipulation
                     + this.props.player.passingAbilities
                     + this.props.player.fieldCoverage
                     + this.props.player.playmakingRisks;
      const total=this.props.player.KickingAbilities
                     + this.props.player.gameStrategy
                     + this.props.player.ballManipulation
                     + this.props.player.passingAbilities
                     + this.props.player.fieldCoverage
                     + this.props.player.playmakingRisks
                     + this.props.player.duelTackling
                     + this.props.player.blockingAbilities;
     return(
       <Card>
         <CardMedia
             overlay={<CardTitle title={this.props.player.name}
               subtitle={`Offense: ${offense} - Defense: ${defense} - Total: ${total}`} />}
         >
           {/* <img src={this.props.player._id && this.props.player.avatar ? this.props.player._id + ".jpg" : "player.jpg" } alt="" /> */}
           <img src={this.props.player.name + ".jpg"} alt="No image" />
         </CardMedia>
         <CardText>
           <div style={styles.wrapper}>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                  {this.props.player.ballManipulation}
                </Avatar>
                Ball manipulation
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                  {this.props.player.KickingAbilities}
                </Avatar>
                Kicking abilities
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                  {this.props.player.passingAbilities}
                </Avatar>
                Passing abilities
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                  {this.props.player.duelTackling}
                </Avatar>
                Duel/Tackling abilities
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                  {this.props.player.fieldCoverage}
                </Avatar>
                Field speed coverage
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                  {this.props.player.blockingAbilities}
                </Avatar>
                Blocking abilities
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                  {this.props.player.gameStrategy}
                </Avatar>
                Game strategy
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                  {this.props.player.playmakingRisks}
                </Avatar>
                Playmaking risks
              </Chip>
          </div> {/* Chips wrapper */}
         </CardText>
         <CardActions>
          <RaisedButton
              label="Edit Player/Stats"
              labelPosition="before"
              style={styles.button}
              onClick={this.showEditForm.bind(this)}
             />
         </CardActions>
       </Card>
     );
   }
 }
Player.propTypes={
  player: PropTypes.object.isRequired,
}
