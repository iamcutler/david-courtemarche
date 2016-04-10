/**
 * Created by allancutler on 4/9/16.
 */

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-video-setclasses !*/
!function(e,n,a){function o(e,n){return typeof e===n}function s(){var e,n,a,s,t,c,r;for(var p in l)if(l.hasOwnProperty(p)){if(e=[],n=l[p],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(a=0;a<n.options.aliases.length;a++)e.push(n.options.aliases[a].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,t=0;t<e.length;t++)c=e[t],r=c.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),i.push((s?"":"no-")+r.join("-"))}}function t(e){var n=p.className,a=Modernizr._config.classPrefix||"";if(f&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+a+"no-js(\\s|$)");n=n.replace(o,"$1"+a+"js$2")}Modernizr._config.enableClasses&&(n+=" "+a+e.join(" "+a),f?p.className.baseVal=n:p.className=n)}function c(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):f?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}var i=[],l=[],r={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var a=this;setTimeout(function(){n(a[e])},0)},addTest:function(e,n,a){l.push({name:e,fn:n,options:a})},addAsyncTest:function(e){l.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=r,Modernizr=new Modernizr;var p=n.documentElement,f="svg"===p.nodeName.toLowerCase();Modernizr.addTest("video",function(){var e=c("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(a){}return n}),s(),t(i),delete r.addTest,delete r.addAsyncTest;for(var d=0;d<Modernizr._q.length;d++)Modernizr._q[d]();e.Modernizr=Modernizr}(window,document);

angular.module('DavidCourtemarche.directives')
  .directive('html5Video', function () {
  return {
    restrict: 'A', //this means the direct must be declared as an attribute on an element
    replace: false, //don't replace the surrounding element with the template code
    link: function (scope, element, attrs) { // manipulate the DOM in here
      if (!Modernizr.video) { //if html5 video is not supported start flowplayer
        //alert('flash video');
        flowplayer("flash-player", "/js/dependencies/flowplayer/flowplayer-3.2.16.swf", {
          clip: {
            url: scope.mp4Url,
            autoPlay: false,
            autoBuffering: true,
            scaling: "fit"
          },
          canvas: {
            backgroundColor: "#000000",
            backgroundGradient: "none"
          }
        });
      }
    },
    scope: {
      webmUrl: '@?', //binds property value to the element's attribute
      mp4Url: '@',
      videoWidth: '@?',
      videoHeight: '@?',
      splashImage: '@?'
    },
    template: `
      <div ng-style="{'height':'{{ videoHeight }}px'}">
        <video height="{{ videoHeight }}" autoplay controls>
          <source ng-src="{{ mp4Url }}" type="video/mp4" />
          <source ng-src="{{ webmUrl }}" type="video/webm" />
          <a id="flash-player" ng-style="{'width':'{{ videoWidth }}px','height':'{{ videoHeight }}px','display':'block','margin':'0 auto','background-image':'url({{ splashImage }})'}"></a>
        </video>
      </div>
    `
  }
});
