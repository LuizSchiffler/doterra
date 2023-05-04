angular.module("directives",[]).directive('youtubeDirective',['$sce',function($sce){return{restrict:'A',scope:{youtubeId:'=',autoplay:'='},replace:true,template:'<iframe src="{{url}}" frameborder="0" allowfullscreen></iframe>',link:function(scope){scope.$watch('youtubeId',function(newVal){if(newVal){scope.url=$sce.trustAsResourceUrl("//www.youtube.com/embed/"+newVal+'?rel=0&showinfo=0&modestbranding=1&theme=light&autoplay='+scope.autoplay+'&wmode=transparent');}});}};}]).directive('resize',function($window){return function(scope){scope.width=$window.innerWidth;scope.height=$window.innerHeight;angular.element($window).bind('resize',function(){scope.$apply(function(){scope.width=$window.innerWidth;scope.height=$window.innerHeight;});});};});