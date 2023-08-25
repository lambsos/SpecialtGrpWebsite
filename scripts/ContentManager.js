


const contentManager = document.getElementById("ContentManager");
const BrokerageSelector = document.getElementById("BrokerageSelector");
const CommercialSelector = document.getElementById("CommercialSelector")
const DevelopementSelector = document.getElementById("DevelopementSelector");
const AboutUsSelector = document.getElementById("AboutUs");

BrokerageSelector.addEventListener('click', () =>selectBrokerage(contentManager));
CommercialSelector.addEventListener('click', ()=>selectCommercial(contentManager));
DevelopementSelector.addEventListener('click', () =>selectDevelopement(contentManager));
AboutUsSelector.addEventListener('click', () =>selectAboutUs(contentManager));

//start with the abous us page
selectAboutUs(contentManager);
//selectCommercial(contentManager);
//selectDevelopement(contentManager);


//defining functions


function clearContent(contentManager) {
    while (contentManager.firstChild) {
        contentManager.removeChild(contentManager.firstChild);
    }
}

//this switches the content on the contentManager to our desired brokerage "page"
function selectBrokerage(contentManager) {
    clearContent(contentManager);
    

        

        // Create the first agent element
    var agent1 = document.createElement("div");
    agent1.className = "Broker";
    agent1.id = "AgentBio1";

    var heading1 = document.createElement("h2");
    heading1.textContent = "Charles Eldredge - Broker";
    agent1.appendChild(heading1);

    var photo1 = document.createElement("div");
    photo1.className = "BrokerPhotoWrapper";
    agent1.appendChild(photo1);

    var img1 = document.createElement("img");
    img1.src = "images/agents/Charles Photo.jpg";
    photo1.appendChild(img1);

    var description1 = document.createElement("p");
    description1.className = "AgentDescriptionLeft";
    description1.textContent = "Brokerage Description";
    agent1.appendChild(description1);

    // Create the second agent element
    var agent2 = document.createElement("div");
    agent2.className = "AgentBioRight";
    agent2.id = "AgentBio2";

    var heading2 = document.createElement("h2");
    heading2.textContent = "Shel Eldredge";
    agent2.appendChild(heading2);

    var photo2 = document.createElement("div");
    photo2.className = "AgentPhotoWrapperRight";
    agent2.appendChild(photo2);

    var img2 = document.createElement("img");
    img2.src = "images/Placeholder.png";
    photo2.appendChild(img2);

    var description2 = document.createElement("p");
    description2.className = "AgentDescriptionRight";
    description2.textContent = "Description of Shel Eldredge";
    agent2.appendChild(description2);

    // Create the third agent element
    var agent3 = document.createElement("div");
    agent3.className = "AgentBioLeft";
    agent3.id = "AgentBio3";

    var heading3 = document.createElement("h2");
    heading3.textContent = "Scot Halladay ";
    agent3.appendChild(heading3);

    var photo3 = document.createElement("div");
    photo3.className = "AgentPhotoWrapperLeft";
    agent3.appendChild(photo3);

    var img3 = document.createElement("img");
    img3.src = "images/Placeholder.png";
    photo3.appendChild(img3);

    var description3 = document.createElement("p");
    description3.className = "AgentDescriptionLeft";
    description3.textContent = "Scot's Description";
    agent3.appendChild(description3);

    // Create the fourth agent element
    var agent4 = document.createElement("div");
    agent4.className = "AgentBioRight";
    agent4.id = "AgentBio4";

    var heading4 = document.createElement("h2");
    heading4.textContent = "Carlie Eldredge";
    agent4.appendChild(heading4);

    var photo4 = document.createElement("div");
    photo4.className = "AgentPhotoWrapperRight";
    agent4.appendChild(photo4);

    var img4 = document.createElement("img");
    img4.src = "images/Placeholder.png";
    photo4.appendChild(img4);

    var description4 = document.createElement("p");
    description4.className = "AgentDescriptionRight";
    description4.textContent = "Carlie Description";
    agent4.appendChild(description4);

    // Append all agent elements to the parent container
    var contentManager = document.getElementById("ContentManager");
    contentManager.appendChild(agent1);
    contentManager.appendChild(agent2);
    contentManager.appendChild(agent3);
    contentManager.appendChild(agent4);

    return;

}
function selectCommercial(contentManager) {
    clearContent(contentManager);
    
    //instantiating the elements.
    // Create the necessary elements
    var commercialWrapper = document.createElement('div');
    commercialWrapper.id = 'CommercialWrapper';

    var housingOptions = document.createElement('div');
    housingOptions.id = 'HousingOptions';

    var multiFamilyOption = document.createElement('h2');
    multiFamilyOption.id = 'MultiFamilyOption';
    multiFamilyOption.textContent = 'MultiFamily';

    var retailOption = document.createElement('h2');
    retailOption.id = 'RetailOption';
    retailOption.textContent = 'Retail';

    var industrialOption = document.createElement('h2');
    industrialOption.id = 'IndustrialOption';
    industrialOption.textContent = 'Industrial';

    var officeOption = document.createElement('h2');
    officeOption.id = 'OfficeOption';
    officeOption.textContent = 'Office';

    var commercialTabContent = document.createElement('div');
    commercialTabContent.id = 'CommercialTabContent';

    var commercialSlideshowSizer = document.createElement('div');
    commercialSlideshowSizer.id = 'CommercialSlideshowSizer';

    var slideshowContainer = document.createElement('div');
    slideshowContainer.id = 'slideshow-container';

    var slideshow = document.createElement('div');
    slideshow.id = 'slideshow';

    var image1 = document.createElement('img');
    image1.src = 'images/ImagingCenterZoomedRight.jpg';
    image1.className = 'slide';

    var image2 = document.createElement('img');
    image2.src = 'images/ImagingCenterFrontLeft.JPG';
    image2.className = 'slide';

    var contentText = document.createElement('p');
    contentText.id = "CommercialTabDescription";
    contentText.textContent = 'content text';

    // Append the elements to their respective parents
    slideshow.appendChild(image1);
    slideshow.appendChild(image2);

    slideshowContainer.appendChild(slideshow);
    commercialSlideshowSizer.appendChild(slideshowContainer);

    commercialTabContent.appendChild(commercialSlideshowSizer);
    commercialTabContent.appendChild(contentText);

    housingOptions.appendChild(multiFamilyOption);
    housingOptions.appendChild(retailOption);
    housingOptions.appendChild(industrialOption);
    housingOptions.appendChild(officeOption);

    commercialWrapper.appendChild(housingOptions);
    commercialWrapper.appendChild(commercialTabContent);

    // Append the CommercialWrapper to the desired parent element
    
    contentManager.appendChild(commercialWrapper);

    //now lets add the changing tab functionality
    multiFamilyOption.addEventListener('click', () =>swapCommercialTab(contentManager, 'multiFamily')); //this function is a switch case that adds the correct content.
    retailOption.addEventListener('click', () =>swapCommercialTab(contentManager, 'retail')); //this function is a switch case that adds the correct content.
    industrialOption.addEventListener('click', () =>swapCommercialTab(contentManager, 'industrial')); //this function is a switch case that adds the correct content.
    officeOption.addEventListener('click', () =>swapCommercialTab(contentManager, 'office')); //this function is a switch case that adds the correct content.
    startSlideshow(slideshow);
    return;
}
function selectDevelopement(contentManager) {
    clearContent(contentManager);
    
    function addDevelopement(description, imageSources, developmentName, contentManager){
        // Create the h1 element
        var h1 = document.createElement("h2");
        h1.className = "DevelopedFacilityName";
        h1.textContent = developmentName;

        // Create the development description div
        var developement = document.createElement("div");
        developement.className = "DevelopmentGrid";

        var descriptionDiv = document.createElement("p");
        descriptionDiv.className = "DevelopmentDescription";
        descriptionDiv.textContent = description;

        var commercialSlideshowSizer = document.createElement('div');
        commercialSlideshowSizer.id = 'CommercialSlideshowSizer';

        var slideshowContainer = document.createElement('div');
        slideshowContainer.id = 'dev-slideshow-container';

        var slideshow = document.createElement('div');
        slideshow.id = 'slideshow';

        imageSources.forEach(element => {
            var image = document.createElement('img');
            image.src = element;
            image.className = 'slide';
            
            slideshow.appendChild(image);
            
        });


        // Append the created elements to the parent element
        slideshowContainer.appendChild(slideshow);

        developement.appendChild(h1);
        developement.appendChild(slideshowContainer);
        developement.appendChild(descriptionDiv);

        contentManager.appendChild(developement);
        startSlideshow(slideshow);
    }
    addDevelopement("Developed and built by Specialty Group Inc, Alpine Meadows is a 32 bed assisted living facility with approximately 22,000 square feet and services the needs of the elderly in the greater boise metro area.", ['images/developement/AlpineMeadows1.png', 'images/developement/AlpineMeadows2.png'], "Alpine Meadows", contentManager);
    addDevelopement("Imaging Center of Idaho is a specialized medical outpatient imaging facility which provides MRI, CT, X-ray, ultrasound, mammography, fluoroscopy and x-ray services to the greater Boise Metro Area.", ["images/ImagingCenterFrontLeft.JPG", "images/ImagingCenterZoomedRight.jpg"], "Imaging Center of Idaho", contentManager);
    addDevelopement("Developed small lot subdivision for local drug testing facility in Meridian.", ["images/Placeholder.png"],  "Minert Development", contentManager );
    addDevelopement("Project custom designed and built for attorneys practicing estate planning and business law in Eagle Idaho. ", ["images/Placeholder.png"],  "Idaho Estate Planning", contentManager );
    addDevelopement("Medical facility run by Portneuf Medical Center in Pocatello Idaho", ["images/Placeholder.png"],  "Advanced Imaging Center of Pocatello", contentManager );
    addDevelopement("56 lot residential subdivision developed in the south Boise area with custom homes. ", ["images/Placeholder.png"],  "Bridgeport Development", contentManager );
    addDevelopement("4000 square foot custom designed home built in Meridian", ["images/Placeholder.png"],  "Wheeler Home", contentManager );
    addDevelopement("3500 square foot custom designed and built home in Boise Idaho", ["images/Placeholder.png"],  "Wilcox home", contentManager );
    addDevelopement("3800 square foot custom built home in Meridian.", ["images/Placeholder.png"],  "Pear Blossom Home", contentManager );
    
    
    return;
}

function selectAboutUs(contentManager) {
    clearContent(contentManager);
    // Get the parent container
    // Create the slideshow container element
    const slideshowContainer = document.createElement("div");
    slideshowContainer.id = "slideshow-container";

    // Create the slideshow element
    const slideshow = document.createElement("div");
    slideshow.id = "slideshow";

    // Array of image sources
    const imageSources = [
    "images/aboutUs/Wheeler Home.jpg",
    "images/aboutUs/Wilcox front 2.jpg",
    "images/aboutUs/ICI Front Elevation.jpg",
    "images/aboutUs/Idaho Estate Planning Building.png",
    ];

    // Create and append the image elements
    imageSources.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("slide");
    slideshow.appendChild(img);
    });

    // Create and append the About Us text element
    const aboutUsText = document.createElement("strong");
    aboutUsText.id = "AboutUsText";
    aboutUsText.textContent = " Specialty Group Inc. was started in 1995 building custom homes in the Boise metro area. In 2000 Specialty Group added brokerage, development and commercial contracting services to the company helping buyers, sellers and investors with real estate transactions. In 2019 Specialty Group started offering commercial appraisal services."; // Add your text here
    slideshow.appendChild(aboutUsText);

    // Append the slideshow element to the slideshow container
    slideshowContainer.appendChild(slideshow);

    // Append the slideshow container to the document body
    contentManager.appendChild(slideshowContainer);
    startSlideshow(slideshow);
    return;
}

//slideshow
function startSlideshow(slideshow) {
    var slides = slideshow.getElementsByClassName("slide");
    var currentSlide = 0;
  
    // Show the initial slide
    slides[currentSlide].classList.add("active");
  
    setInterval(function() {
      // Hide the current slide
      slides[currentSlide].classList.remove("active");
  
      // Move to the next slide
      currentSlide = (currentSlide + 1) % slides.length;
  
      // Show the next slide
      slides[currentSlide].classList.add("active");
    }, 10000); // 10 seconds
  }
  function swapCommercialTab(contentManager, selectedTab) {
    //find the correct tab and add the corresponding content

    
    //clear the photos on slides to allow new ones, and not show the old ones
    let slideshow = document.getElementById("slideshow");
    clearContent(slideshow);

    function selectUnderline(elementId){
        let headers = Array.from(document.getElementById("HousingOptions").children);
        for (const Commercialheader of headers){
            Commercialheader.style.textDecoration = "none";
        }
        let selectedTabHeader = document.getElementById(elementId);
            selectedTabHeader.style.textDecoration = "underline";
        
    }




    switch (selectedTab) {
        case 'multiFamily':
            //underline "multifamily"
            selectUnderline("MultiFamilyOption");
            //input the correct slide images TODO
            var image1 = document.createElement('img');
            image1.src = 'images/commercial/Multi family.jpg';
            image1.className = 'slide';
            slideshow.appendChild(image1);
            //input the correct text content TODO
            let multiFamilyDescription = document.getElementById("CommercialTabDescription");
            multiFamilyDescription.textContent = "this is the multFamily Tab";
            break;

        case 'retail':
            //underline "retial"
            selectUnderline("RetailOption");
            //input the correct slide images TODO
            var image1 = document.createElement('img');
            image1.src = 'images/commercial/retail.png';
            image1.className = 'slide';
            slideshow.appendChild(image1);
            //input the correct text content TODO
            let retailDescription = document.getElementById("CommercialTabDescription");
            retailDescription.textContent = "this is the retail Tab";
            break;
    
        case 'industrial':
            //underline "industrial"
            selectUnderline("IndustrialOption");
            //input the correct slide images TODO
            var image1 = document.createElement('img');
            image1.src = 'images/commercial/Industrial.png';
            image1.className = 'slide';
            slideshow.appendChild(image1);
            //input the correct text content TODO
            let industrialDescription = document.getElementById("CommercialTabDescription");
            industrialDescription.textContent = "this is the industrial Tab";
            break;

        case 'office':
            //underline "office"
            selectUnderline("OfficeOption");
            //input the correct slide images TODO
            var image1 = document.createElement('img');
            image1.src = 'images/commercial/Office.png';
            image1.className = 'slide';
            slideshow.appendChild(image1);
            //input the correct text content TODO
            let officeDescription = document.getElementById("CommercialTabDescription");
            officeDescription.textContent = "this is the office Tab";
            break;
    
        default:
            break;
    }
    startSlideshow(contentManager);


  }




  // Start the slideshow when the page is loaded
  window.addEventListener("load", startSlideshow);
  