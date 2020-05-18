
export function saveToLocalStorage(state) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('shopping_cart_999', serializedState);
    } catch (error) {
      console.log(error);
    }
  }
  
export function LoadFromLocalStorage() {
    try {
      const serializedState = localStorage.getItem('shopping_cart_999');
      if (serializedState === null) return undefined;
      console.log(JSON.parse(serializedState))  
      return {cart: JSON.parse(serializedState)};    
    } catch (error) {
      console.log(error);
      return undefined;
      
    }
  }
  