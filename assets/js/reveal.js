const tabs = document.querySelectorAll('.tabs li')
const tabs_content = document.querySelectorAll('#tab-content > div')

tabs.forEach((tab)=>{
  tab.addEventListener('click',() => {
    tabs.forEach(item=>item.classList.remove('is-active'))
    tab.classList.add('is-active');

    const target = tab.dataset.target
    tabs_content.forEach(content =>{
      if (content.getAttribute('id')==target){
        content.classList.remove('is-hidden');
      }
      else{
        content.classList.add('is-hidden');
      }
    })
  })
})
