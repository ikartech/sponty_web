///Taken and modified from https://stackoverflow.com/a/12646864/11701504.
///Author: https://stackoverflow.com/users/310500/laurens-holst.
export function shuffleArray(array) {
  const myarr = [...array];
  console.log(myarr);
  for (let i = myarr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [myarr[i], myarr[j]] = [myarr[j], myarr[i]];
  }
  return myarr;
}

///Scroll to an id.
export const scrollTo = (id, callback) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
  if (callback) callback();
};
