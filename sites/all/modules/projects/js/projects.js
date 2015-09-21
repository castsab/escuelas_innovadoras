(function ($) {
  $(document).ready(function(){
    $('#tbProjects').dataTable({
        "bPaginate": false,
        "bSort": false,
        "oLanguage": {
            "sUrl": "sites/all/modules/projects/js/Spanish.txt"
        }
    });
  });
})(jQuery);


