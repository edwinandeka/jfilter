/* 
 * @author edwin.ospina@iptotal.com (Edwin Ramiro Ospina Ruiz)
 * @date 07-Mar-2016
 * @version 1.0 
 */

(function( $ ){
    
   $.fn.jFilter = function(opc) {

    if (!String.prototype.contains) {
      String.prototype.contains = function (c) {
         return this.indexOf(c) != -1
      }
    }

    if (typeof opc.container  == 'string') {
      opc.container = $(opc.container);
    }

       var findId = function( el ){
            if(el.attr('id') === opc.hide.replace('#','')){
               return el;
            }
            return findId(el.parent());
         };

         var findClass = function( el ){
            if(el.hasClass(opc.hide.replace('.',''))){
               return el;
            }
            return findClass(el.parent());
         };

          var findElement = function( el, parent ){
            var elment = parent.find(opc.hide);
            if(elment.length > 0){
               return el;
            }
            return findElement(parent, parent.parent());
         };

        var  onSearch = function(event) {
          event.preventDefault();

          var text = $(event.target).val();
          $.each(opc.container.find(opc.findBy) , function(index, el) {

            var str = $(el).html();

            str = str.replace(/<[\w-:="';. _(),#.]+>/gmi, "");
            str = str.replace(/<\/[\w-:="';. _(),#.]+>/gmi, "");   

            str = str.toLowerCase();  
          
           
            if (opc.hide.contains('#')) {
               el = findId($(el));
            } else if (opc.hide.contains('.')) {
               el = findClass($(el));
            } else {
                el = findElement($(el), $(el).parent());
            }

            if(str.contains(text.toLowerCase())){
               el.show();
            } else{
               el.hide();
            }
          });

          opc.container.find('#jfilter-message').remove();
          if (opc.container.find(opc.hide).not('[style="display: none;"]').length <= 0 
            &&  opc.message) {
            opc.container.append('<div id="jfilter-message">' + opc.message + '</div>')
          } 
         };
        
      var input = this;
      input.on('keyup', onSearch);

      return this;
   }; 
})( jQuery );