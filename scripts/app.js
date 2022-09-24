let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".header-icon");
let menuBtnIcon = document.querySelector(".header-icon i");

menuBtn.addEventListener("click", function () {
  if (menuBtnIcon.classList.contains("fa-bars")) {
    menu.style.left = "0";
    menuBtnIcon.classList = "fa fa-times";
  } else {
    menu.style.left = "-256px";
    menuBtnIcon.classList = "fa fa-bars";
  }
});

//menu
const menuItems = ["Home", "About", "How it works", "Clients", "Portfolio"];
menuItems.forEach((item) => {
  const menuItem = document.createElement("li");
  menuItem.className = "menu-item";
  const a = document.createElement("a");
  a.className="menu-link"
  a.innerHTML = `${item}`;
  menuItem.append(a);
  menu.appendChild(menuItem);
});


//works-content
const worksContent = document.querySelector(".works-content");
const worksContentItem= [
  {
    worksContentTitle:'Research Project',
    worksContentText:'There are many variations of passages of Lorem Ipsum available'
  },
  {
    worksContentTitle:'Targeting',
    worksContentText:'There are many variations of passages of Lorem Ipsum available'
  },
  {
    worksContentTitle:'Research Project',
    worksContentText:'There are many variations of passages of Lorem Ipsum available'
  }
]
worksContentItem.forEach((item)=>{
  const worksItem = document.createElement('div');
  worksItem.className= 'works-content-item';
  const h4= document.createElement('h4');
  h4.className='works-content-title';
  h4.innerHTML = item.worksContentTitle;
  const p = document.createElement('p');
  p.className= 'works-content-text';
  p.innerHTML= item.worksContentText;
  worksItem.appendChild(h4);
  worksItem.appendChild(p);
  worksContent.appendChild(worksItem)
})

//comments
const comments= document.querySelector('.comments');
const comment = [
  {
    commentBody :'Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.',
    imgSrc:"images/person-1.png",
    commentPerson:'Martin Jones, Creative Cons'
  },
  {
    commentBody :'Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.',
    imgSrc:"images/person-2.png",
    commentPerson:'Martin Jones, Creative Cons'
  },
  {
    commentBody :'Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.',
    imgSrc:"images/person-3.png",
    commentPerson:'Martin Jones, Creative Cons'
  }
]
comment.forEach((item)=>{
  const cm = document.createElement('div');
  cm.className='comment';
  commentContent= document.createElement('div');
  commentContent.className='comment-content';
  commentBody=document.createElement('p');
  commentBody.className='comment-body';
  commentBody.innerHTML=item.commentBody;
  commentContent.appendChild(commentBody)
  cm.appendChild(commentContent);
  commentInfo = document.createElement('div');
  commentInfo.className='comment-info';
  const img= document.createElement('img');
  img.className='comment-img';
  img.src= item.imgSrc;
  const commentPerson= document.createElement('p');
  commentPerson.className='comment-person';
  commentPerson.innerHTML= item.commentPerson;
  commentInfo.appendChild(img);
  commentInfo.appendChild(commentPerson)
  cm.appendChild(commentInfo);
  comments.appendChild(cm)
})

//companies
const companies= document.querySelector('.companies');
const Company= [
  {imgSrc:'images/logo-1.svg',
  imgAlt:'logo1'
  },
  {imgSrc:'images/logo-2.svg',
  imgAlt:'logo2'
  },
  {imgSrc:'images/logo-3.svg',
  imgAlt:'logo3'
  },
  {imgSrc:'images/logo-4.svg',
  imgAlt:'logo4'
  },
  {imgSrc:'images/logo-5.svg',
  imgAlt:'logo5'
  }
]
Company.forEach((item)=>{
  const img= document.createElement('img');
  img.className='companies-img';
  img.src= item.imgSrc;
  img.alt=item.imgAlt;
  companies.appendChild(img)
})

//portfolio
const portfolioItems= document.querySelector('.portfolio-items');
const portfolioItem=[
  'images/portfolio-1.jpg','images/portfolio-2.jpg','images/portfolio-3.jpg','images/portfolio-4.jpg','images/portfolio-5.jpg','images/portfolio-6.jpg'
]
portfolioItem.forEach((item)=>{
  const div= document.createElement('div');
  div.className='portfolio-item';
  portfolioItems.appendChild(div);
  const img= document.createElement('img');
  img.src= item;
  img.alt='portfolio';
  img.className='portfolio-img';
  div.appendChild(img)
})
