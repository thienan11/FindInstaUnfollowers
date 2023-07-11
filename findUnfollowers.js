
var followers = [] // list of followers
var following = [] // list of followings

var totalFollowers = 0
var followingCount = 0

var scrolledFollowersCount = 0
var scrolledFollowingCount = 0

var hashtagCount
var scrollingCount = 0; // temp variable to store the count for following and followers while scrolling


const diff = (array) => (current) => array.filter((element) => element.userId === current.userId && element.userName === current.userName).length === 0;


// open followers tab on main profile page
const openFollowers = () => {
  const followersLink = document.querySelector('a[href*="/followers/"]');
  if (!followersLink) {
    console.error("Can't access followers tab, you could be in the wrong page.");
    return;
  }

  // find total number of followrs, then click on followers link
  totalFollowers = parseInt(followersLink.firstElementChild.textContent);
  followersLink.click();

  // setTimeout(() => {
  //   console.debug('Please wait...');
  //   scrollFollowers();
  // }, 1000);

};