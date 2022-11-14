const extractScatterData = (data) => {
  const formattedData = [];
  // Extracting the Color Intensity and Hue data form data set.
  data.forEach((element) => {
    formattedData.push([element["Color intensity"], element["Hue"]]);
  });
  return formattedData;
};
const extractBarData = (data) => {
  const averageData = [];
  const categoryData = new Set();
  // Loop through all available data to check how many category of alcohol we have.
  data.forEach((element) => {
    categoryData.add(element["Alcohol"]);
  });
  // Converting Set into Array
  const categoryArray = Array.from(categoryData);
  // initializing both data and size with 0
  const categorizedData = Array(categoryArray.length).fill(0);
  const categorizedDataSize = Array(categoryArray.length).fill(0);
  // Looping over categories and making total sum
  categoryArray.forEach((categoryElement, index) => {
    data.forEach((element) => {
      if (element["Alcohol"] === categoryElement) {
        categorizedData[index] += element["Malic Acid"];
        categorizedDataSize[index]++;
      }
    });
  });
  // Again looping on category to find the average
  categoryArray.forEach((element, index) => {
    averageData.push(categorizedData[index] / categorizedDataSize[index]);
  });

  // Returning the Average Data and Category Array
  return { averageData, categoryArray };
};

export { extractBarData, extractScatterData };
