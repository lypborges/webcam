import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
   this._super(...arguments);
   this.set('player', document.getElementById('player'));
   this.set('snapshotCanvas', document.getElementById('snapshot'));
   navigator.mediaDevices.getUserMedia({video: true})
       .then((stream) => {this.send('handleSuccess', stream)});
  },
  actions: {
    onCapture(){
      let snapshot = this.get('snapshotCanvas');
      let context = snapshot.getContext('2d');
      context.drawImage(this.get('player'), 0, 0, snapshot.width, snapshot.height);
    },
    handleSuccess(stream){
      this.set('player.srcObject',stream);
    }
  }
});
