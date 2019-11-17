// 8friends (c) by Johannes J. Schmidt

// http://wpaudioplayer.com/
//function setupAudioPlayer() {
  AudioPlayer.setup("/player.swf");
//}

//function setupVideoPlayer() {
  jQuery(function() {
  	jQuery("a.flowplayer").flowembed("/FlowPlayerLight.swf",
  	  {	initialScale:'scale',
                  showStopButton: false, 
                  showScrubber: false, 
                  showVolumeSlider: false,
                  showMuteVolumeButton: false, 
                  showFullScreenButton: false, 
                  showMenu: false, 
                  controlsOverVideo: 'locked',
                  controlBarBackgroundColor: -1,
                  controlBarGloss: 'none' 
  	  }
  	);		
  });
//}

function sortableMenu(id) {
  Sortable.create( id, {
    onUpdate:function() {
      new Ajax.Request('/pages/order', {
        asynchronous:true,
        evalScripts:true,
        parameters:Sortable.serialize(id) + '&authenticity_token=' + encodeURIComponent(AUTH_TOKEN)
      })
    },
    tree:true
  })
}
