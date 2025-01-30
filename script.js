

//Current dashboard details
function dashboard(){
    const imageNamesArray = ['alex-munsell-Yr4n8O_3UPc-unsplash', 'dan-gold-4_jhDO54BYg-unsplash (1)', 'davide-cantelli-jpkfc5_d-DI-unsplash', 'emmanuel-ben-paul-grFZoxvKSvE-unsplash (1)', 'femoree-kn_ANxnwCQ0-unsplash'];
    const imageDashboard = document.getElementById('dashboard-image');
    const imageFileName = imageDashboard.src;
    const imageName = imageFileName.slice(15, -4);
    let imageIndex = imageNamesArray.indexOf(imageName);
    if(imageIndex === -1){
        imageIndex = 1;
    }
    return {imageIndex, imageDashboard, imageNamesArray};
}

function updateDashboardByDefault(){
    let imageIndex = dashboard().imageIndex;
    let imageDashboard = dashboard().imageDashboard;
    let imageNamesArray = dashboard().imageNamesArray;
    console.log({imageIndex, imageDashboard, imageNamesArray});
    //Using while loop to update image dashboard was futile, so this snippet from ChatGPT has been deployed to help
    setInterval(() => {
        // Update the image source
        imageDashboard.src = `./assets/images/${imageNamesArray[imageIndex]}.jpg`;
        console.log(`Index-${imageIndex} -- Displaying: ${imageDashboard.src} `);

        // Move to the next image, looping back to the start if needed
        // this is cute.
        imageIndex = (imageIndex + 1) % imageNamesArray.length;
    }, 5000); // Execute every 3 seconds
    
}


function updateDashboardByNavigation() {
    const rightArrow = document.getElementById('right-navigation');
    const leftArrow = document.getElementById('left-navigation');
    let imageIndex = dashboard().imageIndex;
    let imageDashboard = dashboard().imageDashboard;
    let imageNamesArray = dashboard().imageNamesArray;

    rightArrow.onclick = () => {
        imageIndex = imageIndex >= (imageNamesArray.length - 1) ? 0 : imageIndex + 1;
        imageDashboard.src = `./assets/images/${imageNamesArray[imageIndex]}.jpg`;
        console.log(`Right Clicked Index-${imageIndex} - Displaying: ${imageDashboard.src}`);
    }

    leftArrow.onclick = () => {
        imageIndex = imageIndex <= 0 ? imageNamesArray.length - 1 : imageIndex - 1;
        imageDashboard.src = `./assets/images/${imageNamesArray[imageIndex]}.jpg`;
        console.log(`Left Clicked Index-${imageIndex} - Displaying: ${imageDashboard.src}`);
    }
}


updateDashboardByDefault();
updateDashboardByNavigation();

function togglebuttons(){
    // Buttons
    const homeButton = document.getElementById('home-button');
    const homeButton2 = document.getElementById('home-button-2');
    const breakfastButton = document.getElementById('breakfast-button');
    const lunchButton = document.getElementById('lunch-button');
    const soupsButton = document.getElementById('soups-button');
    const dinnerButton = document.getElementById('dinner-button');
    const aboutUsButton = document.getElementById('about-us-button');
    const aboutUsButton2 = document.getElementById('about-button-2');
    const contactButton = document.getElementById('contact-button');
    const contactButton2 = document.getElementById('contact-button-2');
    const allButtons = document.querySelectorAll('button');

    // Contents
    const otherContent = document.getElementById('other-contents');
    const content = document.getElementById('content');
    const foodDashboardcontainer= document.getElementById('food-dashboard-container');
    const dashboardNavigation = document.getElementById('dashboard-navigation');
    const restOfContent = document.getElementById('rest-of-content');
    const aboutContent = document.getElementById('about-us-section');
    const contactContent = document.getElementById('contact-section');
    const breakfastContent = document.getElementById('breakfast-section');
    const lunchContent = document.getElementById('lunch-section');
    const dinnerContent = document.getElementById('dinner-section');
    const soupContent = document.getElementById('soup-section');
    



    let otherButtons = [homeButton, breakfastButton, lunchButton, soupsButton, dinnerButton, aboutUsButton, contactButton];

    function showHomeContent() {
        content.style.display = 'flex';
        otherContent.style.display = 'none';
        foodDashboardcontainer.style.display = 'block';
        dashboardNavigation.style.display = 'flex';
        // dashboardNavigation.style.backgroundColor = '#9052c0';

        restOfContent.style.display = 'flex';
        resetColorofButtons();
        homeButton.style.color = 'white';
        homeButton2.style.color = 'white';
        homeButton.style.backgroundColor = '#52c0b0';
        homeButton2.style.backgroundColor = '#52c0b0';
    }

    homeButton.onclick = showHomeContent;
    homeButton2.onclick = showHomeContent;


    function showContent(this_content) {
        console.log('Here!');
        
        content.style.display = 'block';
        const contentChildren = content.children;
        for (let child of contentChildren) {
            child.style.display = 'none';
        }
        const parentofthis_content = this_content.parentElement;
        parentofthis_content.style.display = 'block';

        const this_contentSiblings = parentofthis_content.children;
        for (let sibling of this_contentSiblings) {
            sibling.style.display = 'none'; // Hide all siblings
        }

        this_content.style.display = 'block'; // Show the desired sibling
        this_content.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    }

    function resetColorofButtons() {
        allButtons.forEach(function(this_button){
            if(this_button.id === 'left-navigation' || this_button.id === 'right-navigation'){

            } else {
                this_button.style.color = '#9052c0';
                this_button.style.backgroundColor = 'white';
            }
            
        })
    }

    function setActiveButton(myButton){
        myButton.style.color = 'white';
        myButton.style.backgroundColor = '#52c0b0';
    }

    function showAboutContent(){
        showContent(aboutContent);
        resetColorofButtons();
        aboutUsButton.style.color = 'white';
        aboutUsButton2.style.color = 'white';
        aboutUsButton.style.backgroundColor = '#52c0b0';
        aboutUsButton2.style.backgroundColor = '#52c0b0';
    }

    function showContactContent(){
        showContent(contactContent);
        resetColorofButtons();
        contactButton.style.color = 'white';
        contactButton2.style.color = 'white';
        contactButton.style.backgroundColor = '#52c0b0';
        contactButton2.style.backgroundColor = '#52c0b0';
    }

    aboutUsButton.onclick = showAboutContent;
    aboutUsButton2.onclick = showAboutContent;
    contactButton.onclick = showContactContent;
    contactButton2.onclick = showContactContent;


    breakfastButton.onclick = () => {
        showContent(breakfastContent);
        resetColorofButtons();
        setActiveButton(breakfastButton);
    };
    lunchButton.onclick = () => {
        showContent(lunchContent);
        resetColorofButtons();
        setActiveButton(lunchButton);
    };
    soupsButton.onclick = () => {
        showContent(soupContent);
        resetColorofButtons();
        setActiveButton(soupsButton);
    };
    dinnerButton.onclick = () => {
        showContent(dinnerContent);
        resetColorofButtons();
        setActiveButton(dinnerButton);

    };

    
}

togglebuttons();


