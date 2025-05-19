                 // navbar project
                 
        btnOpen = document.getElementById('open');
        btnClose = document.getElementById('close');
        container = document.querySelector('.container');

        btnClose.onclick = function(){
          container.classList.add('hide');
          this.classList.add('hide'); // this is the same like btnClose
          btnOpen.classList.remove('hide');

        }
        btnOpen.onclick = function(){
          this.classList.add('hide'); //this is the same like btnOpen
          btnClose.classList.remove('hide');
          container.classList.remove('hide');

        }
            