// JavaScript code in script.js
console.log('Color Menu');
class ColorMenu {
    constructor() {
      this.colors = []; // Array to store colors
    }
  
    // A way to add a new color to the menu
    createColor(color) {
      this.colors.push(color); // Push the provided color to the colors array
      console.log(`Color '${color}' added to the menu.`);
    }
  
    // this is an option to view all colors in the menu
    viewColors() {
      if (this.colors.length === 0) {
        console.log("The color menu is empty.");
      } else {
        console.log("Color Menu:");
        this.colors.forEach((color, index) => {
          console.log(`${index + 1}. ${color}`);
        });
      }
    }
  
    // This is how to delete a color from the menu based on its index
    deleteColor(index) {
      if (index >= 0 && index < this.colors.length) {
        const deletedColor = this.colors.splice(index, 1);
        console.log(`Color '${deletedColor}' deleted from the menu.`);
      } else {
        console.log("Invalid index. Color not deleted.");
      }
    }
  }
  
  class MenuApp {
    constructor() {
      this.colorMenu = new ColorMenu(); // Create an example of ColorMenu
    }
  
    start() {
      console.log("Welcome to Color Coordination Menu App!");
  
      while (true) {
        const choice = prompt(
          "Choose an action: \n1. Create Color \n2. View Colors \n3. Delete Color \n4. Exit"
        );
  
        switch (choice) {
          case "1":
            const newColor = prompt("Enter the color name:");
            this.colorMenu.createColor(newColor);
            break;
          case "2":
            this.colorMenu.viewColors();
            break;
          case "3":
            const index = parseInt(prompt("Enter the index of color to delete:")) - 1;
            this.colorMenu.deleteColor(index);
            break;
          case "4":
            console.log("Exiting the Color Coordination Menu App.");
            return;
          default:
            console.log("Invalid choice. Please enter a valid option.");
        }
      }
    }
  }
  
  // Example usage of the MenuApp
  const app = new MenuApp(); // Create an instance of MenuApp
  app.start(); // Start the app
  

           