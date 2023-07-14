
var followers = [] // list of followers
var followings = [] // list of followings

var totalFollowers = 0
var totalFollowings = 0

var followersCounter = 0
var followingsCounter = 0

var scrollingCount = 0; // temp variable to store the count for following and followers while scrolling


const diff = (array) => (current) => array.filter((element) => element.userId === current.userId && element.userName === current.userName).length === 0;

/**
 * open followers tab on main profile page
 */
const openFollowers = () => {
  const followersLink = document.querySelector('a[href*="/followers/"]');
  if (!followersLink) {
    console.error("Can't access followers tab, you could be in the wrong page.");
    return;
  }

  // find total number of followrs, then click on followers link
  totalFollowers = parseInt(followersLink.firstElementChild.textContent);
  followersLink.click();

  // wait for 1 sec, then start scrolling
  setTimeout(() => {
    console.debug('Please wait...');
    scrollFollowersLst();
  }, 1000);

};

/**
 * scrolls through list of followers
 */
const scrollFollowersLst = () => {
  const followersDiv = document.querySelector('div[role="dialog"] div[role="dialog"] > div > div > div:last-child > div:first-child > div');
  followersDiv.lastElementChild.scrollIntoView();

  console.debug(`Loaded ${followersDiv.childElementCount} out of ${totalFollowers} followers. Please wait...`);
  
  setTimeout(() => {
    if (followersDiv.childElementCount === totalFollowers || (scrollingCount === followersDiv.childElementCount)) {
      followersCounter = followersDiv.childElementCount;
      
      getFollowers(followersDiv);

      console.debug('Please wait for the followings list to load...');

      setTimeout(() => {
        console.info(`Scroll Followers completed with ${totalFollowers} people`);
        console.debug('Please wait...');
        scrollingCount = 0;
        
        // openFollowingDialog();

      }, 3000);

    } else {
      scrollingCount = followersDiv.childElementCount;
      scrollFollowersLst();
    }
  }, 1000);
}

const getFollowers = (div) => {
  var followersDiv = div.children;
  for (var i = 0;i < followersDiv.length; i++){
    var tempUser = followersDiv[i].children[0].children[0].children[0].children[1].children[0].children[0];
    followers.push({
      userID: tempUser.children[0]?.textContent
    });
  }
  document.querySelector('[aria-label="Close"]').parentElement.parentElement.click();
  console.log(followers);
}

/**
 * open followings tab on main profile page
 */
const openFollowings = () => {
  const followingsLink = document.querySelector('a[href*="/following/"]');
  if (!followingsLink) {
    console.error("Can't access followings tab, you could be in the wrong page.");
    return;
  }

  // find total number of followrs, then click on followers link
  totalFollowings = parseInt(followingsLink.firstElementChild.textContent);
  followingsLink.click();

  setTimeout(() => {
    console.debug('Please wait...');
    scrollFollowingsLst();
  }, 1000);
};

/**
 * scrolls through list of followers
 */
const scrollFollowingsLst = () => {
  const followingsDiv = document.querySelector('div[role="dialog"] div[role="dialog"] > div > div > div:last-child > div:first-child > div');
  followingsDiv.lastElementChild.scrollIntoView();

  console.debug(`Loaded ${followingsDiv.childElementCount} out of ${totalFollowings} followings. Please wait...`);
  
  setTimeout(() => {
    if (followingsDiv.childElementCount === totalFollowings || (scrollingCount === followingsDiv.childElementCount)) {
      followersCounter = followingsDiv.childElementCount;
      
      getFollowings(followingsDiv);

      console.debug('Please wait for the followings list to load...');

      setTimeout(() => {
        console.info(`Scroll Followings completed with ${totalFollowings} people`);
        console.debug('Please wait...');
        scrollingCount = 0;

      }, 3000);
      
    } else {
      scrollingCount = followingsDiv.childElementCount;
      scrollFollowingsLst();
    }
  }, 1000);
}

const getFollowings = (div) => {
  var followingsDiv = div.children;
  for (var i = 0;i < followingsDiv.length; i++){
    var tempUser = followingsDiv[i].children[0].children[0].children[0].children[1].children[0].children[0];
    followings.push({
      userID: tempUser.children[0]?.textContent
    });
  }
  document.querySelector('[aria-label="Close"]').parentElement.parentElement.click();
  console.log(followings);
}

openFollowings()