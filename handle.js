 $(document).ready(()=>{
  // handle experience
  function toggleMenu(){
    const menu = document.querySelector(".mini-link");
    const icon = document.querySelector(".clsShowHide");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  $('.clsShowHide,.m-link').click(()=>{
    toggleMenu();
  });

  let yearOfEx = 2020;
  var exTitle = document.getElementById('ex-title')
  let exTitle_2020_2021 = `2020 - 2021 | Đảm nhận vị trí Instructional Designer:`;
  let exTitle_2021_2022 = `2021 - 2022 | Đảm nhận vị trí Leader team nghiên cứu và phát triển:`;
  let exTitle2022_2023 = `2023 - Đến nay | Đảm nhận vị trí Project Supervisor:`;
  function handleExperience(yearOfEx){
    if(yearOfEx == 2020){
      exTitle.innerHTML = exTitle_2020_2021;
    }
    if(yearOfEx == 2021){
      exTitle.innerHTML = exTitle_2021_2022;
    }
    if(yearOfEx == 2022){
      exTitle.innerHTML = exTitle2022_2023;
    }
    if(yearOfEx == 2023){
      exTitle.innerHTML = exTitle_2023;
    }
  }
  handleExperience(yearOfEx);
  $('#year-21').click(()=>{
    yearOfEx = 2021;
    handleExperience(yearOfEx);
  });

  $('#year-22').click(()=>{
    yearOfEx = 2022;
    handleExperience(yearOfEx);
  });

  $('#year-23').click(()=>{
    yearOfEx = 2023;
    handleExperience(yearOfEx);
  });

  
 });