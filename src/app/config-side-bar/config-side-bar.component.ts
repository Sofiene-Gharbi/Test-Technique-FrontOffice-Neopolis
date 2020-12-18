import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-config-side-bar',
  templateUrl: './config-side-bar.component.html',
  styleUrls: ['./config-side-bar.component.css']
})
export class ConfigSideBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    (function($) {

      "use strict";

      var fullHeight = function() {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
          $('.js-fullheight').css('height', $(window).height());
        });

      };
      fullHeight();

      $('.sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });

    })(jQuery);

    $(function() {

      var $sidebar   = $("#sidebar"),
          $window    = $(window),
          offset     = $sidebar.offset(),
          topPadding = 15;

      $window.scroll(function() {
          if ($window.scrollTop() > offset.top) {
              $sidebar.stop().animate({
                  marginTop: $window.scrollTop() - offset.top + topPadding
              });
          } else {
              $sidebar.stop().animate({
                  marginTop: 0
              });
          }
      });

  });

  }


}
