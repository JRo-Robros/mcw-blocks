(function(){
  let sboxes = document.getElementsByClassName('wp-block-mcw-blocks-slidebox')
  for(let i = 0; i < sboxes.length; i++){
    let parent = sboxes[i].parentNode
    sboxes[i].addEventListener( 'mouseover', e => {
      if(sboxes[i].classList.contains('open') != true){
        let open = parent.getElementsByClassName('open')
        for(let j = 0; j < open.length; j++){
          open[j].classList.remove('open')
        }
        sboxes[i].classList.add('open')
      }
    })
  }
})()