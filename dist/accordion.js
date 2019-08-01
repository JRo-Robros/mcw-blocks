(function(){
  // let acc = document.getElementsByClassName('wp-block-mcw-blocks-accordion-trigger')
  let acc = jQuery('.wp-block-mcw-blocks-accordion-trigger')
  for(let i = 0; i < acc.length; i++){
    let content = acc[i].parentNode.getElementsByClassName('wp-block-mcw-blocks-accordion-content')
    jQuery(content).hide()
    acc[i].addEventListener('click', e => {
      acc[i].parentNode.classList.toggle('open')
      jQuery(content).slideToggle()
		if (acc[i].parentNode.classList.contains('open')){
		document.querySelector('.wp-block-mcw-blocks-accordion-content').scrollIntoView({ 
  behavior: 'smooth' 
});
		}
    })
  }
})()