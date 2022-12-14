const container = document.querySelector(".all");

container.addEventListener('click', (e) => {
  const tgt = e.target.closest("button");
  if (!tgt) return; 
  const countUp = tgt.classList.contains("countUp");
  const otherBtn = countUp ? tgt.parentElement.querySelector(".countDown") : tgt.parentElement.querySelector(".countUp");
  tgt.matches("button")
  const numSpan = tgt.closest(".rating").querySelector(".num");
  
  if(tgt.disabled) {
    return;
  }
  else if(otherBtn.disabled){
    otherBtn.disabled = false;
  }
  else {
    tgt.disabled = true;
  }
  let num = +numSpan.textContent;
  num += countUp ? 1 : -1;
  numSpan.textContent = num
});

const comment_username_el = document.querySelector('.comment-username')
  comment_username_el.focus()
const comment_text_el = document.querySelector('.comment-text')
const comment_el = document.querySelector('.comment')
  comment_el.addEventListener('submit', (e) => {
    e.preventDefault()
    const task = comment_text_el.value 
    const task_username_el = comment_username_el.value



    
    const pop_up_noname_el = document.querySelector('.pop-up-noname')
    function name() {
      pop_up_noname_el.classList.add('pop-up-noname-large')
      const pop_up_close_el = document.querySelector('.popup-btn')
      pop_up_close_el.addEventListener('click', () => {
      pop_up_noname_el.remove('pop-up-noname-large')
    })
    }
    
    const pop_up_nocomment_el = document.querySelector('.pop-up-nocomment')
    function comment() {
      pop_up_nocomment_el.classList.add('pop-up-nocomment-large')
      const pop_up_close_el = document.querySelector('.popup-btn1')
      pop_up_close_el.addEventListener('click', () => {
      pop_up_nocomment_el.remove('pop-up-nocomment-large')
    })
    }

    const pop_up_nothing_el = document.querySelector('.pop-up-nothing')
    function nothing() {
      pop_up_nothing_el.classList.add('pop-up-nothing-large')
      const pop_up_close_el = document.querySelector('.popup-btn2')
    pop_up_close_el.addEventListener('click', () => {
      pop_up_nothing_el.remove('pop-up-nothing-large')
    })
    }


    
    
    

    if(!task_username_el && !task) {
      nothing()
      return
    } else if(!task) {
      comment()
      return
    } else if(!task_username_el) {
      name()
      return
    }
    


  const sub_all_el = document.querySelector('.sub-all')

  const single_card_sm_el = document.createElement('div')
  single_card_sm_el.classList.add('single-card', 'sm')

  sub_all_el.appendChild(single_card_sm_el)

  const rating_el = document.createElement('div')
  rating_el.classList.add('rating')

  single_card_sm_el.appendChild(rating_el)

  const countUp_el = document.createElement('button')
  countUp_el.classList.add('countUp')
  countUp_el.textContent = '+'

  const span_el = document.createElement('span')
  span_el.classList.add('num')
  span_el.textContent = '0'

  const countDown_el = document.createElement('button')
  countDown_el.classList.add('countDown')
  countDown_el.textContent = '-'

  rating_el.appendChild(countUp_el)
  rating_el.appendChild(span_el)
  rating_el.appendChild(countDown_el)

  const wrapper_el = document.createElement('div')
  wrapper_el.classList.add('wrapper')

  single_card_sm_el.appendChild(wrapper_el)

  const top_el = document.createElement('div')
  top_el.classList.add('top')

  wrapper_el.appendChild(top_el)

  const top_left_el = document.createElement('div')
  top_left_el.classList.add('top-left')

  top_el.appendChild(top_left_el)

  const div_el = document.createElement('div')

  const img_el = document.createElement('img')


  img_el.src = 'Person 3.webp' 
  div_el.appendChild(img_el)

  const username_el = document.createElement('p')
  username_el.classList.add('username1')
  username_el.innerText = task_username_el

  const you_el = document.createElement('div')
  you_el.classList.add('you')
  you_el.textContent = 'you'

  const date_el = document.createElement('p')
  date_el.classList.add('date')
  date_el.textContent = '1 month ago'

  top_left_el.appendChild(div_el)
  top_left_el.appendChild(username_el)
  top_left_el.appendChild(you_el)
  top_left_el.appendChild(date_el)

  const two_button_el = document.createElement('div')
  two_button_el.classList.add('two-button')
  
  top_el.appendChild(two_button_el)

  const edit_button_el = document.createElement('button')
  edit_button_el.classList.add('reply-button')
  edit_button_el.innerHTML = '<box-icon name=edit-alt type=solid  color="#8F00FF" ></box-icon>Edit'

  const delete_button_el = document.createElement('button')
  delete_button_el.classList.add('del-button', 'reply-button')
  delete_button_el.innerHTML = '<box-icon name=trash-alt type=solid color="red" ></box-icon>Delete'

  two_button_el.appendChild(delete_button_el)
  two_button_el.appendChild(edit_button_el)

  let div_textarea_el = document.createElement('div')
  div_textarea_el.classList.add('wrapper-textarea')
  div_textarea_el.innerText = task
  const textarea = document.createElement('textarea');


  wrapper_el.appendChild(div_textarea_el)

  comment_text_el.value = ''
  comment_username_el.value = ''


  edit_button_el.addEventListener('click', () => {
    if(edit_button_el.innerText.toLowerCase() == 'edit') {
      div_textarea_el.parentNode.replaceChild(textarea, div_textarea_el)
      textarea.innerHTML = task;
      textarea.classList.add('wrapper-textarea1')
      textarea.focus()
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
      edit_button_el.innerHTML = '<box-icon name=save color="#8F00FF"></box-icon>Save'
    }
    else {
      div_textarea_el.innerHTML = textarea.value;
      textarea.parentNode.replaceChild(div_textarea_el, textarea);
      edit_button_el.innerHTML = '<box-icon type=solid name=edit-alt color="#8F00FF"></box-icon>Edit'
    }
  })

  delete_button_el.addEventListener('click', () => {
    sub_all_el.removeChild(single_card_sm_el)
  })



} )
