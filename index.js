require('datejs');


function combineUsers (...args) {

  const todate = Date.today();



  const combinedObject = {
    users: [],
    merge_date: todate.toString("M/d/yyyy"),
  };

  args.forEach(element => {
    combinedObject.users.push(...args)
  })

  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};