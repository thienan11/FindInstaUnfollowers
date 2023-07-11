
var followers = [] // list of followers
var following = [] // list of followings

var totalFollowers = 0
var totalFollowings = 0

var scrolledFollowersCount = 0
var scrolledFollowingCount = 0

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

  // setTimeout(() => {
  //   console.debug('Please wait...');
  //   scrollFollowers();
  // }, 1000);

};

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

  // setTimeout(() => {
  //   console.debug('Please wait...');
  //   scrollFollowings();
  // }, 1000);
};
