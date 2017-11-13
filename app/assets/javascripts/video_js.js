jQuery(document).ready(function($) {
  function intializePlayer(){
    var vid, playbtn, seekslider, curtimetext, durtimetext, mutebtn, volumeslider, fullscreenbtn, lowVol, HightVol, icon, fill;
    vid = $(".main-video");
    controls = $(".video-controls");
    playbtn = $(".play-btn");
    seekslider = $(".seekslider");
    curtimetext = $(".curtimetext");
    durtimetext = $(".durtimetext");
    mutebtn = $(".mutebtn");
    volumeslider = $(".volumeslider");
    fullscreenbtn = $(".fullscreenbtn");
    lowVol = $('.fa-volume-down');
    HightVol = $('.fa-volume-up');
    icon = $('.fa-volume-off');
    fill = $('.fill');
    vid.click(function() {
      playPause($(this));
    });

    playbtn.click(function() {
      playPause($(this));
    });

    $('.seekslider').on("input", function() {
      vidSeek();
    });

    vid.on('timeupdate', function() {
      seektimeupdate();
    });

    mutebtn.click(function(e) {
      vidmute();
    });

    volumeslider.on('change', function() {
      setvolume();
    });

    fullscreenbtn.click(function(e) {
      toggleFullScreen();
    });

    function playPause(vid){
      var pause = $('.fa-pause');
      var play = $('.fa-play');
      if(vid.get(0).paused){
        vid.get(0).play()
        play.hide();
        pause.show();
        controls.addClass('-hidden');
      } else {
        vid.get(0).pause();
        pause.hide();
        play.show();
        controls.removeClass('-hidden');
      }
    }
    function vidSeek(){
      var seekto = vid.get(0).duration * (seekslider.val() / 100);
      vid.get(0).currentTime = seekto;
      fill.css('width', seekslider.val() + '%');
    }
    function seektimeupdate(){
      var nt = vid.get(0).currentTime * (100 / vid.get(0).duration);
      var curmins = Math.floor(vid.get(0).currentTime / 60);
      var cursecs = Math.floor(vid.get(0).currentTime - curmins * 60);
      var durmins = Math.floor(vid.get(0).duration / 60);
      var dursecs = Math.floor(vid.get(0).duration - durmins * 60);
      seekslider.val(Math.floor(nt));
      seekslider.text(vid.get(0).currentTime);
      if (nt < 99) {
        if (nt < 70) {
          fill.css('width', 'calc('+ nt + '% - .35rem)');
        }else {
          fill.css('width', 'calc('+ nt + '% - .75rem)');
        }
      }
      if(cursecs < 10){ cursecs = "0"+cursecs; }
      if(dursecs < 10){ dursecs = "0"+dursecs; }
      if(curmins < 10){ curmins = "0"+curmins; }
      if(durmins < 10){ durmins = "0"+durmins; }
      curtimetext.text(curmins+":"+cursecs);
      durtimetext.text(durmins+":"+dursecs);
    }
    function vidmute(){
      if(vid.get(0).muted){
        vid.get(0).muted = false;
        volumeslider.val(0);
        icon.hide();
        if (vid.get(0).volume > 0.5) {
          HightVol.show();
        }else {
          lowVol.show();
        }
      } else {
        vid.get(0).muted = true;
        lowVol.hide();
        HightVol.hide();
        icon.show();
      }
    }
    function setvolume(){
      vid.get(0).volume = volumeslider.val() / 100;
      if (vid.get(0).volume > 0.5) {
        lowVol.hide();
        HightVol.show();
      }else {
        lowVol.show();
        HightVol.hide();
      }
    }
    function toggleFullScreen(){
      if(vid.get(0).requestFullScreen){
        vid.get(0).requestFullScreen();
      } else if(vid.get(0).webkitRequestFullScreen){
        vid.get(0).webkitRequestFullScreen();
      } else if(vid.get(0).mozRequestFullScreen){
        vid.get(0).mozRequestFullScreen();
      }
    }
  }
  intializePlayer();
});
