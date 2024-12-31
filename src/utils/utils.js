export const constructImagePath = (make, imageName) => {
    const cleanMake = make.toLowerCase().trim();
    const cleanImageName = imageName.toLowerCase().trim();
  
    // If the image name already starts with the make, don't duplicate it
    if (cleanImageName.startsWith(cleanMake)) {
      return `${cleanMake}/${cleanImageName}.jpg`;
    } else {
      return `${cleanMake}/${cleanMake}-${cleanImageName}.jpg`;
    }
  };
  
  export const resolveImagePath = (image) => {
    try {
      return require(`../assets/${image}`);
    } catch {
      console.log("Not loading")
    }
  };
  
  