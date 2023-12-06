


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
//swapTestimonialsTab(contentManager);

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
    agent1.className = "AgentBioLeft";
    agent1.id = "AgentBio1";

    var heading1 = document.createElement("h2");
    heading1.textContent = "Charles Eldredge - Broker";
    agent1.appendChild(heading1);

    var photo1 = document.createElement("div");
    photo1.className = "AgentPhotoWrapperLeft";
    agent1.appendChild(photo1);

    var img1 = document.createElement("img");
    img1.src = "images/agents/Charles Photo.jpg";
    photo1.appendChild(img1);

    var description1 = document.createElement("p");
    description1.className = "AgentDescriptionLeft";
    description1.textContent = "Charles Eldredge started his career after college in homebuilding in 1995 when he started Specialty\
    Group Inc. and since then has included commercial contracting, real estate brokerage, land\
    development and commercial appraisal valuation to the company resume over the years. Completed\
    projects include medical facilities, assisted living, land development, professional office, multi-family and\
    single family residential. Charles has a bachelor’s degree in management, a Master’s Degree in Health\
    Administration, Idaho Real-Estate Brokers license, Contractors license and pending Certified General\
    Appraisal license. Charles was raised in Idaho and enjoys spending time with his family including 6\
    children and currently 3 grandchildren.";
    agent1.appendChild(description1);

    // Create the second agent element
    var agent2 = document.createElement("div");
    agent2.className = "AgentBioLeft";
    agent2.id = "AgentBio2";

    var heading2 = document.createElement("h2");
    heading2.textContent = "Shel Eldredge - Agent";
    agent2.appendChild(heading2);

    var photo2 = document.createElement("div");
    photo2.className = "AgentPhotoWrapperLeft";
    agent2.appendChild(photo2);

    var img2 = document.createElement("img");
    img2.src = "images/agents/shelBrokeragePhoto.jpg";
    photo2.appendChild(img2);

    var description2 = document.createElement("p");
    description2.className = "AgentDescriptionLeft";
    description2.textContent = "Description of Shel Eldredge";
    agent2.appendChild(description2);

    // Create the third agent element
    var agent3 = document.createElement("div");
    agent3.className = "AgentBioLeft";
    agent3.id = "AgentBio3";

    var heading3 = document.createElement("h2");
    heading3.textContent = "Scot Halladay - Agent ";
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
    agent4.className = "AgentBioLeft";
    agent4.id = "AgentBio4";

    var heading4 = document.createElement("h2");
    heading4.textContent = "Carlie Eldredge - Agent";
    agent4.appendChild(heading4);

    var photo4 = document.createElement("div");
    photo4.className = "AgentPhotoWrapperLeft";
    agent4.appendChild(photo4);

    var img4 = document.createElement("img");
    img4.src = "images/agents/carlieBrokeragePhoto.jpg";
    photo4.appendChild(img4);

    var description4 = document.createElement("p");
    description4.className = "AgentDescriptionLeft";
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

    var integraDiv = document.createElement('h2');
    integraDiv.id = 'IntegraHeader';
    integraDiv.textContent = 'contracted through Integra Realty Resources for commercial appraisal services';
    
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
    image1.src = 'images/commercial/Office.png';
    image1.className = 'slide';
    var image2 = document.createElement('img');
    image2.src = 'images/commercial/Industrial.png';
    image2.className = 'slide';
    var image3 = document.createElement('img');
    image3.src = 'images/commercial/retail.jpg';
    image3.className = 'slide';
    var image4 = document.createElement('img');
    image4.src = 'images/commercial/Multi family.jpg';
    image4.className = 'slide';
    slideshow.appendChild(image1, image2, image3, image4);
    console.log("default selected")

    var contentText = document.createElement('p');
    contentText.id = "CommercialTabDescription";
    contentText.textContent = '';

    // Append the elements to their respective parents
    slideshow.appendChild(image1);
    slideshow.appendChild(image2);
    slideshow.appendChild(image3);
    slideshow.appendChild(image4);

    slideshowContainer.appendChild(slideshow);
    commercialSlideshowSizer.appendChild(slideshowContainer);

    commercialTabContent.appendChild(commercialSlideshowSizer);
    commercialTabContent.appendChild(contentText);

    housingOptions.appendChild(multiFamilyOption);
    housingOptions.appendChild(retailOption);
    housingOptions.appendChild(industrialOption);
    housingOptions.appendChild(officeOption);

    commercialWrapper.appendChild(integraDiv)
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
    addDevelopement("Imaging Center of Idaho is a specialized medical outpatient imaging facility which provides MRI, CT, X-ray, ultrasound, mammography, fluoroscopy and x-ray services to the greater Boise Metro Area.", ["images/developement/ImagingCenterEntry.jpg", "images/developement/ImagingCenterFront.jpg"], "Imaging Center of Idaho", contentManager);
    addDevelopement("Developed small lot subdivision for local drug testing facility in Meridian.", ["images/developement/Minert Development.png"],  "Minert Development", contentManager );
    addDevelopement("Project custom designed and built for attorneys practicing estate planning and business law in Eagle Idaho. ", ["images/aboutUs/IdahoEstatePlanning.jpg"],  "Idaho Estate Planning", contentManager );
    addDevelopement("Medical facility run by Portneuf Medical Center in Pocatello Idaho", ["images/ImagingCenterZoomedRight.jpg"],  "Advanced Imaging Center of Pocatello", contentManager );
    addDevelopement("56 lot residential subdivision developed in the south Boise area with custom homes. ", ["images/developement/Bridgeport Development.jpg"],  "Bridgeport Development", contentManager );
    addDevelopement("4000 square foot custom designed home built in Meridian", ["images/developement/Wheeler Home.jpg"],  "Wheeler Home", contentManager );
    addDevelopement("3500 square foot custom designed and built home in Boise Idaho", ["images/developement/Wilcox front 2.jpg"],  "Wilcox home", contentManager );
    addDevelopement("3800 square foot custom built home in Meridian.", ["images/developement/Pear Blossom.jpg"],  "Pear Blossom Home", contentManager );
    addDevelopement("Physical therapy facility located in Boise, Idaho.", ["images/developement/RehabAuthBackside.jpg", "images/developement/RehabAuthorityBack2.jpg"], "Rehab Authority", contentManager);
    
    
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
    "images/aboutUs/ICI Front Elevation.jpg",
    "images/aboutUs/Wheeler Home.jpg",
    "images/aboutUs/Wilcox front 2.jpg",
    "images/aboutUs/IdahoEstatePlanning.jpg",
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
    aboutUsText.textContent = " Specialty Group Inc. was started in 1995 building custom homes in the Boise metro area. In 2000 Specialty Group added brokerage, development and commercial contracting services to the company helping buyers, sellers and investors with real estate transactions. In 2020 Specialty contracted with Integra Realty Resources to also offer commercial appraisal services."; // Add your text here
    slideshow.appendChild(aboutUsText);


    // Create and append the About Us text element
    const testimonialsButton = document.createElement("button");
    testimonialsButton.id = "testimonialsButton";
    testimonialsButton.textContent = "Testimonials"; 
    testimonialsButton.addEventListener("click", () => {
        swapTestimonialsTab(contentManager);
        return;
    });
    slideshow.appendChild(testimonialsButton);

    const projectLoginButton = document.createElement("button");
    projectLoginButton.id = "testimonialsButton";
    projectLoginButton.textContent = "Current Project Login"; 
    projectLoginButton.addEventListener("click", () => {
        console.log("selected project login");
        return;
    });
    slideshow.appendChild(projectLoginButton);

    const currentListingsButton = document.createElement("button");
    currentListingsButton.id = "testimonialsButton";
    currentListingsButton.textContent = "Current Listings"; 
    currentListingsButton.addEventListener("click", () => {
        console.log("selected current listings");
        return;
    });
    slideshow.appendChild(currentListingsButton);

    const investorRelationsButton = document.createElement("button");
    investorRelationsButton.id = "testimonialsButton";
    investorRelationsButton.textContent = "Investor Relations"; 
    investorRelationsButton.addEventListener("click", () => {
        console.log("selected invesotr relations");
        return;
    });
    slideshow.appendChild(investorRelationsButton);

    

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
    }, 2500); // 10 seconds
  }
  function swapCommercialTab(contentManager, selectedTab) {
    //find the correct tab and add the corresponding content

    
    //clear the photos on slides to allow new ones, and not show the old ones
    let slideshow = document.getElementById("slideshow");
    clearContent(slideshow);
    console.log("in commercial tab")
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
            multiFamilyDescription.textContent = "";
            break;

        case 'retail':
            //underline "retial"
            selectUnderline("RetailOption");
            //input the correct slide images TODO
            var image1 = document.createElement('img');
            image1.src = 'images/commercial/retail.jpg';
            image1.className = 'slide';
            slideshow.appendChild(image1);
            //input the correct text content TODO
            let retailDescription = document.getElementById("CommercialTabDescription");
            retailDescription.textContent = "";
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
            industrialDescription.textContent = "";
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
            officeDescription.textContent = "";
            break;
    
        default:
            var image1 = document.createElement('img');
            image1.src = 'images/commercial/Office.png';
            image1.className = 'slide';
            var image2 = document.createElement('img');
            image2.src = 'images/commercial/Industrial.png';
            image2.className = 'slide';
            var image3 = document.createElement('img');
            image3.src = 'images/commercial/retail.jpg';
            image3.className = 'slide';
            var image4 = document.createElement('img');
            image4.src = 'images/commercial/Multi family.jpg';
            image4.className = 'slide';
            slideshow.appendChild(image1, image2, image3, image4);
            console.log("default selected")
            break;
    }
    startSlideshow(contentManager)


  }

function swapTestimonialsTab(){
// script.js
const testimonials = [
    {
        name: "Deana Lowry",
        image: "images/placeholder.png",
        text: "I highly recommend using Specialty Homes Inc., and Charles\
        Eldredge as a Buyer's and Seller's Agent. Charles is very\
        knowledgeable in both residential and investment property\
        markets. We also really appreciate his integrity and\
        professionalism, as we have used his services on multiple\
        occasions.\
        We used Charles to buy our first home and felt good about his\
        services, so we used him to sell our home as well. We feel he\
        helped us get the best deal for our situation and money. We have\
        also used Charles as our realtor to buy investment properties and\
        felt very confident in his knowledge and expertise.\
        Not only do we recommend Charles as a reliable realtor, but we\
        also highly recommend him for a builder as well. We have been\
        completely thrilled with our new home built by Specialty Homes.\
        Charles' construction experience is definitely a very important\
        quality in his ability as a Buyer's and Seller's agent.\
        You may call me if you need any additional information about the\
        quality of service that Specialty Homes provides.\
        Sincerely,\
        Deana Lowry",
    },
    {
        name: "Brandon & Stephanie Eliason", 
        image: "images/placeholder.png",
        text: "To Whom It May Concern:\
        For 2 years, we have been living in our custom home which was designed and built by\
        Specialty Homes. We found a home we liked, but could not obtain the plans. With the\
        help of Charles Eldredge and Val Hill, we created the home in which we plan on living\
        for the rest of our lives.\
        Initially we were not sure about the building process, but found the suggestions and\
        changes made by Charles and Val very much to our satisfaction. Custom changes are\
        what have made our home unique and tailored to our own family of seven. We are\
        extremely pleased with the final product and would recommend Specialty Homes to our\
        friends and neighbors.\
        After the building process completed, Val was very responsive to our questions and\
        concerns. We never felt it was a burden to contact Val. Although we do not anticipate\
        moving to another home, we would definitely contact Specialty homes if we chose to do\
        so.\
        Sincerely,\
        Brandon & Stephanie Eliason",

    },
    {
        name: "Bill Lish", 
        image: "images/placeholder.png",
        text: "I highly recommend using Specialty Realty and Charles Eldredge as a buyer’s agent.\
        Charles is very knowledgeable in both the residential and investment property markets (I\
        explored both before purchasing an investment property). Although this was the first\
        property I have ever purchased, Charles was able to walk me through the process quite\
        easily and was able to resolve all of my concerns in a timely and accurate manner.\
        Charles also has an intimate knowledge of the Boise-area real estate market. Even\
        though he is not an appraiser, I found that Charles was very accurate in determining the\
        actual value of a property and helping to negotiate a price that would be advantageous to\
        me.\
        One of the best things is that Charles is not only a realtor, but a builder as well. This\
        proved very useful as I looked at homes. He was willing to get a bit dirty and look for\
        any major structural or other issues that might cause a problem down the road. I walked\
        out of several houses based on his recommendation. This was especially helpful because\
        I did not have to incur the expense of an inspection for a home that I wouldn’t eventually\
        buy because of structural defects. Charles’ construction experience is definitely a very\
        important feature of his ability as a buyer’s agent.\
        You may call me if you need additional information about the quality of service that\
        Specialty Realty provides. (208) 890-1867\
        Sincerely,\
        William Lish",
        
    },
    {
        name: "Jeff and Carla Boice", 
        image: "images/placeholder.png",
        text: "To Whom It May Concern:\
        This letter will serve as a recommendation for Specialty Homes Inc. in general,\
        and Charles Eldredge, and Val Hill, specifically with regards to the building of our\
        custom home.\
        Our process began with Charles, our Real Estate Agent with Specialty Homes\
        Inc., who worked patiently with us as we attempted to design the home to our\
        own specifications. Charles was accommodating, while at the same time offered\
        many positive suggestions to us. We were able to design a home that met our\
        needs while keeping within our budget.\
        Once building started, Val, the Project Coordinator for Specialty Homes, was\
        very efficient and determined to get the work done timely. He was very\
        responsive to our requests and always kept us informed of the status of things.\
        We were very pleased with the final product. We love our new home and hope to\
        stay here for a very long time. If for any reason we ever plan on building another\
        home, we will contact Specialty Homes.\
        Sincerely,\
        Jeff and Carla Boice",
        
    },
    {
        name: "Marshall and Angela Griffin", 
        image: "images/placeholder.png",
        text: "To Whom It May Concern:\
        I would like to take the opportunity to remark on the\
        professionalism, dependability and quality of craftsmanship\
        Specialty Homes has provided for us. Specialty Homes has exceeded\
        all expectations we had going into this project. Charles Eldredge\
        and Val Hill have exemplified the type of professionalism that is\
        rarely found in any business setting.\
        Specialty Homes has been diligent in their quest for perfection,\
        customer service, and providing some of the best quality work I\
        have ever had the pleasure of receiving. They have always been\
        eager and willing to help with any questions I have had.\
        It has been a great peace of mind to know that we are in good\
        hands with Specialty Homes. They possess such honesty, integrity,\
        and dedication that one must see it to truly believe it.\
        I highly recommend Specialty Homes and welcome the opportunity\
        to further discuss their qualifications anytime.\
        Sincerely,\
        Marshall and Angela Griffin",
        
    },
    {
        name: "John and Shanda Lindsay", 
        image: "images/placeholder.png",
        text: 'Dear Charles and Val;\
        We wanted to take a moment and thank you for helping to make our\
        dreams come true - we live in the most beautiful home in\
        Huckleberry Subdivision, which Specialty Homes built!\
        From the blueprint stages to the final product, the home was every bit\
        what we wanted. In the very beginning, Charles was patient with all\
        the changes we had to our floor plan, and once ground breaking\
        happened, Val gave constructive hints and helps along the way. We\
        never heard either one of you say "no, that cannot be done." Both of\
        you were a BIG help during the entire process.\
        Building a home is a learning process, and given the chance we\
        would do it again and use Specialty Homes as our builder. We love\
        our new home and will always believe that we have the most beautiful\
        John and Shanda Lindsay',
        
    },
    {
        name: "Eric and Deana Lowry", 
        image: "images/placeholder.png",
        text: "To Whom It May Concern:\
        We highly recommend Specialty Homes Inc. including Charles\
        Eldridge, and Val Hill to build quality homes and exercise superb\
        customer service.\
        Our process began with Charles, our Real Estate Agent with\
        Specialty Homes Inc., who worked closely with us as we attempted\
        to design the home to our own specifications. Charles was\
        accommodating, upfront, and honest. He also offered many\
        positive, educated suggestions. We were able to design a home that\
        met our needs while keeping within our budget.\
        Once building started, Val, the Project Coordinator for Specialty\
        Homes, was very efficient and meticulous. He was determined to\
        get the work done timely, while at the same time made sure the job\
        was done right. He was very responsive and patient with our\
        requests and always kept us informed of the status of things.\
        We were very pleased with the final product. It turned out better\
        than we imagined. We love our new home and hope to stay here for\
        a very long time. If for any reason we ever plan on building\
        another home, we will contact Specialty Homes.\
        Sincerely,\
        Eric and Deana Lowry",
        
    },
    {
        name: "Max and Christy Christensen", 
        image: "images/placeholder.png",
        text: "To Whom It May Concern:\
        We would like to write this letter to recommend Specialty Homes. Our relationship with\
        Specialty Homes began back in 1999, when we decided to buy our first house. Our income\
        was limited, but because we run a business out of our house we needed a small acreage and\
        an understanding neighborhood. We contacted Charles and he worked with us to determine\
        if it was in our best interest to build or buy. We were impressed that even though Charles\
        stood to gain more if we were to have built; he seemed to genuinely want what was best\
        for us. We decided at the time to buy an existing home. Charles worked hard and found us\
        a great house that met all of our needs and that was within our budget.\
        In the beginning of 2002 we decided it was time to build. Our family and business had\
        grown. We really wanted to make this our last move and wanted to live on a larger acreage.\
        Charles worked with us to design our house plan. He gave suggestions for minimizing cost\
        while helping us achieve a plan that we would be happy with long term.\
        Charles helped us find our acreage and Val and his team went to work. Val was great. He\
        really took charge and we were amazed with his skill in coordinating everything. Val was\
        very accommodating when we changed our mind about a few things, and made sure we got\
        what we wanted. Val was on site almost every day and was easy to contact. When Charles\
        sold our existing house in only 12 days, Val worked even harder to finish construction\
        quickly in order to minimize the time between houses. We were extremely pleased with the\
        finished product and moved into our home in July 2002.\
        In December 2002 our water heater blew up causing extensive damage to part of our\
        house. This was in no way the fault of Specialty Homes, Inc. We contacted Val\
        immediately after calling 911 because we didn&#39;t know who else to call. Val arrived at our\
        house with a framing crew and a load of lumber before the fire department left. They\
        stabilized the main barring wall and covered the hole in the roof before they left for the\
        night. Val was very sympathetic and caring he made sure we had some place to go and that\
        we were taken care of. He took charge in working with our insurance carrier. Val had us\
        back in our house within the week and our house back to as good as new in just over a\
        month. Our insurance company has told us several times how lucky we were to have had\
        Specialty Homes, Inc. as our builder in that many disaster reconstructions don’t even begin\
        rebuilding for weeks.\
        \
        We would highly recommend Specialty Homes, Inc. to anyone considering building or buying\
        a house. Please feel free to contact us if you have any questions.\
        Max and Christy Christensen",
        
    }

];
    function swapTestimony(textBoxWrapper, text, name){
        const header = textBoxWrapper.querySelector("h3");
        const textbox = textBoxWrapper.querySelector("p");
        header.textContent = name;
        textbox.textContent = text;
        textBoxWrapper.style.display = "block";

    }
    clearContent(contentManager);
    // Create a header element and set its content
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Customer Testimonials";
    header.appendChild(h1);

    // Create a section element and set its id
    const section = document.createElement("section");
    section.id = "testimonials";

    //a textbox for holding testimonials
    const textBoxWrapper = document.createElement("div");
    const textBoxHeader = document.createElement("h3");
    const textBox = document.createElement("p");
    textBoxWrapper.classList.add("textBoxWrapper-card");
    textBoxWrapper.appendChild(textBoxHeader);
    textBoxWrapper.appendChild(textBox);
    textBoxWrapper.style.display = "none";
    
    
    // Append the header and section to the document's body or another desired container
    contentManager.appendChild(header);
    contentManager.appendChild(textBoxWrapper);
    contentManager.appendChild(section);

    const testimonialsContainer = section;

    testimonials.forEach((testimonial, index) => {
        const card = document.createElement("div");
        card.classList.add("testimonial-card");

        const image = document.createElement("img");
        image.src = testimonial.image;
        image.alt = testimonial.name;

        const name = document.createElement("h2");
        name.textContent = testimonial.name;

        const dropdownButton = document.createElement("button");
        dropdownButton.textContent = "Testimonial >";
        
        const text = document.createElement("p");
        text.textContent = testimonial.text;
        text.style.display = "none";

        dropdownButton.addEventListener("click", () => {
            swapTestimony(textBoxWrapper, testimonials[index].text, testimonials[index].name)
        });

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(dropdownButton);
        card.appendChild(text);

        testimonialsContainer.appendChild(card);
        });
}




  // Start the slideshow when the page is loaded
  window.addEventListener("load", startSlideshow);
  