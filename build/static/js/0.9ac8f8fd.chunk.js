(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{411:function(t,e,r){"use strict";r.r(e),r.d(e,"createSwipeBackGesture",(function(){return o}));var n=r(27),a=r(128),o=(r(76),function(t,e,r,o,i){var c=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:r,onMove:function(t){var e=t.deltaX/c.innerWidth;o(e)},onEnd:function(t){var e=t.deltaX,r=c.innerWidth,a=e/r,o=t.velocityX,u=r/2,s=o>=0&&(o>.2||t.deltaX>u),l=(s?1-a:a)*r,d=0;if(l>5){var h=l/Math.abs(o);d=Math.min(h,540)}i(s,a<=0?.01:Object(n.j)(0,a,.9999),d)}})})}}]);
//# sourceMappingURL=0.9ac8f8fd.chunk.js.map