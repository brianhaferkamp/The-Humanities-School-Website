function toggle_element(element, speed) {

    $(element).toggle(speed);

    $('.course-nav').click(function() {
      var $this = $(this),
          $siblings = $this.parent().children(),
          position = $siblings.index($this);

      $('')
    })
}
